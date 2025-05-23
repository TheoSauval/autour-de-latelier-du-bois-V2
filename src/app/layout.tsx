import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Autour de l'atelier du bois",
  description: "Créations artisanales en bois, tournage, objets uniques et sur-mesure.",
  openGraph: {
    title: "Autour de l'atelier du bois",
    description: "Créations artisanales en bois, tournage, objets uniques et sur-mesure.",
    url: "https://ton-domaine.fr",
    siteName: "Autour de l'atelier du bois",
    images: [
      {
        url: "/PHOTO_BOIS/banner.webp",
        width: 1200,
        height: 630,
        alt: "Bannière atelier du bois",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autour de l'atelier du bois",
    description: "Créations artisanales en bois, tournage, objets uniques et sur-mesure.",
    images: ["/PHOTO_BOIS/banner.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <title>Autour de l&apos;atelier du bois</title>
        <meta name="description" content="Créations artisanales en bois, tournage, objets uniques et sur-mesure." />
        <meta name="keywords" content="bois, artisanat, tournage, objets, sur-mesure, atelier" />
        <meta name="author" content="Herent Aleksandre" />
        <meta property="og:title" content="Autour de l'atelier du bois" />
        <meta property="og:description" content="Créations artisanales en bois, tournage, objets uniques et sur-mesure." />
        <meta property="og:image" content="/PHOTO_BOIS/banner.webp" />
        <meta property="og:url" content="https://ton-domaine.fr" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Autour de l'atelier du bois" />
        <meta name="twitter:description" content="Créations artisanales en bois, tournage, objets uniques et sur-mesure." />
        <meta name="twitter:image" content="/PHOTO_BOIS/banner.webp" />
        <link rel="canonical" href="https://ton-domaine.fr" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
