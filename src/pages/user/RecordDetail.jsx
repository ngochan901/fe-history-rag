import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const RecordDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Dữ liệu mẫu (Thực tế fetch từ API theo id)
  const record = {
    archiveId: "1479-DV",
    title: "Đại Việt Sử Ký Toàn Thư - Bản in Nội các quan bản",
    description: "Bộ chính sử lớn nhất Việt Nam thời trung đại, được biên soạn dựa trên cơ sở kế thừa các bộ sử cũ như Đại Việt Sử ký của Lê Văn Hưu và Phan Phu Tiên, tạo nên một hệ thống biên niên sử hoàn chỉnh và đồ sộ nhất.",
    metadata: [
      { label: "Tác giả chính", value: "Ngô Sĩ Liên" },
      { label: "Hoàn thành", value: "1479 (Hồng Đức)" },
      { label: "Thể loại", value: "Biên niên kỷ" },
      { label: "Bản in nổi bật", value: "Chính Hòa (1697)" }
    ],
    coverImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDa-iYa8ONYxLBuvVkq6BoTjrT_IUXe4ow4Lsi6cHfwJXeWV5FWXvPO0Fs_uMBUra6CORueXqhIoWwP_EZgFmmhOjJgylZaENGN4CKrYz-lfMLx5N_qDmHaFCpi2sH3EOsDDxmavVYHh6MRTBmSsNt9CHIpc1H2TgIqYWOkdo7psAIUx9W4-H2h-QIELCJAXibNsCuUhlClnEyENl1is6L8mrtwdNWY2tjY1NNp9CtZdlhYC9JkgO10_w8UwME5kP2Ct3Xz8cnLMV3",
    importance: "Đại Việt Sử Ký Toàn Thư không chỉ là một công trình lịch sử mà còn là văn bản định hình quốc gia. Nó thiết lập một dòng chảy lịch sử liên tục từ thời Hồng Bàng đến thời Lê Sơ, khẳng định chủ quyền văn hóa và độc lập chính trị của Đại Việt.",
    structure: [
      { title: "Ngoại kỷ", desc: "Từ thời Hồng Bàng đến hết thời 12 sứ quân (967).", icon: "history_toggle_off" },
      { title: "Bản kỷ", desc: "Từ triều Đinh (968) đến triều Lê Sơ (năm 1433).", icon: "workspace_premium" },
      { title: "Bản kỷ tục biên", desc: "Các phần được bổ sung sau này về nhà Mạc và Lê Trung Hưng.", icon: "edit_note" }
    ],
    originalText: "大越史記全書",
    translatedText: "Xưa nay, nước nào có sử nước nấy. Nước Đại Việt ta từ khi dựng nước đến nay, đời nào cũng có ghi chép. Song vì binh hỏa của giặc Ngô (nhà Minh) đốt phá, nên sử cũ đã mất mát nhiều..."
  };

  return (
    <div className="bg-[#fcf9ee] min-h-screen font-body selection:bg-primary/10 pb-20">
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
        
        {/* --- 1. HERO & METADATA --- */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 items-center">
          <div className="lg:col-span-8 space-y-8">
            <span className="text-secondary font-mono text-[10px] font-bold tracking-[0.3em] uppercase block border-l-4 border-accent pl-4">
              Archive Record #{record.archiveId}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl text-primary font-bold italic leading-tight tracking-tight">
              {record.title}
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed italic max-w-3xl">
              {record.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {record.metadata.map((item, i) => (
                <div key={i} className="p-5 border border-outline-variant/30 rounded-sm bg-white/50 shadow-sm group hover:border-primary transition-colors">
                  <p className="text-secondary font-mono text-[9px] font-bold uppercase tracking-widest mb-2 opacity-60">{item.label}</p>
                  <p className="font-headline text-xl text-on-surface font-bold italic">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
               <button className="bg-primary text-white px-8 py-4 rounded-lg font-headline font-bold text-sm shadow-xl hover:brightness-110 transition-all flex items-center gap-3 active:scale-95">
                  <span className="material-symbols-outlined text-lg">download</span> Tải bản PDF Nghiên cứu
               </button>
               <button className="border-2 border-secondary text-secondary px-8 py-4 rounded-lg font-headline font-bold text-sm hover:bg-secondary/5 transition-all flex items-center gap-3">
                  <span className="material-symbols-outlined text-lg">search_insights</span> Tra cứu mục lục số
               </button>
            </div>
          </div>

          <div className="lg:col-span-4 relative group">
             <div className="absolute -inset-4 border border-secondary/10 pointer-events-none dong-son-border"></div>
             <div className="overflow-hidden border border-outline-variant shadow-2xl relative">
                <img src={record.coverImg} className="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-105" alt="Manuscript" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-sm border border-outline-variant/30">
                   <p className="text-[10px] text-secondary font-mono font-bold italic uppercase tracking-tighter">Hình ảnh: Một trang bản thảo Nội các quan bản</p>
                </div>
             </div>
          </div>
        </section>

        {/* --- 2. BENTO GRID: IMPORTANCE & STRUCTURE --- */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
           <div className="lg:col-span-2 bg-white border border-outline-variant/30 p-10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                 <span className="material-symbols-outlined text-[150px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
              </div>
              <h3 className="font-headline text-3xl text-primary font-bold italic mb-8 flex items-center gap-4">
                 <span className="w-12 h-[2px] bg-primary"></span> Tầm quan trọng học thuật
              </h3>
              <p className="font-body text-lg text-on-surface-variant leading-loose italic mb-8 relative z-10">
                 {record.importance}
              </p>
              <div className="flex flex-wrap gap-3">
                 {["Imperial Decree", "National Sovereignty", "Confucian Ethics"].map(tag => (
                   <span key={tag} className="bg-[#f7f4e9] text-secondary px-4 py-1.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest border border-secondary/10">
                     {tag}
                   </span>
                 ))}
              </div>
           </div>

           <div className="bg-[#1c1c15] text-[#fcf9ee] p-10 shadow-2xl relative">
              <h3 className="font-headline text-2xl font-bold italic text-accent mb-8 border-b border-white/10 pb-4">Cấu trúc bộ sử</h3>
              <ul className="space-y-8">
                 {record.structure.map((item, i) => (
                   <li key={i} className="flex gap-5 group">
                      <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-black transition-all duration-500">
                         <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                      </div>
                      <div>
                         <h4 className="font-headline text-lg font-bold text-accent uppercase tracking-wider">{item.title}</h4>
                         <p className="text-xs opacity-60 italic leading-relaxed mt-1">{item.desc}</p>
                      </div>
                   </li>
                 ))}
              </ul>
           </div>
        </section>

        {/* --- 3. DIGITAL PREVIEW: MANUSCRIPT & TRANSLATION --- */}
        <section className="mb-20">
           <div className="flex justify-between items-end mb-10">
              <div>
                 <h2 className="font-headline text-4xl text-primary font-bold italic tracking-tight">Bản số hóa & Dịch nghĩa</h2>
                 <p className="text-secondary font-mono text-[10px] font-bold uppercase tracking-widest mt-2">Đối chiếu Hán-Nôm gốc và Quốc ngữ</p>
              </div>
              <div className="flex gap-2">
                 <button className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-white transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
                 <button className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:bg-white transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 border border-outline-variant/50 shadow-2xl overflow-hidden rounded-sm">
              {/* Cột Hán Nôm */}
              <div className="bg-[#1c1c15] p-12 text-[#f4f1e6] flex flex-col items-center justify-center relative min-h-[500px]">
                 <div className="absolute top-6 left-6 text-[9px] font-mono font-bold uppercase opacity-30 tracking-[0.3em]">Digital Scan: Cabinet Edition</div>
                 <p className="font-headline text-6xl md:text-8xl leading-[1.8] text-center" style={{ writingMode: 'vertical-rl' }}>
                    {record.originalText}
                 </p>
                 <div className="mt-12 pt-8 border-t border-white/10 w-full text-center">
                    <p className="font-body text-xs italic opacity-40">Tờ 1a, Quyển Thủ - Tựa của Ngô Sĩ Liên</p>
                 </div>
              </div>
              {/* Cột Dịch nghĩa */}
              <div className="bg-white p-12 flex flex-col">
                 <div className="mb-10">
                    <span className="inline-block bg-primary/5 text-primary px-4 py-1 rounded-sm font-mono text-[10px] font-bold uppercase tracking-widest mb-6">Bản dịch hiện đại</span>
                    <h4 className="font-headline text-3xl font-bold italic text-on-surface mb-6">Trích lược lời tựa</h4>
                    <p className="font-body text-lg leading-[2] text-on-surface-variant italic">
                       "{record.translatedText}"
                    </p>
                 </div>
                 <div className="mt-auto pt-8 border-t border-outline-variant/30 flex justify-between items-center">
                    <p className="text-[10px] font-mono font-bold text-secondary uppercase">Nguồn: Viện Nghiên cứu Hán Nôm</p>
                    <button className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em] border-b border-primary/20 hover:border-primary transition-all flex items-center gap-2">
                       XEM TOÀN CHƯƠNG <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </button>
                 </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
};

export default RecordDetail;