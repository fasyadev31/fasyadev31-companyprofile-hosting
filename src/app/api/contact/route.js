import { supabaseAdmin } from "@/utils/supabase-admin";
import { NextResponse } from "next/server";
import rateLimiter from "@/lib/rate-limiter";

// Helper untuk mendapatkan IP address
function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIp) {
    return realIp;
  }
  
  return request.ip || 'unknown';
}

export async function POST(request) {
  try {
    // 1. Rate Limiting Check
    const clientIp = getClientIp(request);
    const rateCheck = rateLimiter.check(
      `contact_${clientIp}`, // Prefix berbeda dari subscribe
      5,      // Max 5 requests
      600000  // Per 10 menit (600000 ms)
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
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(Date.now() + rateCheck.resetIn * 1000).toISOString()
          }
        }
      );
    }

    // 2. Parse dan validasi data
    const { name, email, phone, projectType, subject, message } = await request.json();

    // Validasi required fields
    if (!name || !email || !projectType || !subject || !message) {
      return NextResponse.json(
        { error: "Semua field yang bertanda * wajib diisi" }, 
        { status: 400 }
      );
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format email tidak valid" }, 
        { status: 400 }
      );
    }

    // Validasi panjang message (min 10 karakter)
    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Pesan minimal 10 karakter" }, 
        { status: 400 }
      );
    }

    // Validasi project type
    const validProjectTypes = ['website', 'webapp', 'mobile', 'other'];
    if (!validProjectTypes.includes(projectType)) {
      return NextResponse.json(
        { error: "Jenis project tidak valid" }, 
        { status: 400 }
      );
    }

    // 3. Insert data ke Supabase
    const { data, error } = await supabaseAdmin
      .from("contact_messages")
      .insert([{ 
        name: name.trim(),
        email: email.toLowerCase().trim(),
        phone: phone?.trim() || null,
        project_type: projectType,
        subject: subject.trim(),
        message: message.trim(),
        ip_address: clientIp,
        status: 'unread'
      }])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Gagal mengirim pesan. Silakan coba lagi." }, 
        { status: 500 }
      );
    }

    // 4. Return success dengan rate limit info
    return NextResponse.json(
      { 
        message: "Pesan berhasil dikirim! Kami akan segera menghubungi Anda.", 
        data 
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': rateCheck.remaining.toString(),
        }
      }
    );

  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server. Silakan coba lagi." }, 
      { status: 500 }
    );
  }
}

// Optional: GET endpoint untuk testing
export async function GET() {
  return NextResponse.json(
    { message: "Contact API is working" },
    { status: 200 }
  );
}