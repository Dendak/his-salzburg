import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "HIS Salzburg – Höhere Schule im Spital",
    template: "%s | HIS Salzburg",
  },
  description:
    "Die Höhere Schule im Spital Salzburg ermöglicht kranken Schülerinnen und Schülern der 9.–13. Schulstufe den Unterricht im Krankenhaus.",
  keywords: [
    "HIS Salzburg",
    "Höhere Schule im Spital",
    "Schule für kranke Kinder",
    "Krankenhausschule",
    "Salzburg",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-800 antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
