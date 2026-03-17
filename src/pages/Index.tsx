import { useState } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import DestaqueSection from "@/components/DestaqueSection";
import ProgramacaoSection from "@/components/ProgramacaoSection";
import AtracoesSection from "@/components/AtracoesSection";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <NavBar />
      <HeroSection />
      <SobreSection />
      <DestaqueSection />
      <ProgramacaoSection />
      <AtracoesSection />
      <Footer />
    </div>
  );
};

export default Index;
