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
                    Việc xây dựng Digital Portfolio này là một trải nghiệm hoàn toàn mới mẻ và thú vị đối với tôi. 
                    Lần đầu tiên, tôi được tự tay thiết kế và tổ chức một website cá nhân để trình bày các sản phẩm học tập của mình.
                  </p>
                  <p className="leading-relaxed mt-4">
                    Quá trình này giúp tôi nhận ra tầm quan trọng của việc tổ chức thông tin một cách khoa học và trực quan. 
                    Tôi đã học được cách sắp xếp nội dung, lựa chọn màu sắc phù hợp và tạo ra trải nghiệm người dùng tốt. 
                    Quan trọng hơn, Portfolio đã trở thành công cụ để tôi tự đánh giá lại toàn bộ hành trình học tập, 
                    nhìn nhận những điểm mạnh cần phát huy và những điểm yếu cần cải thiện.
                  </p>
                  <p className="leading-relaxed mt-4">
                    Tôi đặc biệt ấn tượng với cách công nghệ số giúp việc lưu trữ và chia sẻ kiến thức trở nên dễ dàng hơn bao giờ hết. 
                    Portfolio không chỉ là bài tập cuối kỳ mà còn là tài sản học thuật mà tôi có thể tiếp tục phát triển trong tương lai.
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
                      Tôi đã thành thạo các thao tác quản lý tệp tin như tạo, đổi tên, di chuyển và sắp xếp thư mục một cách khoa học. 
                      Đặc biệt, kỹ năng tìm kiếm thông tin học thuật trên Google Scholar và đánh giá độ tin cậy nguồn thông tin 
                      đã giúp tôi tiếp cận tài liệu chất lượng cao hơn cho việc học tập.
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                    <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Hiểu biết về AI
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Tôi đã hiểu rõ cách AI hoạt động dựa trên mô hình ngôn ngữ lớn và học máy. 
                      Quan trọng hơn, tôi biết cách viết prompt hiệu quả để khai thác tối đa khả năng của ChatGPT 
                      trong việc hỗ trợ học tập mà vẫn đảm bảo sử dụng có trách nhiệm và trích dẫn đúng nguồn.
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                    <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Liêm chính học thuật
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Tôi nhận thức sâu sắc về tầm quan trọng của liêm chính học thuật trong môi trường đại học. 
                      Mọi sản phẩm học tập đều được tôi tự thực hiện, trích dẫn nguồn đầy đủ và minh bạch về việc sử dụng AI. 
                      Đây không chỉ là quy định mà còn là nền tảng cho việc học tập thực chất.
                    </p>
                  </div>
                  <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors">
                    <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Làm việc nhóm và giao tiếp số
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Qua bài tập hợp tác trực tuyến, tôi đã rèn luyện kỹ năng phối hợp với các thành viên qua các nền tảng số. 
                      Tôi biết cách phân chia công việc, giao tiếp hiệu quả qua các công cụ như Google Docs 
                      và quản lý tiến độ dự án nhóm một cách chuyên nghiệp.
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
                        <span>Quản lý thời gian giữa nhiều bài tập và deadline của các môn học khác</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        <span>Làm quen với nhiều công cụ số mới như Canva, Google Docs và các nền tảng AI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        <span>Phân biệt giữa thông tin học thuật đáng tin cậy và các nguồn thiếu uy tín trên Internet</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cách tôi vượt qua:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        <span>Lập kế hoạch học tập chi tiết theo tuần và ưu tiên hoàn thành các bài tập quan trọng trước</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        <span>Dành thời gian xem hướng dẫn sử dụng, thực hành từng bước và không ngại hỏi khi gặp khó khăn</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">→</span>
                        <span>Áp dụng tiêu chí CRAAP đã học trong Chương 2 để đánh giá và chọn lọc nguồn thông tin</span>
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
                  <p className="leading-relaxed text-lg">
                    Điều tôi tự hào nhất là sự tiến bộ vượt bậc của bản thân trong suốt học kỳ. 
                    Từ một sinh viên mới bước vào đại học, chưa có nhiều kinh nghiệm với công nghệ số, 
                    giờ đây tôi đã có thể tự tin xây dựng một website portfolio hoàn chỉnh, 
                    sử dụng AI một cách hiệu quả và có trách nhiệm.
                  </p>
                  <p className="leading-relaxed opacity-95">
                    Tôi đặc biệt tự hào về việc hoàn thành đầy đủ 6 bài tập thực hành với chất lượng cao, 
                    mỗi bài đều thể hiện sự nỗ lực và tiến bộ so với bài trước. 
                    Portfolio này không chỉ là minh chứng cho kiến thức đã học mà còn là động lực 
                    để tôi tiếp tục phát triển kỹ năng số trong tương lai.
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
                  — Trịnh Xuân An
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
