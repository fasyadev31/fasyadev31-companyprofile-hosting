// pages/index.js atau app/page.js
import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/home/Hero";
import TechStack from "@/components/sections/home/TechStack";
import PortfolioPreview from "@/components/sections/home/PortfolioPreview";
import AboutSection from "@/components/sections/home/AboutUs";
import Footer from "@/components/layouts/Footer";
import ServicesPage from "@/components/sections/services/SevicesPage";

export const metadata = {
    title: "Layanan Kami - Jasa Pembuatan Website | Fasyadev",
    description: "Kami menyediakan berbagai layanan pembuatan website profesional, mulai dari company profile, landing page, hingga toko online. Konsultasikan kebutuhan Anda sekarang.",
    openGraph: {
        title: "Layanan Kami - Jasa Pembuatan Website | Fasyadev",
        description: "Kami menyediakan berbagai layanan pembuatan website profesional, mulai dari company profile, landing page, hingga toko online. Konsultasikan kebutuhan Anda sekarang.",
        url: "https://fasyadev.com/services",
    },
};

export default function Home() {
    return (
        <div>
            <Navbar />
            <ServicesPage />
            <Footer />
        </div>
    );
}