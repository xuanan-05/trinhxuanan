import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Brain, TrendingUp, Sparkles, Shield } from "lucide-react";

export function Reflection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Phản tư <span className="gradient-text">Tổng hợp</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Những bài học và sự thay đổi quan trọng nhất trong suốt quá trình học tập
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="bg-card rounded-2xl p-6 shadow-sm card-hover h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Thay đổi trong cách học
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                [Viết về những thay đổi lớn nhất trong cách học của bạn. Ví dụ:
                Tôi đã chuyển từ việc học thụ động sang chủ động tìm tòi và
                thực hành. Tôi biết cách sử dụng công nghệ như một công cụ hỗ
                trợ hiệu quả...]
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-card rounded-2xl p-6 shadow-sm card-hover h-full">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Kỹ năng số tiến bộ nhất
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                [Viết về kỹ năng số mà bạn tiến bộ rõ nhất. Ví dụ: Kỹ năng tìm
                kiếm và đánh giá thông tin đã được cải thiện đáng kể. Tôi có
                thể phân biệt được nguồn tin cậy và biết cách trích dẫn đúng
                chuẩn...]
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-card rounded-2xl p-6 shadow-sm card-hover h-full">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Bài học từ việc sử dụng AI
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                [Viết về điều bạn học được khi sử dụng AI đúng cách. Ví dụ: AI
                là công cụ hỗ trợ tuyệt vời nhưng không thể thay thế việc suy
                nghĩ độc lập. Tôi học được cách đặt câu hỏi đúng và kiểm tra
                thông tin từ AI...]
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="bg-card rounded-2xl p-6 shadow-sm card-hover h-full">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3">
                Nhận thức về trách nhiệm học thuật
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                [Viết về nhận thức của bạn về trách nhiệm học thuật. Ví dụ: Tôi
                hiểu rằng liêm chính học thuật không chỉ là quy định mà còn là
                nền tảng cho việc học thực sự. Việc tự làm và chịu trách nhiệm
                giúp tôi tiến bộ...]
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
