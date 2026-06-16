import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const specialties = ["Implantologie", "Blanchiment", "Dentisterie pédiatrique", "Parodontie", "Couronnes céramiques", "Prothèses sur implants"];

export default function DoctorProfile() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="profile" className="py-24 bg-background" data-testid="section-doctor-profile" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Votre praticienne
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
            Dr. Stéphanie Hassoun
          </h2>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-10">
            Chirurgien-Dentiste
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 text-left">
            {specialties.map((spec) => (
              <div key={spec} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span>{spec}</span>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="bg-[#0596DE] hover:bg-[#0482C0] text-white h-13 px-8 text-base shadow-md"
            data-testid="button-profile-doctolib"
          >
            <a
              href="https://www.doctolib.fr/dentiste/marseille/stephanie-hassoun"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prendre rendez-vous
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
