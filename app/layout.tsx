import type { Metadata } from "next";
import { Anton, Geist } from "next/font/google";
import "./globals.css";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Geist({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Thanakorn — Digital Developer",
  description:
    "Thanakorn Thongpraiwan — a developer building thoughtful web apps, mobile experiences, and interactive worlds.",
  keywords: [
    "Thanakorn Thongpraiwan",
    "developer",
    "portfolio",
    "Next.js",
    "React Native",
    "Thailand",
  ],
  openGraph: {
    title: "Thanakorn — Digital Developer",
    description:
      "An interactive developer portfolio of web, mobile, and data projects.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Thanakorn — Digital Developer",
    description:
      "An interactive developer portfolio of web, mobile, and data projects.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
