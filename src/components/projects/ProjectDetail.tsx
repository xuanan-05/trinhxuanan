import { Project } from "@/data/projects";
import { X, Target, ListChecks, Image, BarChart3, Bot, CheckCircle } from "lucide-react";
import { useEffect } from "react";

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl mx-4 my-8 bg-card rounded-2xl shadow-xl animate-scale-in">
        {/* Header */}
        <div
          className={`sticky top-0 z-10 bg-gradient-to-r ${project.color} p-6 rounded-t-2xl`}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <span className="text-5xl">{project.icon}</span>
            <div className="text-white">
              <span className="text-sm font-medium opacity-90">
                {project.chapter}
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Summary */}
          <section className="bg-muted/50 rounded-xl p-5">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              📋 Tóm tắt nhanh
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.summary}
            </p>
          </section>

          {/* Objectives */}
          <section>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Mục tiêu bài tập
            </h3>
            <ul className="space-y-3">
              {project.objectives.map((objective, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Process */}
          <section>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-primary" />
              Quy trình thực hiện
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Các bước thực hiện:</h4>
                <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
                  {project.process.steps.map((step, index) => (
                    <li key={index} className="pl-2">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h4 className="font-medium mb-2">Công cụ sử dụng:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.process.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Evidence */}
          <section>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Image className="w-5 h-5 text-primary" />
              Minh chứng học tập
            </h3>
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-muted/30">
              <p className="text-muted-foreground mb-2">
                {project.evidence.description}
              </p>
              <p className="text-sm text-primary font-medium">
                {project.evidence.placeholder}
              </p>
            </div>
          </section>

          {/* Analysis */}
          <section>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Phân tích - Đánh giá
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-500/10 rounded-xl p-4">
                <h4 className="font-medium text-green-600 dark:text-green-400 mb-3">
                  ✅ Điểm tốt
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.analysis.strengths.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-500/10 rounded-xl p-4">
                <h4 className="font-medium text-orange-600 dark:text-orange-400 mb-3">
                  🔧 Cần cải thiện
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.analysis.improvements.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-500/10 rounded-xl p-4">
                <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-3">
                  💡 Bài học rút ra
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.analysis.lessons.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* AI Usage */}
          <section className="bg-muted/50 rounded-xl p-5">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              Liêm chính học thuật & Sử dụng AI
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Cách tôi sử dụng AI:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {project.aiUsage.usage.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Cam kết liêm chính:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {project.aiUsage.integrity.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
