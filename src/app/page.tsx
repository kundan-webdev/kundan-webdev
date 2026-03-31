import dynamic from "next/dynamic";

import { Divider } from "@/components/atoms";
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
const Contact = dynamic(() => import("@/components/sections/contact/Contact"));
const Footer = dynamic(() => import("@/components/common/Footer"));

const sectionDividerClassName = "mx-auto -my-3 max-w-[1136px] px-4 sm:px-6 lg:px-0";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="flex-1">
        <Hero />
        <Divider className={sectionDividerClassName} />
        <About />
        <Divider className={sectionDividerClassName} />
        <Skills />
        <Divider className={sectionDividerClassName} />
        <RecentWork />
        <Divider className={sectionDividerClassName} />
        <FounderBanner />
        <Divider className={sectionDividerClassName} />
        <Experience />
        <Divider className={sectionDividerClassName} />
        <Activity />
        <Divider className={sectionDividerClassName} />
        <BuildInPublic />
        <Divider className={sectionDividerClassName} />
        <Certificates />
        <Divider className={sectionDividerClassName} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
