import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, Star, Award, Clock, AlertCircle, X } from "lucide-react";

function UrgenceModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
          initial={{ scale: 0.92, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 16 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground">Urgence dentaire</h2>
              <p className="text-sm text-muted-foreground">Cabinet Dr. Stéphanie Hassoun</p>
            </div>
          </div>

          <p className="text-base text-foreground leading-relaxed mb-7 border-l-4 border-red-200 pl-4">
            Votre demande a bien été prise en compte. Vous serez pris en charge dans les plus brefs délais.
          </p>

          <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">
            Comment souhaitez-vous nous contacter ?
          </p>

          <div className="flex flex-col gap-3">
            <Button asChild size="lg" className="w-full h-14 text-base bg-primary hover:bg-primary/90 text-white shadow-md">
              <a href="tel:0491495679">
                <Phone className="mr-2 h-5 w-5" />
                Appeler le 04 91 49 56 79
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full h-14 text-base border-[#0596DE] text-[#0596DE] hover:bg-[#0596DE]/5">
              <a href="https://www.doctolib.fr/dentiste/marseille/stephanie-hassoun" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Prendre RDV sur Doctolib
              </a>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Hero() {
  const [urgenceOpen, setUrgenceOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-photo.jpeg"
            alt="Cabinet Dentaire Dr. Hassoun"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85 sm:bg-gradient-to-r sm:from-white/95 sm:via-white/80 sm:to-white/30" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Nouveaux patients acceptés
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-4">
                Dr. Stéphanie Hassoun<br />
                <span className="text-primary italic">Chirurgien-Dentiste</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Le Docteur Stéphanie Hassoun vous accueille dans un cabinet moderne et chaleureux, dédié à votre santé bucco-dentaire et à l'esthétique de votre sourire.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button asChild size="lg" className="bg-[#0596DE] hover:bg-[#0482C0] text-white h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all" data-testid="button-hero-doctolib">
                <a href="https://www.doctolib.fr/dentiste/marseille/stephanie-hassoun" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Prendre RDV sur Doctolib
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base border-primary/20 hover:bg-primary/5 bg-white shadow-sm" data-testid="button-hero-phone">
                <a href="tel:0491495679">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  04 91 49 56 79
                </a>
              </Button>
              <Button
                size="lg"
                className="h-14 px-8 text-base bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all"
                data-testid="button-hero-urgence"
                onClick={() => setUrgenceOpen(true)}
              >
                <AlertCircle className="mr-2 h-5 w-5" />
                Urgence dentaire
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-8 border-t border-border/60"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-foreground font-semibold text-base sm:text-xl">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  20+ ans
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">d'expérience</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-foreground font-semibold text-base sm:text-xl">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                  6
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">spécialités</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-foreground font-semibold text-base sm:text-xl">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-primary fill-primary flex-shrink-0" />
                  <span className="whitespace-nowrap">4,4 <span className="hidden sm:inline">étoiles</span></span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground">avis patients</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {urgenceOpen && <UrgenceModal onClose={() => setUrgenceOpen(false)} />}
    </>
  );
}
