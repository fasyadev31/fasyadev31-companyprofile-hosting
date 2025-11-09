"use client"
import Link from "next/link";
import { FaReact, FaNode, FaDocker, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si";

export default function TechStack() {
    const technologies = [
        { name: "React", icon: FaReact, color: "from-blue-500 to-cyan-500", duration: "3s" },
        { name: "Next.js", icon: SiNextdotjs, color: "from-cyan-800 to-cyan-600", duration: "2.5s" },
        { name: "Laravel", icon: FaLaravel, color: "from-blue-600 to-blue-400", duration: "3.5s" },
        { name: "Tailwind", icon: SiTailwindcss, color: "from-cyan-500 to-blue-500", duration: "2.8s" },
        { name: "Node.js", icon: FaNode, color: "from-purple-600 to-purple-400", duration: "3.2s" },
        { name: "MongoDB", icon: SiMongodb, color: "from-purple-500 to-emerald-500", duration: "2.7s" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "from-blue-700 to-blue-500", duration: "3.3s" },
        { name: "Docker", icon: FaDocker, color: "from-blue-500 to-sky-400", duration: "2.9s" },
    ]

    return (
        <section className="py-20 md:py-32 px-6 md:px-16 lg:px-20 bg-primary/5">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <div className="inline-block">
                        <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                            💻 Tech Stack
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text">
                        Buat Website
                        <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2">
                            Yang Anda Inginkan
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-text/70">
                        Dengan teknologi modern dan powerful yang kami kuasai
                    </p>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {technologies.map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                            <div
                                key={tech.name}
                                className="group relative bg-bg border-2 border-text/10 rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-linear-to-br ${tech.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                                <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                                    <div
                                        className="animate-bounce-slow"
                                        style={{
                                            animation: `bounce-slow ${tech.duration} ease-in-out infinite`
                                        }}
                                    >
                                        <IconComponent className="text-5xl text-text group-hover:text-primary transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-bold text-text text-lg">{tech.name}</h3>
                                </div>

                                {/* Shine Effect */}
                                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-lg text-text/70 mb-6">
                        Siap wujudkan website impian bareng kami?
                    </p>
                    <Link href="/services" className="cursor-pointer group px-8 py-4 bg-linear-to-r from-primary to-accent text-white rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg inline-flex items-center gap-3">
                        Mulai Project Sekarang
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link >
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
            `}</style>
        </section>
    )
}