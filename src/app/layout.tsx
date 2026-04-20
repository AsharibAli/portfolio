import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";

import "./globals.css";
import React from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Asharib Ali | AI & Cloud-Native Developer, Tech Educator",
    template: "%s | Asharib Ali",
  },
  description:
    "I build AI and cloud-native systems, then turn that experience into practical teaching. I currently teach 1,500+ on-site students in Cloud Native and Agentic AI, support a 30k+ tech community at GIAIC, and serve as Founder & CTO at EduHub and Co-Founder & CTO at Safock.",

  openGraph: {
    title: "Asharib Ali | AI & Cloud-Native Developer, Tech Educator",
    description:
      "I build AI and cloud-native systems, then turn that experience into practical teaching. I currently teach 1,500+ on-site students in Cloud Native and Agentic AI, support a 30k+ tech community at GIAIC, and serve as Founder & CTO at EduHub and Co-Founder & CTO at Safock.",
    url: "https://asharib.xyz",
    siteName: "Asharib Ali Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Asharib Ali - AI & Cloud-Native Developer, Tech Educator",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "profile",
    countryName: "Pakistan",
  },

  twitter: {
    card: "summary_large_image",
    title: "Asharib Ali | AI & Cloud-Native Developer, Tech Educator",
    description:
      "I build AI and cloud-native systems, then turn that experience into practical teaching. I currently teach 1,500+ on-site students in Cloud Native and Agentic AI, support a 30k+ tech community at GIAIC, and serve as Founder & CTO at EduHub and Co-Founder & CTO at Safock.",
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
      "I build AI and cloud-native systems, then turn that experience into practical teaching. I currently teach 1,500+ on-site students in Cloud Native and Agentic AI, support a 30k+ tech community at GIAIC, and serve as Founder & CTO at EduHub and Co-Founder & CTO at Safock.",

    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Asharib Ali",

    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/og.png",

    "theme-color": "#000000",
    "msapplication-navbutton-color": "#000000",

    "mobile-web-app-capable": "yes",
    "application-name": "Asharib Ali - AI & Cloud-Native Developer, Tech Educator",
    "format-detection": "telephone=no",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f3ef" },
    { media: "(prefers-color-scheme: dark)", color: "#171311" },
  ],
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
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
    jobTitle: "Founder & CTO at EduHub, Co-Founder & CTO at Safock",
    worksFor: {
      "@type": "Company",
      name: "EduHub",
      url: "https://eduhub.dev/",
    },
    worksFor2: {
      "@type": "Company",
      name: "Safock",
      url: "https://safock.com/",
    },
    alumniOf: [
      {
        "@type": "Educational Organization",
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
      "I build AI and cloud-native systems, then turn that experience into practical teaching. I currently teach 1,500+ on-site students in Cloud Native and Agentic AI, support a 30k+ tech community at GIAIC, and serve as Founder & CTO at EduHub and Co-Founder & CTO at Safock.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Pakistan",
    },
    email: "contact@asharib.xyz",
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
            const savedTheme = localStorage.getItem("theme-preference");
            const nextTheme = savedTheme === "light" || savedTheme === "dark"
              ? savedTheme
              : "dark";
            document.documentElement.setAttribute("data-theme", nextTheme);
          })();`}
        </Script>
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
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
