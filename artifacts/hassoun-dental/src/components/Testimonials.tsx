import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const avis = [
  {
    nom: "Marie-Claire B.",
    note: 5,
    date: "il y a 2 semaines",
    texte: "Excellente praticienne, très douce et à l'écoute. J'avais une grande peur du dentiste depuis des années et le Dr. Hassoun m'a mise en confiance dès la première consultation. Je recommande vivement.",
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
    nom: "Jean-Pierre R.",
    note: 4,
    date: "il y a 2 mois",
    texte: "Très satisfait de mon traitement de blanchiment. Le résultat est naturel et visible. Cabinet facilement accessible en tramway depuis le centre-ville.",
  },
  {
    nom: "Nadia F.",
    note: 5,
    date: "il y a 5 semaines",
    texte: "Prise en charge rapide pour une urgence dentaire un vendredi matin. Professionnalisme exemplaire et explications très claires sur le traitement. Merci infiniment.",
  },
  {
    nom: "Thomas V.",
    note: 5,
    date: "il y a 1 mois",
    texte: "Couronnes posées avec un soin remarquable. Le résultat est esthétiquement parfait, on ne voit pas du tout la différence avec mes vraies dents. Très heureuse du résultat.",
  },
];

function StarRating({ note }: { note: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < note ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-20" id="avis" data-testid="section-testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">Avis patients</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Ce que disent nos patients
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4,4 / 5</span>
            <span className="text-sm">· Basé sur les avis Google</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {avis.map((a, i) => (
            <motion.div
              key={a.nom}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
            >
              <Quote className="h-6 w-6 text-primary/20 flex-shrink-0" />
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">"{a.texte}"</p>
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div>
                  <p className="font-semibold text-sm text-foreground">{a.nom}</p>
                  <p className="text-xs text-muted-foreground">{a.date}</p>
                </div>
                <StarRating note={a.note} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.google.com/maps/search/Dr.+Hassoun+dentiste+marseille"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
          >
            Voir tous les avis sur Google
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
