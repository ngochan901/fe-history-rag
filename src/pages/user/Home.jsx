import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-1000 font-body">
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] flex items-center overflow-hidden border-b border-outline-variant/20">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale-[20%] sepia-[10%] brightness-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgOciGdtI9vivvhe0-GHrJhG35fWenut4Lt4fS9q6B_4DS8NSY11KrdUNfoSP9DyL33rmJQnH6zseM0dMEx4YMAyD0YIoDpQxdReX54TBlZ0o9X-ybfIxq4Uc-idLs6wDyo3LB2KGc4L2_MsEMSmZpovLFkl_9zFzbi7wc0wdApxFKT8ibiDvBZiU2geYhbogZKRIIXjWJQN9XNtvOQNq51XAjDUg1MiuZQxaQUjy4rxenB7mqHdtRURp1wVGl9OxvwhjrHYrQIuwJ" 
            alt="Đại Việt Hùng Tâm" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fcf9ee] via-[#fcf9ee]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 px-12 max-w-[1440px] mx-auto w-full">
           <div className="max-w-2xl space-y-6">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] bg-primary text-white px-4 py-1 rounded-sm shadow-md">Khai phá Di sản</span>
              <h1 className="font-headline text-6xl text-primary font-bold leading-tight tracking-tight italic">
                Chạm vào dòng chảy <br/> nghìn năm văn hiến
              </h1>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-xl italic">
                Hệ thống lưu trữ số hóa hiện đại, kết nối trí tuệ nhân tạo RAG để giải mã những bí ẩn trong dòng chảy lịch sử Đại Việt.
              </p>
              <div className="flex gap-4 pt-6">
                <button onClick={() => navigate('/records')} className="bg-primary text-white px-10 py-4 rounded-lg font-headline font-bold text-sm shadow-xl hover:brightness-110 transition-all active:scale-95">BẮT ĐẦU NGHIÊN CỨU</button>
                <button onClick={() => navigate('/periods')} className="border-2 border-secondary text-secondary px-10 py-4 rounded-lg font-headline font-bold text-sm hover:bg-secondary/5 transition-all">DÒNG THỜI GIAN</button>
              </div>
           </div>
        </div>
      </section>

      {/* 2. BENTO GRID: FEATURED CONTENT */}
      <section className="py-24 px-12 max-w-[1440px] mx-auto space-y-16">
        <div className="flex justify-between items-end border-b border-outline-variant/30 pb-6">
           <div>
              <h2 className="font-headline text-4xl text-primary font-bold italic tracking-tight">Điểm nhấn Sử học</h2>
              <p className="font-body text-sm text-on-surface-variant mt-1">Những nghiên cứu chuyên sâu và tài liệu quý hiếm</p>
           </div>
           <button className="font-mono text-[10px] font-bold text-secondary hover:text-primary uppercase tracking-widest flex items-center gap-2">
              Tất cả chuyên mục <span className="material-symbols-outlined text-sm">east</span>
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[650px]">
          {/* Featured Article */}
          <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl border border-outline-variant/30 bg-white shadow-sm">
            <img className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpHgWRBAgVQIODoqWJeIoKYs2X2m980ImcZQa3TGOWz-1L6hbboTm1pePD_B6keDB2rvUQ6mv2l0QKQi6jqcM3PEQN1iaffSWDh1XFr7efhjFgkXfoLygVo31Wl7d3rvjdJhcoTgL928d_87ihB9zCHR2nVIomRd-UYyWibL5F2r8WdavRWAtXFdQQuK3wWIeXAYnmBsaO5rncNWnpyr8_AD1ZzUeayeWhA5zq99FHAy7SwNu8ZldxmN9hRd7FSKxSnpUKlbgOaSiw" alt="Bản thảo cổ" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 text-white space-y-4">
              <span className="font-mono text-[9px] font-bold uppercase bg-white/20 backdrop-blur px-3 py-1 rounded">Nghiên cứu chuyên sâu</span>
              <h3 className="font-headline text-3xl font-bold italic">Bí ẩn văn khắc thời Lý: Di sản từ đá và tâm linh</h3>
              <p className="font-body text-sm opacity-80 line-clamp-3 italic">Khám phá những lớp ý nghĩa ẩn sau các văn bia chùa Keo và hệ thống kiến trúc tôn giáo thế kỷ XI...</p>
            </div>
          </div>

          {/* Characters Card */}
          <div onClick={() => navigate('/characters')} className="md:col-span-1 bg-surface-variant/40 p-8 rounded-2xl border border-outline-variant/20 flex flex-col justify-between group hover:border-primary/40 transition-all cursor-pointer">
             <div>
                <span className="material-symbols-outlined text-primary text-3xl mb-4">person</span>
                <h3 className="font-headline text-2xl text-primary font-bold leading-tight italic">Danh nhân <br/>Việt Nam</h3>
                <p className="font-body text-xs text-on-surface-variant mt-2 italic leading-relaxed">Tiểu sử và sự nghiệp của những bậc tiền nhân hào kiệt.</p>
             </div>
             <button className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest border-b border-primary w-fit pb-1">HỒ SƠ NHÂN VẬT</button>
          </div>

          {/* AI Assistant Card */}
          <div className="md:col-span-1 bg-primary text-white p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden dong-son-motif shadow-xl">
             <div className="relative z-10">
                <span className="material-symbols-outlined text-white/50 text-4xl mb-4">psychology</span>
                <h3 className="font-headline text-2xl font-bold italic">Trợ lý Học giả AI</h3>
                <p className="font-body text-xs opacity-70 mt-3 leading-relaxed">Tra cứu thông minh về triều đại và sự kiện thông qua dữ liệu RAG.</p>
             </div>
             <button onClick={() => navigate('/ai-chat')} className="bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center self-end hover:scale-110 transition-transform shadow-lg relative z-10">
                <span className="material-symbols-outlined">forum</span>
             </button>
          </div>

          {/* AI Search Bar Card */}
          <div className="md:col-span-2 bg-on-background text-white p-10 rounded-2xl flex items-center justify-between gap-8 border border-white/10 relative overflow-hidden">
             <div className="flex-1 space-y-4 relative z-10">
                <h3 className="font-headline text-2xl font-bold text-accent italic">Truy vấn Sử học thông minh</h3>
                <p className="font-body text-sm opacity-60">Tìm kiếm từ hơn 50,000 nguồn sử liệu bằng ngôn ngữ tự nhiên.</p>
                <div className="relative">
                   <input type="text" placeholder="Tìm hiểu về triều đại nhà Lê..." className="w-full bg-white/5 border-b border-white/20 py-3 outline-none focus:border-accent font-body italic text-sm transition-all" />
                   <span className="material-symbols-outlined absolute right-0 top-3 text-accent animate-pulse">search</span>
                </div>
             </div>
             <div className="hidden lg:block w-32 h-32 bg-accent/10 rounded-full blur-3xl absolute right-10"></div>
          </div>
        </div>
      </section>

      {/* --- PHẦN MỚI: KHO TÀNG SỬ LIỆU (RECORDS) --- */}
      <section className="py-24 bg-white border-y border-outline-variant/20 relative overflow-hidden">
         <div className="absolute inset-0 dong-son-pattern opacity-5"></div>
         <div className="px-12 max-w-[1440px] mx-auto space-y-16 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
               <div className="text-center md:text-left space-y-2">
                  <h2 className="font-headline text-4xl text-primary font-bold italic tracking-tight">Kho tàng Sử liệu</h2>
                  <p className="font-body text-sm text-on-surface-variant italic">Các bộ chính sử, văn bia và tài liệu gốc được số hóa chuẩn xác.</p>
               </div>
               <button onClick={() => navigate('/records')} className="bg-secondary text-white px-8 py-3 rounded-full font-headline font-bold text-xs uppercase tracking-widest shadow-lg hover:brightness-110 transition-all">
                  VÀO THƯ VIỆN SỐ
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { name: 'Đại Việt Sử Ký Toàn Thư', type: 'Bộ chính sử', year: 'Chính Hòa (1697)', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHCX219OduOWPwmW2kIgSRqByoswEIUiaosqjFuGFFcr52NLTu-QNIeZf8qLCtA6jGECS3erh686OMPJQhSFcx_-Dsc-LddNcJGLy1ALItx12jnIdr6P_XTuhyIp89XzRHD9DrtORbqLkg9DZ2ow2jSlFY9OMf8DESxvVFrDt_6QzoqH0gat7b37ieLVukWyg-THXb8kH2bu-ytad2zOD42kkv0POZ3wEfz0f8RBun1Orji-bYLe4gxtW5exF-w0W_7LMVQLmfWyTd' },
                 { name: 'Khâm Định Việt Sử', type: 'Bộ chính sử', year: 'Triều Nguyễn', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvK1N8AwpRu4tfBYVDqr7T4VKDWw2dDlV7fP_tO5XuZpTkZxcX1gt3hybNKQzZWjJCRJMeYZvrAKdGfSyIIERHg1HDDCsVQHl2H9TIR3pJBjGR2P-b9YAPAVnROcNX-tbkI8Laf4DCWKgqli4cump-itIwz9Gk09u_nXRRjAfwE2x68bmCEnT28fVgMK5gcOsOXXjQW7ovfnDVi1vxxC-Bvws1iXymINJJGG2xQ_XOgsCwQlsfwRiyvwSJPVhPCLov697LjrPCn7fL' },
                 { name: 'Mộc bản Triều Nguyễn', type: 'Di sản tư liệu', year: 'Thế kỷ XIX', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCghNjaFuleTxWw5ndbIacn2DuVF3LWPNKC34a81m9azGHAUZ4BVq_nbaJYVIhC92NNapIczPmFdYcfwPzJebFi2ZbtR5i7mhua01PS031DlE9eKakuoPOOhGYloreVfY-PSC8V4KqrFTUsRcPw40rpYeanX_aom7dG39EdqViPLobP5lKNlY8pz86rBxMBimLFUb6X3OWWYDUtRG5TdAyWs1EtxQByMhrI6yft314AavO2k_CLBfxy4pQvSGDh8LL8KaNWOErpxw30' },
                 { name: 'Bình Ngô Đại Cáo', type: 'Văn bản cổ', year: 'Thuận Thiên (1428)', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiraAFrruCThZ1t8_foxHjvJw21fCgE_Bag8_SEktlJ7Uevv5kW4bV_wh31kfbRSrgXU1VYg43DM4gOYnkjH2SPHgdK8KSAV8yvWNkBdQ_VDMjAUgMtMFH0lnjggXGSaJSxlhQr-bumtCxeNsw2Qkem661LzFeW1aaAf8dB220TQ_Q4wcU8loBuo8Nt2kd1KfGmj_bNaA2tux1TIjOCANUBXQeYKmn_8umb0VuQbq-sL9orQovdebK74HjNNtGrQpFUxhZ4Fnhe83s' }
               ].map((record, i) => (
                 <div key={i} className="group cursor-pointer space-y-4">
                    <div className="aspect-[3/4] overflow-hidden rounded-xl border border-outline-variant/30 shadow-sm relative">
                       <img src={record.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt={record.name} />
                       <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div>
                       <span className="font-mono text-[9px] font-bold text-accent uppercase tracking-widest">{record.type}</span>
                       <h4 className="font-headline text-lg text-on-surface font-bold mt-1 group-hover:text-primary transition-colors leading-tight">{record.name}</h4>
                       <p className="text-[10px] text-on-surface-variant font-mono mt-1 opacity-60 uppercase">{record.year}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. EVENTS SECTION: HORIZONTAL TIMELINE */}
      <section className="bg-surface-low py-24 border-b border-outline-variant/20">
         <div className="px-12 max-w-[1440px] mx-auto">
            <div className="flex items-center gap-4 mb-16">
               <h2 className="font-headline text-4xl text-primary font-bold italic tracking-tight uppercase tracking-tighter">Niên biểu Sự kiện</h2>
               <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
               <span onClick={() => navigate('/events')} className="font-mono text-[10px] font-bold text-primary hover:underline cursor-pointer uppercase tracking-widest">Xem tất cả</span>
            </div>

            <div className="flex gap-8 overflow-x-auto pb-12 custom-scrollbar">
               {[
                 { date: '20/11/2024', title: 'Triển lãm "Gốm Chu Đậu"', desc: 'Ra mắt bộ sưu tập 3D các hiện vật gốm từ tàu đắm Cù Lao Chàm.' },
                 { date: '15/12/2024', title: 'Tọa đàm: Văn hóa Đông Sơn', desc: 'Phân tích kỹ thuật đúc trống đồng từ các mẫu vật mới khai quật.' },
                 { date: '01/01/2025', title: 'Ấn hành: Sử Ký (Hiệu đính)', desc: 'Phiên bản mới với chú giải từ các khám phá khảo cổ học.' }
               ].map((event, i) => (
                 <div key={i} className="min-w-[350px] bg-white border border-outline-variant/30 p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></div>
                       <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-widest">{event.date}</span>
                    </div>
                    <h4 className="font-headline text-xl text-on-surface font-bold italic">{event.title}</h4>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed italic mt-3">{event.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. DYNASTY SHORTCUTS & MAP */}
      <section className="py-24 px-12 max-w-[1440px] mx-auto text-center space-y-16">
        <div className="max-w-2xl mx-auto space-y-4">
           <h2 className="font-headline text-4xl text-primary font-bold italic tracking-tight">Cội nguồn Triều đại</h2>
           <p className="font-body text-sm text-on-surface-variant leading-relaxed italic">Khám phá dòng chảy lịch sử qua hơn 5,000 nhân vật hào kiệt Đại Việt.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {['Đinh', 'Tiền Lê', 'Lý', 'Trần', 'Hậu Lê', 'Nguyễn'].map(d => (
            <div key={d} className="p-8 bg-white border border-outline-variant/20 rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all cursor-pointer group shadow-sm">
               <div className="font-headline text-2xl font-bold text-on-surface-variant group-hover:text-primary transition-colors italic">{d}</div>
               <div className="font-mono text-[9px] uppercase font-bold opacity-40 mt-1 tracking-widest">Triều đại</div>
            </div>
          ))}
        </div>

        {/* MAP CTA */}
        <div className="bg-surface-variant/30 rounded-3xl p-16 flex flex-col items-center relative overflow-hidden group shadow-inner">
           <img className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply grayscale group-hover:scale-105 transition-transform duration-[20s]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFP8chLPXP9CFXQ9SWX7y1oh1bbGSfFCnXG0FkWzHIhsKyn_elKHpxt_a66FO7iKc5Ixrf0cZwLguOY5sIYf920OubLX3TpHpuIXc3EOOwjToUQkjHqMjFysh3Gv_inAM7hwmG55ONut6T3mWBwvOXAek4fqGnOGoYFlhB6JMN-CoxjCW2CZDy-rNIkjpReJG3oKbFknSZaa8NObGutb82o07nPH-RQLWi9N76OL-rE9tUnnn37hswsSZvNmXzVXJ2fGdMvBzVcjnI" alt="Bản đồ cổ" />
           <div className="relative z-10 max-w-xl space-y-8">
              <span className="material-symbols-outlined text-primary text-5xl">explore</span>
              <h3 className="font-headline text-3xl text-primary font-bold italic tracking-tight">Địa đồ Mối quan hệ & Cội nguồn</h3>
              <p className="font-body text-base text-on-surface-variant italic">Trực quan hóa sự dịch chuyển địa giới và các dòng họ theo dòng chảy thời gian.</p>
              <button onClick={() => navigate('/map')} className="bg-secondary text-white px-12 py-4 rounded-full font-headline font-bold text-sm shadow-xl hover:brightness-110 active:scale-95 transition-all uppercase tracking-widest">KHÁM PHÁ BẢN ĐỒ</button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;