import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Pilates Vitalia',
    template: '%s | Pilates Vitalia'
  },
  description: 'Centro especializado en Pilates y bienestar corporal. Clases personalizadas, rehabilitación y ejercicios adaptados a todas las edades y niveles.',
  keywords: ['pilates', 'ejercicio', 'bienestar', 'salud', 'rehabilitación', 'entrenamiento personal'],
  authors: [{ name: 'Pilates Vitalia' }],
  creator: 'Pilates Vitalia',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://pilatesvitalia.com',
    siteName: 'Pilates Vitalia',
    title: 'Pilates Vitalia - Centro de Pilates y Bienestar',
    description: 'Centro especializado en Pilates y bienestar corporal. Mejora tu postura, flexibilidad y calidad de vida con nuestros profesionales certificados.',
    images: [{
      url: '/about-image.png',
      width: 1200,
      height: 630,
      alt: 'Pilates Vitalia Centro'
    }],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: '#729493'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
