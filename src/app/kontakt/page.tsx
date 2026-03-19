"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, User, Building } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        title="Kontakt"
        subtitle="Wir freuen uns über Ihre Kontaktaufnahme!"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Kontaktdaten
                </h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <User size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                        Direktor
                      </p>
                      <p className="font-semibold text-slate-900">
                        Prof. Mag. Franz Feichtl
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                        Adresse
                      </p>
                      <p className="text-slate-700">
                        Schönleitenstr. 1<br />
                        5020 Salzburg
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                        Telefon
                      </p>
                      <a
                        href="tel:+436624329012030"
                        className="text-primary hover:text-primary-dark font-medium transition-colors"
                      >
                        0662/432901/230
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                        E-Mail
                      </p>
                      <a
                        href="mailto:direktion@his-salzburg.at"
                        className="text-primary hover:text-primary-dark font-medium transition-colors"
                      >
                        direktion@his-salzburg.at
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Building size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                        Schulerhalter
                      </p>
                      <p className="text-slate-700">
                        Herz-Jesu-Missionare Salzburg
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.15}>
                <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Nachricht senden
                  </h2>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <Send size={28} className="text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        Vielen Dank!
                      </h3>
                      <p className="text-slate-600">
                        Ihre Nachricht wurde gesendet. Wir werden uns so bald
                        wie möglich bei Ihnen melden.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                            placeholder="Ihr Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">
                            E-Mail *
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                            placeholder="ihre@email.at"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Betreff
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                          placeholder="Betreff Ihrer Nachricht"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Nachricht *
                        </label>
                        <textarea
                          required
                          rows={5}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                          placeholder="Ihre Nachricht..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                      >
                        <Send size={16} />
                        Nachricht senden
                      </button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
