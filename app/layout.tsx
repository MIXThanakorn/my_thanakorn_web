import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Thanakorn's Digital World — Developer Portfolio",
  description:
    "Enter Thanakorn's digital world — an interactive developer portfolio of web, mobile, and data projects.",
  keywords: [
    "Thanakorn Thongpraiwan",
    "developer",
    "portfolio",
    "Next.js",
    "React Native",
    "Thailand",
  ],
  openGraph: {
    title: "Thanakorn's Digital World",
    description:
      "An interactive developer portfolio of web, mobile, and data projects.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Thanakorn's Digital World",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
