import { Project } from "@/data/projects";
import { ChevronRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-card rounded-2xl p-6 shadow-sm card-hover group border border-border hover:border-primary/50 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <span
          className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10`}
        >
          {project.icon}
        </span>
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
          {project.chapter}
        </span>
      </div>

      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
        {project.summary}
      </p>

      <div className="flex items-center text-sm font-medium text-primary">
        Xem chi tiết
        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
}
