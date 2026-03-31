import type { Metadata } from "next";

import AppShell from "@/components/common/AppShell";
import { ThemeProvider } from "@/components/common/ThemeProvider";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kundan-webdev.vercel.app"),
  title: {
    default: "Kundan - Full-Stack Developer",
    template: "%s | Kundan",
  },
  description:
    "Full-stack developer building production-ready products. Founder of DevXClub. MERN · Next.js · TypeScript.",
  keywords: [
    "Kundan",
    "Full Stack Developer",
    "Next.js",
    "React",
    "DevXClub",
    "Portfolio",
    "MERN",
    "TypeScript",
    "India",
    "Varanasi",
  ],
  authors: [{ name: "Kundan", url: "https://kundan-webdev.vercel.app" }],
  openGraph: {
    title: "Kundan - Full-Stack Developer",
    description: "Building production-ready products. Founder of DevXClub.",
    url: "https://kundan-webdev.vercel.app",
    siteName: "Kundan Portfolio",
    images: [{ url: "/assets/DPv2.png", width: 400, height: 400 }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kundan - Full-Stack Developer",
    description: "Building production-ready products. Founder of DevXClub.",
    images: ["/assets/DPv2.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
  },
  manifest: "/assets/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
