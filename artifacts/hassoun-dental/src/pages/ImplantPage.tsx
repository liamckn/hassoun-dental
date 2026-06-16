import { useSeo } from "@/hooks/useSeo";
import LandingLayout from "@/components/LandingLayout";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const faqs = [
  { q: "Combien de temps dure un implant ?", r: "Un implant peut durer de nombreuses années lorsqu'il est correctement entretenu grâce à une hygiène rigoureuse et des visites régulières de contrôle." },
  { q: "La pose d'un implant est-elle douloureuse ?", r: "L'intervention est réalisée sous anesthésie locale. Le patient ne ressent généralement pas de douleur pendant la pose." },
  { q: "Combien de temps faut-il pour remplacer une dent ?", r: "La durée dépend de la situation clinique de chaque patient. Le Dr. Hassoun vous précisera le calendrier lors de la consultation." },
];

export default function ImplantPage() {
  useSeo({
    title: "Implant dentaire Marseille | Dr Stéphanie Hassoun",
    description: "Remplacez une ou plusieurs dents grâce à l'implant dentaire. Consultation implantologie à Marseille 13004 avec le Dr Stéphanie Hassoun.",
  });

  return (
    <LandingLayout
      currentPath="/implant-dentaire-marseille"
      heroImage="/hero-photo.jpeg"
      heroCategory="Implantologie · Marseille 13004"
      heroTitle="Implant dentaire à Marseille"
      heroSubtitle="La perte d'une dent peut avoir des conséquences sur la mastication, l'esthétique du sourire et le confort au quotidien. L'implant dentaire permet aujourd'hui de remplacer une dent absente de manière durable."
    >

      {/* Quand envisager */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5">Quand envisager un implant dentaire ?</h2>
              <ul className="space-y-3">
                {["Dent manquante", "Extraction récente", "Dent non conservable", "Prothèse amovible inconfortable", "Absence de plusieurs dents"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5">Comment se déroule le traitement ?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le traitement implantaire débute par un bilan clinique et radiologique complet permettant d'évaluer la qualité osseuse et les conditions nécessaires à la pose d'un implant. Chaque projet fait l'objet d'un suivi personnalisé jusqu'à la pose de la couronne définitive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pourquoi Dr. Hassoun */}
      <section className="bg-primary/5 py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Pourquoi consulter le Dr. Stéphanie Hassoun ?</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {["Plus de 20 ans d'expérience", "Expertise en implantologie", "Suivi personnalisé", "Cabinet à taille humaine", "Accompagnement des patients anxieux"].map((item) => (
                <div key={item} className="bg-white rounded-xl px-5 py-4 border border-primary/10 flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
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
