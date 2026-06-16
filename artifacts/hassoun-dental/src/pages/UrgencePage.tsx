import { useSeo } from "@/hooks/useSeo";
import LandingLayout from "@/components/LandingLayout";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const faqs = [
  { q: "Une rage de dent est-elle une urgence ?", r: "Oui. Une douleur dentaire intense peut indiquer une infection ou une atteinte de la pulpe dentaire nécessitant une prise en charge rapide." },
  { q: "Que faire si une dent se casse ?", r: "Conservez le fragment lorsque cela est possible et contactez rapidement le cabinet. Évitez l'automédication et rincez délicatement la bouche à l'eau tiède." },
  { q: "Un abcès peut-il attendre ?", r: "Non. Un abcès dentaire nécessite une évaluation rapide. En l'absence de traitement, une infection peut s'étendre et entraîner des complications." },
];

export default function UrgencePage() {
  useSeo({
    title: "Urgence dentaire Marseille | Dr Stéphanie Hassoun",
    description: "Rage de dent, dent cassée, abcès ou douleur dentaire. Cabinet dentaire à Marseille 13004 — Dr Stéphanie Hassoun.",
  });

  return (
    <LandingLayout
      currentPath="/urgence-dentaire-marseille"
      heroImage="/hero-photo.jpeg"
      heroCategory="Urgences dentaires · Marseille 13004"
      heroTitle="Urgence dentaire à Marseille"
      heroSubtitle="Certaines situations nécessitent une consultation rapide afin de soulager la douleur et prévenir les complications. Le cabinet s'efforce de recevoir les urgences dans les meilleurs délais."
    >

      {/* Situations + Que faire */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5">Situations fréquentes</h2>
              <ul className="space-y-3">
                {["Rage de dent", "Abcès dentaire", "Dent cassée", "Couronne descellée", "Traumatisme dentaire", "Gonflement douloureux"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5">Que faire en attendant ?</h2>
              <ul className="space-y-3">
                {["Maintenir une bonne hygiène bucco-dentaire", "Éviter l'automédication inadaptée", "Rincer à l'eau tiède salée", "Contacter rapidement le cabinet"].map((item) => (
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

      {/* Info cabinet */}
      <section className="bg-red-50 py-14">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-red-100 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">Comment nous contacter en urgence ?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Le cabinet du Dr. Stéphanie Hassoun s'efforce de recevoir les urgences dentaires dans les meilleurs délais selon les disponibilités du planning. Contactez-nous directement par téléphone pour évaluer la situation et organiser une prise en charge adaptée.
                </p>
                <a href="tel:0491495679" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline text-lg">
                  04 91 49 56 79
                </a>
              </div>
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
