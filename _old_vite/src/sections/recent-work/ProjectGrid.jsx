import Card from "../../components/ui/Card";

const ProjectGrid = ({ projects }) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {projects.map((p) => (
        <Card
          key={p.id}
          image={p.image}
          title={p.title}
          subtitle={p.subtitle}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
