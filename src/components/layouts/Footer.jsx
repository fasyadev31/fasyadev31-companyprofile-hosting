import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Heart } from 'lucide-react';

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
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Youtube, href: "#", label: "YouTube" },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-footer via-footer-hover to-footer text-white overflow-hidden">
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
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Masukkan email Anda"
                                className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                            />
                            <button className="px-6 py-4 bg-accent hover:bg-accent/90 rounded-xl font-semibold flex items-center gap-2 transition-all hover:scale-105 shadow-lg">
                                Subscribe
                                <ArrowRight size={18} />
                            </button>
                        </div>
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
                                    <a
                                        href={service.href}
                                        className="text-white/80 hover:text-accent transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Contact Info */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold mb-6">Kontak Kami</h3>
                        {/* <div className="flex items-start gap-3">
                            <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                            <span className="text-white/80 text-sm">
                                Jl. Teknologi No. 123, Jakarta Selatan, 12345
                            </span>
                        </div> */}
                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-accent flex-shrink-0" />
                            <span className="text-white/80 text-sm">+62895357517499</span>
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
                        {/* <div className="flex gap-6">
                            <a href="#" className="hover:text-accent transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="hover:text-accent transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="hover:text-accent transition-colors">
                                Cookie Policy
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}