"use client";

import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/FadeIn";

export default function Impressum() {
  return (
    <>
      <PageHeader title="Impressum &amp; Datenschutz" />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              <h2>Angaben gemäß § 5 ECG und § 25 MedienG</h2>
              <p>
                <strong>Höhere Schule im Spital Salzburg (HIS)</strong>
                <br />
                Schönleitenstraße 1<br />
                5020 Salzburg, Österreich
              </p>
              <p>
                <strong>Schulerhalter:</strong> Herz-Jesu-Missionare Salzburg
                <br />
                <strong>Direktor:</strong> Prof. Mag. Franz Feichtl
                <br />
                <strong>Telefon:</strong>{" "}
                <a href="tel:+4366243290">0662 432901</a>
                <br />
                <strong>E-Mail:</strong>{" "}
                <a href="mailto:direktion@his-salzburg.at">
                  direktion@his-salzburg.at
                </a>
                <br />
                <strong>Website:</strong> www.his-salzburg.at
              </p>
              <p>
                <strong>Aufsichtsbehörde:</strong> Bildungsdirektion für
                Salzburg
              </p>

              <h2>Datenschutzerklärung</h2>
              <p>
                Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese
                Datenschutzerklärung informiert Sie über die Art, den Umfang und
                Zweck der Verarbeitung personenbezogener Daten auf unserer
                Website gemäß der DSGVO.
              </p>
              <p>
                <strong>Server-Logfiles:</strong> Beim Besuch unserer Website
                werden automatisch technische Daten erfasst (IP-Adresse,
                Zugriffszeiten, aufgerufene Seiten, Browsertyp, Referrer-URL).
                Diese Daten werden ausschließlich für technische und
                statistische Zwecke verwendet.
              </p>
              <p>
                <strong>Kontaktformular:</strong> Daten, die über das
                Kontaktformular übermittelt werden, werden gemäß Art. 6 Abs. 1
                lit. b DSGVO verarbeitet.
              </p>
              <p>
                <strong>Ihre Rechte:</strong> Sie haben gemäß DSGVO (Artikel
                15–22) das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung, Datenübertragbarkeit und
                Widerspruch.
              </p>
              <p>
                <strong>Österreichische Datenschutzbehörde:</strong>
                <br />
                Barichgasse 40–42, 1030 Wien
                <br />
                +43 1 52 152-0
                <br />
                <a href="mailto:dsb@dsb.gv.at">dsb@dsb.gv.at</a>
              </p>

              <h2>Haftungsausschluss</h2>
              <p>
                Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt
                erstellt. Für die Richtigkeit und Vollständigkeit wird keine
                Gewähr übernommen. Externe Links werden nicht ausdrücklich
                befürwortet. Es gilt österreichisches Urheberrecht.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
