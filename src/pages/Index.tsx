import Navbar from "@/components/Navbar";
import EmergencyBanner from "@/components/EmergencyBanner";
import Hero from "@/components/Hero";
import FirstAidTypes from "@/components/FirstAidTypes";
import SafetyTips from "@/components/SafetyTips";
import FirstAidKit from "@/components/FirstAidKit";
import EmergencyContacts from "@/components/EmergencyContacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <EmergencyBanner />
      <Navbar />
      <Hero />
      <FirstAidTypes />
      <SafetyTips />
      <FirstAidKit />
      <EmergencyContacts />
      <Footer />
    </div>
  );
};

export default Index;
