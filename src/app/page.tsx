import type { Metadata } from "next";
import { NavBar } from "@/components/NavBar";
import { HeroVideo } from "@/components/HeroVideo";
import { StatsBanner } from "@/components/StatsBanner";
import { ScrollVideoSection } from "@/components/ScrollVideoSection";
import { TratamientosDestacados } from "@/components/TratamientosDestacados";
import { ServicesPremium } from "@/components/ServicesPremium";
import { ResultadosTeaser } from "@/components/ResultadosTeaser";
import { BlogTeaser } from "@/components/BlogTeaser";
import { DoctorSection } from "@/components/DoctorSection";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import InstagramSection from "@/components/InstagramSection";
import { FAQSection } from "@/components/FAQSection";
import { SedesSection } from "@/components/SedesSection";
import { CTABanner } from "@/components/CTABanner";
import { ContactPremium } from "@/components/ContactPremium";
import { FooterPremium } from "@/components/FooterPremium";
import { WhatsAppButton } from "@/components/WhatsAppButton";

// La portada declara su canonical (las demás páginas declaran el suyo).
export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroVideo />
      <StatsBanner />
      <DoctorSection />
      <ReviewsCarousel />
      <TratamientosDestacados />
      <ServicesPremium />
      <ScrollVideoSection />
      <ResultadosTeaser />
      <BlogTeaser />
      <InstagramSection />
      <FAQSection />
      <SedesSection />
      <CTABanner />
      <ContactPremium />
      <FooterPremium />
      <WhatsAppButton />
    </>
  );
}
