import { Link } from "wouter";

const pages = [
  { href: "/implant-dentaire-marseille", label: "Implant dentaire" },
  { href: "/parodontite-marseille", label: "Parodontite & déchaussement" },
  { href: "/urgence-dentaire-marseille", label: "Urgence dentaire" },
  { href: "/dentiste-enfant-marseille", label: "Dentiste enfant" },
  { href: "/gencives-qui-saignent-marseille", label: "Gencives qui saignent" },
];

export default function InternalLinks({ current }: { current: string }) {
  const others = pages.filter((p) => p.href !== current);
  return (
    <div className="bg-primary/5 border-t border-primary/10 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-5 text-center">
          Nos autres spécialités
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {others.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/20 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors"
            >
              {p.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
