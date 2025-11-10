import { supabaseAdmin } from "@/utils/supabase-admin";
import { NextResponse } from "next/server";
import rateLimiter from "@/lib/rate-limiter";

// Helper untuk mendapatkan IP address
function getClientIp(request) {
  // Cek header dari reverse proxy (Vercel, Netlify, dll)
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIp) {
    return realIp;
  }
  
  // Fallback ke connection remote address
  return request.ip || 'unknown';
}

export async function POST(request) {
  try {
    // 1. Rate Limiting Check
    const clientIp = getClientIp(request);
    const rateCheck = rateLimiter.check(
      clientIp,
      3,      // Max 3 requests
      300000  // Per 5 menit (300000 ms)
    );

    if (!rateCheck.allowed) {
      return NextResponse.json(
        { 
          error: `Terlalu banyak percobaan. Silakan coba lagi dalam ${rateCheck.resetIn} detik.`,
          retryAfter: rateCheck.resetIn 
        },
        { 
          status: 429,
          headers: {
            'Retry-After': rateCheck.resetIn.toString(),
            'X-RateLimit-Limit': '3',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(Date.now() + rateCheck.resetIn * 1000).toISOString()
          }
        }
      );
    }

    // 2. Parse dan validasi email
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email tidak valid" }, 
        { status: 400 }
      );
    }

    // Validasi format email lebih ketat
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format email tidak valid" }, 
        { status: 400 }
      );
    }

    // 3. Cek apakah email sudah terdaftar
    const { data: existing } = await supabaseAdmin
      .from("subscribers")
      .select("email")
      .eq("email", email.toLowerCase()) // Normalize ke lowercase
      .maybeSingle();

    if (existing) {
      return NextResponse.json(
        { error: "Email sudah terdaftar sebelumnya" }, 
        { status: 400 }
      );
    }

    // 4. Insert email baru
    const { data, error } = await supabaseAdmin
      .from("subscribers")
      .insert([{ 
        email: email.toLowerCase(),
        ip_address: clientIp, // Optional: simpan IP untuk analytics
      }])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Gagal menyimpan data. Silakan coba lagi." }, 
        { status: 500 }
      );
    }

    // 5. Return success dengan rate limit info
    return NextResponse.json(
      { 
        message: "Berhasil berlangganan!", 
        data 
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': '3',
          'X-RateLimit-Remaining': rateCheck.remaining.toString(),
        }
      }
    );

  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" }, 
      { status: 500 }
    );
  }
}