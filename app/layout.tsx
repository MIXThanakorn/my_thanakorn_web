import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Thanakorn Thongpraiwan — Developer Portfolio",
  description:
    "Portfolio of Thanakorn Thongpraiwan, a Computer Science student and junior developer building web, mobile, and data-driven products.",
  keywords: [
    "Thanakorn Thongpraiwan",
    "developer",
    "portfolio",
    "Next.js",
    "React Native",
    "Thailand",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
