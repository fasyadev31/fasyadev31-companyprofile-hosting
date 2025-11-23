import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jasa Pembuatan Website Profesional | Fasyadev",
  description:
    "Layanan jasa pembuatan website profesional, cepat, responsif, dan SEO-friendly untuk bisnis, personal brand, UMKM, dan company profile. Konsultasi gratis!",
  keywords: [
    "jasa pembuatan website",
    "jasa bikin website",
    "website developer",
    "company profile",
    "landing page",
    "web design",
    "jasa web murah",
    "pembuatan website profesional",
    "developer website Indonesia"
  ],
  authors: [{ name: "Fasyadev" }],
  creator: "Fasyadev",
  publisher: "Fasyadev",
  metadataBase: new URL("https://fasyadev.com"),
  openGraph: {
    title: "Jasa Pembuatan Website Profesional | Fasyadev",
    description:
      "Bangun website profesional untuk bisnis Anda dengan desain modern, cepat, dan optimal SEO.",
    url: "https://fasyadev.com",
    siteName: "Fasyadev",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "https://res.cloudinary.com/dmdxjvmvp/image/upload/v1763900600/logo_g3uvtm.jpg", // thumbnail sosial media
        width: 1200,
        height: 1200,
        alt: "Jasa Pembuatan Website Profesional"
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1
    }
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
