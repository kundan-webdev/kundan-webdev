import Card from "../../components/ui/Card";


const ProjectGrid = ({ projects }) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {projects.map((p) => (
        <Card key={p.id}>
          
          {/* IMAGE */}
          <div className="relative h-[260px]">
            <img
              src={p.image}
              alt={p.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* INFO PANEL */}
          <div className="bg-neutral-200 text-black p-6 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold leading-tight">
                {p.title}
              </h3>
              <p className="text-sm text-black/60">
                {p.type}
              </p>
            </div>

          
          </div>

        </Card>
      ))}
    </div>
  );
};

export default ProjectGrid;
