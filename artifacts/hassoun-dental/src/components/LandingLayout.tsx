import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import InternalLinks from "@/components/InternalLinks";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Star, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const avis = [
  {
    nom: "Marie-Claire B.",
    note: 5,
    texte: "Excellente praticienne, très douce et à l'écoute. J'avais une grande peur du dentiste depuis des années et le Dr. Hassoun m'a mise en confiance dès la première consultation.",
  },
  {
    nom: "Karim L.",
    note: 5,
    texte: "Cabinet moderne et propre, équipe souriante. Mon implant dentaire s'est très bien passé, aucune douleur pendant et après l'intervention. Suivi impeccable.",
  },
  {
    nom: "Sophie M.",
    note: 5,
    texte: "Le Dr. Hassoun s'occupe de toute ma famille. Elle est incroyablement patiente. Mes enfants n'ont plus peur d'aller chez le dentiste.",
  },
];

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
          <div className="relative w-full min-h-48 md:h-[520px] overflow-hidden flex items-center py-10 md:py-0">
            <img
              src={heroImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/88 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/80 sm:to-white/30" />
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
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-4">
                    {heroTitle}
                  </h1>
                )}
                {heroSubtitle && (
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {heroSubtitle}
                  </p>
                )}
              </motion.div>
            )}
          </div>
        )}

        {children}

        {/* Avis Google + Carte */}
        <section className="bg-white py-14 border-t border-border/40">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Avis patients</p>
              <div className="flex items-center justify-center gap-2 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4,4 / 5</span> · Avis Google vérifiés
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Avis */}
              <div className="flex flex-col gap-4">
                {avis.map((a, i) => (
                  <motion.div
                    key={a.nom}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-gray-50 border border-border rounded-xl p-4"
                  >
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: a.note }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2">"{a.texte}"</p>
                    <p className="text-xs font-semibold text-foreground">{a.nom}</p>
                  </motion.div>
                ))}
                <a
                  href="https://www.google.com/maps/search/Dr.+Hassoun+dentiste+marseille"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Voir tous les avis sur Google
                </a>
              </div>

              {/* Carte + adresse */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-col gap-4"
              >
                <div className="rounded-2xl overflow-hidden h-52 border border-border shadow-sm">
                  <iframe
                    title="Carte cabinet Dr. Hassoun"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.163892413573!2d5.383018715607944!3d43.30143717913583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0e9a31e3de7%3A0x1c84a8a0ae6e1b2c!2s192A%20Avenue%20des%20Chartreux%2C%2013004%20Marseille!5e0!3m2!1sfr!2sfr!4v1717000000000!5m2!1sfr!2sfr"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/dir//192A+Avenue+des+Chartreux,+13004+Marseille"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  192A Avenue des Chartreux, 13004 Marseille
                </a>
              </motion.div>
            </div>
          </div>
        </section>

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
