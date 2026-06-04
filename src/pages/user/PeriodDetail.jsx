import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PeriodDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Dữ liệu mẫu (Thực tế fetch từ API theo id)
  const period = {
    title: "Thời đại Hùng Vương (Hồng Bàng)",
    subtitle: "Nền móng của văn minh Văn Lang (2879 TCN – 258 TCN)",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVTT2QqvD6K9-wucC1WkR7VZnFnP0rjHn6TrcyVqbMkCLEt-GrSb7RFMcwfuFYl9579qyI-CbhlttwgMYFgZtqaEK6hcj7gIzEvC-x8r1WJkxShSTdvgJAiGZim3mnjYlIdJsvmeUw2bip5ou99uGqVBVApXptp6Lpy5LmjEOMY2yZYFGSQzjZdZ5ZBKHO-vZMXFRcwX7gOF6f0s6dB3ZlO7K3KuUYQcdtVpUeP-fDnTut1_okhKeJqvG2OJTJ0xZCroTJlNoWryp1",
    formation: "Theo 'Đại Việt Sử Ký Toàn Thư', Kinh Dương Vương là người sáng lập triều đại Hồng Bàng. Con của ông là Lạc Long Quân kết duyên cùng Âu Cơ, sinh ra bọc trăm trứng, nở ra một trăm người con trai. Người con trưởng được suy tôn làm vua, hiệu là Hùng Vương, đặt quốc hiệu là Văn Lang.",
    stats: [
      { label: "NĂM TCN", value: "2879" },
      { label: "THẾ HỆ VUA", value: "18" }
    ],
    archaeology: {
      title: "Trống đồng Đông Sơn",
      desc: "Không chỉ là nhạc khí, Trống đồng Đông Sơn là biểu tượng của quyền lực và trình độ kỹ thuật luyện kim bậc thầy của người Việt cổ. Các họa tiết trên mặt trống phản ánh đời sống tâm linh, lao động và thế giới quan sơ khai.",
      features: [
        { icon: "star", title: "Ngôi sao trung tâm", detail: "Tượng trưng cho mặt trời, nguồn sống của cư dân nông nghiệp." },
        { icon: "flight", title: "Chim Lạc, Chim Hồng", detail: "Những linh vật biểu hiện khát vọng tự do và cội nguồn tiên rồng." },
        { icon: "house", title: "Nhà sàn mái cong", detail: "Hình ảnh kiến trúc đặc trưng vùng nhiệt đới gió mùa." }
      ],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQUFneCUC9Cm6lKYaxqx655bpWdnD5_cMtbwhcDTyim4obj7j3ks0Mdwv6IhD516mwDIQ1eaCofW15H8uJzDCVkJkzjFyx2Ss8EgYu-hGjbwHtyha0P1WH1gczNvQp7HrXnpAYz8EeJQ_E3YQx8E-RnqQRxeqcLUX5eUFvWTBaK6Bd2hWJWDlx7vtbUsLcfpsMCbVbpyBEB6zeQPYCDjnvaDRx3arsFw2WmzM9n2PimNRz6bLLw_2VjwmykWWcIpajM0F4Vu5HcUnO"
    },
    legends: [
      { title: "Lạc Long Quân & Âu Cơ", desc: "Truyền thuyết về 'Đồng bào' giải thích nguồn gốc chung của người Việt.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm-9HivWvj2gUK8lUhhC0GihEG5o9F51tZG3JoYtL5sfF98R0b-B1WdleKlG7LCnK8PS-Mhm8xsV7qSlgEpBIRtYoWcOAj1WEeOVGiJAj8uKjAEBJLIeBonrTJKAKkpbCL4bea-TkoRxy81ynnIq4_C3pnJsBfGCoXwVc2NP0k4BaOhtxSEMuWd3uwO6GFF358WWNin-y8-St-xIBr5YLtoX5YjLMaxKhA6N9IcsztUBYJRN14Q3ziEQ7pGaHl2D7s3RFsdysHT9Q4" },
      { title: "Phù Đổng Thiên Vương", desc: "Thánh Gióng đánh tan giặc Ân bằng gậy sắt, tượng trưng cho sức mạnh vệ quốc.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDby4IpTpSxcRKHLaTl29gEAIa2Uyz1ucx6FaaJ750Ytr87ZvjT9OlVIoUQutRZvPjAsHywBxIS13-eeLiuLTQwKdhk-CSTR02Q7Y6XqPzpCbB97RYxykst1ZzXFv8V1f_6ytKvS2hHgHdPFJhNhThDa0FiWRlwSapFjhlUUQx08Zy-IvuvsmvFa6e6wSMfmYlTZjscfsyhfXOOy2CJ0NgWAZ_rR0yhcrkhsiVoIIStUogWUQagnLsUOor2FVPepRMJ84j7q6Po9INS" },
      { title: "Lang Liêu", desc: "Sự tích Bánh Chưng, Bánh Giầy răn dạy lòng hiếu thảo và sự trân trọng hạt gạo.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-nyawpZUlqr5F0I5I_BTyGdAtyA3pLMhGzUWS7ISa9K0pyHHS_UlEaV-MMAKXbsCAdyASAX85TDrNNcgsZV_QPiN0JKJDGiIbsBmj0OIwSnJmSC1aFo_h4Tup4BjEySs1a0Sy073niJ9j1Alkw2JYFVOcbEF7sfATVKemA5dM0AICbLs0xEVVZ_gKhFqHABQBD0LVrPhAl4RnhHyxFKLQyJe9Ll7A5J_8UpVBSB491tFBZ9U3BdDs8BTASh2VxAeuxJYto3zrmtf3" }
    ],
    timeline: [
      { year: "2879 TCN", title: "Kinh Dương Vương lập nước Xích Quỷ", desc: "Mở đầu cho thời kỳ Hồng Bàng, lãnh thổ trải rộng vùng Lĩnh Nam." },
      { year: "Thế kỷ VII TCN", title: "Hùng Vương lập nước Văn Lang", desc: "Văn hóa Đông Sơn phát triển rực rỡ, tổ chức bộ lạc liên minh ổn định." },
      { year: "258 TCN", title: "Sự trỗi dậy của Thục Phán", desc: "Kết thúc thời kỳ Hồng Bàng, chuyển sang triều đại Âu Lạc." }
    ]
  };

  return (
    <div className="bg-[#fcf9ee] min-h-screen font-body selection:bg-primary/10 pb-20 parchment-texture">
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
        
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center space-x-2 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
          <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
          <span className="material-symbols-outlined text-xs opacity-40">chevron_right</span>
          <Link to="/periods" className="hover:text-primary transition-colors">Dòng thời gian</Link>
          <span className="material-symbols-outlined text-xs opacity-40">chevron_right</span>
          <span className="text-secondary font-bold italic">{period.title}</span>
        </nav>

        {/* 1. HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-7 space-y-8">
            <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-sm font-mono text-[10px] font-bold uppercase tracking-[0.3em]">Thời kỳ Hồng Bàng</span>
            <h1 className="font-headline text-5xl md:text-7xl text-primary font-bold italic leading-tight tracking-tight">{period.title}</h1>
            <p className="font-headline text-2xl text-secondary italic">{period.subtitle}</p>
            <div className="h-1 w-24 bg-primary"></div>
            <p className="font-body text-xl text-on-surface-variant leading-loose italic drop-cap">
              Đây là buổi bình minh của lịch sử dân tộc Việt Nam, một kỷ nguyên huyền sử nơi các vị vua đầu tiên đã khai phá vùng đất Lĩnh Nam, đặt nền móng cho nền văn hiến rực rỡ.
            </p>
          </div>
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-outline-variant shadow-2xl relative">
              <img src={period.heroImg} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Hero" />
              <div className="absolute inset-0 border-[12px] border-white/10 pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 opacity-10 dong-son-motif animate-pulse"></div>
          </div>
        </section>

        {/* 2. HISTORICAL OVERVIEW */}
        <section className="mb-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white border border-outline-variant/30 p-12 shadow-sm space-y-6">
            <h3 className="font-headline text-3xl text-primary font-bold italic border-b border-primary/10 pb-4">Sự hình thành quốc gia</h3>
            <p className="font-body text-lg leading-loose text-on-surface italic">{period.formation}</p>
            <div className="flex gap-8 pt-6">
              {period.stats.map((s, i) => (
                <div key={i} className="text-center p-6 bg-[#f7f4e9] border border-secondary/10 rounded-sm min-w-[140px]">
                  <p className="font-headline text-4xl text-primary font-bold">{s.value}</p>
                  <p className="font-mono text-[9px] font-bold text-secondary uppercase tracking-widest mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-primary text-white p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden">
             <span className="material-symbols-outlined text-6xl opacity-20 absolute top-6 right-6">format_quote</span>
             <p className="font-headline text-2xl italic leading-relaxed relative z-10">
               "Núi Nghĩa Lĩnh uy nghi, sông Bạch Hạc cuộn chảy, hồn thiêng sông núi ngàn đời che chở cho con cháu Lạc Hồng."
             </p>
             <p className="font-mono text-[10px] font-bold uppercase tracking-widest mt-12 opacity-60">— Cổ Thư Ghi Lại</p>
          </div>
        </section>

        {/* 3. ARCHAEOLOGY SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-20 border-y border-primary/10 mb-32">
           <div className="lg:col-span-5 space-y-8">
              <h2 className="font-headline text-4xl text-primary font-bold italic tracking-tight">Minh chứng Khảo cổ</h2>
              <div className="bg-white p-8 border-l-4 border-primary shadow-sm space-y-6">
                 <h4 className="font-headline text-2xl text-secondary font-bold italic">{period.archaeology.title}</h4>
                 <p className="font-body text-base text-on-surface-variant leading-relaxed italic">{period.archaeology.desc}</p>
                 <ul className="space-y-4">
                    {period.archaeology.features.map((f, i) => (
                      <li key={i} className="flex gap-4 group">
                         <span className="material-symbols-outlined text-primary group-hover:rotate-45 transition-transform">{f.icon}</span>
                         <div>
                            <p className="font-bold text-on-surface italic">{f.title}</p>
                            <p className="text-sm text-on-surface-variant opacity-70 italic">{f.detail}</p>
                         </div>
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
           <div className="lg:col-span-7 flex items-center justify-center relative">
              <div className="w-full max-w-lg aspect-square rounded-full border-[20px] border-primary/5 flex items-center justify-center p-12 bg-white shadow-inner group overflow-hidden">
                 <img src={period.archaeology.img} className="w-full h-full object-cover rounded-full shadow-2xl opacity-90 transition-transform duration-[10s] group-hover:rotate-45" alt="Drum" />
              </div>
              <div className="absolute top-0 right-0 bg-accent text-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest shadow-xl">Di Sản Quốc Gia</div>
           </div>
        </section>

        {/* 4. LEGENDS GRID */}
        <section className="mb-32">
           <h2 className="font-headline text-4xl text-primary font-bold italic text-center mb-16 underline decoration-primary/10 underline-offset-8 uppercase tracking-tighter">Nhân vật & Truyền thuyết</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {period.legends.map((l, i) => (
                <div key={i} className="group cursor-pointer">
                   <div className="aspect-video overflow-hidden rounded-sm border border-outline-variant shadow-md mb-6 relative">
                      <img src={l.img} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt={l.title} />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   </div>
                   <h4 className="font-headline text-2xl text-primary font-bold italic group-hover:underline">{l.title}</h4>
                   <p className="font-body text-sm text-on-surface-variant leading-relaxed italic mt-2">{l.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 5. TIMELINE SECTION */}
        <section className="mb-32 max-w-4xl mx-auto">
           <h2 className="font-headline text-4xl text-primary font-bold italic mb-16 text-center">Biên niên kỷ Hồng Bàng</h2>
           <div className="relative border-l-2 border-primary/10 pl-12 space-y-12">
              {period.timeline.map((t, i) => (
                <div key={i} className="relative group">
                   <div className="absolute -left-[57px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-[#fcf9ee] group-hover:bg-primary transition-colors"></div>
                   <div className="bg-white p-8 border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all">
                      <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">{t.year}</span>
                      <h4 className="font-headline text-2xl text-on-surface font-bold italic mt-2">{t.title}</h4>
                      <p className="font-body text-base text-on-surface-variant italic mt-2">{t.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </section>

      </main>
    </div>
  );
};

export default PeriodDetail;