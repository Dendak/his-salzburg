"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Heart,
  Users,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import heroImg from "../../public/hero.webp";

const features = [
  {
    icon: GraduationCap,
    title: "Individueller Unterricht",
    desc: "Einzel- und Kleingruppenunterricht, abgestimmt auf den Lehrplan der Stammschule.",
  },
  {
    icon: Heart,
    title: "Alle Salzburger Krankenhäuser",
    desc: "Unterricht direkt in allen Salzburger Krankenhäusern — und unter bestimmten Voraussetzungen auch zu Hause.",
  },
  {
    icon: Users,
    title: "Enge Zusammenarbeit",
    desc: "Koordination mit Stammschulen für nahtlose Leistungsbeurteilung und Zeugniserstellung.",
  },
  {
    icon: BookOpen,
    title: "Schulstufen 9–13",
    desc: "Für Schülerinnen und Schüler aller allgemein- und berufsbildenden höheren Schulen.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImg}
            alt="Lehrerin unterrichtet Schülerin am Krankenbett"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-6 backdrop-blur-sm border border-accent/30">
              Privatschule mit Öffentlichkeitsrecht
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Höhere Schule
              <br />
              <span className="text-accent">im Spital</span> Salzburg
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl">
              Wir ermöglichen kranken Kindern und Jugendlichen der 9.–13.
              Schulstufe, den Anschluss an ihre Stammschule zu halten und ihre
              Schullaufbahn erfolgreich fortzusetzen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/angebote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary-dark font-semibold rounded-xl hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                Unsere Angebote
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Was wir bieten
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Unser Unterrichtsangebot sichert die schulische Kontinuität für
              kranke Schülerinnen und Schüler.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.1}>
                <div className="group p-6 rounded-2xl bg-surface hover:bg-primary hover:text-white transition-all duration-300 h-full border border-slate-100 hover:border-primary hover:shadow-xl hover:shadow-primary/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
                    <f.icon
                      size={24}
                      className="text-primary group-hover:text-white transition-colors"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-600 group-hover:text-white/80 leading-relaxed transition-colors">
                    {f.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="bg-primary rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,215,0,0.15),_transparent_50%)]" />
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Kostenloser Unterricht für alle
                </h2>
                <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
                  Der Unterricht ist für alle Schülerinnen und Schüler
                  kostenlos. Nehmen Sie Kontakt mit uns auf — wir helfen gerne
                  weiter.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-accent text-primary-dark font-semibold rounded-xl hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25"
                >
                  Jetzt Kontakt aufnehmen
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
