import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { VideoSection } from "@/components/VideoSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <AboutSection />
      <VideoSection />
      <GallerySection />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
