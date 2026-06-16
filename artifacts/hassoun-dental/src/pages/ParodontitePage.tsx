import { useSeo } from "@/hooks/useSeo";
import LandingLayout from "@/components/LandingLayout";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

const faqs = [
  { q: "Pourquoi mes gencives saignent-elles ?", r: "Le plus souvent en raison d'une inflammation gingivale liée à l'accumulation de plaque dentaire. Un examen permet d'en identifier la cause précise." },
  { q: "La parodontite peut-elle être stabilisée ?", r: "Oui, lorsqu'elle est diagnostiquée et suivie correctement. Une prise en charge précoce permet de stopper ou de ralentir significativement son évolution." },
  { q: "Peut-on éviter le déchaussement ?", r: "Une prise en charge précoce et un suivi régulier améliorent considérablement le pronostic et permettent souvent d'éviter le déchaussement avancé." },
];

export default function ParodontitePage() {
  useSeo({
    title: "Parodontite Marseille | Traitement des gencives",
    description: "Traitement de la parodontite, du déchaussement des dents et des maladies des gencives à Marseille. Cabinet Dr. Stéphanie Hassoun, 13004.",
  });

  return (
    <LandingLayout
      currentPath="/parodontite-marseille"
      heroImage="/hero-photo.jpeg"
      heroCategory="Parodontologie · Marseille 13004"
      heroTitle="Parodontite et déchaussement des dents à Marseille"
      heroSubtitle="Les gencives jouent un rôle essentiel dans le maintien des dents. Lorsqu'elles sont atteintes par une maladie parodontale, les dents peuvent progressivement perdre leur soutien."
    >

      {/* Symptômes + Pourquoi traiter */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5">Symptômes fréquents</h2>
              <ul className="space-y-3">
                {["Gencives qui saignent", "Mauvaise haleine persistante", "Sensibilité dentaire", "Rétraction gingivale", "Mobilité dentaire"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5">Prise en charge proposée</h2>
              <ul className="space-y-3">
                {["Bilan parodontal", "Surfaçage radiculaire", "Maintenance parodontale", "Conseils d'hygiène personnalisés"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info box */}
      <section className="bg-primary/5 py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-primary/10 rounded-2xl p-8">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Pourquoi traiter rapidement ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              La parodontite évolue souvent lentement et sans douleur. Beaucoup de patients consultent tardivement. Une prise en charge précoce permet de limiter sa progression et de préserver les dents naturelles.
            </p>
            <h3 className="font-semibold text-foreground mb-3">Pourquoi consulter le Dr. Stéphanie Hassoun ?</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Plus de 20 ans d'expérience", "Expertise en parodontologie", "Suivi personnalisé", "Cabinet à taille humaine"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="border border-border rounded-xl p-5">
                <p className="font-semibold text-foreground mb-2">{f.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
