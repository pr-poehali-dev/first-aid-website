import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EmergencySection from "@/components/EmergencySection";
import EmergencyContacts from "@/components/EmergencyContacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <EmergencySection />
      <EmergencyContacts />
      <Footer />
    </div>
  );
};

export default Index;
