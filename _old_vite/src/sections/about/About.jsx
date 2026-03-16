import Button from "../../components/ui/Button";
import Heading from "../../components/ui/Heading";


const About = () => {
  return (
    <section className="container-content ">
      <Heading title="" />
      <div className="flex justify-between">
        <p className="text-white text-[36px] max-w-[713px]">
          Skilled in HTML, CSS, SCSS, JavaScript, React, Tailwind, and GSAP,
          with a strong focus on UI/UX and Figma-based design. Currently
          exploring MERN back-end development and contributing to collaborative
          front-end projects.
        </p>

        <div className="">
          <p className="max-w-[251px] pb-20">
          I’m a second-year BCA student with a strong interest in web
          development and building digital communities.{" "}
        </p>

         <Button className="px-[39px] py-[64px] ">About Us</Button>


        </div>
      </div>
      
    </section>
  );
};

export default About;
