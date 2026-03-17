import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import DestaqueSection from "@/components/DestaqueSection";
import ProgramacaoSection from "@/components/ProgramacaoSection";
import AtracoesSection from "@/components/AtracoesSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <NavBar />
    <HeroSection />
    <SobreSection />
    <DestaqueSection />
    <ProgramacaoSection />
    <AtracoesSection />
    <Footer />
  </div>
);

export default Index;
