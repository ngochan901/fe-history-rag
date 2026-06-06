import React, { useState, useEffect } from "react";

const TermsAndPrivacy = () => {
  const [activeSection, setActiveSection] = useState("digital-heritage");

  // Logic để theo dõi khi người dùng cuộn chuột và cập nhật mục lục active
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "digital-heritage",
        "scholarly-ethics",
        "data-privacy",
        "copyright",
      ];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  const sections = [
    { id: "digital-heritage", label: "1. Bảo tồn Di sản Số" },
    { id: "scholarly-ethics", label: "2. Đạo đức Học thuật" },
    { id: "data-privacy", label: "3. Bảo mật Dữ liệu" },
    { id: "copyright", label: "4. Bản quyền & Trích dẫn" },
  ];

  return (
    <div className="bg-[#fcf9ee] min-h-screen font-body selection:bg-primary/10 pb-24">
      {/* Background Pattern */}
      <div className="grain-overlay pointer-events-none fixed inset-0 z-0 opacity-5"></div>

      <main className="max-w-[1440px] mx-auto px-6 md:px-12 pt-16 flex flex-col md:flex-row gap-12 relative z-10">
        {/* --- SIDEBAR NAVIGATION --- */}
        <aside className="hidden md:block w-72 sticky top-32 h-fit">
          <nav className="flex flex-col gap-2 p-6 bg-white border border-outline-variant/30 rounded-sm shadow-sm">
            <p className="font-mono text-[10px] text-secondary uppercase tracking-[0.2em] mb-4 border-b border-primary/10 pb-2">
              Mục lục văn bản
            </p>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`py-3 px-4 rounded-sm text-left text-sm transition-all border-l-2 font-medium ${
                  activeSection === section.id
                    ? "bg-primary/5 border-primary text-primary font-bold"
                    : "text-on-surface-variant border-transparent hover:bg-surface-variant/50"
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>

          <div className="mt-8 p-6 bg-primary text-white rounded-sm shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 dong-son-pattern opacity-10"></div>
            <span className="material-symbols-outlined text-accent text-3xl mb-4 relative z-10">
              auto_stories
            </span>
            <p className="font-headline text-sm leading-relaxed italic relative z-10">
              "Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt Nam."
            </p>
            <p className="text-[10px] font-mono uppercase mt-4 opacity-60 relative z-10">
              — Hồ Chí Minh
            </p>
          </div>
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <article className="flex-1 bg-white p-8 md:p-16 border border-outline-variant/30 shadow-2xl relative overflow-hidden rounded-sm">
          {/* Họa tiết trang trí góc */}
          <div className="absolute -top-12 -right-12 w-48 h-48 opacity-[0.03] pointer-events-none">
            <div className="w-full h-full rounded-full border-[10px] border-primary border-dashed animate-spin-slow"></div>
          </div>

          <header className="mb-16 border-b-2 border-primary/10 pb-10">
            <span className="inline-block px-3 py-1 bg-accent text-white font-mono text-[9px] font-bold uppercase tracking-widest rounded-sm mb-6 shadow-md">
              Thông cáo Học thuật
            </span>
            <h2 className="font-headline text-5xl text-primary mb-6 font-bold italic tracking-tight">
              Điều Khoản Sử Dụng & <br /> Chính Sách Bảo Mật
            </h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed italic">
              Chào mừng quý học giả đến với Viện Lưu Trữ Số Sử Việt. Văn bản này
              quy định các tiêu chuẩn về tương tác, đóng góp và bảo vệ dữ liệu
              trong không gian nghiên cứu lịch sử của chúng tôi.
            </p>
          </header>

          <div className="space-y-20">
            {/* Section 1 */}
            <section id="digital-heritage" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">
                  museum
                </span>
                <h3 className="font-headline text-3xl text-on-surface font-bold italic border-b border-primary/10 flex-1 pb-2">
                  1. Bảo tồn Di sản Số
                </h3>
              </div>
              <div className="space-y-6 text-on-surface-variant leading-[1.8] italic text-lg pr-4">
                <p>
                  Việc đóng góp tư liệu số vào kho lưu trữ phải tuân thủ nghiêm
                  ngặt các quy tắc về tính xác thực:
                </p>
                <ul className="list-none space-y-4">
                  {[
                    "Cung cấp nguồn gốc rõ ràng (provenance) cho mọi tài liệu.",
                    "Không tải lên nội dung ngụy tạo hoặc xuyên tạc sự thật.",
                    "Đảm bảo tệp tin có siêu dữ liệu (metadata) chính xác.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-3 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            {/* Section 2 */}
            <section id="scholarly-ethics" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">
                  history_edu
                </span>
                <h3 className="font-headline text-3xl text-on-surface font-bold italic border-b border-primary/10 flex-1 pb-2">
                  2. Đạo đức Học thuật
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 font-body text-base">
                <div className="p-6 bg-[#f7f4e9] border-l-4 border-secondary shadow-sm">
                  <p className="font-bold text-secondary uppercase text-[10px] tracking-widest mb-2">
                    Được khuyến khích
                  </p>
                  <p className="italic leading-relaxed">
                    Tranh luận dựa trên bằng chứng, phản biện văn minh, chia sẻ
                    tài liệu quý hiếm.
                  </p>
                </div>
                <div className="p-6 bg-red-50 border-l-4 border-red-600 shadow-sm">
                  <p className="font-bold text-red-600 uppercase text-[10px] tracking-widest mb-2">
                    Nghiêm cấm
                  </p>
                  <p className="italic leading-relaxed">
                    Công kích cá nhân, ngôn từ thù hằn, thảo luận chủ đề chính
                    trị không liên quan.
                  </p>
                </div>
              </div>
            </section>
            {/* Section 3 */}
            <section id="data-privacy" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-primary text-4xl">
                  fingerprint
                </span>
                <h3 className="font-headline text-3xl text-on-surface font-bold italic border-b border-primary/10 flex-1 pb-2">
                  3. Bảo mật Dữ liệu
                </h3>
              </div>
              <div className="space-y-8 mt-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                    <span className="material-symbols-outlined text-primary">
                      security
                    </span>
                  </div>
                  <div>
                    <p className="font-headline text-xl font-bold text-on-surface italic">
                      Mã hóa toàn diện
                    </p>
                    <p className="text-on-surface-variant italic mt-1 leading-relaxed">
                      Thông tin tài khoản và nhật ký nghiên cứu được mã hóa bằng
                      giao thức chuẩn học thuật cao cấp.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                    <span className="material-symbols-outlined text-primary">
                      visibility_off
                    </span>
                  </div>
                  <div>
                    <p className="font-headline text-xl font-bold text-on-surface italic">
                      Quyền ẩn danh
                    </p>
                    <p className="text-on-surface-variant italic mt-1 leading-relaxed">
                      Học giả có quyền sử dụng bút danh trong các diễn đàn thảo
                      luận chung để bảo vệ quyền nghiên cứu.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* Section 4 */}
            {/* Section 4: Bản quyền & Trích dẫn */}
            <section id="copyright" className="scroll-mt-32">
              <div className="flex items-center gap-4 mb-10">
                <span className="material-symbols-outlined text-primary text-4xl">
                  copyright
                </span>
                <h3 className="font-headline text-3xl text-on-surface font-bold italic border-b border-primary/10 flex-1 pb-2">
                  4. Bản quyền & Trích dẫn
                </h3>
              </div>

              <div className="p-8 bg-surface-variant/30 border border-outline-variant/30 italic text-secondary leading-loose mb-10 rounded-sm">
                "Mọi tài liệu thuộc Sử Việt, trừ khi có ghi chú khác, đều thuộc
                quyền sở hữu trí tuệ của Viện Lưu Trữ hoặc được cấp phép sử dụng
                phi lợi nhuận."
              </div>

              {/* PHẦN MỚI THÊM VÀO THEO ẢNH */}
              <div className="space-y-6">
                <h4 className="font-headline text-xl font-bold text-on-surface">
                  Cách trích dẫn tiêu chuẩn:
                </h4>

                {/* Khối code trích dẫn màu đen */}
                <div className="bg-[#2A261F] p-10 rounded-sm shadow-2xl relative overflow-hidden group">
                  {/* Hiệu ứng hạt bụi li ti trên nền đen cho giống ảnh */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none grain-overlay"></div>

                  <code className="relative z-10 block font-mono text-base leading-relaxed text-[#f4f1e6] text-justify">
                    [Tên Tác Giả/Tư Liệu],{" "}
                    <span className="text-primary-fixed-dim">
                      Sử Việt - Viện Lưu Trữ Số
                    </span>
                    , truy cập ngày{" "}
                    <span className="text-primary-fixed-dim">
                      [Ngày/Tháng/Năm]
                    </span>
                    , từ{" "}
                    <span className="text-primary-fixed-dim">
                      [URL liên kết]
                    </span>
                    .
                  </code>
                </div>

                <p className="text-sm text-on-surface-variant italic leading-relaxed pr-10">
                  Sử dụng tài liệu cho mục đích thương mại mà không có sự đồng ý
                  bằng văn bản sẽ bị coi là vi phạm nghiêm trọng và sẽ được xử
                  lý theo luật di sản hiện hành.
                </p>
              </div>
            </section>{" "}
          </div>

          <div className="mt-24 pt-12 border-t border-outline-variant/30 flex flex-col items-center text-center gap-6">
            <div className="w-20 h-20 opacity-20 hover:rotate-180 transition-all duration-1000">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHYrkoCO2DhwbPYbmHXpdexxPzpkr_t9kyn2Z06pMWxwjkIqLm6ZeCINXP1hjRZvaDisEpOp1V0UXf-gEQpaeNtUGYKN8RXuNSAT7mHqWrGBL8u7vvwyYeHxGt9g_qaY0-JIFBuRM3FSsBTAMC0mq1pWFulGrpOpTcvAE6N-zNPoW9V86W-KeCd4o0DSbeiDpGz6KwVKSnD6bxtacwSkli7UiZ-DDNwQdHB39KA_6pqlfzlkS2GwLAjHEUmJKGZKmMWP_QGIF9Cxod"
                alt="Dong Son Star"
              />
            </div>
            <p className="font-headline text-2xl text-primary italic font-bold opacity-60">
              Tri Kỷ Sử - Sáng Tương Lai
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default TermsAndPrivacy;
