// Simple in-memory rate limiter
class RateLimiter {
  constructor() {
    this.requests = new Map();
  }

  // Cek apakah request diperbolehkan
  check(identifier, limit = 5, windowMs = 60000) {
    const now = Date.now();
    const userRequests = this.requests.get(identifier) || [];

    // Filter request yang masih dalam window time
    const recentRequests = userRequests.filter(
      timestamp => now - timestamp < windowMs
    );

    // Update data
    this.requests.set(identifier, recentRequests);

    // Cek apakah melebihi limit
    if (recentRequests.length >= limit) {
      const oldestRequest = recentRequests[0];
      const timeUntilReset = windowMs - (now - oldestRequest);
      return {
        allowed: false,
        remaining: 0,
        resetIn: Math.ceil(timeUntilReset / 1000), // dalam detik
      };
    }

    // Tambah request baru
    recentRequests.push(now);
    this.requests.set(identifier, recentRequests);

    return {
      allowed: true,
      remaining: limit - recentRequests.length,
      resetIn: Math.ceil(windowMs / 1000),
    };
  }

  // Cleanup expired entries (optional, untuk memory management)
  cleanup() {
    const now = Date.now();
    for (const [key, timestamps] of this.requests.entries()) {
      const validTimestamps = timestamps.filter(
        timestamp => now - timestamp < 3600000 // 1 jam
      );
      if (validTimestamps.length === 0) {
        this.requests.delete(key);
      } else {
        this.requests.set(key, validTimestamps);
      }
    }
  }
}

// Singleton instance
const rateLimiter = new RateLimiter();

// Cleanup setiap 10 menit
setInterval(() => rateLimiter.cleanup(), 600000);

export default rateLimiter;