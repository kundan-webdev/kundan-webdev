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
  title: "Kundan Kumar — Full-Stack Developer & DevXClub Founder",
  description:
    "Final-year BCA student from Varanasi. Frontend Developer, MERN Stack, UI/UX Designer. Founder of DevXClub. Open to internships and junior roles.",
  keywords: [
    "Kundan Kumar", "DevXClub", "Frontend Developer",
    "MERN Stack", "Varanasi", "Next.js Developer",
    "UI/UX Designer", "Full Stack Developer",
  ],
  authors: [{ name: "Kundan Kumar", url: "https://kundan-webdev.vercel.app" }],
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
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = stored ? stored === 'dark' : prefersDark;
                  document.documentElement.classList.toggle('dark', isDark);
                } catch(e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-primary/30">
        <SmoothScrolling>
          <ScrollProgress />
          <LoadingScreen />

          {/* Grid — fixed background, z-0, fully interactive */}
          <GlobalGrid />

          {/* All content — z-10, sits above grid visually */}
          {/* NO pointer-events-none here — let everything work normally */}
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