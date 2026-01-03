import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
          Được xây dựng với <Heart className="w-4 h-4 text-destructive fill-destructive" /> bởi sinh viên
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          Digital Portfolio - Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
        </p>
        <p className="text-muted-foreground text-xs mt-1">
          © {new Date().getFullYear()} - Cam kết tuân thủ liêm chính học thuật
        </p>
      </div>
    </footer>
  );
}
