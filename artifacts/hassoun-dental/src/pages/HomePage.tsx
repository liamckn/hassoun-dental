import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CabinetPhotos from "@/components/CabinetPhotos";
import Services from "@/components/Services";
import DoctorProfile from "@/components/DoctorProfile";
import AvisEtFAQ from "@/components/AvisEtFAQ";
import HorairesContact from "@/components/HorairesContact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { useSeo } from "@/hooks/useSeo";

export default function HomePage() {
  useSeo({
    title: "Dentiste Marseille 13004 | Dr Stéphanie Hassoun | Implants",
    description: "Dentiste à Marseille 13004 (Chartreux) : implants, gencives, soins des enfants et urgences dentaires. Dr Stéphanie Hassoun, RDV au 04 91 49 56 79.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <CabinetPhotos />
        <Services />
        <DoctorProfile />
        <AvisEtFAQ />
        <HorairesContact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
