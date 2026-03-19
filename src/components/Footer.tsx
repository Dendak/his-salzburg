"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Logo className="h-10 w-auto mb-4" />
            <p className="text-white/70 text-sm leading-relaxed">
              Privatschule mit Öffentlichkeitsrecht für kranke Schülerinnen und
              Schüler der 9.–13. Schulstufe in Salzburg.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-accent mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Startseite" },
                { href: "/angebote", label: "Angebote" },
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/kontakt", label: "Kontakt" },
                { href: "/impressum", label: "Impressum" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-accent mb-4 text-sm uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>Schönleitenstr. 1, 5020 Salzburg</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone size={16} className="shrink-0 text-accent" />
                <a href="tel:+436624329012030" className="hover:text-white transition-colors">
                  0662/432901/230
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Mail size={16} className="shrink-0 text-accent" />
                <a
                  href="mailto:direktion@his-salzburg.at"
                  className="hover:text-white transition-colors"
                >
                  direktion@his-salzburg.at
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-xs">
            &copy; {new Date().getFullYear()} Höhere Schule im Spital Salzburg
          </p>
          <Link
            href="/impressum"
            className="text-white/50 hover:text-white/80 text-xs transition-colors"
          >
            Impressum &amp; Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
