import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Page introuvable</h1>
        <p className="text-gray-600 mb-6">Cette page n'existe pas ou a été déplacée.</p>
        <Link href="/" className="text-primary underline">Retour à l'accueil</Link>
      </div>
    </div>
  );
}
