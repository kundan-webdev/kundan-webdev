import { InteractiveGridPattern } from "@/components/ui/InteractiveGridPattern";

import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden" id="home">
      <InteractiveGridPattern
        squares={[40, 20]}
        width={50}
        height={50}
        className="absolute inset-0 h-full w-full opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,black_30%,transparent_100%)]"
      />
      <div className="relative z-10 w-full">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;

