export interface Project {
  id: string;
  chapter: string;
  title: string;
  summary: string;
  icon: string;
  color: string;
  objectives: string[];
  process: {
    steps: string[];
    tools: string[];
  };
  evidence: {
    description: string;
    placeholder: string;
  };
  analysis: {
    strengths: string[];
    improvements: string[];
    lessons: string[];
  };
  aiUsage: {
    usage: string[];
    integrity: string[];
  };
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    chapter: "Chương 1",
    title: "Máy tính và thiết bị ngoại vi",
    summary:
      "Bài tập này giúp tôi hiểu rõ về cấu trúc phần cứng máy tính, các thiết bị ngoại vi và cách chúng hoạt động cùng nhau để tạo nên một hệ thống hoàn chỉnh.",
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
    objectives: [
      "Hiểu được cấu trúc cơ bản của máy tính và các thành phần chính",
      "Phân biệt được các loại thiết bị ngoại vi đầu vào, đầu ra và lưu trữ",
      "Nắm được nguyên lý hoạt động của CPU, RAM, ổ cứng",
      "Biết cách lựa chọn thiết bị phù hợp với nhu cầu sử dụng",
    ],
    process: {
      steps: [
        "Nghiên cứu tài liệu về kiến trúc máy tính cơ bản",
        "Tìm hiểu các thành phần phần cứng và chức năng của từng bộ phận",
        "Phân loại các thiết bị ngoại vi theo chức năng",
        "Thực hành nhận diện các linh kiện trên máy tính thực tế",
        "Viết báo cáo tổng hợp kiến thức đã học",
      ],
      tools: ["Google Search", "YouTube", "Wikipedia", "Tài liệu môn học"],
    },
    evidence: {
      description: "Báo cáo về cấu trúc máy tính và thiết bị ngoại vi",
      placeholder:
        "[Chèn link hoặc ảnh chụp màn hình báo cáo/bài tập của bạn tại đây]",
    },
    analysis: {
      strengths: [
        "[Điền phần bạn làm tốt - ví dụ: Phân loại được chính xác các thiết bị]",
        "[Ví dụ: Giải thích rõ ràng nguyên lý hoạt động của CPU]",
      ],
      improvements: [
        "[Điền phần cần cải thiện - ví dụ: Cần nghiên cứu sâu hơn về GPU]",
        "[Ví dụ: Bổ sung thêm hình ảnh minh họa]",
      ],
      lessons: [
        "[Điền bài học rút ra - ví dụ: Hiểu rõ hơn về cách máy tính xử lý dữ liệu]",
        "[Ví dụ: Biết cách chọn linh kiện phù hợp khi nâng cấp máy]",
      ],
    },
    aiUsage: {
      usage: [
        "[Mô tả cách bạn sử dụng AI - ví dụ: Sử dụng ChatGPT để giải thích các thuật ngữ kỹ thuật]",
        "[Ví dụ: Dùng AI để gợi ý cấu trúc bài viết]",
      ],
      integrity: [
        "Tôi đã tự nghiên cứu và viết nội dung chính",
        "AI chỉ được sử dụng để hỗ trợ giải thích và gợi ý",
        "Tất cả nội dung đã được kiểm tra và viết lại bằng ngôn ngữ của tôi",
      ],
    },
  },
  {
    id: "project-2",
    chapter: "Chương 2",
    title: "Khai thác dữ liệu và thông tin",
    summary:
      "Bài tập này giúp tôi phát triển kỹ năng tìm kiếm, đánh giá và tổng hợp thông tin từ nhiều nguồn khác nhau một cách có hệ thống.",
    icon: "🔍",
    color: "from-purple-500 to-pink-500",
    objectives: [
      "Nắm vững kỹ năng tìm kiếm thông tin trên Internet hiệu quả",
      "Biết cách đánh giá độ tin cậy của nguồn thông tin",
      "Phát triển kỹ năng tổng hợp và phân tích dữ liệu",
      "Hiểu về quyền sở hữu trí tuệ và trích dẫn nguồn",
    ],
    process: {
      steps: [
        "Xác định nhu cầu thông tin và từ khóa tìm kiếm",
        "Sử dụng các công cụ tìm kiếm nâng cao",
        "Đánh giá và lọc nguồn thông tin đáng tin cậy",
        "Tổng hợp thông tin theo cấu trúc logic",
        "Trích dẫn nguồn theo chuẩn học thuật",
      ],
      tools: ["Google Scholar", "Google Advanced Search", "Zotero", "Notion"],
    },
    evidence: {
      description: "Bài nghiên cứu với nguồn trích dẫn đầy đủ",
      placeholder:
        "[Chèn link hoặc ảnh chụp màn hình bài nghiên cứu của bạn tại đây]",
    },
    analysis: {
      strengths: [
        "[Điền phần bạn làm tốt trong việc khai thác thông tin]",
        "[Ví dụ: Tìm được nhiều nguồn đáng tin cậy]",
      ],
      improvements: [
        "[Điền phần cần cải thiện]",
        "[Ví dụ: Cần rèn luyện thêm kỹ năng trích dẫn]",
      ],
      lessons: [
        "[Điền bài học rút ra về việc khai thác thông tin]",
        "[Ví dụ: Không phải mọi thông tin trên mạng đều đáng tin]",
      ],
    },
    aiUsage: {
      usage: [
        "[Mô tả cách bạn sử dụng AI trong bài này]",
        "[Ví dụ: Dùng AI để tóm tắt các bài viết dài]",
      ],
      integrity: [
        "Tôi đã tự tìm kiếm và chọn lọc nguồn thông tin",
        "AI được sử dụng như công cụ hỗ trợ, không thay thế việc đọc hiểu",
        "Tất cả trích dẫn được kiểm tra và ghi nguồn đầy đủ",
      ],
    },
  },
  {
    id: "project-3",
    chapter: "Chương 3",
    title: "Tổng quan về Trí tuệ nhân tạo",
    summary:
      "Bài tập này giúp tôi hiểu về lịch sử, nguyên lý hoạt động và các ứng dụng của Trí tuệ nhân tạo trong cuộc sống.",
    icon: "🤖",
    color: "from-green-500 to-teal-500",
    objectives: [
      "Hiểu được khái niệm và lịch sử phát triển của AI",
      "Phân biệt được các loại AI: Narrow AI, General AI, Super AI",
      "Nắm được các ứng dụng AI trong đời sống và công việc",
      "Nhận thức về đạo đức và trách nhiệm khi sử dụng AI",
    ],
    process: {
      steps: [
        "Nghiên cứu lịch sử và sự phát triển của AI",
        "Tìm hiểu các công nghệ AI phổ biến: Machine Learning, Deep Learning",
        "Khảo sát các ứng dụng AI trong thực tế",
        "Phân tích ưu nhược điểm của việc sử dụng AI",
        "Thảo luận về các vấn đề đạo đức liên quan đến AI",
      ],
      tools: ["ChatGPT", "Google Bard", "YouTube", "Coursera"],
    },
    evidence: {
      description: "Bài thuyết trình về AI và ứng dụng",
      placeholder:
        "[Chèn link slide hoặc video thuyết trình của bạn tại đây]",
    },
    analysis: {
      strengths: [
        "[Điền phần bạn làm tốt về chủ đề AI]",
        "[Ví dụ: Giải thích được rõ ràng về Machine Learning]",
      ],
      improvements: [
        "[Điền phần cần cải thiện]",
        "[Ví dụ: Cần tìm hiểu thêm về Neural Networks]",
      ],
      lessons: [
        "[Điền bài học rút ra về AI]",
        "[Ví dụ: AI là công cụ hỗ trợ, không thay thế con người]",
      ],
    },
    aiUsage: {
      usage: [
        "[Mô tả cách bạn sử dụng AI trong bài này]",
        "[Ví dụ: Trải nghiệm trực tiếp ChatGPT để hiểu cách hoạt động]",
      ],
      integrity: [
        "Tôi sử dụng AI như đối tượng nghiên cứu và công cụ học tập",
        "Nội dung phân tích và nhận xét là của cá nhân tôi",
        "Tôi nhận thức rõ giới hạn và rủi ro của AI",
      ],
    },
  },
  {
    id: "project-4",
    chapter: "Chương 4",
    title: "Giao tiếp và hợp tác trong môi trường số",
    summary:
      "Bài tập này giúp tôi phát triển kỹ năng làm việc nhóm và giao tiếp hiệu quả thông qua các công cụ kỹ thuật số.",
    icon: "🤝",
    color: "from-orange-500 to-red-500",
    objectives: [
      "Sử dụng thành thạo các công cụ giao tiếp trực tuyến",
      "Phát triển kỹ năng làm việc nhóm từ xa",
      "Hiểu về netiquette - phép lịch sự trên mạng",
      "Quản lý dự án và phân công công việc hiệu quả",
    ],
    process: {
      steps: [
        "Thành lập nhóm và phân công vai trò",
        "Thiết lập kênh giao tiếp và chia sẻ tài liệu",
        "Lên kế hoạch và theo dõi tiến độ công việc",
        "Họp nhóm định kỳ và báo cáo kết quả",
        "Đánh giá hiệu quả làm việc nhóm",
      ],
      tools: ["Google Meet", "Discord", "Trello", "Google Drive", "Slack"],
    },
    evidence: {
      description: "Sản phẩm làm việc nhóm và báo cáo quy trình",
      placeholder:
        "[Chèn link sản phẩm nhóm hoặc ảnh chụp quá trình làm việc]",
    },
    analysis: {
      strengths: [
        "[Điền phần nhóm làm tốt]",
        "[Ví dụ: Phân công công việc rõ ràng]",
      ],
      improvements: [
        "[Điền phần cần cải thiện trong làm việc nhóm]",
        "[Ví dụ: Cần cải thiện việc báo cáo tiến độ]",
      ],
      lessons: [
        "[Điền bài học rút ra về làm việc nhóm]",
        "[Ví dụ: Giao tiếp rõ ràng là chìa khóa thành công]",
      ],
    },
    aiUsage: {
      usage: [
        "[Mô tả cách nhóm sử dụng AI]",
        "[Ví dụ: Dùng AI để lên ý tưởng và brainstorm]",
      ],
      integrity: [
        "Mọi thành viên đều tham gia đóng góp thực sự",
        "AI được sử dụng như công cụ hỗ trợ chung",
        "Kết quả cuối cùng là sản phẩm của cả nhóm",
      ],
    },
  },
  {
    id: "project-5",
    chapter: "Chương 5",
    title: "Sáng tạo nội dung số",
    summary:
      "Bài tập này giúp tôi phát triển khả năng sáng tạo và sản xuất nội dung số chất lượng bằng các công cụ hiện đại.",
    icon: "🎨",
    color: "from-pink-500 to-violet-500",
    objectives: [
      "Nắm vững nguyên tắc thiết kế cơ bản",
      "Sử dụng các công cụ tạo nội dung số",
      "Tạo được sản phẩm multimedia hoàn chỉnh",
      "Hiểu về bản quyền và creative commons",
    ],
    process: {
      steps: [
        "Học các nguyên tắc thiết kế cơ bản",
        "Tìm hiểu và thực hành với các công cụ thiết kế",
        "Lên ý tưởng và phác thảo sản phẩm",
        "Thực hiện và chỉnh sửa sản phẩm",
        "Xuất bản và nhận phản hồi",
      ],
      tools: ["Canva", "CapCut", "Adobe Express", "Figma", "Midjourney"],
    },
    evidence: {
      description: "Sản phẩm sáng tạo số (poster, video, infographic...)",
      placeholder:
        "[Chèn link hoặc ảnh sản phẩm sáng tạo của bạn tại đây]",
    },
    analysis: {
      strengths: [
        "[Điền phần bạn làm tốt trong sáng tạo nội dung]",
        "[Ví dụ: Thiết kế có tính thẩm mỹ cao]",
      ],
      improvements: [
        "[Điền phần cần cải thiện]",
        "[Ví dụ: Cần học thêm về video editing]",
      ],
      lessons: [
        "[Điền bài học rút ra về sáng tạo nội dung số]",
        "[Ví dụ: Sáng tạo cần có quy trình rõ ràng]",
      ],
    },
    aiUsage: {
      usage: [
        "[Mô tả cách bạn sử dụng AI trong sáng tạo]",
        "[Ví dụ: Dùng AI để gợi ý ý tưởng thiết kế]",
      ],
      integrity: [
        "Ý tưởng chính là của tôi, AI chỉ hỗ trợ gợi ý",
        "Tôi đã chỉnh sửa và cá nhân hóa mọi nội dung",
        "Tôi tôn trọng bản quyền và ghi nguồn đầy đủ",
      ],
    },
  },
  {
    id: "project-6",
    chapter: "Chương 6",
    title: "An toàn và liêm chính học thuật",
    summary:
      "Bài tập này giúp tôi hiểu về an toàn thông tin cá nhân và tầm quan trọng của liêm chính trong học thuật.",
    icon: "🔐",
    color: "from-yellow-500 to-orange-500",
    objectives: [
      "Hiểu về các mối đe dọa an toàn thông tin",
      "Nắm vững các biện pháp bảo vệ dữ liệu cá nhân",
      "Hiểu rõ về liêm chính học thuật và đạo văn",
      "Biết cách sử dụng AI có trách nhiệm",
    ],
    process: {
      steps: [
        "Nghiên cứu về các loại tấn công mạng phổ biến",
        "Tìm hiểu cách bảo vệ thông tin cá nhân",
        "Học về các quy định liêm chính học thuật",
        "Thực hành kiểm tra đạo văn",
        "Xây dựng cam kết sử dụng AI có trách nhiệm",
      ],
      tools: ["Turnitin", "Quillbot", "Password Manager", "VPN"],
    },
    evidence: {
      description: "Bài viết về an toàn số và cam kết liêm chính",
      placeholder:
        "[Chèn link bài viết hoặc cam kết liêm chính của bạn tại đây]",
    },
    analysis: {
      strengths: [
        "[Điền phần bạn làm tốt về an toàn và liêm chính]",
        "[Ví dụ: Nhận diện được các rủi ro bảo mật]",
      ],
      improvements: [
        "[Điền phần cần cải thiện]",
        "[Ví dụ: Cần thực hành bảo mật thường xuyên hơn]",
      ],
      lessons: [
        "[Điền bài học rút ra về an toàn và liêm chính]",
        "[Ví dụ: Liêm chính học thuật là nền tảng của học tập]",
      ],
    },
    aiUsage: {
      usage: [
        "[Mô tả cách bạn sử dụng AI trong bài này]",
        "[Ví dụ: Dùng AI để giải thích các khái niệm bảo mật]",
      ],
      integrity: [
        "Tôi cam kết tuân thủ liêm chính học thuật",
        "Mọi nội dung đều được viết bằng ngôn ngữ của tôi",
        "Tôi sử dụng AI như công cụ hỗ trợ, không sao chép",
      ],
    },
  },
];
