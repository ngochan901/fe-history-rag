import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserRecords = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' hoặc 'list'

  const records = [
    {
      id: 'SL-001',
      name: 'Đại Việt Sử Ký Toàn Thư',
      type: 'Imperial Record',
      period: 'Chính Hòa (1697)',
      author: 'Ngô Sĩ Liên & cộng sự',
      desc: 'Bộ chính sử lớn nhất Việt Nam thời trung đại, ghi chép lịch sử từ thời Hồng Bàng đến khi vua Lê Gia Tông lên ngôi.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHCX219OduOWPwmW2kIgSRqByoswEIUiaosqjFuGFFcr52NLTu-QNIeZf8qLCtA6jGECS3erh686OMPJQhSFcx_-Dsc-LddNcJGLy1ALItx12jnIdr6P_XTuhyIp89XzRHD9DrtORbqLkg9DZ2ow2jSlFY9OMf8DESxvVFrDt_6QzoqH0gat7b37ieLVukWyg-THXb8kH2bu-ytad2zOD42kkv0POZ3wEfz0f8RBun1Orji-bYLe4gxtW5exF-w0W_7LMVQLmfWyTd'
    },
    {
      id: 'SL-002',
      name: 'Bia Tiến Sĩ Khoa Nhâm Tuất',
      type: 'Stelae',
      period: 'Đại Bảo (1442)',
      author: 'Hà Nội, Việt Nam',
      desc: 'Tấm bia đầu tiên trong hệ thống 82 bia Tiến sĩ tại Văn Miếu, vinh danh các bậc hiền tài là nguyên khí quốc gia.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvK1N8AwpRu4tfBYVDqr7T4VKDWw2dDlV7fP_tO5XuZpTkZxcX1gt3hybNKQzZWjJCRJMeYZvrAKdGfSyIIERHg1HDDCsVQHl2H9TIR3pJBjGR2P-b9YAPAVnROcNX-tbkI8Laf4DCWKgqli4cump-itIwz9Gk09u_nXRRjAfwE2x68bmCEnT28fVgMK5gcOsOXXjQW7ovfnDVi1vxxC-Bvws1iXymINJJGG2xQ_XOgsCwQlsfwRiyvwSJPVhPCLov697LjrPCn7fL'
    },
    {
      id: 'SL-003',
      name: 'Mộc bản Triều Nguyễn',
      type: 'Woodblock',
      period: 'Thế kỷ XIX',
      author: 'Quốc Sử Quán triều Nguyễn',
      desc: 'Di sản tư liệu thế giới với hàng nghìn tấm bản khắc gỗ dùng để in ấn sách, lưu giữ các bộ sử và kinh văn quan trọng.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCghNjaFuleTxWw5ndbIacn2DuVF3LWPNKC34a81m9azGHAUZ4BVq_nbaJYVIhC92NNapIczPmFdYcfwPzJebFi2ZbtR5i7mhua01PS031DlE9eKakuoPOOhGYloreVfY-PSC8V4KqrFTUsRcPw40rpYeanX_aom7dG39EdqViPLobP5lKNlY8pz86rBxMBimLFUb6X3OWWYDUtRG5TdAyWs1EtxQByMhrI6yft314AavO2k_CLBfxy4pQvSGDh8LL8KaNWOErpxw30'
    },
    {
      id: 'SL-004',
      name: 'Bình Ngô Đại Cáo',
      type: 'Proclamation',
      period: 'Thuận Thiên (1428)',
      author: 'Nguyễn Trãi',
      desc: 'Bản tuyên ngôn độc lập thứ hai của dân tộc Việt Nam, khẳng định chủ quyền độc lập tự chủ sau khi quét sạch quân Minh.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiraAFrruCThZ1t8_foxHjvJw21fCgE_Bag8_SEktlJ7Uevv5kW4bV_wh31kfbRSrgXU1VYg43DM4gOYnkjH2SPHgdK8KSAV8yvWNkBdQ_VDMjAUgMtMFH0lnjggXGSaJSxlhQr-bumtCxeNsw2Qkem661LzFeW1aaAf8dB220TQ_Q4wcU8loBuo8Nt2kd1KfGmj_bNaA2tux1TIjOCANUBXQeYKmn_8umb0VuQbq-sL9orQovdebK74HjNNtGrQpFUxhZ4Fnhe83s'
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-12 py-16 font-body animate-in fade-in duration-700">
      
      {/* 1. BODY HEADER: TIÊU ĐỀ HOÀNH TRÁNG */}
      <header className="relative overflow-hidden p-12 bg-surface-variant/20 border border-primary/10 rounded-2xl mb-16">
        <div className="absolute inset-0 dong-son-pattern opacity-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-[10px] font-bold text-primary uppercase tracking-[0.3em]">Hệ thống Lưu trữ Quốc gia</span>
            <h1 className="font-headline text-5xl md:text-6xl text-primary font-bold italic tracking-tight">Thư viện Sử liệu</h1>
            <p className="font-body text-lg text-on-surface-variant italic leading-relaxed">
              "Dân ta phải biết sử ta, cho tường gốc tích nước nhà Việt Nam." — Một kho tàng số hóa các văn bản cổ, văn bia và mộc bản từ các triều đại tự chủ.
            </p>
          </div>
          {/* Chế độ xem */}
          <div className="flex bg-white/50 backdrop-blur p-1 rounded-lg border border-outline-variant/30">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-primary text-white shadow-md' : 'text-on-surface-variant hover:bg-white'}`}
            >
              <span className="material-symbols-outlined text-sm">grid_view</span>
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-primary text-white shadow-md' : 'text-on-surface-variant hover:bg-white'}`}
            >
              <span className="material-symbols-outlined text-sm">list</span>
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
        
        {/* 2. SIDEBAR BỘ LỌC */}
        <aside className="lg:col-span-1 space-y-12">
          {/* Phân loại */}
          <section>
            <h3 className="font-headline text-2xl text-primary font-bold italic border-b border-outline-variant/30 pb-3 mb-6">Phân loại</h3>
            <div className="space-y-4 font-body text-sm">
              {['Văn bia', 'Bản thảo', 'Mộc bản', 'Châu bản'].map(cat => (
                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded-sm border-secondary text-primary focus:ring-primary" />
                  <span className="text-on-surface-variant group-hover:text-primary transition-colors">{cat}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Niên đại */}
          <section>
            <h3 className="font-headline text-2xl text-primary font-bold italic border-b border-outline-variant/30 pb-3 mb-6">Niên đại</h3>
            <div className="grid grid-cols-1 gap-2">
              {['Lý - Trần', 'Lê Sơ', 'Mạc - Lê Trung Hưng', 'Tây Sơn', 'Nguyễn'].map(era => (
                <button key={era} className="text-left font-mono text-[10px] font-bold uppercase border border-outline-variant/30 px-4 py-2 hover:bg-primary hover:text-white transition-all tracking-widest">
                  {era}
                </button>
              ))}
            </div>
          </section>

          {/* Widget hỗ trợ */}
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 relative overflow-hidden group">
            <span className="material-symbols-outlined text-primary/20 text-5xl absolute -right-2 -bottom-2 group-hover:scale-110 transition-transform">history_edu</span>
            <h4 className="font-headline text-xl text-primary font-bold italic mb-2 relative z-10">Hỗ trợ Học thuật</h4>
            <p className="text-xs text-on-surface-variant mb-4 relative z-10 italic">Bạn đang tìm kiếm tài liệu chưa có trong kho lưu trữ?</p>
            <button className="text-primary font-mono text-[9px] font-bold uppercase tracking-widest border-b border-primary relative z-10">Gửi yêu cầu số hóa</button>
          </div>
        </aside>

        {/* 3. MAIN CONTENT: GRID SỬ LIỆU */}
        <section className="lg:col-span-3">
          <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 gap-10" : "flex flex-col gap-6"}>
            {records.map((item) => (
              <article key={item.id} className={`group bg-white border border-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex ${viewMode === 'grid' ? 'flex-col' : 'flex-row h-48'}`}>
                {/* Ảnh sử liệu */}
                <div className={`${viewMode === 'grid' ? 'h-56' : 'w-48'} overflow-hidden relative shrink-0`}>
                  <img 
                    src={item.image} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                    alt={item.name} 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-tertiary text-white font-mono text-[9px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest shadow-lg">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Nội dung bản ghi */}
                <div className="p-8 flex flex-col flex-grow">
                   <span className="text-accent font-mono text-[9px] font-bold uppercase tracking-widest mb-2">Niên hiệu: {item.period}</span>
                   <h3 className="font-headline text-2xl text-primary font-bold group-hover:text-primary transition-colors tracking-tight italic leading-tight mb-3">
                     {item.name}
                   </h3>
                   <p className="font-body text-sm text-on-surface-variant line-clamp-3 leading-relaxed mb-6">
                     {item.desc}
                   </p>
                   
                   <div className="mt-auto pt-4 border-t border-outline-variant/20 flex justify-between items-center">
                      <span className="text-on-surface-variant font-body text-xs italic opacity-70">{item.author}</span>
<Link 
  to={`/records/${item.id}`} 
  className="text-primary font-mono text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 group/link"
>
  XEM CHI TIẾT <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform text-primary">east</span>
</Link>
                   </div>
                </div>
              </article>
            ))}
          </div>

          {/* 4. PAGINATION */}
          <nav className="mt-16 flex justify-center items-center gap-3">
            <button className="w-10 h-10 border border-outline-variant flex items-center justify-center text-secondary opacity-30"><span className="material-symbols-outlined">chevron_left</span></button>
            <button className="w-10 h-10 bg-primary text-white font-bold text-xs shadow-md">1</button>
            <button className="w-10 h-10 border border-outline-variant font-mono text-xs font-bold hover:bg-primary hover:text-white transition-all">2</button>
            <span className="text-secondary font-mono">...</span>
            <button className="w-10 h-10 border border-outline-variant flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default UserRecords;