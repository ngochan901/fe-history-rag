import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ArticleDetail = () => {
  const { slug } = useParams();
  const [likes, setLikes] = useState(1240);
  const [isLiked, setIsLiked] = useState(false);

  // Dữ liệu mẫu (Thực tế sẽ fetch từ API dựa trên slug)
  const article = {
    title: "Kiến trúc Cung điện Thăng Long qua các triều đại Lý-Trần",
    author: "Học giả Trần Duy Hùng",
    authorRole: "Viện Nghiên cứu Kinh thành",
    authorImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMHcdTOW_dxMtuwmxyW--OBFFCWbw1pKW6o872X-BC7wFqD-Aj2QfeGlztAlrOX6LWdwjTT3qIn-ieBA5v27gxwMY9PxkgRWcUWg3-PZSNcRwmQFJtnrt2XLelaJ-t0G8QB38Me2u3YcCyEowczw7cRzGYHPTpbEWpNN3lyEfrPrxyLX0mkEOCJT_be9zdImqCPMR-puG43GYWbpnqO15H5i6jecJLQ_FkJYy7KCRzb-57sQ7zfQnZ6ql98Ks24ceEcGRROhLPKDgY",
    publishedAt: "14 Tháng 10, 2023",
    readingTime: "15 phút đọc",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVaoTt7OmvfdX-z3YyqFqAX4Y1Ihkjvs5emJRmKGgOo_V6KXn2TDBUhtjxjWpdefmw2UYxcc_dGVKRTPpQx97q5bU8-ZHl88UUpDGcWY0yc0p91hGp4TLMwXj3Eo0X9m6jm4Ur6KjP6l6YR6Z-NPrix-C_2iLcQK89e0crl9yF_2yxjOETGgWJEiB_h6rEWBU-9uW1uLjoc5SpY7pGCmiyVL6pXDP1ZGb6DtJ2atbMIOtuGYVFZqRsdxH_-D9zlp5p05W4fuv1p9ft",
    imageCaption: "Phối cảnh 3D Điện Kính Thiên thời Lê Sơ dựa trên các hiện vật khảo cổ học tìm thấy tại khu di tích Hoàng thành Thăng Long.",
  };

  const handleLike = () => {
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-[#fcf9ee] min-h-screen font-body selection:bg-primary/10">
      {/* Background Pattern Overlay */}
      <div className="grain-overlay pointer-events-none fixed inset-0 z-0 opacity-5"></div>

      <main className="max-w-[1280px] mx-auto px-6 md:px-16 py-12 flex flex-col lg:flex-row gap-16 relative z-10">
        
        {/* --- CỘT TRÁI: NỘI DUNG BÀI VIẾT --- */}
        <article className="flex-1 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-10 text-on-surface-variant font-mono text-[10px] uppercase tracking-widest">
            <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
            <span className="material-symbols-outlined text-xs opacity-40">chevron_right</span>
            <Link to="/periods" className="hover:text-primary transition-colors">Thời kỳ</Link>
            <span className="material-symbols-outlined text-xs opacity-40">chevron_right</span>
            <span className="text-primary font-bold italic">Kiến trúc Thăng Long</span>
          </nav>

          {/* Header Section */}
          <header className="mb-12">
            <h1 className="font-headline text-5xl md:text-6xl text-primary font-bold leading-tight mb-8 italic tracking-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 py-6 border-y border-outline-variant/30">
              <div className="flex items-center gap-4">
                <img src={article.authorImg} alt="Author" className="w-12 h-12 rounded-full object-cover border border-outline-variant/30" />
                <div>
                  <p className="font-headline font-bold text-primary text-sm italic leading-none">{article.author}</p>
                  <p className="text-[9px] font-mono uppercase tracking-tighter text-on-surface-variant mt-1">{article.authorRole}</p>
                </div>
              </div>
              <div className="hidden md:block h-8 w-px bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="text-on-surface-variant font-mono text-[9px] uppercase tracking-widest opacity-60">Ngày xuất bản</span>
                <time className="font-bold text-xs">{article.publishedAt}</time>
              </div>
              <div className="hidden md:block h-8 w-px bg-outline-variant/30"></div>
              <div className="flex flex-col">
                <span className="text-on-surface-variant font-mono text-[9px] uppercase tracking-widest opacity-60">Thời lượng</span>
                <span className="font-bold text-xs">{article.readingTime}</span>
              </div>
            </div>
          </header>

          {/* Hero Image Section */}
          <figure className="mb-16 group">
            <div className="aspect-[16/9] w-full overflow-hidden rounded-sm shadow-2xl border border-outline-variant/20 relative">
              <img src={article.heroImage} alt="Cover" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
            </div>
            <figcaption className="mt-6 text-center italic text-on-surface-variant font-body text-sm leading-relaxed border-l-2 border-primary pl-6 max-w-2xl mx-auto">
              {article.imageCaption}
            </figcaption>
          </figure>

          {/* Article Body Content */}
          <div className="prose prose-stone max-w-none prose-lg">
            {/* Drop Cap styling applied via CSS in App.css or Tailwind utility */}
            <p className="font-body text-xl leading-loose text-on-surface mb-8 drop-cap first-letter:text-7xl first-letter:font-headline first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              Thăng Long, kinh đô ngàn năm văn hiến, không chỉ là trung tâm chính trị mà còn là biểu tượng rực rỡ nhất của nền kiến trúc Đại Việt. Dưới thời Lý và Trần, việc xây dựng cung điện không chỉ đáp ứng nhu cầu nghi lễ mà còn thể hiện tư duy vũ trụ luận sâu sắc và niềm tự hào tự chủ của dân tộc sau nghìn năm Bắc thuộc.
            </p>
            
            <h2 className="font-headline text-3xl text-primary font-bold italic mt-12 mb-6">Cấu trúc đa tầng và nghệ thuật chạm khắc</h2>
            <p className="font-body text-lg leading-relaxed text-on-surface mb-8">
              Đặc điểm nổi bật của kiến trúc cung điện thời Lý chính là sự kết hợp nhuần nhuyễn giữa phong cách Phật giáo và tính chất cung đình. Các cột gỗ lim khổng lồ đặt trên chân tảng đá chạm khắc hoa sen, mây tản là minh chứng cho sự tinh xảo bậc nhất. Hệ thống đấu củng - một thành tựu kỹ thuật phức tạp - giúp nâng đỡ những bộ mái chồng diêm đồ sộ.
            </p>

            <blockquote className="my-12 p-10 bg-surface-container-low border-l-4 border-primary relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5"><span className="material-symbols-outlined text-8xl">format_quote</span></div>
               <p className="font-headline text-2xl text-primary italic font-medium leading-relaxed relative z-10">
                 "Kinh đô Thăng Long dưới thời Lý là một kiệt tác của sự hòa hợp giữa con người và thiên nhiên, giữa quyền uy đế chế và tinh thần từ bi của đạo Phật."
               </p>
            </blockquote>

            <p className="font-body text-lg leading-relaxed text-on-surface mb-8">
              Bước sang thời Trần, mặc dù kế thừa những tinh hoa từ thời Lý, kiến trúc cung điện bắt đầu dịch chuyển sang vẻ đẹp khỏe khoắn, thực dụng hơn, phản ánh tinh thần thượng võ của một dân tộc vừa trải qua ba cuộc kháng chiến chống Nguyên - Mông oanh liệt.
            </p>
          </div>

          {/* Engagement Section */}
          <section className="py-12 border-t border-outline-variant/30 mt-20">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-8">
                <button 
                  onClick={handleLike}
                  className={`flex items-center gap-2 group transition-all ${isLiked ? 'text-primary' : 'text-on-surface-variant hover:text-primary'}`}
                >
                  <span className={`material-symbols-outlined transition-all ${isLiked ? 'fill-1' : ''}`} style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "" }}>favorite</span>
                  <span className="font-mono text-[11px] font-bold tracking-widest">{likes.toLocaleString()}</span>
                </button>
                <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary group transition-all">
                  <span className="material-symbols-outlined">chat_bubble</span>
                  <span className="font-mono text-[11px] font-bold tracking-widest">42 THẢO LUẬN</span>
                </button>
              </div>
              <button className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg font-headline font-bold text-[10px] uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-95 transition-all">
                <span className="material-symbols-outlined text-sm">bookmark</span> LƯU TƯ LIỆU
              </button>
            </div>

            {/* Comment Section Placeholder */}
            <div className="mt-16 space-y-10">
              <h3 className="font-headline text-2xl text-primary font-bold italic">Đàm đạo học thuật</h3>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div className="flex-1">
                  <textarea className="w-full bg-white/50 border-b-2 border-outline-variant focus:border-primary outline-none p-4 font-body text-sm italic transition-all resize-none h-24" placeholder="Gửi ý kiến phản biện hoặc bổ sung..."></textarea>
                  <div className="flex justify-end mt-4">
                    <button className="bg-primary text-white px-8 py-2 rounded font-mono text-[10px] font-bold uppercase tracking-widest">Gửi luận điểm</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* --- CỘT PHẢI: SIDEBAR --- */}
        <aside className="w-full lg:w-[320px] space-y-12">
          
          {/* Related Entities Card */}
          <section className="bg-white p-8 border border-outline-variant/30 shadow-sm relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
            <h4 className="font-mono text-[10px] text-primary uppercase font-bold tracking-[0.2em] border-b border-outline-variant/30 pb-3 mb-8">Thực thể liên quan</h4>
            <div className="space-y-6">
              <EntityLink icon="history_edu" title="Nhà Lý (1009–1225)" type="Triều đại" />
              <EntityLink icon="map" title="Kinh thành Thăng Long" type="Địa danh" />
              <EntityLink icon="person" title="Lý Thái Tổ" type="Nhân vật" />
            </div>
          </section>

          {/* Citations Section */}
          <section className="p-8 border-l-2 border-primary/20 space-y-8 bg-primary/[0.02]">
            <h4 className="font-mono text-[10px] text-secondary uppercase font-bold tracking-[0.2em]">Tài liệu trích dẫn</h4>
            <ul className="space-y-8">
              <li className="group cursor-pointer">
                <p className="font-headline text-lg text-primary font-bold italic leading-tight group-hover:underline">Đại Việt Sử Ký Toàn Thư</p>
                <p className="font-body text-[11px] text-on-surface-variant mt-1 opacity-70">Ngô Sĩ Liên, Thế kỷ XV</p>
              </li>
              <li className="group cursor-pointer">
                <p className="font-headline text-lg text-primary font-bold italic leading-tight group-hover:underline">Việt Sử Lược</p>
                <p className="font-body text-[11px] text-on-surface-variant mt-1 opacity-70">Khuyết danh, Thế kỷ XIV</p>
              </li>
              <li className="group cursor-pointer">
                <p className="font-headline text-lg text-primary font-bold italic leading-tight group-hover:underline">Khảo cổ học 18 Hoàng Diệu</p>
                <p className="font-body text-[11px] text-on-surface-variant mt-1 opacity-70">Viện Hàn lâm KHXH, 2004</p>
              </li>
            </ul>
          </section>

          {/* AI Helper Banner */}
          <div className="bg-[#6B1515] p-8 rounded-xl text-white space-y-4 shadow-2xl relative overflow-hidden group cursor-pointer">
             <div className="absolute inset-0 dong-son-pattern opacity-10 group-hover:scale-110 transition-transform duration-[10s]"></div>
             <span className="material-symbols-outlined text-accent text-3xl relative z-10">psychology</span>
             <h5 className="font-headline text-xl font-bold italic relative z-10">Hỏi đáp với Sử Quan AI</h5>
             <p className="text-[11px] opacity-70 leading-relaxed relative z-10 italic">Giải mã sâu hơn về kiến trúc Thăng Long thông qua trí tuệ nhân tạo RAG.</p>
             <button className="w-full py-2 bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white/20 transition-all relative z-10">Bắt đầu thảo luận</button>
          </div>
        </aside>
      </main>
    </div>
  );
};

// Component con cho Sidebar Links
const EntityLink = ({ icon, title, type }) => (
  <Link to="#" className="flex items-center gap-4 group">
    <div className="w-10 h-10 bg-primary/5 flex items-center justify-center rounded border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300">
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
    </div>
    <div>
      <p className="font-headline font-bold text-on-surface text-sm italic group-hover:text-primary transition-colors">{title}</p>
      <p className="font-mono text-[9px] uppercase opacity-50 tracking-tighter">{type}</p>
    </div>
  </Link>
);

export default ArticleDetail;