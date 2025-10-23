import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Asharib Ali | AI & Blockchain Developer, Tech Educator",
    template: "%s | Asharib Ali",
  },
  description:
    "Asharib Ali - CTO at EduHub, AI & Blockchain Developer, and Lead Teacher at GIAIC. Teaching 1,500+ students Cloud Native & Agentic AI. 3+ years of tech experience with 100+ projects, 7 hackathon wins, and managing 30k+ tech community.",

  openGraph: {
    title: "Asharib Ali | AI & Blockchain Developer, Tech Educator",
    description:
      "CTO at EduHub building Vibe Tooling for EduChain. Teaching 1,500+ students Agentic AI at GIAIC. 3+ years experience in AI, Blockchain & Full-Stack Development. 7x Hackathon Winner.",
    url: "https://asharib.xyz",
    siteName: "Asharib Ali Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Asharib Ali - AI & Blockchain Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "profile",
    countryName: "Pakistan",
  },

  twitter: {
    card: "summary_large_image",
    title: "Asharib Ali | AI & Blockchain Developer, Tech Educator",
    description:
      "CTO at EduHub building Vibe Tooling for EduChain. Teaching 1,500+ students Agentic AI at GIAIC. 3+ years experience in AI, Blockchain & Full-Stack Development. 7x Hackathon Winner.",
    images: ["/og.png"],
    creator: "@0xAsharib",
    site: "@0xAsharib",
  },

  metadataBase: new URL("https://asharib.xyz"),
  alternates: {
    canonical: "https://asharib.xyz",
    types: {
      "application/json": "/api/profile",
    },
  },

  manifest: "/manifest.json",

  icons: {
    icon: "/og.png",
    shortcut: "/og.png",
    apple: "/og.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/og.png",
    },
  },

  keywords: [
    "Asharib Ali",
    "AI Engineer",
    "Blockchain Developer",
    "Full Stack Developer",
    "Agentic AI",
    "Cloud Native",
    "EduHub CTO",
    "EduChain",
    "GIAIC Teacher",
    "Tech Educator Pakistan",
    "AI Education",
    "Blockchain Education",
    "Web3 Developer",
    "Solidity Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Python Developer",
    "Tech Community Manager",
    "Programming Instructor",
    "Open Source Contributor",
    "Hackathon Winner",
    "GIAIC",
    "PIAIC",
    "Panaverse",
  ],
  authors: [{ name: "Asharib Ali", url: "https://asharib.xyz" }],
  creator: "Asharib Ali",
  publisher: "Asharib Ali",
  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "1v-RJKSxgBsm7IcEXZVifYF0BCCKx9TjXOYQFKNDdOg",
  },

  other: {
    "pinterest-media": "/og.png",
    "pinterest-description":
      "CTO at EduHub building Vibe Tooling for EduChain. Teaching 1,500+ students Agentic AI at GIAIC. 3+ years experience in AI, Blockchain & Full-Stack Development.",

    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Asharib Ali",

    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/og.png",

    "theme-color": "#000000",
    "msapplication-navbutton-color": "#000000",

    "mobile-web-app-capable": "yes",
    "application-name": "Asharib Ali Portfolio",
    "format-detection": "telephone=no",
  },
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Asharib Ali",
    url: "https://asharib.xyz",
    image: "https://avatars.githubusercontent.com/u/102221198?v=4",
    sameAs: [
      "https://github.com/AsharibAli",
      "https://www.linkedin.com/in/asharibali/",
      "https://x.com/0xAsharib",
      "https://asharibali.medium.com/",
      "https://www.youtube.com/@0xAsharib",
    ],
    jobTitle: "Chief Technology Officer",
    worksFor: {
      "@type": "Organization",
      name: "EduHub",
      url: "https://eduhub.dev/",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "PIAIC",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Blockchain Technology",
      "Full Stack Development",
      "Cloud Native Development",
      "Agentic AI",
      "Web3",
      "Solidity",
      "TypeScript",
      "Python",
      "React",
      "Next.js",
    ],
    description:
      "CTO at EduHub, AI & Blockchain Developer, and Lead Teacher at GIAIC. Teaching 1,500+ students Cloud Native & Agentic AI with 3+ years of tech experience.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Pakistan",
    },
    email: "contact@asharib.xyz",
  };

  return (
    <html lang="en" className={inter.className}>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8CXGRC7T09"
      ></Script>
      <Script id="google-analytics">
        {`
   window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8CXGRC7T09');
  `}
      </Script>
      <body>{children}</body>
    </html>
  );
}
