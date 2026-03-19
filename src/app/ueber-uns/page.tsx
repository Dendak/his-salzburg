"use client";

import { Calendar, Hash, School, Shield, User, Wallet } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

const facts = [
  { icon: Calendar, label: "Gegründet", value: "2009" },
  { icon: Hash, label: "Schulkennzahl", value: "501176" },
  {
    icon: School,
    label: "Schultyp",
    value: "Privatschule mit Öffentlichkeitsrecht",
  },
  {
    icon: Shield,
    label: "Schulerhalter",
    value: "Herz-Jesu-Missionare Salzburg",
  },
  { icon: User, label: "Direktor", value: "Prof. Mag. Franz Feichtl" },
  { icon: Wallet, label: "Kosten", value: "Kostenlos für alle" },
];

export default function UeberUns() {
  return (
    <>
      <PageHeader
        title="Über uns"
        subtitle="Seit 2009 ermöglichen wir kranken Kindern und Jugendlichen schulische Kontinuität."
      />

      {/* Facts grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facts.map((f, i) => (
              <FadeIn key={f.label} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {f.label}
                    </p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {f.value}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                Unsere Mission
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Die Höhere Schule im Spital Salzburg ermöglicht Schülerinnen
                  und Schülern der 9.–13. Schulstufe, die aufgrund eines
                  längeren Krankenhausaufenthaltes ihre Stammschule nicht
                  besuchen können, die schulische Kontinuität aufrechtzuerhalten
                  und ihr Schuljahr erfolgreich abzuschließen.
                </p>
                <p>
                  Alle unsere Lehrkräfte sind voll qualifiziert und erfüllen die
                  Anforderungen des Privatschulgesetzes. Sie arbeiten eng mit den
                  Pädagoginnen und Pädagogen der jeweiligen Stammschulen zusammen,
                  um den bestmöglichen Lernerfolg zu gewährleisten.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="mt-12 p-6 rounded-2xl bg-primary text-white">
                <h3 className="font-semibold text-lg text-accent mb-3">
                  Direktor
                </h3>
                <p className="text-white/90">
                  <strong>Prof. Mag. Franz Feichtl</strong> leitet die Schule
                  seit ihrer Gründung im Jahr 2009. Er unterrichtet außerdem
                  Geschichte, Sozialkunde/Politische Bildung, Psychologie,
                  Philosophie und Informatik am Privatgymnasium der
                  Herz-Jesu-Missionare in Salzburg-Liefering.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
