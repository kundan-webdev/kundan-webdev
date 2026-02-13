import Heading from "../../components/ui/Heading";
import ExperienceItem from "./ExperienceItem";
import { experience } from "../../data/experience";

const Experience = () => {
  return (
    <section className="container-content">
      <Heading title="Experience" />
      {experience.map((item) => (
        <ExperienceItem key={item.id} {...item} />
      ))}
    </section>
  );
};

export default Experience;
