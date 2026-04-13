import HeroSection from "@/components/HeroSection";
import PreviewGallery from "@/components/PreviewGallery";
import ManifestoSection from "@/components/ManifestoSection";
import ArtistSection from "@/components/ArtistSection";
import MintSection from "@/components/MintSection";
import CountdownTimer from "@/components/CountdownTimer";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CountdownTimer />
      <PreviewGallery />
      <ManifestoSection />
      <ArtistSection />
      <FAQSection />
      <MintSection />
    </>
  );
}
