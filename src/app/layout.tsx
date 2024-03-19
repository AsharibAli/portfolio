import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Asharib Ali | Passionate Developer. Designer. Manager. 🖤",
  description:
    "🙌 I help you to learn & earn through cutting-edge technologies | ❇️ 3+ years of Tech Experience | ✨ Building products with latest tech-stack | Blockchain and AI ⚡ | Talk about state-of-the-art🚀 | Contributing open-source 🌱",
};

// If loading a variable font, you don't need to specify the font weight
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
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
