import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden"
      id="home"
    >
      <div className="bg-soft-gradient absolute left-[8%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full opacity-10 blur-[100px] sm:h-72 sm:w-72" />
      <div className="bg-soft-gradient absolute right-[10%] top-20 hidden h-64 w-64 rounded-full opacity-10 blur-[120px] lg:block" />
      <div className="relative z-10 w-full">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
