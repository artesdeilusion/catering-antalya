import type { Metadata } from "next";
import { DM_Serif_Display, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import ReturnToTopButton from "@/components/ReturnToTopButton";

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Likya Catering - Premium Catering Services",
    template: "%s | Likya Catering"
  },
  description: "Likya Catering offers professional catering services for corporate events, weddings, private celebrations, and special occasions. Quality food, exceptional service, memorable experiences.",
  keywords: ["catering", "wedding catering", "corporate catering", "private events", "food service", "event catering", "likya catering", "professional catering"],
  authors: [{ name: "Likya Catering" }],
  creator: "Likya Catering",
  publisher: "Likya Catering",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://likyacatering.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Likya Catering - Premium Catering Services",
    description: "Professional catering services for corporate events, weddings, and private celebrations. Quality food, exceptional service, memorable experiences.",
    url: 'https://likyacatering.com',
    siteName: 'Likya Catering',
    images: [
      {
        url: '/catering_services/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Likya Catering Logo',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Likya Catering - Premium Catering Services",
    description: "Professional catering services for corporate events, weddings, and private celebrations.",
    images: ['/catering_services/logo.svg'],
    creator: '@likyacatering',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Likya Catering",
    "description": "Professional catering services for corporate events, weddings, and private celebrations.",
    "url": "https://likyacatering.com",
    "logo": "https://likyacatering.com/catering_services/logo.svg",
    "image": "https://likyacatering.com/catering_services/logo.svg",
    "servesCuisine": ["Turkish", "International"],
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Turkish", "English"]
    },
    "sameAs": [
      "https://www.instagram.com/likyacatering",
      "https://www.facebook.com/likyacatering"
    ]
  };

  return (
    <html lang="tr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${dmSerifDisplay.variable} ${workSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsAppButton />
        <ReturnToTopButton />
      </body>
    </html>
  );
}
