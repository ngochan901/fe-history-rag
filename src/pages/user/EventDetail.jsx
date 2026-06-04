import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();

  // Cuộn lên đầu trang khi vào trang mới
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Giả lập dữ liệu fetch từ API dựa trên ID
  // Hiện tại đang hiển thị mặc định Trận Bạch Đằng 1288
  const eventData = {
    title: "Đại Thắng Bạch Đằng Giang (1288)",
    subtitle: "Trận chiến vĩ đại nhất trong lịch sử chống ngoại xâm, nơi trí tuệ Đại Việt đánh bại gót ngựa bạo tàn của đế quốc Nguyên Mông trên dòng sông lịch sử.",
    time: "09/04/1288",
    location: "Sông Bạch Đằng",
    forces: "Trần vs Nguyên",
    result: "Toàn thắng",
    heroImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4fTrgf9I1tIhiNA3vcLwZ3WIECExoznhUuCKpoMB8ZyryoQDGgp9vepvx-c5mlCPKPN67vQKnu6WrqSTtkr7y4TGimCJ52wClGnEoVbOMJ8fQ9vlGlsTSMsaJTJDuUdvdjZSHPCfGhPz9xXcZCzCvNbWzxsEb4la90GnDBwyJ9YWo41G3q_j_EoZ1MkRMPa5RQxPGFzHfdEk0-dFR3iNY2nPcjqY5i1pccRq2bhQbra830cd4PUZQRIT_hzxNcEtJNyCRzJwPqudP",
    mapImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7BdxYtdPrztVU_5iGWrtkm73OzIP1jvJ2yQ3EcraekuneY8I26x67sBev0SG95y45jIbG4xrKbtg8qhn6k7ZEJmRLDxLfUGRJuy5yrENr4_C9iR0aZlNxzqQV26U3chMs5fR1CnhzmNBd735FbdLyIXcPATyBpze7WiFn3ayZlA24DIgI3TIWrpo7dZmcnhXhEXKPU_ELD2O9bHUvPIdtTvCQyesXYe6ExZHPBRH0Ph2ewFWWCFOIEvDgqR7r2HHMCe6fxLk0eblN",
    figures: [
      { name: "Trần Hưng Đạo", role: "Tổng tư lệnh", color: "border-primary" },
      { name: "Phạm Ngũ Lão", role: "Thống lĩnh cánh quân", color: "border-secondary" },
      { name: "Ô Mã Nhi", role: "Tướng quân Nguyên", color: "border-outline" }
    ]
  };

  return (
    <div className="linen-texture min-h-screen font-body selection:bg-primary/10 pb-20">
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-12">
        
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center space-x-2 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
          <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
          <span className="material-symbols-outlined text-xs opacity-40">chevron_right</span>
          <Link to="/events" className="hover:text-primary transition-colors">Sự kiện Quân sự</Link>
          <span className="material-symbols-outlined text-xs opacity-40">chevron_right</span>
          <span className="text-secondary font-bold italic">{eventData.title}</span>
        </nav>

        {/* --- 1. HERO SECTION --- */}
        <section className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-sm font-mono text-[10px] font-bold uppercase tracking-[0.3em] border border-primary/20">
              Imperial Victory
            </span>
            <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight font-bold italic tracking-tight">
              {eventData.title}
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-2xl italic border-l-4 border-primary/30 pl-8 py-2 leading-relaxed">
              "{eventData.subtitle}"
            </p>
          </div>
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[4/3] overflow-hidden rounded-sm border border-outline-variant shadow-2xl relative">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src={eventData.heroImg} alt="Hero" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Decorative Corner */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary opacity-20"></div>
          </div>
        </section>

        {/* --- 2. BASIC INFO BENTO GRID --- */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <InfoCard icon="calendar_today" label="Thời gian" value={eventData.time} />
          <InfoCard icon="location_on" label="Địa điểm" value={eventData.location} />
          <InfoCard icon="groups" label="Lực lượng" value={eventData.forces} />
          <InfoCard icon="military_tech" label="Kết quả" value={eventData.result} isHighlight />
        </section>

        {/* --- 3. TACTICAL MAP & GALLERY --- */}
        <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="font-headline text-3xl text-on-surface border-b border-outline-variant pb-4 italic font-bold">Bản đồ Chiến thuật</h2>
            <div className="relative rounded-sm overflow-hidden border border-outline-variant bg-white aspect-video p-6 dong-son-border shadow-inner group">
              <img className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700" src={eventData.mapImg} alt="Tactical Map" />
            </div>
            <p className="font-body text-sm text-on-surface-variant italic leading-relaxed">
              Bản đồ phục dựng vị trí bãi cọc và hướng di chuyển của thủy quân hai bên trong trận quyết chiến.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="font-headline text-3xl text-on-surface border-b border-outline-variant pb-4 italic font-bold">Phục dựng bối cảnh</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-sm overflow-hidden border border-outline-variant shadow-md">
                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUQlOELDr7vSKNHv6m5TicXO7_V6o-EaflMl3MRoVmoT-RFVT6fBwM7GXM3Ew2TdxDKy4qIeaPg7ibKQ_T1O5YrjPwU3LZMwgTlwRtlfEKFTeV5---VXwVs-9E0BscqNHtPpy6VLVsIhL7CaDcnxxw-d9y7LZNrtKyd7gm8sO3SnyK-YNxPk-zHVmY7yjUhjHg1uckgiFlDsAJ742RzLBc9RsPSRLxMKH2x3e7Wp-x8EBSZp0i8_ONHh-TADtYRof7Ftdc7f7d2ixq" alt="visual 1" />
              </div>
              <div className="aspect-square rounded-sm overflow-hidden border border-outline-variant shadow-md">
                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjpTjLt1c13xJWZUaqui7KtxppQO_wgFyALo0Csb3tZFrR17PevceMl6WfjzYAMPkSZvkZJZJOUp4m6CmSsA4euFfB7HqQ20QAbkbZIUYedFhujtpIxrZJ6CfEadvHPHsJWZmfrV7WUi-mUlMFXYTIboMu9FjxPt56yvw_WfEQ3iZSdKaB2fgHR2YsGalnyZSr_E7CkP03pUkeRFVtWV-OalghRu033epfcsJtT32qvXAEZnyQLU71rVbQSHhMlYVSW5b78vz2i5Nq" alt="visual 2" />
              </div>
            </div>
            <button className="w-full py-4 border-2 border-primary text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all">
              Mở rộng Thư viện ảnh
            </button>
          </div>
        </section>

        {/* --- 4. FIGURES & EVIDENCE --- */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-10">
            <h2 className="font-headline text-3xl text-on-surface italic font-bold">Nhân vật tham chiến</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eventData.figures.map((fig, i) => (
                <div key={i} className={`flex items-center space-x-6 p-6 bg-white border-l-4 ${fig.color} shadow-sm group hover:shadow-xl transition-all`}>
                  <div className="w-16 h-16 rounded-full bg-surface-variant flex-shrink-0 flex items-center justify-center border border-outline-variant group-hover:bg-primary/10">
                    <span className="material-symbols-outlined text-on-surface-variant text-3xl group-hover:text-primary transition-colors">person</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl text-on-surface font-bold italic">{fig.name}</h4>
                    <p className="font-mono text-[9px] font-bold uppercase opacity-60 tracking-widest">{fig.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="font-headline text-3xl text-on-surface italic font-bold">Sử liệu gốc</h2>
            <div className="p-10 bg-white border border-outline-variant relative dong-son-border shadow-sm">
              <span className="material-symbols-outlined text-primary/10 text-7xl absolute top-4 right-4">format_quote</span>
              <p className="font-body text-base text-on-surface italic leading-loose relative z-10">
                "Giặc tan, xác phơi đầy sông, bắt được tướng giặc Ô Mã Nhi cùng hơn 400 chiến thuyền... non sông từ đây thái bình."
              </p>
              <div className="mt-8 pt-6 border-t border-outline-variant/30 font-mono text-[10px] font-bold text-secondary uppercase tracking-widest">
                — Đại Việt Sử Ký Toàn Thư
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

// Component con cho Bento Grid
const InfoCard = ({ icon, label, value, isHighlight }) => (
  <div className={`p-8 border flex flex-col items-center text-center space-y-4 transition-all hover:-translate-y-1 ${isHighlight ? 'bg-primary text-white border-primary shadow-xl' : 'bg-white border-outline-variant/30 shadow-sm'}`}>
    <span className={`material-symbols-outlined text-4xl ${isHighlight ? 'text-white' : 'text-primary opacity-40'}`}>{icon}</span>
    <div>
      <p className={`font-mono text-[9px] font-bold uppercase tracking-widest mb-1 ${isHighlight ? 'text-white/60' : 'text-on-surface-variant opacity-60'}`}>{label}</p>
      <p className={`font-headline text-2xl font-bold italic ${isHighlight ? 'text-white' : 'text-primary'}`}>{value}</p>
    </div>
  </div>
);

export default EventDetail;