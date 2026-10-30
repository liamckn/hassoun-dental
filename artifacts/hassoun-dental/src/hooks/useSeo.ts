import { useEffect } from "react";

const SITE = "https://dr-stephanie-hassoun.fr";
const DEFAULT_TITLE = "Dentiste Marseille 13004 | Dr Stéphanie Hassoun | Implants";

function setAttr(selector: string, attr: string, value: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) el.setAttribute(attr, value);
}

export function useSeo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    const path = window.location.pathname.replace(/\/+$/, "");
    const url = `${SITE}${path === "" ? "/" : path + "/"}`;
    setAttr('meta[name="description"]', "content", description);
    setAttr('meta[property="og:title"]', "content", title);
    setAttr('meta[property="og:description"]', "content", description);
    setAttr('meta[property="og:url"]', "content", url);
    setAttr('link[rel="canonical"]', "href", url);
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description]);
}
