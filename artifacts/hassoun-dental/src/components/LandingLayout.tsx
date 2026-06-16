import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import InternalLinks from "@/components/InternalLinks";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface LandingLayoutProps {
  children: React.ReactNode;
  currentPath: string;
  heroImage?: string;
  heroCategory?: string;
  heroTitle?: string;
  heroSubtitle?: string;
}

export default function LandingLayout({
  children,
  currentPath,
  heroImage,
  heroCategory,
  heroTitle,
  heroSubtitle,
}: LandingLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden">
      <Navbar />
      <main className="pt-20">

        {/* Hero plein fond avec teinte chaude */}
        {heroImage && (
          <div className="relative w-full h-72 md:h-[520px] overflow-hidden flex items-center">
            <img
              src={heroImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />
            {/* Texte à gauche comme la page d'accueil */}
            {(heroCategory || heroTitle || heroSubtitle) && (
              <motion.div
                className="relative z-10 container mx-auto px-4 md:px-6 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {heroCategory && (
                  <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
                    {heroCategory}
                  </p>
                )}
                {heroTitle && (
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
                    {heroTitle}
                  </h1>
                )}
                {heroSubtitle && (
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {heroSubtitle}
                  </p>
                )}
              </motion.div>
            )}
          </div>
        )}

        {children}

        {/* CTA Block */}
        <div className="bg-primary py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
              Prendre rendez-vous
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Cabinet Dr. Stéphanie Hassoun — 192A Avenue des Chartreux, Marseille 13004
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 h-14 px-8 text-base shadow-lg font-semibold">
                <a href="https://www.doctolib.fr/dentiste/marseille/stephanie-hassoun" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Prendre RDV sur Doctolib
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-8 text-base">
                <a href="tel:0491495679">
                  <Phone className="mr-2 h-5 w-5" />
                  04 91 49 56 79
                </a>
              </Button>
            </div>
          </div>
        </div>

        <InternalLinks current={currentPath} />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
