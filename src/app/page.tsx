import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import RecentWork from "@/components/sections/recent-work/RecentWork";
import Activity from "@/components/sections/activity/Activity";
import Experience from "@/components/sections/experience/Experience";
import Certificates from "@/components/sections/certificates/Certificates";
import Skills from "@/components/sections/skills/Skills";
import FounderBanner from "@/components/sections/experience/FounderBanner";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import BuildInPublic from "@/components/sections/building-in-public/BuildInPublic";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-28 overflow-x-hidden bg-[#080808]">
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