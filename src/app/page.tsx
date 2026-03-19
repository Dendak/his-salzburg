"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Heart,
  Users,
  BookOpen,
  ArrowRight,
  UserCheck,
  Building2,
  Home,
  FileText,
  Handshake,
  ClipboardCheck,
  Award,
  Calendar,
  Hash,
  School,
  Shield,
  User,
  Mail,
  Phone,
  MapPin,
  Send,
  Building,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import heroImg from "../../public/hero.webp";
import direktorImg from "../../public/direktor.jpg";

/* ── Data ── */
const features = [
  { icon: GraduationCap, title: "Individueller Unterricht", desc: "Einzel- und Kleingruppenunterricht, abgestimmt auf den Lehrplan der Stammschule." },
  { icon: Heart, title: "Alle Salzburger Krankenhäuser", desc: "Unterricht direkt in allen Salzburger Krankenhäusern — und unter bestimmten Voraussetzungen auch zu Hause." },
  { icon: Users, title: "Enge Zusammenarbeit", desc: "Koordination mit Stammschulen für nahtlose Leistungsbeurteilung und Zeugniserstellung." },
  { icon: BookOpen, title: "Schulstufen 9–13", desc: "Für Schülerinnen und Schüler aller allgemein- und berufsbildenden höheren Schulen." },
];

const offerings = [
  { icon: UserCheck, title: "Einzel- und Kleingruppenunterricht", desc: "Individuell auf die Bedürfnisse jeder Schülerin und jedes Schülers abgestimmt." },
  { icon: Building2, title: "Unterricht in allen Salzburger Krankenhäusern", desc: "Unsere Lehrkräfte kommen direkt ans Krankenbett." },
  { icon: Home, title: "Hausunterricht", desc: "Unter bestimmten Voraussetzungen auch Unterricht zu Hause möglich." },
  { icon: FileText, title: "Lehrplanorientierung", desc: "Unterricht nach dem Lehrplan der jeweiligen Stammschule." },
  { icon: Handshake, title: "Koordination mit Stammschulen", desc: "Enge Zusammenarbeit mit den Lehrkräften der Heimatschule." },
  { icon: ClipboardCheck, title: "Leistungsbeurteilung", desc: "Koordinierte Beurteilung zwischen HIS- und Stammschullehrkräften." },
];

const facts = [
  { icon: Calendar, label: "Gegründet", value: "2009" },
  { icon: Hash, label: "Schulkennzahl", value: "501176" },
  { icon: School, label: "Schultyp", value: "Privatschule mit Öffentlichkeitsrecht" },
  { icon: Shield, label: "Schulerhalter", value: "Herz-Jesu-Missionare Salzburg" },
  { icon: User, label: "Direktor", value: "Prof. Mag. Franz Feichtl" },
];

