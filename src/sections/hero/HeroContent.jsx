import Button from "../../components/ui/Button";
import Avatar from "../../components/micro/Avatar";
import Badge from "../../components/ui/Badge";

const HeroContent = () => {
  return (
    <div className="max-w-[1136px]">
      
      {/* MAIN HEADING */}
      <h1 className="text-[4rem] font-medium leading-[110%]  flex items-center gap-4">
        Hi, I’m
        <Avatar width={100} height={62} />
        Kundan Kumar!
      </h1>
      <p className="text-[4rem] font-medium  flex items-center leading-[110%]  gap-4">
        I’m a <span className="text-orange-600">Frontend Developer</span> with
      </p>

      <p className="text-[4rem] font-medium leading-[110%] flex items-baseline  gap-4">
        UI–UX Fundamentals <Badge  text="Open To Work"/>
      </p>

      {/* CTA + DESCRIPTION */}
      <div className="mt-16 flex items-center gap-6">
        <Button>Resume</Button>
        <Button>Contact</Button>

        <p className="max-w-[440px] text-xl text-white/70">
          Feel free to explore my portfolio and reach out —
          I’d love to connect!
        </p>
      </div>

    </div>
  );
};

export default HeroContent;
