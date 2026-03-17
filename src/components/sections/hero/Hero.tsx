import HeroContent from "./HeroContent";
import { InteractiveGridPattern } from "@/components/ui/InteractiveGridPattern";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Interactive grid — fills entire section */}
      <InteractiveGridPattern
        squares={[40, 20]}
        width={50}
        height={50}
        className="absolute inset-0 w-full h-full opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,black_30%,transparent_100%)]"
      />
      {/* Content */}
      <div className="relative z-10 container-content py-0">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;