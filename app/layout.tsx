import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Thanakorn Thongpraiwan — Developer Portfolio",
  description:
    "Thanakorn's personal digital playground — web, mobile, and data projects built while learning with code.",
  keywords: [
    "Thanakorn Thongpraiwan",
    "developer",
    "portfolio",
    "Next.js",
    "React Native",
    "Thailand",
  ],
  openGraph: {
    title: "Thanakorn — Personal Digital Playground",
    description:
      "Web, mobile, and data projects by Thanakorn Thongpraiwan.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Thanakorn — Personal Digital Playground",
    description:
      "Web, mobile, and data projects by Thanakorn Thongpraiwan.",
  },
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
