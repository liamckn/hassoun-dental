import { Phone, X } from "lucide-react";
import { useState } from "react";

export default function UrgenceBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-red-600 text-white py-2.5 px-4">
      <div className="container mx-auto flex items-center justify-center gap-3 text-sm font-medium">
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
        <span className="hidden sm:inline">Douleur dentaire ?&nbsp;<strong>Urgence dentaire</strong>&nbsp;— appelez-nous immédiatement</span>
        <span className="sm:hidden">Urgence dentaire — appelez maintenant</span>
        <a
          href="tel:0491495679"
          className="inline-flex items-center gap-1.5 bg-white text-red-600 font-bold rounded-full px-3 py-1 hover:bg-red-50 transition-colors text-sm ml-1 flex-shrink-0"
        >
          <Phone className="h-3.5 w-3.5" />
          04 91 49 56 79
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        aria-label="Fermer"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
