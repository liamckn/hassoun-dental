import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const schedule = [
  { day: "Lundi", hours: "09h00 – 13h00 / 14h00 – 19h00", open: true },
  { day: "Mardi", hours: "09h00 – 13h00 / 14h00 – 19h00", open: true },
  { day: "Mercredi", hours: "09h00 – 13h00 / 14h00 – 19h00", open: true },
  { day: "Jeudi", hours: "09h00 – 13h00 / 14h00 – 19h00", open: true },
  { day: "Vendredi", hours: "09h00 – 13h00 / 14h00 – 19h00", open: true },
  { day: "Samedi", hours: "Fermé", open: false },
  { day: "Dimanche", hours: "Fermé", open: false },
];

export default function HorairesContact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 bg-foreground text-white" data-testid="section-contact" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-blue-300 mb-4">
            Nous trouver
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            Horaires &amp; Contact
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">
            Venez nous rendre visite avenue des Chartreux à Marseille, du lundi au vendredi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="font-serif text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Clock className="h-5 w-5 text-blue-300" />
              Horaires d'ouverture
            </h3>
            <div className="space-y-1">
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center gap-3 py-3 border-b border-white/10"
                  data-testid={`schedule-row-${item.day.toLowerCase()}`}
                >
                  <span className="text-white/70 text-sm font-medium flex-shrink-0">{item.day}</span>
                  <span className={`text-xs sm:text-sm font-semibold text-right ${item.open ? "text-white" : "text-white/30"}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-[#0596DE] hover:bg-[#0482C0] text-white w-full h-13 text-base shadow-lg"
                data-testid="button-contact-doctolib"
              >
                <a
                  href="https://www.doctolib.fr/dentiste/marseille/stephanie-hassoun"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Réserver sur Doctolib
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact info + map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white/6 border border-white/12 rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-4" data-testid="contact-address">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Adresse</p>
                  <p className="text-white font-medium">192A Avenue des Chartreux</p>
                  <p className="text-white font-medium">13004 Marseille</p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="contact-phone">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Téléphone</p>
                  <a href="tel:0491495679" className="text-white font-medium hover:text-blue-300 transition-colors">
                    04 91 49 56 79
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="contact-email">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Email</p>
                  <a
                    href="mailto:stephaniehassoun@hotmail.fr"
                    className="text-white font-medium hover:text-blue-300 transition-colors"
                  >
                    stephaniehassoun@hotmail.fr
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-2xl overflow-hidden h-52 border border-white/10 shadow-lg">
              <iframe
                title="Carte cabinet Dr. Hassoun"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.163892413573!2d5.383018715607944!3d43.30143717913583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0e9a31e3de7%3A0x1c84a8a0ae6e1b2c!2s192A%20Avenue%20des%20Chartreux%2C%2013004%20Marseille!5e0!3m2!1sfr!2sfr!4v1717000000000!5m2!1sfr!2sfr"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
