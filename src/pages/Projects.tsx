import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { Reflection } from "@/components/projects/Reflection";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const currentProject = projectsData.find((p) => p.id === selectedProject);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Dự án <span className="gradient-text">Học tập</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tổng hợp các bài tập và dự án trong môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
              </p>
            </div>
          </ScrollReveal>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projectsData.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project.id)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <Reflection />

      {/* Project Detail Modal */}
      {currentProject && (
        <ProjectDetail
          project={currentProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Layout>
  );
}
