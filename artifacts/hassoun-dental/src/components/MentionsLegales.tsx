import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function Modal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          initial={{ scale: 0.94, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 16 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
        >
          <div className="sticky top-0 bg-white border-b border-border px-8 py-5 flex items-center justify-between rounded-t-2xl">
            <h2 className="font-serif text-xl font-bold text-foreground">Mentions légales & RGPD</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-8 py-6 space-y-6 text-sm text-muted-foreground leading-relaxed">

            <section>
              <h3 className="font-semibold text-foreground mb-2">Éditeur du site</h3>
              <p>Dr. Stéphanie Hassoun — Chirurgien-Dentiste<br />
              192A Avenue des Chartreux, 13004 Marseille<br />
              Tél. : 04 91 49 56 79<br />
              Email : stephaniehassoun@hotmail.fr<br />
              N° RPPS : (numéro à compléter)<br />
              Ordre des Chirurgiens-Dentistes : Conseil Départemental des Bouches-du-Rhône</p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">Hébergement</h3>
              <p>Ce site est hébergé par Replit, Inc.<br />
              667 Mission St, San Francisco, CA 94105, États-Unis.</p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">Propriété intellectuelle</h3>
              <p>L'ensemble du contenu de ce site (textes, photographies, illustrations) est la propriété exclusive du Dr. Stéphanie Hassoun. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.</p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">Données personnelles (RGPD)</h3>
              <p className="mb-2">Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Droit d'accès, de rectification et d'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit d'opposition</li>
                <li>Droit à la portabilité</li>
              </ul>
              <p className="mt-2">Pour exercer ces droits, contactez-nous à l'adresse : <a href="mailto:stephaniehassoun@hotmail.fr" className="text-primary hover:underline">stephaniehassoun@hotmail.fr</a></p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">Chatbot & traitement des données</h3>
              <p>Ce site propose un assistant conversationnel (chatbot) propulsé par l'intelligence artificielle. Les messages que vous saisissez sont traités par Anthropic (Claude) dans le respect de leurs politiques de confidentialité. Vos conversations sont conservées dans notre base de données sécurisée à des fins d'amélioration du service. Aucune donnée médicale personnelle ne doit être partagée via le chatbot.</p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">Cookies</h3>
              <p>Ce site n'utilise pas de cookies publicitaires ou de traceurs tiers. Seuls des cookies strictement nécessaires au bon fonctionnement du site peuvent être utilisés.</p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">Responsabilité</h3>
              <p>Les informations contenues sur ce site ont un caractère général et ne constituent pas un avis médical. Consultez un professionnel de santé pour tout diagnostic ou traitement. Le Dr. Stéphanie Hassoun ne saurait être tenue responsable d'un quelconque préjudice résultant de l'utilisation des informations fournies.</p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-2">Contact CNIL</h3>
              <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a></p>
            </section>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function MentionsLegales() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-xs text-white/30 hover:text-white/60 transition-colors underline underline-offset-2"
      >
        Mentions légales & RGPD
      </button>
      {open && <Modal onClose={() => setOpen(false)} />}
    </>
  );
}
