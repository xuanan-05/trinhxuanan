import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { User, Target, BookOpen, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Giới thiệu <span className="gradient-text">Bản thân</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Chào mừng bạn đến với portfolio của tôi - nơi tôi chia sẻ hành trình học tập và phát triển kỹ năng số
              </p>
            </div>
          </ScrollReveal>

          {/* Avatar Placeholder */}
          <ScrollReveal delay={100}>
            <div className="flex justify-center mb-12">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full gradient-bg p-1">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <User className="w-20 h-20 text-muted-foreground" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Personal Info */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 shadow-sm card-hover">
                <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                  <User className="w-6 h-6 text-primary" />
                  Thông tin cá nhân
                </h2>
                <div className="space-y-4 text-foreground">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Họ và tên</p>
                      <p className="font-medium text-primary">Trịnh Xuân An</p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Mã sinh viên</p>
                      <p className="font-medium">25050027</p>
                    </div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Khoa</p>
                    <p className="font-medium">Khoa Kinh Tế Chính Trị</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Trường</p>
                    <p className="font-medium">Trường Đại Học Kinh Tế - Đại Học Quốc Gia Hà Nội</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Sở thích</p>
                    <ul className="space-y-2 font-medium">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Khám phá cách tìm kiếm và chọn lọc thông tin học thuật trên Internet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Xây dựng và cá nhân hóa website/portfolio cá nhân</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Ứng dụng công nghệ số để quản lý thời gian và công việc hiệu quả hơn</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Learning Goals */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 shadow-sm card-hover">
                <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" />
                  Mục tiêu học tập
                </h2>
                <div className="prose prose-lg max-w-none text-foreground">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-accent mt-1 shrink-0" />
                      <span>Phát triển kỹ năng số để thích ứng với thời đại công nghệ 4.0 và nhu cầu của thị trường lao động</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-accent mt-1 shrink-0" />
                      <span>Chủ động tiếp cận và ứng dụng AI như ChatGPT để hỗ trợ học tập và nghiên cứu một cách có trách nhiệm</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-accent mt-1 shrink-0" />
                      <span>Rèn luyện tư duy phản biện, khả năng đánh giá thông tin và giải quyết vấn đề sáng tạo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-accent mt-1 shrink-0" />
                      <span>Xây dựng thói quen học tập suốt đời và cập nhật kiến thức công nghệ liên tục</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-accent mt-1 shrink-0" />
                      <span>Đạt điểm Xuất sắc (8.1-10) trong môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Portfolio Goals */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 shadow-sm card-hover">
                <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Mục tiêu Portfolio
                </h2>
                <div className="space-y-4 text-foreground">
                  <p className="text-muted-foreground leading-relaxed">
                    Portfolio này được tạo ra với những mục đích sau:
                  </p>
                  <div className="grid gap-4 mt-6">
                    <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                      <h3 className="font-semibold text-primary mb-2">📚 Tổng hợp quá trình học tập</h3>
                      <p className="text-sm text-muted-foreground">
                        Ghi lại toàn bộ hành trình học tập qua các bài tập và dự án của môn học
                      </p>
                    </div>
                    <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                      <h3 className="font-semibold text-primary mb-2">💾 Lưu trữ sản phẩm học tập</h3>
                      <p className="text-sm text-muted-foreground">
                        Xây dựng kho lưu trữ các minh chứng và sản phẩm đã hoàn thành
                      </p>
                    </div>
                    <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                      <h3 className="font-semibold text-primary mb-2">📈 Thể hiện sự tiến bộ</h3>
                      <p className="text-sm text-muted-foreground">
                        Minh họa rõ ràng sự phát triển và tiến bộ qua từng bài học
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Personal Message */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-xl md:text-2xl font-display italic text-muted-foreground">
                "Học không chỉ để biết, mà học để làm được. Công nghệ là công cụ, nhưng tư duy mới là chìa khóa."
              </blockquote>
              <p className="mt-4 text-primary font-medium">— Trịnh Xuân An</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
