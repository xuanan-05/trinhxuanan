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
    title: "Thao tác cơ bản với tệp tin",
    summary:
      "Bài tập này giúp tôi thành thạo các thao tác quản lý tệp tin và thư mục trên hệ điều hành Windows, bao gồm tạo, đổi tên, sao chép, di chuyển và xóa tệp tin.",
    icon: "💻",
    color: "from-blue-500 to-cyan-500",
    objectives: [
      "Mở và sử dụng File Explorer để quản lý tệp tin",
      "Tạo thư mục mới và tổ chức cấu trúc thư mục",
      "Thực hiện các thao tác sao chép, di chuyển, đổi tên và xóa tệp tin",
      "Tạo shortcut và quản lý tệp tin hiệu quả",
    ],
    process: {
      steps: [
        "Mở File Explorer bằng tổ hợp phím Windows + E",
        "Truy cập ổ đĩa D: và tạo thư mục mới 'Tài liệu học tập'",
        "Tạo các thư mục con: Bài tập, Slide bài giảng, Tài liệu tham khảo",
        "Tạo file Word 'Ghi chú.docx' trong thư mục Bài tập",
        "Thực hành sao chép, di chuyển, đổi tên tệp tin",
        "Tạo shortcut cho thư mục thường dùng ra Desktop",
        "Xóa các tệp tin không cần thiết (di chuyển vào Recycle Bin)",
      ],
      tools: ["File Explorer", "Microsoft Word", "Windows 10/11"],
    },
    evidence: {
      description: "Báo cáo thực hành thao tác cơ bản với tệp tin kèm ảnh chụp màn hình các bước thực hiện",
      placeholder:
        "[Báo cáo bao gồm 12 ảnh chụp màn hình minh họa từng bước: mở File Explorer, truy cập ổ đĩa, tạo thư mục, tạo file, sao chép, di chuyển, đổi tên, tạo shortcut và xóa tệp]",
    },
    analysis: {
      strengths: [
        "Thực hiện đầy đủ tất cả các thao tác cơ bản với tệp tin",
        "Chụp màn hình chi tiết từng bước thực hiện làm minh chứng",
        "Tổ chức cấu trúc thư mục khoa học, dễ quản lý",
      ],
      improvements: [
        "Cần tìm hiểu thêm về các phím tắt để thao tác nhanh hơn",
        "Học cách sử dụng tính năng tìm kiếm nâng cao trong File Explorer",
      ],
      lessons: [
        "Quản lý tệp tin có tổ chức giúp tiết kiệm thời gian tìm kiếm",
        "Biết cách sử dụng Recycle Bin để khôi phục tệp tin đã xóa nhầm",
        "Shortcut giúp truy cập nhanh các thư mục thường dùng",
      ],
    },
    aiUsage: {
      usage: [
        "Không sử dụng AI trong bài tập này",
        "Tự thực hành trực tiếp trên máy tính theo hướng dẫn của giảng viên",
      ],
      integrity: [
        "Tôi đã tự thực hiện tất cả các thao tác trên máy tính cá nhân",
        "Ảnh chụp màn hình là minh chứng thực tế từ quá trình thực hành",
        "Tất cả nội dung báo cáo được viết dựa trên trải nghiệm thực tế",
      ],
    },
  },
  {
    id: "project-2",
    chapter: "Chương 2",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    summary:
      "Bài tập này giúp tôi phân tích tác động của trí tuệ nhân tạo (AI) đối với giáo dục đại học thông qua việc tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.",
    icon: "🔍",
    color: "from-purple-500 to-pink-500",
    objectives: [
      "Phân tích tác động của AI đối với giáo dục đại học",
      "Tìm kiếm thông tin từ các nguồn học thuật đáng tin cậy",
      "Đánh giá độ tin cậy của 12 tài liệu theo 4 tiêu chí chuẩn",
      "Tổng hợp và phân loại nguồn thông tin một cách có hệ thống",
    ],
    process: {
      steps: [
        "Xác định chủ đề nghiên cứu: Tác động của AI trong giáo dục đại học",
        "Thiết lập từ khóa tìm kiếm: 'AI in higher education', 'Artificial Intelligence and pedagogy', 'AI adoption in universities'",
        "Tìm kiếm trên các cơ sở dữ liệu: Google Scholar, Microsoft Academic, Springer, Elsevier",
        "Thu thập 12 tài liệu: 7 bài báo khoa học, 2 sách chuyên khảo, 3 nguồn mở",
        "Đánh giá từng nguồn theo 4 tiêu chí: Tác giả, Cơ quan xuất bản, Phương pháp nghiên cứu, Trích dẫn và Tính cập nhật",
        "Lập bảng tổng hợp đánh giá và phân loại độ tin cậy",
        "Viết báo cáo tổng hợp kết quả nghiên cứu",
      ],
      tools: ["Google Scholar", "Microsoft Academic", "Springer", "Elsevier", "Tạp chí Quản lý Nhà nước", "Tạp chí Công thương"],
    },
    evidence: {
      description: "Báo cáo 'Tìm kiếm và đánh giá thông tin học thuật' về tác động của AI trong giáo dục đại học",
      placeholder:
        "[Báo cáo bao gồm: Mục tiêu, Phạm vi và phương pháp tìm kiếm, Kết quả thu thập 12 tài liệu, Bảng đánh giá độ tin cậy theo 4 tiêu chí, và Kết luận về tác động tích cực/tiêu cực của AI]",
    },
    analysis: {
      strengths: [
        "Thu thập được 12 tài liệu đa dạng: bài báo khoa học, sách chuyên khảo, nguồn mở",
        "Đánh giá có hệ thống theo 4 tiêu chí: Tác giả, Cơ quan xuất bản, Phương pháp, Trích dẫn",
        "Phân loại rõ ràng độ tin cậy: Rất cao, Cao, Trung bình, Thấp",
        "Xác định được nguồn không đáng tin (blog cá nhân) và lý do tại sao",
      ],
      improvements: [
        "Cần mở rộng tìm kiếm trên nhiều cơ sở dữ liệu quốc tế hơn",
        "Nên bổ sung thêm các nghiên cứu thực nghiệm tại Việt Nam",
      ],
      lessons: [
        "Không phải mọi thông tin trên mạng đều đáng tin cậy - cần kiểm tra nguồn gốc",
        "Các tạp chí khoa học và báo cáo từ tổ chức uy tín (OECD, UNESCO) có độ tin cậy cao",
        "Blog cá nhân và nguồn không rõ tác giả cần được xác minh kỹ lưỡng",
        "Tính cập nhật của tài liệu rất quan trọng với chủ đề AI vì công nghệ thay đổi nhanh",
      ],
    },
    aiUsage: {
      usage: [
        "Sử dụng AI để gợi ý từ khóa tìm kiếm phù hợp với chủ đề",
        "Dùng AI để tóm tắt nội dung chính của các bài báo dài",
      ],
      integrity: [
        "Tôi đã tự tìm kiếm và chọn lọc 12 nguồn thông tin từ các cơ sở dữ liệu học thuật",
        "Việc đánh giá độ tin cậy được thực hiện bởi tôi dựa trên 4 tiêu chí đã học",
        "AI chỉ hỗ trợ tóm tắt, không thay thế việc đọc hiểu và phân tích",
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
    title: "Sử dụng Trí tuệ nhân tạo có trách nhiệm trong học thuật",
    summary:
      "Bài tập này giúp tôi phân tích chính sách sử dụng AI tại các trường đại học, thực hành sử dụng AI có trách nhiệm trong viết luận, và xây dựng bộ nguyên tắc cá nhân về liêm chính học thuật khi dùng AI.",
    icon: "🔐",
    color: "from-yellow-500 to-orange-500",
    objectives: [
      "Phân tích chính sách sử dụng AI trong học tập và nghiên cứu tại các trường đại học Việt Nam",
      "Hiểu được ranh giới giữa hỗ trợ hợp lý và gian lận học thuật khi sử dụng AI",
      "Thực hành sử dụng AI có trách nhiệm trong một nhiệm vụ học tập cụ thể",
      "Xây dựng bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm trong học thuật",
    ],
    process: {
      steps: [
        "Nghiên cứu bối cảnh chính sách AI tại các trường đại học Việt Nam (ĐH Công nghệ Thông tin, ĐH Khoa học Tự nhiên, ĐH Anh Quốc Việt Nam...)",
        "Phân tích case study về Trường Đại học Anh Quốc Việt Nam (BUV) - nơi có cách tiếp cận rõ ràng về AI trong học thuật",
        "Thực hiện nhiệm vụ viết bài luận 1500 từ với sự hỗ trợ của AI (gợi ý ý tưởng, lập dàn ý, chỉnh sửa ngôn ngữ)",
        "Phân tích các vấn đề đạo đức: ranh giới hỗ trợ vs gian lận, quyền sở hữu trí tuệ, tác động đến kỹ năng",
        "Xây dựng bộ 6 nguyên tắc vàng về sử dụng AI có trách nhiệm",
        "Thiết kế infographic hướng dẫn sử dụng AI trong học thuật",
      ],
      tools: ["ChatGPT (GPT-5.1 Pro)", "Google Search", "Canva", "Tài liệu học thuật"],
    },
    evidence: {
      description: "Báo cáo 'Sử dụng Trí tuệ nhân tạo có trách nhiệm trong học thuật' và Infographic hướng dẫn",
      placeholder:
        "[Chèn link báo cáo hoặc ảnh chụp infographic của bạn tại đây]",
    },
    analysis: {
      strengths: [
        "Phân tích sâu chính sách AI của các trường đại học, đặc biệt là case study BUV với thang đánh giá AI nhiều cấp độ",
        "Thực hành minh bạch: ghi rõ từng bước sử dụng AI (gợi ý khía cạnh, lập dàn ý, chỉnh sửa ngôn ngữ, kiểm tra lỗi)",
        "Xây dựng được bộ 6 nguyên tắc cá nhân rõ ràng, có thể áp dụng trong thực tế",
      ],
      improvements: [
        "Cần tìm hiểu thêm về các công cụ phát hiện AI (AI detection tools) và cách hoạt động",
        "Có thể bổ sung thêm so sánh với chính sách AI của các trường đại học quốc tế",
      ],
      lessons: [
        "AI là trợ lý, không phải 'người làm hộ' - ranh giới quan trọng nhất nằm ở việc người học có thực sự hiểu và đóng góp trí tuệ hay không",
        "Minh bạch là chìa khóa: ghi rõ mình dùng AI ở bước nào, công cụ nào",
        "Chịu trách nhiệm hoàn toàn về sản phẩm cuối cùng - không đổ lỗi cho AI nếu nội dung sai",
        "Ưu tiên rèn kỹ năng cốt lõi trước, dùng AI để nâng cao chất lượng, không thay thế nỗ lực học tập",
      ],
    },
    aiUsage: {
      usage: [
        "Sử dụng ChatGPT (GPT-5.1 Pro) để gợi ý 5-7 khía cạnh chính khi phân tích tác động của AI đến liêm chính học thuật",
        "Dùng AI để lập dàn ý chi tiết cho bài luận với bố cục Mở bài, 3 luận điểm chính, Kết luận",
        "Nhờ AI đào sâu phân tích một luận điểm cụ thể (nguy cơ gian lận và suy giảm kỹ năng)",
        "Dùng AI để gợi ý cách diễn đạt học thuật hơn cho các đoạn văn tự viết",
        "Kiểm tra lỗi chính tả, ngữ pháp bằng AI trước khi nộp bài",
      ],
      integrity: [
        "AI chỉ đóng vai trò trợ lý gợi ý và kiểm tra, nội dung cuối cùng là sản phẩm của quá trình đọc, suy nghĩ và viết của chính tôi",
        "Tất cả lập luận, ví dụ và trích dẫn nguồn đều được tôi lựa chọn, kiểm tra và chịu trách nhiệm",
        "Tôi đã viết lại bằng lời của mình, thêm ví dụ cá nhân, và đối chiếu với nguồn học thuật gốc",
        "Ghi nhận rõ ràng việc sử dụng AI theo yêu cầu của giảng viên",
      ],
    },
  },
];
