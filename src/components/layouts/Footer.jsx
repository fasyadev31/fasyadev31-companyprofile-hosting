"use client";
import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, Heart, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    const quickLinks = [
        { name: "Tentang Kami", href: "#" },
        { name: "Layanan", href: "#" },
        { name: "Portfolio", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Karir", href: "#" },
    ];

    const services = [
        { name: "Web Development", href: "#" },
        { name: "Web Maintenance", href: "#" },
        { name: "Konsultasi IT", href: "#" },
    ];

    const socialMedia = [
        { icon: FaInstagram, href: "https://instagram.com/fasyadev31", label: "Instagram" },
        { icon: FaTiktok, href: "https://tiktok.com/@fasyadev31", label: "Tiktok" },
    ];

    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState({ show: false, type: "", message: "" });

    const showNotification = (type, message) => {
        setNotification({ show: true, type, message });
        setTimeout(() => {
            setNotification({ show: false, type: "", message: "" });
        }, 5000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validasi email di frontend
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            showNotification("error", "Mohon masukkan email yang valid");
            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch("/api/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const result = await res.json();

            if (res.ok) {
                showNotification("success", "Terima kasih! Email Anda berhasil didaftarkan.");
                setEmail(""); // Reset form
            } else if (res.status === 429) {
                // Rate limit exceeded
                showNotification("error", result.error || "Terlalu banyak percobaan. Mohon tunggu sebentar.");
            } else {
                showNotification("error", result.error || "Terjadi kesalahan. Silakan coba lagi.");
            }
        } catch (error) {
            showNotification("error", "Tidak dapat terhubung ke server. Periksa koneksi Anda.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <footer className="relative bg-gradient-to-br from-footer via-footer-hover to-footer text-white overflow-hidden">
            {/* Notification Toast */}
            {notification.show && (
                <div className="fixed top-4 right-4 z-50 animate-slide-in-right">
                    <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md ${
                        notification.type === "success" 
                            ? "bg-green-500/90 border border-green-400/30" 
                            : "bg-red-500/90 border border-red-400/30"
                    }`}>
                        {notification.type === "success" ? (
                            <CheckCircle size={24} className="flex-shrink-0" />
                        ) : (
                            <XCircle size={24} className="flex-shrink-0" />
                        )}
                        <p className="font-medium">{notification.message}</p>
                    </div>
                </div>
            )}

            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            </div>

            {/* Newsletter Section */}
            <div className="relative z-10 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                                Dapatkan Update Terbaru
                            </h3>
                            <p className="text-white/80">
                                Subscribe newsletter kami untuk mendapatkan tips, artikel, dan promo terbaru
                            </p>
                        </div>
                        <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Masukkan email Anda"
                                disabled={isLoading}
                                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                            <button 
                                type="submit"
                                disabled={isLoading}
                                className="px-6 py-4 bg-accent hover:bg-accent/90 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Mengirim...
                                    </>
                                ) : (
                                    <>
                                        Subscribe
                                        <ArrowRight size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                                Fasya Dev
                            </h2>
                        </div>
                        <p className="text-white/80 mb-6 leading-relaxed">
                            Kami membantu bisnis Anda berkembang dengan solusi digital yang inovatif dan powerful.
                        </p>

                        {/* Social Media */}
                        <div className="mt-8">
                            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                            <div className="flex gap-3">
                                {socialMedia.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target='_blank'
                                            aria-label={social.label}
                                            className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-accent flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg"
                                        >
                                            <Icon size={18} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Layanan Kami</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <div
                                        className="text-white/80 transition-colors inline-flex items-center gap-2 group"
                                    >
                                        {service.name}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold mb-6">Kontak Kami</h3>
                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-accent flex-shrink-0" />
                            <span className="text-white/80 text-sm">+6285188160217</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-accent flex-shrink-0" />
                            <span className="text-white/80 text-sm">fasyadev31@gmail.com</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-end items-center gap-4 text-sm text-white/70">
                        <div className="flex items-center gap-1">
                            <span>© 2025 Fasya Dev. Made with</span>
                            <Heart size={14} className="text-accent fill-accent animate-pulse" />
                            <span>in Indonesia</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slide-in-right {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                .animate-slide-in-right {
                    animation: slide-in-right 0.3s ease-out;
                }
            `}</style>
        </footer>
    );
}