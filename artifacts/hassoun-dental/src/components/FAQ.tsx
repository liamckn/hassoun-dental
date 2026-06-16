import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    q: "Acceptez-vous les nouvelles patients ?",
    r: "Oui, le cabinet Dr. Hassoun accepte de nouveaux patients. Vous pouvez prendre rendez-vous directement en ligne sur Doctolib ou par téléphone au 04 91 49 56 79.",
  },
  {
    q: "Le cabinet est-il conventionné secteur 1 ou secteur 2 ?",
    r: "Le Dr. Hassoun exerce en secteur 2 (honoraires libres). Cela signifie que les soins de base sont remboursés par l'Assurance Maladie, et votre mutuelle peut prendre en charge le dépassement d'honoraires. Nous vous fournirons un devis détaillé avant tout traitement.",
  },
  {
    q: "Acceptez-vous la carte Vitale et les mutuelles ?",
    r: "Oui, nous acceptons la carte Vitale. Le tiers payant est pratiqué pour les actes pris en charge à 100 % par l'Assurance Maladie. Pour les mutuelles, nous pouvons vous fournir les documents nécessaires à votre remboursement.",
  },
  {
    q: "Quel est le délai pour obtenir un premier rendez-vous ?",
    r: "En général, les premiers rendez-vous sont disponibles sous 1 à 2 semaines. Pour les urgences dentaires, nous faisons notre maximum pour vous recevoir dans les 24 à 48 heures. Contactez-nous directement par téléphone pour toute urgence.",
  },
  {
    q: "Prenez-vous en charge les enfants ? À partir de quel âge ?",
    r: "Oui, nous accueillons les enfants à partir de 3 ans. Le Dr. Hassoun s'attache à créer un environnement bienveillant pour que les enfants gardent une bonne relation avec le dentiste dès le plus jeune âge.",
  },
  {
    q: "Le cabinet est-il accessible en transports en commun ?",
    r: "Oui, le cabinet situé au 192A Avenue des Chartreux, 13004 Marseille est accessible en tramway et en bus. Des places de stationnement sont également disponibles à proximité.",
  },
];

function Item({ q, r }: { q: string; r: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-primary/3 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-foreground text-base">{q}</span>
        <ChevronDown
          className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
              {r}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-white py-20" id="faq" data-testid="section-faq">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Questions fréquentes</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Vos questions, nos réponses
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          {questions.map((item) => (
            <Item key={item.q} q={item.q} r={item.r} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
