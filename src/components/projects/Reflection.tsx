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
                Tôi đã chuyển từ việc học thụ động sang chủ động tìm tòi và thực hành. 
                Thay vì chỉ đọc sách và ghi chép, giờ đây tôi biết cách tìm kiếm tài liệu học thuật trên Internet, 
                đánh giá độ tin cậy của nguồn thông tin và sử dụng công nghệ số như một công cụ hỗ trợ hiệu quả cho việc học tập.
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
                Kỹ năng tìm kiếm và đánh giá thông tin học thuật đã được cải thiện đáng kể. 
                Tôi có thể sử dụng Google Scholar để tìm tài liệu chất lượng cao, áp dụng tiêu chí CRAAP để đánh giá nguồn, 
                và biết cách trích dẫn đúng chuẩn APA để đảm bảo liêm chính học thuật.
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
                AI như ChatGPT là công cụ hỗ trợ tuyệt vời nhưng không thể thay thế việc suy nghĩ độc lập. 
                Tôi đã học được cách viết prompt hiệu quả để khai thác tối đa khả năng của AI, 
                đồng thời luôn kiểm tra và chỉnh sửa kết quả theo hiểu biết của bản thân thay vì sao chép nguyên vẹn.
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
                Tôi hiểu rằng liêm chính học thuật không chỉ là quy định của nhà trường mà còn là nền tảng cho việc học tập thực chất. 
                Việc tự thực hiện bài tập, trích dẫn nguồn đầy đủ và minh bạch về việc sử dụng AI 
                giúp tôi thực sự tiến bộ và phát triển năng lực của bản thân.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
