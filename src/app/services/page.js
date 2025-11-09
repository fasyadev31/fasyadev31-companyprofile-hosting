// pages/index.js atau app/page.js
import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/home/Hero";
import TechStack from "@/components/sections/home/TechStack";
import PortfolioPreview from "@/components/sections/home/PortfolioPreview";
import AboutSection from "@/components/sections/home/AboutUs";
import Footer from "@/components/layouts/Footer";
import ServicesPage from "@/components/sections/services/SevicesPage";

export default function Home() {
    return (
        <div>
            <Navbar />
            <ServicesPage />
            <Footer />
        </div>
    );
}