import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronDown } from "lucide-react";

const avis = [
  {
    nom: "Marie-Claire B.",
    note: 5,
    date: "il y a 2 semaines",
    texte: "Excellente praticienne, très douce et à l'écoute. J'avais une grande peur du dentiste depuis des années et le Dr. Hassoun m'a mise en confiance dès la première consultation.",
  },
  {
    nom: "Karim L.",
    note: 5,
    date: "il y a 1 mois",
    texte: "Cabinet moderne et propre, équipe souriante. Mon implant dentaire s'est très bien passé, aucune douleur pendant et après l'intervention. Suivi impeccable.",
  },
  {
    nom: "Sophie M.",
    note: 5,
    date: "il y a 3 semaines",
    texte: "Le Dr. Hassoun s'occupe de toute ma famille, y compris mes enfants de 5 et 8 ans. Elle est incroyablement patiente avec eux. Ils n'ont plus peur d'aller chez le dentiste.",
  },
  {
    nom: "Nadia F.",
    note: 5,
    date: "il y a 5 semaines",
    texte: "Prise en charge rapide pour une urgence dentaire un vendredi matin. Professionnalisme exemplaire et explications très claires sur le traitement. Merci infiniment.",
  },
];

const questions = [
  {
    q: "Acceptez-vous les nouveaux patients ?",
    r: "Oui, le cabinet Dr. Hassoun accepte de nouveaux patients. Vous pouvez prendre rendez-vous directement en ligne sur Doctolib ou par téléphone au 04 91 49 56 79.",
  },
  {
    q: "Le cabinet est-il conventionné secteur 1 ou secteur 2 ?",
    r: "Le Dr. Hassoun exerce en secteur 2. Les soins de base sont remboursés par l'Assurance Maladie, et votre mutuelle peut prendre en charge le dépassement. Un devis détaillé vous sera fourni avant tout traitement.",
  },
  {
    q: "Quel est le délai pour un premier rendez-vous ?",
    r: "En général, les premiers RDV sont disponibles sous 1 à 2 semaines. Pour les urgences, nous faisons notre maximum pour vous recevoir dans les 24 à 48 heures.",
  },
  {
    q: "Prenez-vous en charge les enfants ?",
    r: "Oui, nous accueillons les enfants à partir de 3 ans dans un environnement bienveillant, pour qu'ils gardent une bonne relation avec le dentiste dès le plus jeune âge.",
  },
];

function StarRating({ note }: { note: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-3.5 w-3.5 ${i < note ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
      ))}
    </div>
  );
}

function FAQItem({ q, r }: { q: string; r: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 hover:bg-primary/5 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-medium text-foreground text-sm">{q}</span>
        <ChevronDown className={`h-4 w-4 text-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
          >
            <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
              {r}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AvisEtFAQ() {
  return (
    <section className="bg-white py-20" id="avis" data-testid="section-avis-faq">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3">
            Ce que disent nos patients
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-foreground text-sm">4,4 / 5</span>
            <span className="text-sm">· Avis Google</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Avis */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {avis.map((a, i) => (
              <motion.div
                key={a.nom}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
              >
                <Quote className="h-5 w-5 text-primary/20 flex-shrink-0" />
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">"{a.texte}"</p>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div>
                    <p className="font-semibold text-xs text-foreground">{a.nom}</p>
                    <p className="text-xs text-muted-foreground">{a.date}</p>
                  </div>
                  <StarRating note={a.note} />
                </div>
              </motion.div>
            ))}
            <div className="sm:col-span-2 text-center mt-1">
              <a
                href="https://www.google.com/maps/search/Dr.+Hassoun+dentiste+marseille"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
              >
                Voir tous les avis sur Google
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </a>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-1">Questions fréquentes</p>
            {questions.map((item) => (
              <FAQItem key={item.q} q={item.q} r={item.r} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
