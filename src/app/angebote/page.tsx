"use client";

import type { Metadata } from "next";
import {
  UserCheck,
  Building2,
  Home,
  FileText,
  Handshake,
  ClipboardCheck,
  Award,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

const offerings = [
  {
    icon: UserCheck,
    title: "Einzel- und Kleingruppenunterricht",
    desc: "Individuell auf die Bedürfnisse jeder Schülerin und jedes Schülers abgestimmt.",
  },
  {
    icon: Building2,
    title: "Unterricht in allen Salzburger Krankenhäusern",
    desc: "Unsere Lehrkräfte kommen direkt ans Krankenbett.",
  },
  {
    icon: Home,
    title: "Hausunterricht",
    desc: "Unter bestimmten Voraussetzungen auch Unterricht zu Hause möglich.",
  },
  {
    icon: FileText,
    title: "Lehrplanorientierung",
    desc: "Unterricht nach dem Lehrplan der jeweiligen Stammschule.",
  },
  {
    icon: Handshake,
    title: "Koordination mit Stammschulen",
    desc: "Enge Zusammenarbeit mit den Lehrkräften der Heimatschule.",
  },
  {
    icon: ClipboardCheck,
    title: "Leistungsbeurteilung",
    desc: "Koordinierte Beurteilung zwischen HIS- und Stammschullehrkräften.",
  },
];

export default function Angebote() {
  return (
    <>
      <PageHeader
        title="Angebote"
        subtitle="Unser umfassendes Unterrichtsangebot für kranke Schülerinnen und Schüler der 9.–13. Schulstufe."
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-surface border border-slate-100 h-full hover:shadow-lg hover:shadow-primary/5 transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Schulstufen */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Award size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Schulstufen
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Wir unterrichten Schülerinnen und Schüler der 9.–13.
                    Schulstufe aller allgemein- und berufsbildenden höheren
                    Schulen. Für jüngere Schülerinnen und Schüler (1.–8.
                    Schulstufe) ist die Heilstättenschule zuständig. Wenn diese
                    jedoch bestimmte Fächer nicht abdecken kann, springt die HIS
                    ein.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ClipboardCheck size={24} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Leistungsbeurteilung
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Die Leistungsbeurteilung wird zwischen den Lehrkräften der
                    HIS und den Lehrkräften der Stammschule koordiniert.
                    Zeugnisse werden in der Regel von der Stammschule
                    ausgestellt.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
