import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const photos = [
  {
    src: "/photo4.jpeg",
    alt: "Salle de soins moderne",
  },
  {
    src: "/photo3.jpeg",
    alt: "Radiologie panoramique",
  },
];

export default function CabinetPhotos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cabinet" className="py-24 bg-white" data-testid="section-cabinet" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Notre espace
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-5">
            Un cabinet moderne<br />
            <span className="italic text-primary">et accueillant</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Un environnement soigné et accueillant, entièrement pensé pour votre confort et votre bien-être.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-5xl mx-auto">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.18 * i }}
              className="relative group flex-1 rounded-3xl overflow-hidden ring-1 ring-border/30"
              style={{
                maxWidth: 560,
                boxShadow: "0 8px 32px 0 rgba(60,80,120,0.13), 0 1.5px 4px 0 rgba(60,80,120,0.08)",
              }}
              data-testid={`card-cabinet-photo-${i}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/8 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
