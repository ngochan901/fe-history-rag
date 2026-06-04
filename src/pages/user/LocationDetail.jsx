import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const LocationDetail = () => {
  const { id } = useParams();

  // Hiệu ứng cuộn lên đầu trang khi vào
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcf9ee] min-h-screen font-body selection:bg-primary/10 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKLHWeWj3vTsKv2mconxq0gMjej8NpLLxS7ULSYKb17LLtEilBkjNNXRpGgmXsa5cit6jAVKY4R2EamuEXXjxJffT5d4La1xt3teUTz0dKXgG-ooZwoGtUMQ4jqEV8UM5eVRcELZb6IoF7-WzB4Sbt4xt-lKU3DzW8pL1xFrwxl-bYoN0KeNvHkFX2NdMQZ3m2wqs6-HuhE1MePvHSq-F62T1hwexNusRgGgJL0zwRXASpQmfrZACwD8jgyH-5N1MN8mLhT2T1TGhR" 
          alt="Cố đô Huế" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c15]/90 via-transparent to-transparent flex flex-col justify-end p-12 md:p-24">
          <div className="max-w-[1440px] mx-auto w-full">
            <span className="inline-block bg-accent text-white px-4 py-1 rounded-sm font-mono text-[10px] font-bold uppercase tracking-widest mb-4 shadow-lg">
              DI SẢN VĂN HÓA THẾ GIỚI
            </span>
            <h1 className="font-headline text-6xl md:text-8xl text-white font-bold italic tracking-tight mb-4">
              Cố đô Huế
            </h1>
            <p className="text-white/80 font-body text-lg max-w-2xl italic leading-relaxed">
              Kinh đô của triều đại nhà Nguyễn, biểu tượng cho quyền lực và sự hưng thịnh của một quốc gia thống nhất qua hơn một thế kỷ.
            </p>
          </div>
        </div>
      </section>

      {/* 2. BENTO CONTENT GRID */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* CỘT TRÁI: NỘI DUNG CHÍNH (8 COLS) */}
        <div className="lg:col-span-8 space-y-12">
          <article className="bg-white border border-outline-variant/30 p-10 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-40 h-40 opacity-[0.03] pointer-events-none dong-son-pattern"></div>
            <h2 className="font-headline text-3xl text-primary font-bold italic mb-8 border-b border-primary/10 pb-4">
              Tầm quan trọng Lịch sử
            </h2>
            <div className="space-y-6 text-on-surface text-lg leading-loose italic">
              <p>
                Quần thể di tích Cố đô Huế là trung tâm chính trị, văn hóa, và tôn giáo của Việt Nam dưới sự trị vì của mười ba đời vua nhà Nguyễn (1802-1945). Được xây dựng dọc theo bờ sông Hương thơ mộng, kinh thành Huế không chỉ là một pháo đài quân sự kiên cố mà còn là một tác phẩm nghệ thuật kiến trúc kết hợp hài hòa giữa triết lý phương Đông và kỹ thuật phương Tây.
              </p>
              <p>
                Với hệ thống thành quách gồm ba vòng thành: Kinh Thành, Hoàng Thành và Tử Cấm Thành, Huế đại diện cho đỉnh cao của quy hoạch đô thị phong kiến Việt Nam.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <StatBox label="Khởi công" value="1804" />
              <StatBox label="Diện tích" value="520 ha" />
              <StatBox label="UNESCO" value="1993" />
            </div>
          </article>

          {/* Niên biểu sự kiện tại địa danh */}
          <section className="pt-8">
             <h3 className="font-headline text-3xl text-primary font-bold italic mb-12 text-center underline decoration-primary/10 underline-offset-8">
               Dòng thời gian Cố đô
             </h3>
             <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:border-l-0 md:flex md:flex-col items-center">
                {/* Đường kẻ dọc giữa desktop */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/10"></div>
                
                <TimelineItem 
                  year="1802" title="Định đô Phú Xuân" 
                  desc="Vua Gia Long thống nhất đất nước, chọn Huế làm thủ đô." 
                  align="left"
                />
                <TimelineItem 
                  year="1833" title="Hoàn thiện Kinh thành" 
                  desc="Vua Minh Mạng hoàn tất hệ thống cung điện tráng lệ nhất." 
                  align="right"
                />
                <TimelineItem 
                  year="1945" title="Lễ thoái vị" 
                  desc="Vua Bảo Đại trao ấn kiếm, kết thúc chế độ quân chủ tại Ngọ Môn." 
                  align="left"
                />
             </div>
          </section>
        </div>

        {/* CỘT PHẢI: WIDGETS (4 COLS) */}
        <aside className="lg:col-span-4 space-y-10">
          {/* Map Widget */}
          <div className="bg-white border border-outline-variant/30 p-8 shadow-sm">
            <h4 className="font-headline text-xl text-primary font-bold italic mb-6">Vị trí Địa lý</h4>
            <div className="aspect-square bg-surface-variant relative rounded-lg overflow-hidden mb-6 border border-outline-variant/20 group">
              <img 
                className="w-full h-full object-cover grayscale sepia group-hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCca18R9ELQgN_hP9dLOkEJw6E19d4KhIxPuzOlwjKAg2YMQLSEulTqspWXmBAtGVNBqxTIMLpADxsd8aWISG9mvuYmoPDz8yqFBoz-Zxti39hUqgyo4MTMGBjYhi9a5BRJHsOhkZL3Lox5WF8JXSE5Q62GcS_1nbr2yhIju51rqjNiBTKOxjNxbMmYsCWOjRvGTj4eQS7CKSAp4X0pTruNaxQUREBpFpYDVYlSCEEY13kO1jLwMNl0VzlqBaYOynlmjarG58JlHIvy" 
                alt="Bản đồ Huế" 
              />
              <div className="absolute bottom-4 right-4 bg-primary text-white px-3 py-1 font-mono text-[10px] font-bold shadow-2xl">
                16.4637° N, 107.5908° E
              </div>
            </div>
            <p className="text-on-surface-variant text-sm italic leading-relaxed border-l-2 border-accent pl-4">
              "Phía Bắc giáp dãy núi Bạch Mã, phía Nam nhìn ra biển Đông, Huế nằm tại yết hầu của dải đất miền Trung."
            </p>
          </div>

          {/* Associated Figures */}
          <div className="bg-[#6B1515] p-8 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 dong-son-pattern opacity-10"></div>
            <h4 className="font-headline text-xl font-bold italic mb-8 relative z-10 border-b border-white/10 pb-4">Nhân vật liên quan</h4>
            <div className="space-y-6 relative z-10">
              <FigureItem 
                name="Vua Gia Long" 
                role="Người đặt nền móng" 
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuBdlOxLklt8X1pglTEyM8Xyd_dikhvxAq1Bw6V45ZAuWnuYFJOOO-ZjZ05Ir_z-0a8yw4FikeCEeo5uz89-tbOHTyxtaixkVHjS-BoDoqER1gZOBffoH-fuA53uqBIzWoy3wm4b2n2sHZR7ueI7kjLcZbYtCPqKW9qxKVEHEvxzOrUQ9Nfbmq0xNi58_mr9alOOjuVYc0i2-B5UTE1M32kZBXR7YyWxXyQCTn7e2g__-Sg_nU3eEmS4G22DINL7iJYYb-wzm4gRT8-b" 
              />
              <FigureItem 
                name="Vua Minh Mạng" 
                role="Người hoàn thiện kiến trúc" 
                img="https://lh3.googleusercontent.com/aida-public/AB6AXuAYeNIgZu43O0hKS5jOprrToZEm7xJWgegZLzp66vU8YXp2CdJFNofZdjPViWKkXhRHcy7gRYqN1ZgdZl_GYKNc7ncBFwJTeT1mk9CjJIoX4O7pylN7FCqVkG-Czc5T_fLi3i6XwH5Cw9sxSx2A9Ylfiay8hnXOOki3dDn37RBWUXahbI_4DlTjYY0zfdpJbH2ffb9hWbnqKTBXBmkCHk6Vm4doolMcmMtai6SJ-KYu6SZj5bYWFlPhw1JEHtTVwgYbvk5Yta2P8DDJ" 
              />
            </div>
            <button className="w-full mt-10 py-3 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Xem phả hệ nhà Nguyễn
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

// Component con hỗ trợ
const StatBox = ({ label, value }) => (
  <div className="p-6 bg-[#f7f4e9] border-l-4 border-primary shadow-sm group hover:bg-white transition-all">
    <p className="font-mono text-[9px] font-bold text-secondary uppercase tracking-widest mb-1">{label}</p>
    <p className="font-headline text-3xl text-primary font-bold">{value}</p>
  </div>
);

const TimelineItem = ({ year, title, desc, align }) => (
  <div className={`relative w-full mb-12 flex items-center justify-between ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
    <div className={`hidden md:block w-5/12 ${align === 'left' ? 'text-right pr-12' : 'text-left pl-12'}`}>
      <span className="bg-primary text-white px-3 py-1 font-mono text-[11px] font-bold mb-3 inline-block shadow-md italic">{year}</span>
      <h4 className="font-headline text-2xl text-on-surface font-bold italic mb-2">{title}</h4>
      <p className="text-on-surface-variant text-sm italic">{desc}</p>
    </div>
    
    {/* Mobile view & center dot */}
    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-[#fcf9ee] z-10 shadow-lg"></div>
    
    <div className="md:hidden ml-8">
       <span className="text-primary font-bold font-mono text-sm">{year}</span>
       <h4 className="font-headline text-xl font-bold italic">{title}</h4>
       <p className="text-on-surface-variant text-sm italic">{desc}</p>
    </div>

    <div className="hidden md:block w-5/12"></div>
  </div>
);

const FigureItem = ({ name, role, img }) => (
  <Link to="#" className="flex items-center gap-4 p-3 hover:bg-white/5 transition-all border border-transparent hover:border-white/10">
    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent shadow-xl">
      <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt={name} />
    </div>
    <div>
      <p className="font-headline text-lg font-bold italic leading-tight">{name}</p>
      <p className="text-[10px] opacity-60 uppercase tracking-tighter mt-1">{role}</p>
    </div>
    <span className="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-sm">east</span>
  </Link>
);

export default LocationDetail;