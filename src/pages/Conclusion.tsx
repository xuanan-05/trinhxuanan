import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Award, BookOpen, Mountain, Heart, CheckCircle } from "lucide-react";

export default function Conclusion() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Tổng kết <span className="gradient-text">Hành trình</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nhìn lại quá trình học tập và những điều đã đạt được trong môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 shadow-sm card-hover">
                <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Trải nghiệm làm Portfolio
                </h2>
                <div className="prose max-w-none text-muted-foreground">
                  <p className="leading-relaxed">
                    [Viết về trải nghiệm của bạn khi làm Portfolio này. Ví dụ:]
                  </p>
                  <p className="leading-relaxed mt-4">
                    Việc xây dựng Digital Portfolio này là một hành trình đầy ý nghĩa đối với tôi. 
                    Ban đầu, tôi cảm thấy bối rối về cách tổ chức và trình bày các bài tập một cách 
                    chuyên nghiệp. Tuy nhiên, qua quá trình thực hiện, tôi nhận ra rằng Portfolio 
                    không chỉ là nơi lưu trữ bài tập mà còn là cơ hội để nhìn lại và đánh giá 
                    bản thân một cách toàn diện.
                  </p>
                  <p className="leading-relaxed mt-4 text-primary font-medium">
                    [Hãy viết lại đoạn này bằng trải nghiệm thực tế của bạn]
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 shadow-sm card-hover">
                <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  Kiến thức và kỹ năng quan trọng nhất
                </h2>
                <div className="space-y-4">
                  <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                    <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Kỹ năng số cơ bản
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      [Viết về kỹ năng số quan trọng nhất bạn đã học được - ví dụ: tìm kiếm thông tin, 
                      đánh giá nguồn, sử dụng công cụ số...]
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                    <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Hiểu biết về AI
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      [Viết về những gì bạn đã học được về AI - nguyên lý hoạt động, ứng dụng, 
                      cách sử dụng có trách nhiệm...]
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                    <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Liêm chính học thuật
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      [Viết về tầm quan trọng của liêm chính học thuật và cách bạn áp dụng 
                      trong học tập...]
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                    <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Làm việc nhóm và giao tiếp số
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      [Viết về kỹ năng giao tiếp và hợp tác trong môi trường số bạn đã 
                      phát triển...]
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 shadow-sm card-hover">
                <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                  <Mountain className="w-6 h-6 text-primary" />
                  Khó khăn và cách vượt qua
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Khó khăn gặp phải:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        <span>[Viết khó khăn 1 - ví dụ: Quản lý thời gian giữa nhiều bài tập]</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        <span>[Viết khó khăn 2 - ví dụ: Làm quen với các công cụ mới]</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        <span>[Viết khó khăn 3 - ví dụ: Phân biệt thông tin đáng tin cậy]</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cách tôi vượt qua:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        <span>[Viết cách bạn vượt qua - ví dụ: Lập kế hoạch chi tiết và ưu tiên công việc]</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        <span>[Ví dụ: Dành thời gian học hướng dẫn và thực hành từng bước]</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        <span>[Ví dụ: Áp dụng tiêu chí đánh giá nguồn đã học trong chương 2]</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pride */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-display font-semibold mb-6 flex items-center gap-3">
                  <Heart className="w-6 h-6" />
                  Điều tôi tự hào nhất
                </h2>
                <div className="space-y-4">
                  <p className="leading-relaxed opacity-95">
                    [Viết về điều bạn tự hào nhất trong Portfolio này. Ví dụ:]
                  </p>
                  <p className="leading-relaxed text-lg">
                    Điều tôi tự hào nhất là sự tiến bộ của bản thân từ khi bắt đầu đến khi 
                    hoàn thành môn học. Từ một sinh viên chưa biết nhiều về công nghệ số, 
                    giờ đây tôi đã có thể tự tin sử dụng các công cụ số, hiểu về AI và 
                    quan trọng nhất là biết cách học tập có trách nhiệm.
                  </p>
                  <p className="text-sm opacity-80 mt-4">
                    [Hãy viết lại đoạn này bằng cảm nhận thực tế của bạn]
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <h2 className="text-xl font-display font-semibold mb-4">
                  🔒 Cam kết Liêm chính Học thuật
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Portfolio này được xây dựng với mục tiêu học tập nghiêm túc. 
                  Mọi nội dung đều do tôi tự nghiên cứu, thực hiện và viết bằng ngôn ngữ của mình. 
                  AI được sử dụng như công cụ hỗ trợ, không thay thế việc suy nghĩ và học tập của bản thân. 
                  Tôi cam kết tuân thủ liêm chính học thuật trong suốt quá trình học tập.
                </p>
                <p className="mt-6 text-primary font-semibold">
                  — [Họ và tên của bạn]
                </p>
                <p className="text-sm text-muted-foreground">
                  Sinh viên môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
