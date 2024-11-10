import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Asharib Ali | Passionate Developer. Designer. Manager. 🤍",
  description:
    "🙌 I Build AI & Blockchain Stuffs | ❇️ 3+ years of Tech Experience | ✨ Building products with latest tech-stack | 🌱 Contributing open-source | 🤖 Learning Cloud Native Applied Generative AI | 🧑‍💻 Teaching programming to 1,500+ students on-site while managing a community of 30k+ students at GIAIC.",
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
  return (
    <html lang="en" className={inter.className}>
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
