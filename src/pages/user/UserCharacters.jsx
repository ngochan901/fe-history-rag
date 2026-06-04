import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserCharacters = () => {
  const navigate = useNavigate();

  // Danh sách đầy đủ 6 nhân vật từ bản thiết kế
  const characters = [
    {
      id: 1,
      name: 'Lê Thái Tổ (Lê Lợi)',
      role: 'Quân sự',
      dynasty: 'Nhà Lê Sơ (1428–1789)',
      desc: 'Người khởi xướng khởi nghĩa Lam Sơn, đánh đuổi quân Minh và thành lập nhà Hậu Lê, mở ra thời kỳ độc lập tự chủ lâu dài cho dân tộc.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkXCL0ZlfPvy43z13A0y1bG_eAez20SasQjlbmMYN0ksU6u2mv7H7wD2kxlQgr5TVFjQXQIMB18PYpL0LebO68DVPdFgMGK1agh4KI4EyQ4Me3ooBfg3K1JiZq7cmSnu-1GzPq8ZGlH-VSmNdibOhBNI1pOIAdA-TqjbomhMxBCsnmpa0JmnR7PFbba9_7Bb2hR96-_FaIwMv6EGVpO58GxtObun-s6BQINyccTPHf67jr-DfzH_Qpx755igURlGi5zCpsjNp-WJmX'
    },
    {
      id: 2,
      name: 'Nguyễn Trãi',
      role: 'Văn học',
      dynasty: 'Nhà Lê Sơ (1428–1789)',
      desc: 'Anh hùng dân tộc, danh nhân văn hóa thế giới. Tác giả của Bình Ngô Đại Cáo - bản tuyên ngôn độc lập thứ hai của nước Việt.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOm0BuewNGMMyw3hbNXvp09kmzgSCa95fsr7xfiUxlvICLTrjie4q-P_kpsq1-_73pO_mgOU8hLTaQrzHvDaMYqlFUG2FrBoUcyfMkpG1lANyWQeqePO2u_YemlnwWAk9gtUHZtsVY3LL9QnlDgOnPfZdnfUUHlpFLc07haID26fE6xWRx8K7M2WAXSwgPBtANe1iypQc0J8akbCG6qc8vr_9EkIWL9IXDozwxHl8aNks3TY7Qd2PuTV3mBCUIGSBl_7yT23XtHidO'
    },
    {
      id: 3,
      name: 'Trần Hưng Đạo',
      role: 'Quân sự',
      dynasty: 'Nhà Trần (1225–1400)',
      desc: 'Vị tướng thiên tài ba lần lãnh đạo quân dân nhà Trần đánh bại quân xâm lược Nguyên Mông hùng mạnh nhất thế giới lúc bấy giờ.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKuKjwQFwNQohxy16nvgPodBX9xYlr_xfJyAOLcN1j3ReQY_2BJIBSqRQtNXYZyclOHFwkPeYLBnlikMDpNgGR6cMx-daUsK6HcblyL3JgmceKk24uLN64Cfwy0NVVPHqpaRNc2ly-EJQCL2iinxOqCCI4hauJSNHNDnEmU16YR5iLpog0SXF2T9R7VNsaXlSQwNrxQLlQhE8SG5hIpLchfYvsEBVJJeX4Ez0p4Lm6E2u-PzMPRPc8CC7_NspWPQZhmSiLo2qBr_9H'
    },
    {
      id: 4,
      name: 'Lý Thường Kiệt',
      role: 'Ngoại giao',
      dynasty: 'Nhà Lý (1009–1225)',
      desc: 'Vị thái úy lỗi lạc, tác giả của bài thơ thần "Nam Quốc Sơn Hà" và chiến dịch phạt Tống lẫy lừng phương Bắc.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxohlRm6oJEIxb7Q32dWdgEtmNJ9C8kOK_OYXlTGjF6mAzT-bhvf_qbDN0xjjcA-N-S-W0anAvRa0G_WIYCHgEhnKlfVsfkoA_AiLpgmjN04u1Dhfqn_NTprJiPaZmFQY1_3IWZOTdomizXHnxRcKDRNqQk0QuIfgFoFVO12OqOa13lb2t0fTb1f897BvKcYezckMsQro_aNJEdd-wRYU8EDxaXSz-Rwo15yRsuccDhBdgg1u4lq_KHVxzNkrGQFGIa4Pq09wyvCD0'
    },
    {
      id: 5,
      name: 'Hồ Xuân Hương',
      role: 'Văn học',
      dynasty: 'Tây Sơn / Nguyễn (TK XVIII)',
      desc: '"Bà chúa thơ Nôm" với những tác phẩm độc đáo, táo bạo, mang đậm tinh thần nhân văn và đấu tranh cho nữ quyền.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEqU9ughoF8Lb1OyIIdd3TMKkvgBGcLAxEbaSsQ0yk_XWi3GKPZwQQ1zlkZb73LawSDjLW9iQCar6TFU7XAZE-nA1ykBJhawTohOTraQtXMRjqvh7xfJF7dyIjyId4Xvg8wean3yJ3KpLUg9SP2NqYS-FK9CLXTW5YCS8Ib9Dcgs2UXn25GQNlY8Ssp5rr255X5-r0tZDrr2Gli3VAHxvLjE3qFIR8xoiIsQsTLTto-9iYz9aMrVq4eOgy_XJ_n5qxBrHfX-3TZ8wa'
    },
    {
      id: 6,
      name: 'Chu Văn An',
      role: 'Giáo dục',
      dynasty: 'Nhà Trần (1225–1400)',
      desc: '"Người thầy của muôn đời", nổi tiếng với đạo đức trong sáng và tinh thần không khuất phục trước cường quyền.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2cNHZGKf1tEph8k3mfH5LBfN1X0x4eE-zzos4IYc58cNuYh8UawZwgBGApzvk4V3TIxBepyGKHyyS6jq_c93SaWAU4_2a9e2_ilbgZFR7SvCUjms2VpdjL0Z6o-04KinCJ-uRAXRaKNGSqipZdvYSwZn4tMMuuPn71SmGREiZm04HVjnJPP4bBMq6C_2NUD4dShAF_BkxRwUCfuEs0pVuSAXdzPFocwTPtzMtKVkqbPUWN-UltPHVc4VhR0J0nWe3BKUBBxj0zglW'
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-12 py-16 font-body animate-in fade-in duration-700">
      
      {/* 1. BODY HEADER: TIÊU ĐỀ TRANG NẰM TRONG BODY */}
      <header className="mb-20 space-y-4 border-l-4 border-primary pl-8">
        <h1 className="font-headline text-5xl md:text-6xl text-primary font-bold tracking-tight italic">
          Danh nhân Văn hóa & Lịch sử
        </h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl italic leading-relaxed">
          Khám phá những bậc anh hùng, thi sĩ và nhà tư tưởng đã định hình dòng chảy nghìn năm của dân tộc Việt.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* 2. LEFT SIDEBAR: BỘ LỌC */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-12">
          {/* Lọc Triều đại */}
          <section>
            <h3 className="font-mono text-[10px] text-secondary uppercase font-bold tracking-[0.2em] mb-6 border-b border-outline-variant/30 pb-2">Triều đại</h3>
            <div className="space-y-4 font-body text-sm">
              {['Tất cả', 'Nhà Lý', 'Nhà Trần', 'Nhà Lê Sơ', 'Nhà Nguyễn'].map(dynasty => (
                <label key={dynasty} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded-sm border-secondary text-primary focus:ring-primary" defaultChecked={dynasty === 'Tất cả'} />
                  <span className="text-on-surface-variant group-hover:text-primary transition-colors font-medium">{dynasty}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Lọc Vai trò */}
          <section>
            <h3 className="font-mono text-[10px] text-secondary uppercase font-bold tracking-[0.2em] mb-6 border-b border-outline-variant/30 pb-2">Vai trò</h3>
            <div className="flex flex-wrap gap-2">
              {['Quân sự', 'Văn học', 'Ngoại giao', 'Giáo dục'].map(role => (
                <button key={role} className="px-4 py-1.5 rounded-full border border-secondary text-secondary font-mono text-[9px] font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">
                  {role}
                </button>
              ))}
            </div>
          </section>

          {/* Tìm kiếm */}
          <section className="pt-4">
            <div className="relative border-b-2 border-outline-variant focus-within:border-primary transition-all">
              <input type="text" placeholder="Tìm kiếm nhân vật..." className="w-full bg-transparent py-2 pr-10 outline-none italic text-sm font-body" />
              <span className="material-symbols-outlined absolute right-0 top-2 text-secondary">search</span>
            </div>
          </section>
        </aside>

        {/* 3. MAIN CONTENT: GRID CARDS (ĐỦ 6 NHÂN VẬT) */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {characters.map((char) => (
              <div key={char.id} className="group bg-white border border-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col relative">
                
                {/* Ảnh chân dung: Hiệu ứng Grayscale */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={char.image} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                    alt={char.name} 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white font-mono text-[9px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest shadow-lg">
                      {char.role}
                    </span>
                  </div>
                </div>

                {/* Nội dung tóm lược */}
                <div className="p-8 space-y-4 flex-grow border-t-2 border-primary/5">
                   <p className="font-mono text-[9px] font-bold text-accent uppercase tracking-widest">{char.dynasty}</p>
                   <h2 className="font-headline text-3xl text-primary font-bold group-hover:text-primary transition-colors tracking-tight italic">
                     {char.name}
                   </h2>
                   <p className="font-body text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                     {char.desc}
                   </p>
                </div>

                {/* Link xem chi tiết */}
                <div className="p-8 pt-0 mt-auto">
                   <Link to={`/characters/${char.id}`} className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group/link border-t border-outline-variant/20 pt-4 w-full">
                      Hồ sơ chi tiết 
                      <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform">east</span>
                   </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 4. PAGINATION */}
          <div className="mt-20 flex justify-center items-center gap-4">
             <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-secondary opacity-30 cursor-not-allowed"><span className="material-symbols-outlined">chevron_left</span></button>
             <button className="w-10 h-10 rounded-full bg-primary text-white font-bold text-xs shadow-lg">1</button>
             <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all font-bold text-xs">2</button>
             <span className="text-secondary font-mono">...</span>
             <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all font-bold text-xs">12</button>
             <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCharacters;