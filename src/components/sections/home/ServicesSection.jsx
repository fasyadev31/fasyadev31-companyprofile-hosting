"use client"
import { useState } from "react"
import { Sparkles, Zap, Crown, ArrowRight, Check } from "lucide-react"

export default function ServicesSection() {
    const [hoveredCard, setHoveredCard] = useState(null)

    const packages = [
        {
            id: 1,
            name: "Starter",
            icon: Sparkles,
            tagline: "Perfect untuk memulai",
            color: "from-blue-500 to-cyan-500",
            features: [
                "One Single Page",
                "Responsive Design",
                "Basic SEO",
                "Contact Form Integration"
            ],
            badge: null
        },
        {
            id: 2,
            name: "Professional",
            icon: Zap,
            tagline: "Paling populer",
            color: "from-purple-500 to-pink-500",
            features: [
                "5 Halaman Website",
                "Advanced SEO",
                "Contact & Message Form Integration",
                "1 Bulan Maintenance"
            ],
            badge: null
        },
        {
            id: 3,
            name: "Enterprise",
            icon: Crown,
            tagline: "Solusi lengkap",
            color: "from-orange-500 to-red-500",
            features: [
                "Unlimited Halaman",
                "Custom Features",
                "API Integration",
                "2 Bulan Maintenance"
            ],
            badge: null
        }
    ]

    return (
        <section className="pb-20 md:pb-32 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-bg via-primary/5 to-bg relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                            💼 Our Services
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text">
                        Paket Website Development
                        <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2">
                            Sesuai Kebutuhan Anda
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-text/70 leading-relaxed">
                        Pilih paket yang tepat untuk bisnis Anda. Semua paket dirancang dengan standar kualitas tertinggi
                    </p>
                </div>

                {/* Package Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {packages.map((pkg) => {
                        const Icon = pkg.icon
                        return (
                            <div
                                key={pkg.id}
                                className={`group relative bg-surface border-2 rounded-3xl p-8 transition-all duration-300 cursor-pointer ${
                                    pkg.badge 
                                        ? 'border-primary shadow-xl shadow-primary/10 md:scale-105' 
                                        : 'border-text/10 hover:border-primary hover:shadow-xl'
                                } hover:scale-105`}
                                onMouseEnter={() => setHoveredCard(pkg.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Popular Badge */}
                                {pkg.badge && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-white rounded-full text-xs font-bold shadow-lg">
                                            🔥 {pkg.badge}
                                        </span>
                                    </div>
                                )}

                                {/* Package Header */}
                                <div className="text-center mb-6 space-y-3">
                                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                        <Icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-text mb-1">{pkg.name}</h3>
                                        <p className="text-text/60 text-sm">{pkg.tagline}</p>
                                    </div>
                                </div>

                                {/* Features Preview */}
                                <div className="space-y-3 mb-6">
                                    {pkg.features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center mt-0.5`}>
                                                <Check size={12} className="text-white" />
                                            </div>
                                            <span className="text-text/80 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                    <div className="flex items-center gap-2 pt-2 text-primary text-sm font-medium">
                                        <span>+ Lihat semua fitur</span>
                                    </div>
                                </div>

                                {/* View Details Link */}
                                <div className="pt-4 border-t border-text/10">
                                    <a
                                        href="/services"
                                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group-hover:underline"
                                    >
                                        Lihat Detail
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>

                                {/* Glow Effect */}
                                <div className={`absolute -inset-1 bg-gradient-to-br ${pkg.color} rounded-3xl blur-xl transition-opacity duration-500 -z-10 ${
                                    hoveredCard === pkg.id ? 'opacity-20' : 'opacity-0'
                                }`} />

                                {/* Shine Effect */}
                                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ${
                                        hoveredCard === pkg.id ? 'translate-x-full' : '-translate-x-full'
                                    }`} />
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Bottom Info & CTA */}
                <div className="text-center space-y-6">
                    {/* Info Text */}
                    <p className="text-text/60 max-w-2xl mx-auto">
                        Semua paket sudah termasuk <span className="text-primary font-semibold">hosting & domain gratis</span> selama 1 tahun pertama. 
                        Butuh fitur khusus? Kami siap custom sesuai kebutuhan Anda!
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <a
                            href="/services"
                            className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg inline-flex items-center justify-center gap-2"
                        >
                            Lihat Semua Paket
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-bg border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary hover:text-white transition-all inline-flex items-center justify-center gap-2"
                        >
                            <span>💬</span>
                            Konsultasi Gratis
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}