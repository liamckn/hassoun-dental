import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    photo: "/service-soins.jpeg",
    name: "Soins dentaires complets",
    desc: "Bilan bucco-dentaire, traitement des caries, dévitalisation et extraction. Suivi global de votre santé dentaire dans un cabinet de proximité.",
  },
  {
    photo: "/service-implant.jpeg",
    name: "Implantologie",
    desc: "Remplacement de dents manquantes par des implants en titane à l'aspect naturel. Solution définitive, confortable et esthétique pour retrouver un sourire complet.",
  },
  {
    photo: "/service-couronne.jpeg",
    name: "Couronne dentaire",
    desc: "Reconstruction des dents fracturées ou très abîmées par une couronne céramique sur mesure, parfaitement intégrée à votre sourire naturel.",
  },
  {
    photo: "/service-blanchiment.jpeg",
    name: "Blanchiment des dents",
    desc: "Éclaircissement professionnel jusqu'à 3 teintes pour un sourire plus lumineux, en toute sécurité pour l'émail.",
  },
  {
    photo: "/service-pediatrique.jpeg",
    name: "Dentisterie pédiatrique",
    desc: "Soins doux et préventifs pour les enfants dès l'âge de 3 ans. Un environnement bienveillant pour que votre enfant garde une bonne relation avec le dentiste.",
  },
  {
    photo: "/service-parodontie.jpeg",
    name: "Parodontie",
    desc: "Diagnostic et traitement des maladies des gencives (gingivite, parodontite). Préserve le tissu osseux et prévient la perte dentaire sur le long terme.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 bg-white" data-testid="section-services" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Nos expertises
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-5">
            Des soins complets pour<br />
            <span className="italic text-primary">votre sourire</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Le Dr. Hassoun prend en charge l'ensemble des pathologies de la bouche, des dents, des gencives et des maxillaires.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.07 * i }}
              className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              data-testid={`card-service-${i}`}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.photo}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
              <div className="mx-5 mb-4 h-[2px] bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
