import { useSeo } from "@/hooks/useSeo";
import LandingLayout from "@/components/LandingLayout";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

const faqs = [
  { q: "Les gencives qui saignent sont-elles normales ?", r: "Non. Le saignement des gencives n'est pas un phénomène normal. Il indique une inflammation qui doit être évaluée par un professionnel de santé." },
  { q: "Est-ce toujours une parodontite ?", r: "Non, pas nécessairement. Le saignement peut aussi être lié à une gingivite simple, une hygiène insuffisante ou d'autres facteurs. Seul un examen permet d'en identifier la cause." },
  { q: "Le problème peut-il disparaître seul ?", r: "Parfois, dans les cas de gingivite légère avec une amélioration de l'hygiène. Mais un contrôle reste conseillé pour éviter une évolution vers une forme plus sévère." },
];

export default function GencivesPage() {
  useSeo({
    title: "Gencives qui saignent Marseille | Quand consulter ?",
    description: "Vos gencives saignent lors du brossage ? Découvrez les causes possibles et les traitements disponibles à Marseille 13004.",
  });

  return (
    <LandingLayout
      currentPath="/gencives-qui-saignent-marseille"
      heroImage="/hero-photo.jpeg"
      heroCategory="Gencives · Marseille 13004"
      heroTitle="Pourquoi mes gencives saignent-elles ?"
      heroSubtitle="Le saignement des gencives n'est jamais un phénomène à négliger. Qu'il survienne lors du brossage ou spontanément, il signale une inflammation qui mérite d'être évaluée."
    >

      {/* Causes + Traitement */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5">Les causes fréquentes</h2>
              <ul className="space-y-3">
                {["Gingivite", "Accumulation de plaque dentaire", "Parodontite", "Hygiène buccale insuffisante", "Facteurs de risque individuels (tabac, diabète...)"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-amber-400 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5">Comment traiter le problème ?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le traitement dépend de la cause identifiée lors de l'examen et peut inclure :
              </p>
              <ul className="space-y-3">
                {["Détartrage professionnel", "Soins parodontaux adaptés", "Conseils d'hygiène personnalisés", "Suivi parodontal régulier"].map((item) => (
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

      {/* Quand consulter */}
      <section className="bg-primary/5 py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-primary/10 rounded-2xl p-8">
            <h2 className="text-xl font-serif font-bold text-foreground mb-4">Quand consulter ?</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Si le saignement persiste plusieurs jours ou se répète régulièrement lors du brossage, un examen est recommandé. Plus la prise en charge est précoce, plus les résultats sont favorables.
            </p>
            <h3 className="font-semibold text-foreground mb-3">Pourquoi consulter le Dr. Stéphanie Hassoun ?</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Plus de 20 ans d'expérience", "Expertise en parodontologie", "Suivi personnalisé", "Accompagnement bienveillant"].map((item) => (
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
