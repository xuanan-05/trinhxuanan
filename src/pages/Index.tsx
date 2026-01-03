import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, BookOpen, FolderOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Digital Portfolio
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                Nhập môn{" "}
                <span className="gradient-text">Công nghệ số</span>
                <br />
                và Ứng dụng{" "}
                <span className="gradient-text">Trí tuệ nhân tạo</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Portfolio tổng hợp quá trình học tập, các bài tập và dự án trong suốt môn học. 
                Thể hiện sự tiến bộ và cam kết với liêm chính học thuật.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Xem dự án
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
                >
                  Về tôi
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              Nội dung <span className="gradient-text">Portfolio</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <ScrollReveal delay={100}>
              <Link
                to="/about"
                className="block bg-card rounded-2xl p-8 shadow-sm card-hover group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  Giới thiệu bản thân
                </h3>
                <p className="text-muted-foreground">
                  Thông tin cá nhân, mục tiêu học tập và định hướng phát triển kỹ năng số
                </p>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Link
                to="/projects"
                className="block bg-card rounded-2xl p-8 shadow-sm card-hover group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <FolderOpen className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  Dự án học tập
                </h3>
                <p className="text-muted-foreground">
                  6 bài tập từ các chương học với phân tích chi tiết và minh chứng học tập
                </p>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Link
                to="/conclusion"
                className="block bg-card rounded-2xl p-8 shadow-sm card-hover group"
              >
                <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <Award className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  Tổng kết
                </h3>
                <p className="text-muted-foreground">
                  Phản tư tổng hợp, bài học rút ra và cam kết liêm chính học thuật
                </p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="text-center p-6 rounded-2xl bg-card shadow-sm">
                <p className="text-4xl font-display font-bold gradient-text mb-2">6</p>
                <p className="text-sm text-muted-foreground">Bài tập</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center p-6 rounded-2xl bg-card shadow-sm">
                <p className="text-4xl font-display font-bold gradient-text mb-2">6</p>
                <p className="text-sm text-muted-foreground">Chương học</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="text-center p-6 rounded-2xl bg-card shadow-sm">
                <p className="text-4xl font-display font-bold gradient-text mb-2">∞</p>
                <p className="text-sm text-muted-foreground">Bài học</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="text-center p-6 rounded-2xl bg-card shadow-sm">
                <p className="text-4xl font-display font-bold gradient-text mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Liêm chính</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Sẵn sàng khám phá hành trình học tập?
              </h2>
              <p className="text-muted-foreground mb-8">
                Cùng tìm hiểu về các dự án và bài học từ môn Nhập môn Công nghệ số
              </p>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
              >
                Bắt đầu khám phá
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
