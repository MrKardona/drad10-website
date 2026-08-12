import { NavBar } from "@/components/NavBar";
import { HeroVideo } from "@/components/HeroVideo";
import { StatsBanner } from "@/components/StatsBanner";
import { ScrollVideoSection } from "@/components/ScrollVideoSection";
import { TratamientosDestacados } from "@/components/TratamientosDestacados";
import { ServicesPremium } from "@/components/ServicesPremium";
import { ResultadosTeaser } from "@/components/ResultadosTeaser";
import { DoctorSection } from "@/components/DoctorSection";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import InstagramSection from "@/components/InstagramSection";
import { FAQSection } from "@/components/FAQSection";
import { SedesSection } from "@/components/SedesSection";
import { CTABanner } from "@/components/CTABanner";
import { ContactPremium } from "@/components/ContactPremium";
import { FooterPremium } from "@/components/FooterPremium";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroVideo />
      <StatsBanner />
      <DoctorSection />
      <ScrollVideoSection />
      <ReviewsCarousel />
      <TratamientosDestacados />
      <ServicesPremium />
      <ResultadosTeaser />
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
