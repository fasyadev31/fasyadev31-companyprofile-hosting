import { Sparkles, Zap, Crown } from "lucide-react"

export const packages = [
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