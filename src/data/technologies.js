import { FaReact, FaNode, FaDocker, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si";

export const technologies = [
    { name: "React", icon: FaReact, color: "from-blue-500 to-cyan-500", duration: "3s" },
    { name: "Next.js", icon: SiNextdotjs, color: "from-cyan-800 to-cyan-600", duration: "2.5s" },
    { name: "Laravel", icon: FaLaravel, color: "from-blue-600 to-blue-400", duration: "3.5s" },
    { name: "Tailwind", icon: SiTailwindcss, color: "from-cyan-500 to-blue-500", duration: "2.8s" },
    { name: "Node.js", icon: FaNode, color: "from-purple-600 to-purple-400", duration: "3.2s" },
    { name: "MongoDB", icon: SiMongodb, color: "from-purple-500 to-emerald-500", duration: "2.7s" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "from-blue-700 to-blue-500", duration: "3.3s" },
    { name: "Docker", icon: FaDocker, color: "from-blue-500 to-sky-400", duration: "2.9s" },
]