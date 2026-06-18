import { MapPin, Phone, Mail, Clock } from "lucide-react";
import MentionsLegales from "@/components/MentionsLegales";

const services = [
  "Implantologie",
  "Couronne dentaire",
  "Blanchiment des dents",
  "Dentisterie pédiatrique",
  "Parodontie",
  "Prothèse sur implant",
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white border-t border-white/10" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 20H14C17.3137 20 20 17.3137 20 14V11C20 8.79086 18.2091 7 16 7C14.7461 7 13.626 7.5762 12.8988 8.48421L12 9.59868L11.1012 8.48421C10.374 7.5762 9.2539 7 8 7C5.79086 7 4 8.79086 4 11V14C4 17.3137 6.68629 20 10 20Z" />
                  <path d="M12 9.6V17" />
                </svg>
              </div>
              <div>
                <p className="font-serif font-bold text-lg text-white leading-none">Dr. Stéphanie Hassoun</p>
                <p className="text-xs text-white/50 uppercase tracking-widest mt-0.5">Chirurgien-Dentiste</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Cabinet dentaire moderne à Marseille 13004. Implants, couronnes, blanchiment, parodontie et soins pédiatriques dans un environnement accueillant.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-5">Nos expertises</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/60 leading-relaxed">
                  192A Avenue des Chartreux<br />13004 Marseille
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-300 flex-shrink-0" />
                <a href="tel:0491495679" className="text-sm text-white/60 hover:text-white transition-colors">
                  04 91 49 56 79
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-300 flex-shrink-0" />
                <a href="mailto:stephaniehassoun@hotmail.fr" className="text-sm text-white/60 hover:text-white transition-colors">
                  stephaniehassoun@hotmail.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-blue-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/60">
                  Lun – Ven : 9h – 13h / 14h – 19h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © 2026 Dr. Stéphanie Hassoun — Chirurgien-Dentiste Marseille 13004
          </p>
          <div className="flex items-center gap-4">
            <MentionsLegales />
            <a
              href="https://digiryze.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Site réalisé par Liam Web Dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
