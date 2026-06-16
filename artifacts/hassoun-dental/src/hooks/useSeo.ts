import { useEffect } from "react";

export function useSeo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);
    return () => {
      document.title = "Dr. Stéphanie Hassoun — Chirurgien-Dentiste Marseille 13004";
    };
  }, [title, description]);
}
