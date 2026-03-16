import ProjectCard from "@/components/ui/ProjectCard";
import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectLink {
  live?: string;
  postman?: string;
  github?: string;
}

interface Project {
  id: string | number;
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  tags?: string[];
  links?: ProjectLink;
  type?: string;
  image?: string | null;
}

const BackendCard = ({ project }: { project: Project }) => {
  return (
    <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col h-full min-h-[300px] hover:bg-white/10 transition-colors w-full cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <Badge text={project.badge} />
      </div>
      <p className="text-sm text-white/50 mb-4 font-medium">{project.subtitle}</p>
      <p className="text-white/70 text-sm mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags?.map((tag: string, i: number) => (
          <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded text-white/80">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm mt-auto border-t border-white/10 pt-4">
        <a href={project.links?.live} className="text-orange-500 hover:text-orange-400 font-medium hover:underline transition-all">Live API</a>
        <a href={project.links?.postman} className="text-orange-500 hover:text-orange-400 font-medium hover:underline transition-all">Postman Docs</a>
        <a href={project.links?.github} className="text-orange-500 hover:text-orange-400 font-medium hover:underline transition-all">GitHub</a>
      </div>
    </div>
  );
};

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, index) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="h-full flex flex-col group cursor-pointer"
        >
          <Link href={`/projects/${p.id}`} className="flex-1 h-full w-full block hover:scale-[1.02] transition-transform duration-300">
          {p.type === "Backend" ? (
            <BackendCard project={p} />
          ) : (
            <ProjectCard
              image={p.image as string}
              title={p.title}
              subtitle={p.subtitle as string}
            />
          )}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;
