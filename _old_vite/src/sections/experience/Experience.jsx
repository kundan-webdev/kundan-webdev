// src/sections/experience/Experience.jsx

import Heading from "../../components/ui/Heading";
import ExperienceItem from "./ExperienceItem";
import { experience } from "../../data/experience";

const Experience = () => {
  return (
    <section className="container-content py-20">
      <Heading title="Experience" />
      
      <p className="text-neutral-400 mt-4 mb-12 max-w-xl text-lg">
        My professional journey and the amazing teams I've worked with.
      </p>

      <div className="relative">
        {experience.map((item) => (
          <ExperienceItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;