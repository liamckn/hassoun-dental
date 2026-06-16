import { useSeo } from "@/hooks/useSeo";
import LandingLayout from "@/components/LandingLayout";
import { motion } from "framer-motion";
import { CheckCircle2, Heart } from "lucide-react";

const faqs = [
  { q: "À quel âge consulter pour la première fois ?", r: "Dès les premières années de vie, idéalement à l'apparition des premières dents. Le Dr. Hassoun accueille les enfants à partir de 3 ans." },
  { q: "Les dents de lait doivent-elles être soignées ?", r: "Oui. Les dents de lait jouent un rôle important dans la mastication, la phonation et le guidage des dents définitives. Leur entretien est essentiel." },
  { q: "Comment rassurer un enfant anxieux ?", r: "Le Dr. Hassoun privilégie une approche pédagogique et bienveillante, adaptée à l'âge de l'enfant, pour lui permettre d'aborder les soins en confiance." },
];

export default function DentisteEnfantPage() {
  useSeo({
    title: "Dentiste enfant Marseille | Soins dentaires pédiatriques",
    description: "Consultation et soins dentaires pour enfants à Marseille avec le Dr Stéphanie Hassoun. Environnement bienveillant dès 3 ans.",
  });

  return (
    <LandingLayout
      currentPath="/dentiste-enfant-marseille"
      heroImage="/hero-photo.jpeg"
      heroCategory="Dentisterie pédiatrique · Marseille 13004"
      heroTitle="Dentiste pour enfant à Marseille"
      heroSubtitle="Le Dr. Stéphanie Hassoun accueille les enfants dès l'âge de 3 ans dans un environnement rassurant et bienveillant, adapté à leur rythme."
    >

      {/* Quand consulter + Approche */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5">Quand consulter ?</h2>
              <ul className="space-y-3">
                {["Première visite dès 3 ans", "Caries ou douleurs dentaires", "Contrôles réguliers", "Conseils de prévention", "Suivi de la croissance dentaire"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5">Soins réalisés au cabinet</h2>
              <ul className="space-y-3">
                {["Consultations de prévention", "Dépistage des caries", "Soins des dents de lait", "Conseils d'hygiène bucco-dentaire", "Accompagnement des enfants anxieux"].map((item) => (
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

      {/* Approche bienveillante */}
      <section className="bg-primary/5 py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-primary/10 rounded-2xl p-8 flex gap-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-foreground mb-3">Une approche bienveillante et progressive</h2>
              <p className="text-muted-foreground leading-relaxed">
                La première expérience chez le dentiste joue un rôle essentiel dans la relation que l'enfant développera avec les soins dentaires tout au long de sa vie. Le Dr. Hassoun privilégie une prise en charge progressive et rassurante, adaptée à l'âge et au tempérament de chaque enfant. L'objectif est qu'il reparte avec le sourire et sans appréhension pour la prochaine visite.
              </p>
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
