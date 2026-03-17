import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import CommandPalette from "@/components/common/CommandPalette";
import LoadingScreen from "@/components/common/LoadingScreen";
import SmoothScrolling from "@/components/common/SmoothScrolling";
import ScrollProgress from "@/components/common/ScrollProgress";
import { GlobalGrid } from "@/components/common/GlobalGrid";

export const metadata: Metadata = {
  metadataBase: new URL("https://kundan-webdev.vercel.app"),
  title: {
    default: "Kundan Kumar — Full-Stack Developer & DevXClub Founder",
    template: "%s | Kundan Kumar",
  },
  description:
    "Final-year BCA student from Varanasi. Frontend Developer, MERN Stack, UI/UX Designer. Founder of DevXClub. Open to internships and junior roles.",
  keywords: [
    "Kundan Kumar", "DevXClub", "Frontend Developer",
    "MERN Stack", "Varanasi", "Next.js Developer",
    "UI/UX Designer", "Full Stack Developer",
  ],
  authors: [{ name: "Kundan Kumar", url: "https://kundan-webdev.vercel.app" }],
  creator: "Kundan Kumar",
  openGraph: {
    title: "Kundan Kumar — Full-Stack Developer & DevXClub Founder",
    description: "Building real products. Founder of DevXClub.",
    url: "https://kundan-webdev.vercel.app",
    siteName: "Kundan Kumar Portfolio",
    images: [{ url: "/assets/DPv2.png", width: 800, height: 800, alt: "Kundan Kumar" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kundan Kumar — Full-Stack Developer",
    description: "Building real products. Founder of DevXClub.",
    creator: "@kundan_webdev",
    images: ["/assets/DPv2.png"],
  },
  icons: {
    icon: [
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon.ico" },
    ],
    apple: "/assets/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/assets/site.webmanifest" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans antialiased bg-[#080808] text-white selection:bg-orange-500/20"
        suppressHydrationWarning
      >
        <SmoothScrolling>
          <ScrollProgress />
          <LoadingScreen />
          <GlobalGrid />
          <div className="relative z-10">
            <Navbar />
            <CommandPalette />
            {children}
          </div>
        </SmoothScrolling>
      </body>
    </html>
  );
}