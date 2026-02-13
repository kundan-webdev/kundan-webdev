import Heading from "../../components/ui/Heading";
import ProjectGrid from "./ProjectGrid";
import { projects } from "../../data/projects";

const RecentWork = () => {
  return (
    <section className="container-content ">
      <Heading title="Recent Work" />
      <ProjectGrid projects={projects} />
    </section>
  );
};

export default RecentWork;
