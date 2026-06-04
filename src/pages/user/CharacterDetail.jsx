import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CharacterDetail = () => {
  const { id } = useParams();

  // Tự động cuộn lên đầu trang khi vào
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Dữ liệu mẫu cho Lê Thái Tổ (Sau này bạn sẽ fetch từ API theo id)
  const character = {
    name: "Lê Thái Tổ (Lê Lợi)",
    dynastyTitle: "Sáng lập triều Hậu Lê",
    templeName: "Thái Tổ",
    eraName: "Thuận Thiên",
    reign: "1428 — 1433",
    portrait: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-lVrS3LMr6Zms2FT8YRmly_7b25lqxl3RpuoAi2JGXD5zpJ8GJRWjaguZWAkcQAaDNndOV7i6fMX4OjzMo88RvY5r16XHFIC0mZNZ-APzJsPq1bAUOl16PIrJf5SegotiZpv641eq-TmE7n5rfCO8xf0SbCXX8FiWN-tiFv-Vghj05wwH9XabjNnS-otCjl9fmTq_XwJ8DDQBpJ_uZewR-N9lbxMb0Kz3tueWGiPnhatompKkLCiovr5UjFrw_eX9F6CZLhBZrwjQ",
    quote: "Bình Ngô đại cáo – Bản tuyên ngôn độc lập thứ hai của dân tộc được viết dưới thời đại của Ngài, khẳng định chủ quyền lãnh thổ và tư tưởng nhân nghĩa Việt Nam.",
    description: "Lê Thái Tổ, tên húy là Lê Lợi, là vị hoàng đế sáng lập triều đại Hậu Lê – triều đại quân chủ tồn tại lâu nhất trong lịch sử Việt Nam. Xuất thân từ hào trưởng đất Lam Sơn, ông đã dành 10 năm gian khổ lãnh đạo nghĩa quân đánh đuổi giặc Minh, khôi phục nền độc lập cho Đại Việt.",
    milestones: [
      { time: "MÙA XUÂN, 1418", title: "Khởi nghĩa Lam Sơn", desc: "Lê Lợi xưng là Bình Định Vương, truyền hịch kêu gọi nhân dân đánh đuổi giặc Minh tại căn cứ Lam Sơn, Thanh Hóa." },
      { time: "1416", title: "Hội thề Lũng Nhai", desc: "Hợp sức cùng 18 người anh em trung liệt cắt máu ăn thề, nguyện một lòng quyết tử cho tổ quốc quyết sinh." },
      { time: "1427", title: "Chiến thắng Chi Lăng - Xương Giang", desc: "Đập tan 15 vạn quân viện binh của Liễu Thăng, buộc quân Minh phải giảng hòa và rút quân về nước." },
      { time: "1428", title: "Lên ngôi Hoàng đế", desc: "Chính thức đăng quang tại điện Kính Thiên, Thăng Long. Đổi tên nước thành Đại Việt, đặt niên hiệu Thuận Thiên.", isSpecial: true }
    ],
    relatedFigures: [
      { name: "Nguyễn Trãi", role: "Quốc sư, Tác gia", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdMgquRu3yaUhok0e-zl-0bR4PEYP0Oew3a6GoMSdu5mgrDt8tVvo6dB_WgcYbBOc2zcDyfJCr8XC05LONTKT_gh2DNHXqJEDv0Msk4-yyTIVzH2gk1Qaj45EysDzrB9lLuNhxwUp_uV-PazmnfDYs_DX2d4WPvrIVem_XaQ0la4bE_V19TAOKFHc3FyDQkAKvaLksAqoJFfMU5iVt-s2jSTU3ymOpZUJp1yTggyD76wk9ntNEqJPhurAQlYVYt4g6rYQ03zFR9HOV" },
      { name: "Lê Sát", role: "Đại công thần", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMszKAkrRVdSQy7xB7nNuzV9ES2l0iqbPtr-SHDqj5TKThpPFqNXWjDOxHbaDwCheafYQVJb6xw-FcPOh9TYgZPjqmgTqUUtbVZWxxxS2ovBFgpGCsFW474VYaWwNEEaCih8NEbI81FdQnu_CZGEhwolDdya0h319s6vkLvH0aKdU_RwGPto5KH7-zV9obCybf23ws8bXMznCpa1oFC4zPPyC8EHcKVUkaXMFYe1Hkxs69aYMUz5hlGHy-AEohvvJyV8NI6WWYsU65" },
      { name: "Nguyễn Xí", role: "Tướng tiên phong", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcycV1ySqPKKuZDbnjU993BULakAMgfCOujdrOjo8SyV0voN4wC0szw65q9-RgdIIvmuuOH5v6-4CNQ5Waajs-mq8gFWBbvmJk1RSwn5-5_wMG4Y04jgjJKn_jpS4sXMiH8U0YT1oGpqax_ntb_P0ywP6Kk1j-LNbMazIEsrwRZqCbhrSqGRSuuxAtGV3OjrKn2cSpCo0Up46ipeMy1uEuzmb33BcldVmKfnC3MIKb_DT83n06RbmqPfsFEFaeGNEsQ7ONzCDTcnn1" }
    ],
    steleImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUmvnwzdL20uy5yXpLNGvMOXcjDflpZDV9mE5K7UqNFe9xlxfzbha5En8Rz-Y4jeLEPXLJVpOKztruQmrTzGtRWyzVffac3ez-0lu4W36FgcfTtAOOwqSMWS2sCupDK66ddjM1TA3CuIdKvyhdDREOa5CQl5NuNwEKNdCGCTLpS87hnUfIyDbMUU11RYhFPXpdGLvQqQtXyNaxPZIvbCBL0-EXzaulG9S8fxlau3D_qTO6LJaeNqjorzgpEQGGU0bQHoge4qZtqo3j"
  };

  return (
    <div className="bg-[#fcf9ee] min-h-screen font-body selection:bg-primary/10 pb-20">
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
        
        {/* 1. HERO SECTION: PORTRAIT & IDENTITY */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          {/* Ảnh chân dung hoàng gia */}
          <div className="lg:col-span-5 relative group">
             <div className="absolute -inset-4 border border-secondary/10 pointer-events-none dong-son-border"></div>
             <div className="overflow-hidden border border-secondary/20 shadow-2xl bg-white relative">
                <img src={character.portrait} className="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-105" alt="Portrait" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c15] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                   <span className="inline-block px-4 py-1 bg-primary text-white font-mono text-[10px] font-bold uppercase tracking-widest mb-4 shadow-lg">{character.dynastyTitle}</span>
                   <h1 className="font-headline text-5xl md:text-6xl text-white font-bold italic tracking-tight">{character.name}</h1>
                </div>
             </div>
          </div>

          {/* Thông tin định danh */}
          <div className="lg:col-span-7 pt-6">
            <div className="flex flex-wrap gap-12 mb-12">
               <InfoItem label="Miếu hiệu" value={character.templeName} />
               <InfoItem label="Niên hiệu" value={character.eraName} />
               <InfoItem label="Trị vì" value={character.reign} />
            </div>
            <p className="font-headline text-2xl text-primary/80 leading-relaxed italic mb-8 border-l-4 border-primary pl-8">
              "{character.quote}"
            </p>
            <p className="font-body text-lg text-on-surface leading-loose italic">
              {character.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
               <ActionCard icon="auto_stories" title="Gia thế & Xuất thân" desc="Chi tiết về dòng tộc Lê ở Lam Sơn và lý do dấy binh." />
               <ActionCard icon="policy" title="Cải cách Hành chính" desc="Các chính sách đặt nền móng cho thái bình thịnh trị." />
            </div>
          </div>
        </section>

        {/* 2. TIMELINE: HÀNH TRẠNG LỊCH SỬ */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px bg-primary/20 flex-grow"></div>
            <h2 className="font-headline text-4xl text-primary font-bold italic tracking-tight">Hành Trạng Lịch Sử</h2>
            <div className="h-px bg-primary/20 flex-grow"></div>
          </div>

          <div className="max-w-4xl mx-auto relative border-l-2 border-primary/10 pl-10 space-y-16">
            {character.milestones.map((m, i) => (
              <div key={i} className="relative group">
                {/* Nút tròn mốc thời gian */}
                <div className={`absolute -left-[49px] top-0 w-4 h-4 rounded-full border-4 border-[#fcf9ee] z-10 transition-transform group-hover:scale-150 ${m.isSpecial ? 'bg-primary scale-125 shadow-lg' : 'bg-secondary'}`}></div>
                
                <div className={`${m.isSpecial ? 'p-8 bg-white border border-outline-variant shadow-xl rounded-lg' : ''}`}>
                   <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest ${m.isSpecial ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}`}>
                      {m.time}
                   </span>
                   <h4 className="font-headline text-2xl text-on-surface font-bold italic mt-3 mb-2">{m.title}</h4>
                   <p className="font-body text-on-surface-variant leading-relaxed italic">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. BENTO GRID: RELATED & HERITAGE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
           {/* Nhân vật liên quan */}
           <div className="lg:col-span-8 bg-white border border-outline-variant p-10 shadow-sm">
              <h3 className="font-headline text-3xl text-primary font-bold italic mb-10 border-b border-primary/10 pb-4">Nhân vật liên quan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                 {character.relatedFigures.map((fig, i) => (
                   <div key={i} className="text-center group cursor-pointer">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/10 group-hover:border-primary transition-all mb-4 shadow-lg">
                         <img src={fig.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={fig.name} />
                      </div>
                      <h5 className="font-headline text-lg font-bold text-on-surface group-hover:text-primary transition-colors">{fig.name}</h5>
                      <p className="font-mono text-[9px] font-bold uppercase opacity-50 tracking-tighter mt-1">{fig.role}</p>
                   </div>
                 ))}
              </div>
           </div>

           {/* Văn bia & Di sản */}
           <div className="lg:col-span-4 bg-[#1c1c15] text-[#fcf9ee] p-10 flex flex-col shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10"><span className="material-symbols-outlined text-7xl text-white">temple_buddhist</span></div>
              <h3 className="font-headline text-2xl font-bold italic text-accent mb-6 relative z-10">Văn Bia & Di Sản</h3>
              <p className="font-body text-sm opacity-80 leading-relaxed italic mb-8 relative z-10">
                Bia Vĩnh Lăng tại Lam Kinh là một trong những kiệt tác văn bia nghệ thuật thời Lê Sơ, tóm tắt cuộc đời và sự nghiệp vĩ đại của Thái Tổ.
              </p>
              <div className="mt-auto border border-white/20 p-2 relative z-10">
                 <img src={character.steleImg} className="w-full aspect-square object-cover grayscale opacity-60 group-hover:opacity-100 transition-opacity duration-700" alt="Heritage" />
                 <p className="font-mono text-[9px] font-bold uppercase text-center mt-4 tracking-[0.2em] text-accent">Lam Kinh, Thanh Hóa</p>
              </div>
           </div>
        </section>

        {/* 4. NEXT NAVIGATION */}
        <section className="border-t border-primary/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex gap-4">
              <button className="flex items-center gap-3 px-8 py-3 border-2 border-primary/20 text-primary font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-primary/5 transition-all">
                <span className="material-symbols-outlined text-sm">arrow_back</span> Nhân vật trước
              </button>
              <button className="flex items-center gap-3 px-8 py-3 bg-primary text-white font-mono text-[10px] font-bold uppercase tracking-widest hover:brightness-110 shadow-xl transition-all">
                Nhân vật tiếp theo <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
           </div>
           <div className="text-center md:text-right">
              <p className="font-mono text-[9px] font-bold text-secondary uppercase tracking-[0.3em] mb-1">Khám phá tiếp</p>
              <p className="font-headline text-2xl text-on-surface font-bold italic">Lê Thái Tông — Người kế vị</p>
           </div>
        </section>
      </main>
    </div>
  );
};

// Component con hỗ trợ
const InfoItem = ({ label, value }) => (
  <div className="flex flex-col border-l-2 border-primary pl-5">
    <span className="font-mono text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-1 opacity-60">{label}</span>
    <span className="font-headline text-2xl text-on-surface font-bold italic">{value}</span>
  </div>
);

const ActionCard = ({ icon, title, desc }) => (
  <div className="p-8 bg-white border border-outline-variant shadow-sm group hover:border-primary transition-all cursor-pointer">
    <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
    <h3 className="font-headline text-xl font-bold italic text-on-surface mb-2">{title}</h3>
    <p className="text-on-surface-variant text-sm italic leading-relaxed">{desc}</p>
  </div>
);

export default CharacterDetail;