/* ── Page ── */
export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value: string) => {
    setEmail(value);
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (emailError || !email) return;
    setSubmitted(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ═══════ HERO / STARTSEITE ═══════ */}
      <section id="startseite" className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroImg} alt="Lehrerin unterrichtet Schülerin am Krankenbett" fill className="object-cover" priority placeholder="blur" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/50" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-sm font-semibold rounded-full mb-6 backdrop-blur-sm border border-accent/30">
              Privatschule mit Öffentlichkeitsrecht
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Höhere Schule<br /><span className="text-accent">im Spital</span> Salzburg
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl">
              Wir ermöglichen kranken Kindern und Jugendlichen der 9.–13. Schulstufe, den Anschluss an ihre Stammschule zu halten und ihre Schullaufbahn erfolgreich fortzusetzen.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollTo("angebote")} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-primary-dark font-semibold rounded-xl hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25">
                Unsere Angebote <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollTo("kontakt")} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                Kontakt aufnehmen
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick features */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Was wir bieten</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Unser Unterrichtsangebot sichert die schulische Kontinuität für kranke Schülerinnen und Schüler.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.1}>
                <div className="group p-6 rounded-2xl bg-surface hover:bg-primary hover:text-white transition-all duration-300 h-full border border-slate-100 hover:border-primary hover:shadow-xl hover:shadow-primary/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
                    <f.icon size={24} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-600 group-hover:text-white/80 leading-relaxed transition-colors">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ANGEBOTE ═══════ */}
      <section id="angebote" className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Angebote</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">Unser umfassendes Unterrichtsangebot für kranke Schülerinnen und Schüler der 9.–13. Schulstufe.</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-white border border-slate-100 h-full hover:shadow-lg hover:shadow-primary/5 transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <FadeIn>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Award size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Schulstufen</h3>
                  <p className="text-slate-600 leading-relaxed">Wir unterrichten Schülerinnen und Schüler der 9.–13. Schulstufe aller allgemein- und berufsbildenden höheren Schulen. Für jüngere Schülerinnen und Schüler (1.–8. Schulstufe) ist die Heilstättenschule zuständig.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ClipboardCheck size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Leistungsbeurteilung</h3>
                  <p className="text-slate-600 leading-relaxed">Die Leistungsbeurteilung wird zwischen den Lehrkräften der HIS und den Lehrkräften der Stammschule koordiniert. Zeugnisse werden in der Regel von der Stammschule ausgestellt.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════ ÜBER UNS ═══════ */}
      <section id="ueber-uns" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Über uns</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">Seit 2009 ermöglichen wir kranken Kindern und Jugendlichen schulische Kontinuität.</p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {facts.map((f, i) => (
              <FadeIn key={f.label} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{f.label}</p>
                    <p className="mt-1 font-semibold text-slate-900">{f.value}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="max-w-3xl">
            <FadeIn>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Unsere Mission</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Die Höhere Schule im Spital Salzburg ermöglicht Schülerinnen und Schülern der 9.–13. Schulstufe, die aufgrund eines längeren Krankenhausaufenthaltes ihre Stammschule nicht besuchen können, die schulische Kontinuität aufrechtzuerhalten und ihr Schuljahr erfolgreich abzuschließen.</p>
                <p>Alle unsere Lehrkräfte sind voll qualifiziert und erfüllen die Anforderungen des Privatschulgesetzes. Sie arbeiten eng mit den Pädagoginnen und Pädagogen der jeweiligen Stammschulen zusammen.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="mt-12 p-6 rounded-2xl bg-primary text-white">
                <h3 className="font-semibold text-lg text-accent mb-3">Direktor</h3>
                <p className="text-white/90"><strong>Prof. Mag. Franz Feichtl</strong> leitet die Schule seit ihrer Gründung im Jahr 2009. Er unterrichtet außerdem Geschichte, Sozialkunde/Politische Bildung, Psychologie, Philosophie und Informatik am Privatgymnasium der Herz-Jesu-Missionare in Salzburg-Liefering.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════ KONTAKT ═══════ */}
      <section id="kontakt" className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Kontakt</h2>
            <p className="mt-4 text-lg text-slate-600">Wir freuen uns über Ihre Kontaktaufnahme!</p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="mb-6">
                  <div className="w-32 h-44 rounded-2xl overflow-hidden mb-3 border-2 border-primary/10">
                    <Image src={direktorImg} alt="Prof. Mag. Franz Feichtl" width={214} height={300} className="w-full h-full object-cover" placeholder="blur" />
                  </div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Direktor</p>
                  <p className="font-semibold text-slate-900">Prof. Mag. Franz Feichtl</p>
                </div>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><MapPin size={18} className="text-primary" /></div>
                    <div><p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Adresse</p><p className="text-slate-700">Schönleitenstraße 1<br />5020 Salzburg</p></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Phone size={18} className="text-primary" /></div>
                    <div><p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Telefon</p><a href="tel:+436624329012030" className="text-primary hover:text-primary-dark font-medium transition-colors">0662/432901/230</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Mail size={18} className="text-primary" /></div>
                    <div><p className="text-xs text-slate-500 uppercase tracking-wider font-medium">E-Mail</p><a href="mailto:direktion@his-salzburg.at" className="text-primary hover:text-primary-dark font-medium transition-colors">direktion@his-salzburg.at</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><Building size={18} className="text-primary" /></div>
                    <div><p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Schulerhalter</p><p className="text-slate-700">Herz-Jesu-Missionare Salzburg</p></div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-3">
              <FadeIn delay={0.15}>
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Nachricht senden</h3>
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4"><Send size={28} className="text-green-600" /></div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-2">Vielen Dank!</h4>
                      <p className="text-slate-600">Ihre Nachricht wurde gesendet. Wir werden uns so bald wie möglich bei Ihnen melden.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Name *</label>
                          <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" placeholder="Ihr Name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">E-Mail *</label>
                          <input type="email" required value={email} onChange={(e) => validateEmail(e.target.value)} onBlur={(e) => validateEmail(e.target.value)} className={`w-full px-4 py-2.5 rounded-xl border bg-white focus:ring-2 outline-none transition-all text-sm ${emailError ? "border-red-400 focus:border-red-400 focus:ring-red-100" : "border-slate-200 focus:border-primary focus:ring-primary/20"}`} placeholder="ihre@email.at" />
                          {emailError && <p className="mt-1 text-xs text-red-500">{emailError}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Betreff</label>
                        <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" placeholder="Betreff Ihrer Nachricht" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Nachricht *</label>
                        <textarea required rows={5} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none" placeholder="Ihre Nachricht..." />
                      </div>
                      <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
                        <Send size={16} /> Nachricht senden
                      </button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="bg-primary rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,215,0,0.15),_transparent_50%)]" />
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Kontakt aufnehmen</h2>
                <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">Nehmen Sie Kontakt mit uns auf — wir helfen gerne weiter.</p>
                <button onClick={() => scrollTo("kontakt")} className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-accent text-primary-dark font-semibold rounded-xl hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25">
                  Jetzt Kontakt aufnehmen <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
