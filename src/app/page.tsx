import dynamic from "next/dynamic";

import Hero from "@/components/sections/hero/Hero";

const About = dynamic(() => import("@/components/sections/about/About"));
const Skills = dynamic(() => import("@/components/sections/skills/Skills"));
const RecentWork = dynamic(() => import("@/components/sections/recent-work/RecentWork"));
const FounderBanner = dynamic(() => import("@/components/sections/experience/FounderBanner"));
const Experience = dynamic(() => import("@/components/sections/experience/Experience"));
const Activity = dynamic(() => import("@/components/sections/activity/Activity"));
const BuildInPublic = dynamic(
  () => import("@/components/sections/building-in-public/BuildInPublic"),
);
const Certificates = dynamic(
  () => import("@/components/sections/certificates/Certificates"),
);
const Testimonials = dynamic(
  () => import("@/components/sections/testimonials/Testimonials"),
);
const Contact = dynamic(() => import("@/components/sections/contact/Contact"));
const Footer = dynamic(() => import("@/components/common/Footer"));

export default function Home() {
  return (
    <div className="min-h-screen bg-background pt-16 text-foreground">
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <RecentWork />
        <FounderBanner />
        <Experience />
        <Activity />
        <BuildInPublic />
        <Certificates />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

