import FeatureSection from "@/components/home/FeatureSection";
import PricingSection from "@/components/home/PricingSection";
import HeroSection from "@/components/home/HeroSection";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Pilates Vitalia',
    description: 'Descubre nuestro centro de Pilates especializado en clases personalizadas, rehabilitación y bienestar corporal. Primera clase de prueba gratuita.',
    openGraph: {
      title: 'Pilates Vitalia - Tu Centro de Pilates de Confianza',
      description: 'Mejora tu calidad de vida con nuestras clases personalizadas de Pilates. Especialistas en rehabilitación y ejercicios adaptados a todas las edades.',
      type: 'website',
      images: [{
        url: '/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Pilates Vitalia - Sala Principal'
      }],
    },
  };
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <PricingSection />
      <Testimonials />
      <Contact />
    </main>
  );
}
