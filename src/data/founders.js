import { FaInstagram, FaGitlab, FaLinkedin, FaGithub } from "react-icons/fa";

export const founders = [
    {
        name: "Farih Syamsudin",
        role: "Co-Founder & Lead Developer",
        image: "/images/farihsyamsudin.png",
        gradient: "from-blue-500 to-cyan-500",
        description: "Passionate developer yang suka banget eksplorasi teknologi baru",
        story: `Perjalanan saya di dunia teknologi dimulai dari rasa penasaran yang besar. Sejak kecil, saya selalu tertarik dengan bagaimana teknologi bisa mengubah cara kita hidup dan bekerja.`,
        socials: [
            { name: "instagram", icon: FaInstagram, url: "https://instagram.com/farihsyamsudin", color: "hover:bg-pink-600" },
            { name: "gitlab", icon: FaGitlab, url: "https://tiktok.com/@farihsyamsudin", color: "hover:bg-black" },
            { name: "linkedin", icon: FaLinkedin, url: "https://facebook.com/farihsyamsudin", color: "hover:bg-blue-600" },
        ],
        experiences: [
            {
                type: "milestone",
                title: "Memulai Journey di Dunia Programming",
                period: "2021",
                description: "Pertama kali belajar coding setelah mendapatkan mata kuliah pemrograman di semester 1 saat kuliah.",
                badge: "Awal Mula"
            },
            {
                type: "project",
                title: "Project Kampus",
                period: "2023",
                description: "Mendapat project pertama membuat website prodi logistik kelautan dan ikut serta dalam beberapa project doesn lainnya.",
                achievements: ["Landing Page", "Client Management", "Time Management"]
            },
            {
                type: "award",
                title: "Juara 1",
                period: "2024",
                description: "Memenangkan kompetisi tingkat program studi sebagai juara pertama dalam kompetisi PEKAN ASIK dengan judul proposal 'Analisis Daerah Potensial Penanaman Mangrove Menggunakan Algoritma Decision Tree Di Wilayah Pesisir Lombok Berbasis Website'.",
                badge: "Achievement",
                achievements: ["Hackathon Winner", "Team Lead"]
            },
            {
                type: "work",
                title: "Software Engineer - Internship",
                period: "2024 - 2025",
                description: "Memulai Karir Profesional dengan bekerja di salah satu perusahaan konsultan teknologi informasi sebagai Software Engineer",
                achievements: ["Laravel", "Postgreesql", "Vue.js", "Team Collaboration"]
            },
            {
                type: "work",
                title: "Software Engineer - Specialist",
                period: "2025 - now",
                description: "Peningkatan Karir dengan menjadi pegawai tetap di perusahaan sebagai seorang Software Engineer Specialist",
                achievements: ["Laravel", "Postgreesql", "Vue.js", "Team Collaboration"]
            },
            {
                type: "milestone",
                title: "Mendirikan FASYA DEV",
                period: "2024",
                description: "Bersama Fatih, mendirikan studio digital FASYA DEV untuk menghadirkan solusi web berkualitas tinggi kepada klien di Indonesia.",
                badge: "Current",
                achievements: ["Co-Founder", "Lead Developer", "Business Strategy"]
            }
        ]
    },
    {
        name: "Fatih Syamsudin",
        role: "Co-Founder & Full Stack Developer",
        image: "/images/fatihsyamsudin.png",
        gradient: "from-purple-500 to-pink-500",
        description: "Website developer muda dengan berbagai penguasaan teknologi dan sangat suka mengoding",
        story: `Perjalanan saya di dunia teknologi dimulai dari rasa penasaran yang besar. Sejak kecil, saya selalu tertarik dengan bagaimana teknologi bisa mengubah cara kita hidup dan bekerja.`,
        socials: [
            { name: "instagram", icon: FaInstagram, url: "https://instagram.com/fxsym31", color: "hover:bg-pink-600" },
            { name: "github", icon: FaGithub, url: "https://github.com/fxsym", color: "hover:bg-black" },
            { name: "linkedin", icon: FaLinkedin, url: "https://linkedin.com/in/fatih-syamsudin", color: "hover:bg-blue-600" },
        ],
        experiences: [
            {
                type: "milestone",
                title: "Terjun ke Dunia Teknologi",
                period: "2022",
                description: "Mulai belajar programming dengan mengikuti course kelas online dan dokumentasi online. Fokus pada full-stack development sedari awal.",
                badge: "Awal Mula"
            },
            {
                type: "project",
                title: "Joki Project Kampus",
                period: "2023-2024",
                description: "Mendapatkan beberapa project pembuatan fullstcak webiste development dalam lingkup kampus dan mulai belajar terkait dengan request dari client",
                achievements: ["Laravel", "React", "Node.js", "Cloud"]
            },
            {
                type: "project",
                title: "Portfolio Website",
                period: "2024",
                description: "Mulai mendapatkan tawaran dari vendor dan juga perusahaan untuk membuat website portfolio atau company profile",
                badge: "Major Project",
                achievements: ["Next.js", "SEO", "Optimized Website"]
            },
            {
                type: "work",
                title: "IT Support",
                period: "2025 - now",
                description: "Bergabung dengan PT Nur Hakim Jaya Indonesia sebagai seorang IT Support yang membantu jalanya kebutuhan IT dalam PT.",
                achievements: ["Full Stack"]
            },

            {
                type: "milestone",
                title: "Mendirikan FASYA DEV",
                period: "2024",
                description: "Bersama Farih, membangun FASYA DEV dengan visi menghadirkan solusi digital terbaik untuk bisnis di Indonesia.",
                badge: "Current",
                achievements: ["Co-Founder", "Technical Lead", "Product Strategy"]
            }
        ]
    }
]