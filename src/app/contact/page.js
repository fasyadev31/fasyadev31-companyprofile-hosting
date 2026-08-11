// app/portofolio/page.js
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import ContactPage from "@/components/sections/contact/ContactPage";

export const metadata = {
  title: "Hubungi Kami - Konsultasi Website | Fasyadev",
  description: "Hubungi Fasyadev untuk konsultasi gratis mengenai pembuatan website Anda. Kami siap membantu mewujudkan website impian Anda.",
  openGraph: {
    title: "Hubungi Kami - Konsultasi Website | Fasyadev",
    description: "Hubungi Fasyadev untuk konsultasi gratis mengenai pembuatan website Anda. Kami siap membantu mewujudkan website impian Anda.",
    url: "https://fasyadev.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactPage />
      <Footer />
    </>
  );
}