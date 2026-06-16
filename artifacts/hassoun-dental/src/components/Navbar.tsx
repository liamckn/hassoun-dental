import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

const specialites = [
  { name: "Implant dentaire", href: "/implant-dentaire-marseille" },
  { name: "Parodontite & gencives", href: "/parodontite-marseille" },
  { name: "Dentiste enfant", href: "/dentiste-enfant-marseille" },
  { name: "Gencives qui saignent", href: "/gencives-qui-saignent-marseille" },
  { name: "Urgence dentaire", href: "/urgence-dentaire-marseille" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileSpecOpen, setMobileSpecOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const anchor = (hash: string) => isHome ? hash : `/${hash}`;

  const navLinks = [
    { name: "Le Cabinet", href: anchor("#cabinet") },
    { name: "Le Docteur", href: anchor("#profile") },
    { name: "Avis", href: anchor("#avis") },
    { name: "Contact", href: anchor("#contact") },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" : "bg-white py-5"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" data-testid="link-home">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 64 64" fill="currentColor">
              <path d="M44 6c-3.2 0-6.1 1.2-8.5 3.1C33.8 7.8 31 7 28 7c-2.4 0-4.7.6-6.7 1.7C18.5 7.1 15.9 6 13 6 7.5 6 3 10.7 3 16.5c0 3.2.9 6.1 2.3 8.4.9 1.5 1.4 3.2 1.4 5v.6c0 5.8 1.5 11.5 4.3 16.5l2.2 4c1 1.8 2.9 2.9 4.9 2.9 2.4 0 4.4-1.6 5-3.9l1.8-7.4c.4-1.5 1.7-2.6 3.2-2.6 1.5 0 2.8 1 3.2 2.5l1.9 7.5c.6 2.3 2.6 3.9 5 3.9 2 0 3.9-1.1 4.9-2.9l2.2-4c2.8-5 4.3-10.7 4.3-16.5v-.6c0-1.8.5-3.5 1.4-5C58.1 22.6 59 19.7 59 16.5 59 10.7 54.5 6 44 6zm9.7 17.4c-1.2 2-1.9 4.3-1.9 6.6v.6c0 5.3-1.3 10.5-3.9 15l-2.2 4c-.5.9-1.4 1.4-2.4 1.4-1.2 0-2.2-.8-2.5-1.9l-1.9-7.5C38 38.8 35.2 36.5 32 36.5c-3.2 0-6 2.3-6.8 5.5l-1.8 7.4c-.3 1.2-1.4 2-2.5 2-1 0-1.9-.5-2.4-1.4l-2.2-4c-2.6-4.5-3.9-9.7-3.9-15V30c0-2.3-.7-4.6-1.9-6.6C9.2 21.5 8.5 19.1 8.5 16.5 8.5 13.5 10.5 11 13 11c2 0 3.9.8 5.3 2.3l1.4 1.4 1.7-1.1C22.9 12.3 25.4 12 28 12c2.1 0 4.1.5 5.9 1.4l1.5.8 1.3-1C38.7 11.4 41.3 11 44 11c4.7 0 8.5 2.4 8.5 5.5 0 2.6-.7 5.1-1.8 6.9z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl leading-none text-foreground">Dr. Stéphanie Hassoun</span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Chirurgien-Dentiste</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                  {link.name}
                </a>
              </li>
            ))}

            {/* Dropdown Spécialités */}
            <li
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
              >
                Nos spécialités
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-border py-2 z-50">
                  {specialites.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <a href="tel:0491495679" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              04 91 49 56 79
            </a>
            <Button asChild className="bg-[#0596DE] hover:bg-[#0482C0] text-white" data-testid="button-nav-doctolib">
              <a href="https://www.doctolib.fr/dentiste/marseille/stephanie-hassoun" target="_blank" rel="noopener noreferrer">
                Prendre RDV
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} data-testid="button-mobile-menu-toggle">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-4 flex flex-col gap-3">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="block text-base font-medium text-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button
                className="flex items-center gap-1 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setMobileSpecOpen(!mobileSpecOpen)}
              >
                Nos spécialités
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileSpecOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileSpecOpen && (
                <ul className="mt-2 pl-4 flex flex-col gap-2">
                  {specialites.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="block text-sm text-muted-foreground hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
          <div className="h-px bg-border w-full my-1" />
          <a href="tel:0491495679" className="text-base font-medium text-foreground">04 91 49 56 79</a>
          <Button asChild className="bg-[#0596DE] hover:bg-[#0482C0] text-white w-full" size="lg">
            <a href="https://www.doctolib.fr/dentiste/marseille/stephanie-hassoun" target="_blank" rel="noopener noreferrer">
              Prendre RDV sur Doctolib
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
