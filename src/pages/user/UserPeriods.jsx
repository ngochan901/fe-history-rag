import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const UserPeriods = () => {
  const navigate = useNavigate();

  // Dữ liệu các thời kỳ lịch sử
  const periodsData = [
    {
      id: 'hong-bang',
      name: 'Thời đại Hùng Vương',
      range: '2879 TCN - 258 TCN',
      category: 'Kỷ Hồng Bàng',
      desc: 'Giai đoạn khởi thủy của dân tộc với truyền thuyết Con Rồng Cháu Tiên. Nền văn minh Đông Sơn rực rỡ với kỹ thuật đúc đồng tinh xảo.',
      details: ['18 đời Hùng Vương trị vì', 'Sự tích Lạc Long Quân - Âu Cơ'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI-gkQtZyuGSYSyPBbC8isN7FdmTSvDiyKXtUbIE8iGpa3xh1hbTc1hMhDQlFDkGbC8PYj9uNmzg9bbN2oW0QqdQjZb5kpaXaEWHHFbDPxR3umN8EF_TdJqWu5tUoa7hPlrCQU7NxMPx5UgJ9JU1gzW3TDiQTr_GY7OOUubFGhljKhAxqaqlVtRaMMqvAe4QXZ9kPf94N7RKIO5QL9AyWPuBg8fUKvfjabWBg5ChA_T2Fh1LkF0BbgkUkV2ZggUIOqQCaY85JNT_Ky'
    },
    {
      id: 'ly',
      name: 'Kỷ Nguyên Thăng Long',
      range: '1009 - 1225',
      category: 'Nhà Lý',
      desc: 'Vua Lý Thái Tổ dời đô về Thăng Long, mở ra thời kỳ hưng thịnh của Phật giáo và văn hóa Đại Việt. Xây dựng Văn Miếu - Quốc Tử Giám.',
      details: ['Chiếu Dời Đô (1010)', 'Phá Tống trên sông Như Nguyệt'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGUI3HT9Jex5a-ZERUyLKKX086wzQHpxtpVeEbPJEpbnTS-rw0ElAg5co6141j6KJDTDCz1ORbq5naaR6yRj54VbXWefWH04BoEsovGxeQp_RFUEbdBmUClcwLmx3guee6Cg-dzz_WWbe_KByIYQUUoJXxlhsKBoU1OVMdNif6YQ-rPbN56YQNjt1Dwqs9vuDdE_LzBbakJz5a2f0D-msrRSxENoyfI4SU6jI0WnQ_Fb5KC5LHNrNpJVLFv-rEYPmp-8J8a9SWgOV2'
    },
    {
      id: 'tran',
      name: 'Hào Khí Đông A',
      range: '1225 - 1400',
      category: 'Nhà Trần',
      desc: 'Ba lần đại thắng quân Nguyên Mông, đế quốc hùng mạnh nhất bấy giờ. Tinh thần đoàn kết quân dân lên cao nhất với Hội nghị Diên Hồng.',
      details: ['Chiến thắng Bạch Đằng (1288)', 'Thiền phái Trúc Lâm Yên Tử'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMX3lFtj-6Z0RXVTnWLTWAah11z-bWRBxGeLq5DhzWb8HSeM3wYIMHw1tgKPGplh-hpC5CsPKjeKt6R42LsERrUQwcXHh3ojTy-i2q4YoYA5TQTR1HlIF514G9Nwu2Ovg-Rd9hz-Vm_kQsHiTASSI4PskklWfdXf6prOGhjrL_z46mwvDI35210tqBwyNdsLgHNkhfnooYr0sIRSbznd2tyz0nRLu2lZAj5ShL-D2B6o3EpZzJgWSnkP92Gg6BIh-L7IbtyWiYQg22'
    },
    {
      id: 'le-so',
      name: 'Phục Hưng Đại Việt',
      range: '1428 - 1527',
      category: 'Nhà Lê Sơ',
      desc: 'Lê Lợi lãnh đạo khởi nghĩa Lam Sơn quét sạch quân Minh. Giai đoạn cực thịnh với bộ luật Hồng Đức và tập bản đồ đầu tiên.',
      details: ['Bình Ngô Đại Cáo', 'Luật Hồng Đức (1483)'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC69XjPXwUCv4uiCyg1FXrV8lnKtzig-y9c_2ADvW1KBphb5JrHVrfRO-yFo6F6uZ9rj0tIaQ7BLsMsyWg4XHH8f2y4NKxtBODBBO9yDjMj4rTrua_55fQFUOFcAgiegZRVTCdJXyCxP9z26GVh4xwhFv6ArIlh0axKbja9sJagtfSJjCUH1XFmF8wvrD7GfVZReHja_BXK7vUK6uKWbI17rkpWfSLpNf44-OwjBCL31S2nGukioNSNy1bjxK1W4H2ZnedewEinUH2G'
    }
  ];

  return (
    <div className="bg-[#fcf9ee] min-h-screen font-body selection:bg-primary/20">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden border-b border-outline-variant/20">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale-[20%] sepia-[10%] brightness-75" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAVKTpmIOsVPz71VTF7L-eaHzXN4Oh6ub8EnTMlfUxrO0hDH1qbwKqQtEnBGtuK1LPKBy5AJGrq5evViTFpOavYjCKc58Nv9n6_KOuHFJmbJp9zdQyAwqo25I9dqHTc82z_zNxCvJEdmuN7_Gfjkz4j9mxGG-E-Ip-ns87D3W7Hvs0eWMOiKI9S5Ng0eSOpToLtO9W5MjbkR0iTXZZR8SBLrVLBIAitzFajiYDuc-aFI2C0FXPJgzc0QWAMp4Dl6sTZfmH2AhB54N6" 
            alt="Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fcf9ee]/40 to-[#fcf9ee]"></div>
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl px-12">
          <span className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">Hành trình ngàn năm văn hiến</span>
          <h1 className="font-headline text-5xl md:text-7xl text-primary font-bold italic tracking-tight uppercase">Dòng Chảy Lịch Sử</h1>
          <p className="font-body text-lg text-on-surface-variant italic max-w-2xl mx-auto leading-relaxed">
            Khám phá những triều đại huy hoàng, từ thuở dựng nước đến những mốc son chói lọi của nền độc lập tự chủ Đại Việt.
          </p>
        </div>
      </section>

      {/* 2. TIMELINE EXPLORER */}
      <div className="max-w-[1440px] mx-auto px-12 py-32 relative">
        
        {/* Đường kẻ trục dọc (Timeline Rail) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-20 bottom-20 w-0.5 bg-primary/10 hidden lg:block"></div>

        <div className="space-y-32 md:space-y-48">
          {periodsData.map((p, idx) => (
            <article key={p.id} className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Card nội dung bên trái/phải */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="bg-white border border-outline-variant/30 p-10 rounded-sm shadow-sm border-t-4 border-t-primary hover:shadow-2xl transition-all duration-500 group max-w-xl relative">
                  <div className="absolute -top-3 -right-3 opacity-10 group-hover:rotate-12 transition-transform">
                     <span className="material-symbols-outlined text-5xl text-primary">history_edu</span>
                  </div>

                  <div className="flex justify-between items-start mb-6">
                    <span className="bg-[#f7f4e9] text-primary font-mono text-[9px] font-bold px-3 py-1 rounded uppercase tracking-widest border border-primary/10">{p.category}</span>
                    <span className="font-headline text-primary font-bold italic text-xl">{p.range}</span>
                  </div>
                  
                  <h2 className="font-headline text-4xl text-primary font-bold mb-4 tracking-tight italic">{p.name}</h2>
                  <p className="font-body text-base text-on-surface-variant leading-relaxed mb-8 italic opacity-80">"{p.desc}"</p>
                  
                  <div className="space-y-4 border-t border-outline-variant/20 pt-8">
                    {p.details.map(detail => (
                      <div key={detail} className="flex items-center gap-3 text-on-surface">
                        <span className="material-symbols-outlined text-accent text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-70">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={`/periods/${p.id}`} 
                    className="mt-10 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary border-b-2 border-primary/20 pb-1 hover:border-primary transition-all inline-flex items-center gap-2 group/link"
                  >
                    Khám phá kỷ nguyên <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">east</span>
                  </Link>
                </div>
              </div>

              {/* Marker giữa dòng (Desktop) */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-[#fcf9ee] z-10 hidden lg:block shadow-xl"></div>

              {/* Ảnh minh họa link trực tiếp */}
              <Link to={`/periods/${p.id}`} className="w-full lg:w-1/2 h-64 md:h-[450px] overflow-hidden rounded-sm border border-outline-variant/30 shadow-inner relative group cursor-pointer">
                <img 
                  src={p.image} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                  alt={p.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest text-primary shadow-2xl">Xem chi tiết</span>
                </div>
              </Link>

            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPeriods;