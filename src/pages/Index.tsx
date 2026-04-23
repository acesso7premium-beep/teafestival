import { useState } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import DestaqueSection from "@/components/DestaqueSection";
import ProgramacaoSection from "@/components/ProgramacaoSection";
import AtracoesSection from "@/components/AtracoesSection";
import ParceirosSection from "@/components/ParceirosSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SplashScreen from "@/components/SplashScreen";
import InscricaoModal from "@/components/InscricaoModal";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <NavBar />
      <HeroSection />
      <InscricaoModal />
      <SobreSection />
      <DestaqueSection />
      <ProgramacaoSection />
      <AtracoesSection />
      <ParceirosSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
