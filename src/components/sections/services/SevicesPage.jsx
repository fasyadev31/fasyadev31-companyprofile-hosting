"use client"
import { useState, useEffect } from "react"
import { Check, Sparkles, Zap, Crown, ArrowRight, Code, Palette, Rocket, Shield, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [hoveredPackage, setHoveredPackage] = useState(null)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20,
                y: (e.clientY / window.innerHeight) * 20
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    const packages = [
        {
            id: 1,
            name: "Landing Page",
            icon: Sparkles,
            tagline: "Perfect untuk memulai",
            color: "from-blue-500 to-cyan-500",
            popular: false,
            features: [
                "One Single Page",
                "Responsive Design (Mobile & Desktop)",
                "Basic SEO Optimization",
                "Contact Form Integration",
                "Google Maps Integration",
                "Social Media Links",
            ],
            ideal: "Cocok untuk company profile, portfolio, atau landing page sederhana",
            deliveryTime: "7-10 Hari Kerja",
            revision: "2x Revisi"
        },
        {
            id: 2,
            name: "Professional",
            icon: Zap,
            tagline: "Populer untuk bisnis",
            color: "from-purple-500 to-pink-500",
            popular: false,
            features: [
                "5 Halaman Website",
                "Responsive Design (Mobile & Desktop)",
                "Advanced SEO Optimization",
                "Contact & Message Form Integration",
                "Google Maps Integration",
                "1 Bulan Free Maintenance",
                "Performance Optimization",
                "Social Media Integration"
            ],
            ideal: "Cocok untuk bisnis menengah, startup, atau e-commerce kecil",
            deliveryTime: "14-21 Hari Kerja",
            revision: "4x Revisi"
        },
        {
            id: 3,
            name: "Enterprise",
            icon: Crown,
            tagline: "Solusi lengkap & powerful",
            color: "from-orange-500 to-red-500",
            popular: false,
            features: [
                "Unlimited Halaman Website",
                "Fullstack Website",
                "Fully Responsive Design",
                "Premium SEO Optimization",
                "Custom Features & Functionality",
                "Custom Admin Dashboard",
                "2 Bulan Free Maintenance",
                "API Integration (Third-party)",
                "Progressive Web App (PWA)",
                "Priority Support 24/7"
            ],
            ideal: "Cocok untuk perusahaan besar, e-commerce kompleks, atau platform custom",
            deliveryTime: "30-45 Hari Kerja",
            revision: "Unlimited Revisi"
        }
    ]

    const additionalServices = [
        {
            icon: Code,
            title: "Web Maintenance",
            description: "Maintenance rutin, update konten, dan technical support berkelanjutan",
            features: ["Bug Fixes", "Content Updates", "Security Updates", "Backup Management"]
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Desain interface yang menarik dan user experience yang optimal",
            features: ["Wireframing", "Mockup Design", "Prototype", "User Testing"]
        },
        {
            icon: Rocket,
            title: "SEO Optimization",
            description: "Optimasi website untuk ranking lebih baik di mesin pencari",
            features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Monthly Report"]
        },
        {
            icon: Shield,
            title: "Website Security",
            description: "Proteksi maksimal untuk website dari berbagai ancaman cyber",
            features: ["Security Audit", "Firewall Setup", "Malware Scanning", "SSL Management"]
        }
    ]

    const whyChooseUs = [
        {
            icon: Clock,
            title: "Pengerjaan Tepat Waktu",
            description: "Kami komitmen menyelesaikan project sesuai deadline yang disepakati"
        },
        {
            icon: Shield,
            title: "Garansi Kepuasan",
            description: "Revisi hingga Anda puas dengan hasil akhir website"
        },
        {
            icon: Rocket,
            title: "Support Responsif",
            description: "Tim support siap membantu Anda kapanpun dibutuhkan"
        }
    ]

    return (
        <div className="min-h-screen bg-bg">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center px-6 md:px-16 lg:px-20 py-32 overflow-hidden bg-gradient-to-br from-bg via-primary/5 to-accent/5">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
                    />
                    <div
                        className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                        style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
                    />
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold backdrop-blur-sm">
                            💼 Our Services
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text">
                        Paket Layanan
                        <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2">
                            Website Development
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-text/70 leading-relaxed max-w-2xl mx-auto">
                        Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket dirancang dengan standar kualitas tertinggi
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-primary rounded-full" />
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section className="py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-bg to-primary/5">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
                            Pilih Paket Terbaik untuk Anda
                        </h2>
                        <p className="text-text/60">Harga fleksibel, kualitas premium</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packages.map((pkg) => {
                            const Icon = pkg.icon
                            return (
                                <div
                                    key={pkg.id}
                                    className={`group relative bg-surface border-2 rounded-3xl p-8 transition-all duration-300 ${pkg.popular
                                        ? 'border-primary shadow-2xl shadow-primary/20 scale-105 lg:scale-110'
                                        : 'border-text/10 hover:border-primary hover:scale-105'
                                        }`}
                                    onMouseEnter={() => setHoveredPackage(pkg.id)}
                                    onMouseLeave={() => setHoveredPackage(null)}
                                >
                                    {/* Popular Badge */}
                                    {pkg.popular && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                            <span className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full text-xs font-bold shadow-lg">
                                                🔥 MOST POPULAR
                                            </span>
                                        </div>
                                    )}

                                    {/* Package Header */}
                                    <div className="text-center mb-8 space-y-4">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} text-white shadow-lg`}>
                                            <Icon size={32} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-text mb-2">{pkg.name}</h3>
                                            <p className="text-text/60 text-sm">{pkg.tagline}</p>
                                        </div>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-3 mb-8">
                                        {pkg.features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${pkg.color} flex items-center justify-center mt-0.5`}>
                                                    <Check size={12} className="text-white" />
                                                </div>
                                                <span className="text-text/80 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Package Info */}
                                    <div className="space-y-4 mb-8 pt-6 border-t border-text/10">
                                        <div className="bg-primary/5 rounded-xl p-4">
                                            <p className="text-xs text-text/60 mb-1">Ideal untuk:</p>
                                            <p className="text-sm text-text/80 font-medium">{pkg.ideal}</p>
                                        </div>
                                        {/* <div className="flex items-center justify-between text-sm">
                                            <span className="text-text/60">Waktu Pengerjaan:</span>
                                            <span className="font-semibold text-text">{pkg.deliveryTime}</span>
                                        </div> */}
                                        {/* <div className="flex items-center justify-between text-sm">
                                            <span className="text-text/60">Revisi:</span>
                                            <span className="font-semibold text-text">{pkg.revision}</span>
                                        </div> */}
                                    </div>

                                    {/* CTA Button */}
                                    {/* <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${pkg.popular
                                        ? `bg-gradient-to-r ${pkg.color} text-white shadow-lg hover:shadow-xl hover:scale-105`
                                        : 'bg-bg border-2 border-primary text-primary hover:bg-primary hover:text-white'
                                        }`}>
                                        Pilih Paket Ini
                                        <ArrowRight size={18} />
                                    </button> */}

                                    {/* Glow Effect */}
                                    <div className={`absolute -inset-1 bg-gradient-to-br ${pkg.color} rounded-3xl blur-2xl transition-opacity duration-500 -z-10 ${hoveredPackage === pkg.id ? 'opacity-20' : 'opacity-0'
                                        }`} />
                                </div>
                            )
                        })}
                    </div>

                    {/* Note */}
                    <div className="text-center mt-12 space-y-6">
                        <div className="p-8 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 rounded-3xl max-w-4xl mx-auto border-2 border-primary/20">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <Sparkles className="text-primary" size={24} />
                                <h3 className="text-2xl font-bold text-text">Fleksibilitas Penuh untuk Anda</h3>
                            </div>
                            <p className="text-text/80 leading-relaxed mb-4">
                                Paket-paket di atas hanyalah <strong>referensi fitur</strong> yang dapat kami hadirkan.
                                Kami <strong>100% fleksibel</strong> dan siap menyesuaikan setiap detail
                                dengan visi dan kebutuhan website yang Anda impikan.
                            </p>
                            <p className="text-text/70 text-sm">
                                Ingin fitur khusus? Desain unik? Atau kombinasi dari beberapa paket?
                                <Link href="/contact" className="text-primary"> Hubungi Kami!</Link>
                            </p>
                        </div>

                        <div className="p-6 bg-accent/10 rounded-2xl max-w-3xl mx-auto">
                            <p className="text-text/80">
                                <strong>Bonus:</strong> Semua paket sudah termasuk hosting & domain gratis selama 1 tahun pertama.
                                Hubungi kami untuk informasi harga dan diskusi kebutuhan spesifik Anda.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Additional Services */}
            <section className="py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-bg">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
                            Layanan Tambahan
                        </h2>
                        <p className="text-text/60">Maksimalkan performa website Anda dengan layanan pendukung</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {additionalServices.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <div
                                    key={index}
                                    className="group bg-surface border-2 border-text/10 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-text mb-2">{service.title}</h3>
                                    <p className="text-text/60 text-sm mb-4 leading-relaxed">
                                        {service.description}
                                    </p>
                                    {/* <div className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                <span className="text-xs text-text/70">{feature}</span>
                                            </div>
                                        ))}
                                    </div> */}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24 px-6 md:px-16 lg:px-20 bg-gradient-to-b from-primary/5 to-bg">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-3">
                            Kenapa Memilih Kami?
                        </h2>
                        <p className="text-text/60">Komitmen kami untuk kesuksesan project Anda</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={index}
                                    className="text-center space-y-4"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg mx-auto">
                                        <Icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-text">{item.title}</h3>
                                    <p className="text-text/60 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-32 px-6 md:px-16 lg:px-20 bg-gradient-to-br from-primary/10 via-accent/10 to-bg">
                <div className="container mx-auto max-w-4xl text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text">
                            Siap Memulai Project
                            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                Website Anda?
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl text-text/70">
                            Konsultasikan kebutuhan Anda dengan tim kami. Gratis dan tanpa komitmen!
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg inline-flex items-center justify-center gap-2"
                        >
                            Konsultasi Gratis
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-bg border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary/5 transition-all inline-flex items-center justify-center gap-2"
                        >
                            <span>💬</span>
                            Chat WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}