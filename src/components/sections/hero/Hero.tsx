import HeroContent from "./HeroContent";
import { InteractiveGridPattern } from "@/components/ui/InteractiveGridPattern";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Interactive grid background */}
      <InteractiveGridPattern
        squares={[40, 18]}
        width={50}
        height={50}
        className="opacity-60 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"
      />
      {/* Hero content sits on top */}
      <div className="relative z-10 container-content">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
