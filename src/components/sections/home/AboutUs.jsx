"use client"
import { useState } from "react"
import Image from "next/image"
import { CgWebsite } from "react-icons/cg";
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedin, FaGitlab, FaGithub } from "react-icons/fa"

export default function AboutSection() {
    const [hoveredCard, setHoveredCard] = useState(null)

    const founders = [
        {
            name: "Farih Syamsudin",
            role: "Co-Founder & Lead Developer",
            image: "/images/farihsyamsudin.png",
            gradient: "from-blue-500 to-cyan-500",
            description: "Passionate developer yang suka banget eksplorasi teknologi baru",
            socials: [
                { name: "instagram", icon: FaInstagram, url: "https://instagram.com/farihsyamsudin", color: "hover:bg-pink-600" },
                { name: "gitlab", icon: FaGitlab, url: "https://tiktok.com/@farihsyamsudin", color: "hover:bg-black" },
                { name: "linkedin", icon: FaLinkedin, url: "https://facebook.com/farihsyamsudin", color: "hover:bg-blue-600" },
            ]
        },
        {
            name: "Fatih Syamsudin",
            role: "Co-Founder & Full Stack Developer",
            image: "/images/fatihsyamsudin.png",
            gradient: "from-purple-500 to-pink-500",
            description: "Website developer muda dengan berbagai penguasaan teknologi dan sangat suka mengoding",
            socials: [
                { name: "instagram", icon: FaInstagram, url: "https://instagram.com/fxsym31", color: "hover:bg-pink-600" },
                { name: "github", icon: FaGithub, url: "https://github.com/fxsym", color: "hover:bg-black" },
                { name: "linkedin", icon: FaLinkedin, url: "https://linkedin.com/in/fatih-syamsudin", color: "hover:bg-blue-600" },
            ]
        }
    ]

    return (
        <section className="relative py-20 md:py-32 px-6 md:px-16 lg:px-20  bg-linear-to-tr from-bg via-bg to-primary/40 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                            🤝 Tentang Kami
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text">
                        Kenalan Yuk dengan
                        <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-2">
                            FASYA DEV
                        </span>
                    </h2>

                    {/* Story */}
                    <div className="max-w-4xl mx-auto space-y-4">
                        <p className="text-lg md:text-xl text-text/80 leading-relaxed">
                            Berawal dari passion yang sama terhadap teknologi, kami berdua—
                            <span className="font-bold text-primary"> Farih</span> dan
                            <span className="font-bold text-accent"> Fatih Syamsudin</span>,
                            sepasang kembar yang memutuskan untuk mewujudkan impian bersama.
                        </p>
                        <p className="text-lg md:text-xl text-text/80 leading-relaxed">
                            Dari dua nama kami lahirlah
                            <span className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> FASYA</span>
                            —sebuah studio digital yang fokus menghadirkan solusi web berkualitas tinggi
                            dengan sentuhan kreativitas dan teknologi terkini.
                        </p>
                    </div>
                </div>

                {/* Founders Cards */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-12">
                    {founders.map((founder, index) => (
                        <div
                            key={index}
                            className="group relative"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Card */}
                            <div className={`relative bg-bg border-2 rounded-3xl overflow-hidden transition-all duration-500 
                                ${hoveredCard === index
                                    ? 'border-primary scale-105 shadow-2xl shadow-primary/20'
                                    : 'border-text/10 scale-100'}`}
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} opacity-0 transition-opacity duration-500 ${hoveredCard === index ? 'opacity-10' : ''}`} />

                                {/* Photo Container */}
                                <div className="relative h-80 md:h-96 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                                    {/* Placeholder - Ganti dengan Image component pas udah ada fotonya
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${founder.gradient} 
                                            flex items-center justify-center text-6xl font-bold text-white
                                            transition-transform duration-500 ${hoveredCard === index ? 'scale-110 rotate-12' : 'scale-100'}`}>
                                            {founder.name.charAt(0)}
                                        </div>
                                    </div> */}

                                    {/* Uncomment ini pas udah ada fotonya: */}
                                    <Image
                                        src={founder.image}
                                        alt={founder.name}
                                        fill
                                        className={`object-contain transition-transform duration-700 ${hoveredCard === index ? 'scale-110' : 'scale-100'}`}
                                    />


                                    {/* Overlay gradient */}
                                    <div className={`absolute inset-0 bg-linear-to-t from-bg via-bg/50 to-transparent 
                                        transition-opacity duration-500 ${hoveredCard === index ? 'opacity-10' : 'opacity-50'}`}
                                    />

                                    {/* Floating Badge
                                    <div className={`absolute top-6 right-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl 
                                        font-bold text-sm transition-all duration-500 ${hoveredCard === index ? 'scale-110 rotate-3' : 'scale-100'}`}>
                                        <span className={`bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent`}>
                                            Co-Founder
                                        </span>
                                    </div> */}
                                </div>

                                {/* Info */}
                                <div className="relative p-6 space-y-3">
                                    <h3 className="text-2xl font-bold text-text">
                                        {founder.name}
                                    </h3>
                                    {/* <p className={`font-semibold bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent`}>
                                        {founder.role}
                                    </p> */}
                                    <p className="text-text/60 leading-relaxed">
                                        {founder.description}
                                    </p>

                                    {/* Social Media Links */}
                                    <div className="flex gap-3 pt-4">
                                        {founder.socials.map((social, idx) => {
                                            const Icon = social.icon
                                            return (
                                                <a
                                                    key={idx}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`group/social w-10 h-10 rounded-lg bg-gradient-to-br ${founder.gradient} 
                                                        flex items-center justify-center text-white
                                                        transition-all duration-300 ${hoveredCard === index ? 'scale-110' : 'scale-100'}
                                                        hover:scale-125 ${social.color} hover:shadow-lg`}
                                                    style={{ transitionDelay: `${idx * 75}ms` }}
                                                    aria-label={`${founder.name}'s ${social.name}`}
                                                >
                                                    <Icon size={18} className="group-hover/social:scale-110 transition-transform" />
                                                </a>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                        transition-transform duration-1000 ${hoveredCard === index ? 'translate-x-full' : '-translate-x-full'}`}
                                    />
                                </div>
                            </div>

                            {/* Glow Effect */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${founder.gradient} rounded-3xl blur-xl opacity-0 
                                transition-opacity duration-500 -z-10 ${hoveredCard === index ? 'opacity-30' : ''}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Values / Mission */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: "🎯", title: "Fokus Kualitas", desc: "Setiap project dikerjakan dengan detail maksimal" },
                            { icon: "⚡", title: "Fast Response", desc: "Komunikasi cepat dan transparan" },
                            { icon: "🤝", title: "Partnership", desc: "Klien adalah partner jangka panjang kami" }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className="group bg-bg border-2 border-text/10 rounded-2xl p-6 text-center 
                                    hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h4 className="font-bold text-text mb-2">{value.title}</h4>
                                <p className="text-sm text-text/60">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-10 h-10 border-2 border-primary rounded-full flex justify-center items-center ">
                        <CgWebsite className="text-primary" />
                    </div>
                </div>

                {/* CTA
                <div className="text-center mt-16">
                    <p className="text-lg text-text/70 mb-6">
                        Siap wujudkan website impian bareng kami?
                    </p>
                    <button className="group px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg inline-flex items-center gap-3">
                        Mulai Project Sekarang
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div> */}
            </div>
        </section>
    )
}