import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { siteConfig } from "../lib/site-config";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline} à Angoulins`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "accompagnement du quotidien Angoulins",
    "aide administrative senior La Rochelle",
    "accompagnatrice du quotidien Charente-Maritime",
    "charge mentale famille La Rochelle",
    "services de proximité Angoulins",
    "seniors autonomes La Rochelle",
    "aide aux familles Angoulins",
    "Anne-Sophie Deschamps",
    "Anne-Sophie & Vous",
  ],
  authors: [{ name: "Anne-Sophie Deschamps" }],
  creator: "Anne-Sophie & Vous",
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo-anne-sophie.png",
        width: 1200,
        height: 630,
        alt: "Anne-Sophie & Vous - Votre alliée du quotidien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/logo-anne-sophie.png"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/logo-anne-sophie.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Angoulins",
      addressRegion: "Nouvelle-Aquitaine",
      addressCountry: "FR",
    },
    areaServed: siteConfig.areaServed.map((city) => ({
      "@type": "Place",
      name: city,
    })),
    founder: {
      "@type": "Person",
      name: "Anne-Sophie Deschamps",
    },
    slogan: siteConfig.slogan,
    priceRange: "€€",
    sameAs: [],
  };

  return (
    <html lang="fr" className={`${montserrat.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}