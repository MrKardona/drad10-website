import { NavBar } from "@/components/NavBar";
import { HeroPremium } from "@/components/HeroPremium";
import { StatsBanner } from "@/components/StatsBanner";
import { ServicesPremium } from "@/components/ServicesPremium";
import { DoctorSection } from "@/components/DoctorSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTABanner } from "@/components/CTABanner";
import { ContactPremium } from "@/components/ContactPremium";
import { FooterPremium } from "@/components/FooterPremium";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroPremium />
      <StatsBanner />
      <ServicesPremium />
      <DoctorSection />
      <TestimonialsSection />
      <CTABanner />
      <ContactPremium />
      <FooterPremium />
      <WhatsAppButton />
    </>
  );
}
