import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserCharacters = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  
  // --- DỮ LIỆU NHÂN VẬT ---
  const characters = [
    {
      id: 1,
      name: 'Lê Thái Tổ (Lê Lợi)',
      role: 'Quân sự',
      dynasty: 'Nhà Lê Sơ',
      desc: 'Người khởi xướng khởi nghĩa Lam Sơn, đánh đuổi quân Minh và thành lập nhà Hậu Lê, mở ra thời kỳ độc lập tự chủ lâu dài cho dân tộc.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkXCL0ZlfPvy43z13A0y1bG_eAez20SasQjlbmMYN0ksU6u2mv7H7wD2kxlQgr5TVFjQXQIMB18PYpL0LebO68DVPdFgMGK1agh4KI4EyQ4Me3ooBfg3K1JiZq7cmSnu-1GzPq8ZGlH-VSmNdibOhBNI1pOIAdA-TqjbomhMxBCsnmpa0JmnR7PFbba9_7Bb2hR96-_FaIwMv6EGVpO58GxtObun-s6BQINyccTPHf67jr-DfzH_Qpx755igURlGi5zCpsjNp-WJmX'
    },
    {
      id: 2,
      name: 'Nguyễn Trãi',
      role: 'Văn học',
      dynasty: 'Nhà Lê Sơ',
      desc: 'Anh hùng dân tộc, danh nhân văn hóa thế giới. Tác giả của Bình Ngô Đại Cáo - bản tuyên ngôn độc lập thứ hai của nước Việt.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOm0BuewNGMMyw3hbNXvp09kmzgSCa95fsr7xfiUxlvICLTrjie4q-P_kpsq1-_73pO_mgOU8hLTaQrzHvDaMYqlFUG2FrBoUcyfMkpG1lANyWQeqePO2u_YemlnwWAk9gtUHZtsVY3LL9QnlDgOnPfZdnfUUHlpFLc07haID26fE6xWRx8K7M2WAXSwgPBtANe1iypQc0J8akbCG6qc8vr_9EkIWL9IXDozwxHl8aNks3TY7Qd2PuTV3mBCUIGSBl_7yT23XtHidO'
    },
    {
      id: 3,
      name: 'Trần Hưng Đạo',
      role: 'Quân sự',
      dynasty: 'Nhà Trần',
      desc: 'Vị tướng thiên tài ba lần lãnh đạo quân dân nhà Trần đánh bại quân xâm lược Nguyên Mông hùng mạnh nhất thế giới lúc bấy giờ.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKuKjwQFwNQohxy16nvgPodBX9xYlr_xfJyAOLcN1j3ReQY_2BJIBSqRQtNXYZyclOHFwkPeYLBnlikMDpNgGR6cMx-daUsK6HcblyL3JgmceKk24uLN64Cfwy0NVVPHqpaRNc2ly-EJQCL2iinxOqCCI4hauJSNHNDnEmU16YR5iLpog0SXF2T9R7VNsaXlSQwNrxQLlQhE8SG5hIpLchfYvsEBVJJeX4Ez0p4Lm6E2u-PzMPRPc8CC7_NspWPQZhmSiLo2qBr_9H'
    },
    {
      id: 4,
      name: 'Lý Thường Kiệt',
      role: 'Ngoại giao',
      dynasty: 'Nhà Lý',
      desc: 'Vị thái úy lỗi lạc, tác giả của bài thơ thần "Nam Quốc Sơn Hà" và chiến dịch phạt Tống lẫy lừng phương Bắc.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxohlRm6oJEIxb7Q32dWdgEtmNJ9C8kOK_OYXlTGjF6mAzT-bhvf_qbDN0xjjcA-N-S-W0anAvRa0G_WIYCHgEhnKlfVsfkoA_AiLpgmjN04u1Dhfqn_NTprJiPaZmFQY1_3IWZOTdomizXHnxRcKDRNqQk0QuIfgFoFVO12OqOa13lb2t0fTb1f897BvKcYezckMsQro_aNJEdd-wRYU8EDxaXSz-Rwo15yRsuccDhBdgg1u4lq_KHVxzNkrGQFGIa4Pq09wyvCD0'
    },
    {
      id: 5,
      name: 'Hồ Xuân Hương',
      role: 'Văn học',
      dynasty: 'Nhà Nguyễn',
      desc: '"Bà chúa thơ Nôm" với những tác phẩm độc đáo, táo bạo, mang đậm tinh thần nhân văn và đấu tranh cho nữ quyền.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEqU9ughoF8Lb1OyIIdd3TMKkvgBGcLAxEbaSsQ0yk_XWi3GKPZwQQ1zlkZb73LawSDjLW9iQCar6TFU7XAZE-nA1ykBJhawTohOTraQtXMRjqvh7xfJF7dyIjyId4Xvg8wean3yJ3KpLUg9SP2NqYS-FK9CLXTW5YCS8Ib9Dcgs2UXn25GQNlY8Ssp5rr255X5-r0tZDrr2Gli3VAHxvLjE3qFIR8xoiIsQsTLTto-9iYz9aMrVq4eOgy_XJ_n5qxBrHfX-3TZ8wa'
    },
    {
      id: 6,
      name: 'Chu Văn An',
      role: 'Giáo dục',
      dynasty: 'Nhà Trần',
      desc: '"Người thầy của muôn đời", nổi tiếng với đạo đức trong sáng và tinh thần không khuất phục trước cường quyền.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2cNHZGKf1tEph8k3mfH5LBfN1X0x4eE-zzos4IYc58cNuYh8UawZwgBGApzvk4V3TIxBepyGKHyyS6jq_c93SaWAU4_2a9e2_ilbgZFR7SvCUjms2VpdjL0Z6o-04KinCJ-uRAXRaKNGSqipZdvYSwZn4tMMuuPn71SmGREiZm04HVjnJPP4bBMq6C_2NUD4dShAF_BkxRwUCfuEs0pVuSAXdzPFocwTPtzMtKVkqbPUWN-UltPHVc4VhR0J0nWe3BKUBBxj0zglW'
    }
  ];

  // --- STATE LỌC ---
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDynasty, setSelectedDynasty] = useState('Tất cả');
  const [selectedRole, setSelectedRole] = useState('Tất cả');

  // --- LOGIC LỌC ---
  const filteredCharacters = characters.filter(char => {
    const matchesSearch = char.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDynasty = selectedDynasty === 'Tất cả' || char.dynasty === selectedDynasty;
    const matchesRole = selectedRole === 'Tất cả' || char.role === selectedRole;
    return matchesSearch && matchesDynasty && matchesRole;
  });

  return (
    <div className="max-w-[1440px] mx-auto px-12 py-16 font-body animate-in fade-in duration-700">
      
      <header className="mb-20 border-l-4 border-primary pl-8">
        <h1 className="font-headline text-5xl md:text-6xl text-primary font-bold italic tracking-tight leading-none">Danh nhân Lịch sử</h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl mt-4 italic">Những bậc anh hùng, thi sĩ và nhà tư tưởng đã định hình dòng chảy nghìn năm của dân tộc Việt.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* --- SIDEBAR--- */}
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-12">
          
          {/* 1. TÌM KIẾM */}
          <section>
            <h3 className="font-mono text-[10px] text-secondary uppercase font-bold tracking-[0.2em] mb-4 border-b border-outline-variant/30 pb-2">Tìm kiếm</h3>
            <div className="relative border-b-2 border-outline-variant focus-within:border-primary transition-all">
              <input 
                type="text" placeholder="Tên nhân vật..." 
                value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent py-2 pr-10 outline-none italic text-sm font-body" 
              />
              <span className="material-symbols-outlined absolute right-0 top-2 text-secondary">search</span>
            </div>
          </section>

          {/* 2. TRIỀU ĐẠI */}
          <section>
            <h3 className="font-mono text-[10px] text-secondary uppercase font-bold tracking-[0.2em] mb-6 border-b border-outline-variant/30 pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">history_edu</span> TRIỀU ĐẠI
            </h3>
            <div className="space-y-4">
              {['Tất cả', 'Nhà Lý', 'Nhà Trần', 'Nhà Lê Sơ', 'Nhà Nguyễn'].map(dyn => (
                <label key={dyn} className="flex items-center gap-3 cursor-pointer group text-sm font-medium transition-all">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" name="dynasty"
                      checked={selectedDynasty === dyn}
                      onChange={() => setSelectedDynasty(dyn)}
                      className="peer appearance-none w-5 h-5 border-2 border-outline-variant rounded-full checked:border-primary transition-all cursor-pointer" 
                    />
                    <div className="absolute w-2.5 h-2.5 bg-primary rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
                  </div>
                  <span className={`${selectedDynasty === dyn ? 'text-primary font-bold text-lg italic font-headline' : 'text-on-surface-variant'} group-hover:text-primary transition-colors`}>
                    {dyn}
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* 3. VAI TRÒ */}
          <section>
            <h3 className="font-mono text-[10px] text-secondary uppercase font-bold tracking-[0.2em] mb-6 border-b border-outline-variant/30 pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">person</span> VAI TRÒ
            </h3>
            <div className="space-y-4">
              {['Tất cả', 'Quân sự', 'Văn học', 'Ngoại giao', 'Giáo dục'].map(role => (
                <label key={role} className="flex items-center gap-3 cursor-pointer group text-sm font-medium transition-all">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" name="role"
                      checked={selectedRole === role}
                      onChange={() => setSelectedRole(role)}
                      className="peer appearance-none w-5 h-5 border-2 border-outline-variant rounded-full checked:border-primary transition-all cursor-pointer" 
                    />
                    <div className="absolute w-2.5 h-2.5 bg-primary rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
                  </div>
                  <span className={`${selectedRole === role ? 'text-primary font-bold text-lg italic font-headline' : 'text-on-surface-variant'} group-hover:text-primary transition-colors`}>
                    {role}
                  </span>
                </label>
              ))}
            </div>
          </section>

        </aside>

        {/* --- MAIN GRID CARDS --- */}
        <div className="flex-1">
          {filteredCharacters.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {filteredCharacters.map((char) => (
                <article key={char.id} className="group bg-white border border-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col relative">
                  <div className="relative h-80 overflow-hidden">
                    <Link to={`/characters/${char.id}`}>
                      <img src={char.image} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" alt={char.name} />
                    </Link>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white font-mono text-[9px] font-bold px-3 py-1 rounded-sm shadow-lg uppercase">{char.role}</span>
                    </div>
                  </div>
                  <div className="p-8 space-y-4 flex-grow border-t-2 border-primary/5">
                    <p className="font-mono text-[9px] font-bold text-accent uppercase tracking-widest">{char.dynasty}</p>
                    <Link to={`/characters/${char.id}`}>
                      <h2 className="font-headline text-3xl text-primary font-bold group-hover:text-primary transition-colors tracking-tight italic leading-none">{char.name}</h2>
                    </Link>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed line-clamp-3 italic">{char.desc}</p>
                  </div>
                  <div className="p-8 pt-0 mt-auto">
                    <Link to={`/characters/${char.id}`} className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group/link border-t border-outline-variant/20 pt-4 w-full">
                        Hồ sơ chi tiết <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform text-primary">east</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-40 opacity-40 text-center">
               <span className="material-symbols-outlined text-6xl mb-4 text-primary">person_search</span>
               <p className="font-headline text-2xl italic font-bold">Không tìm thấy hiền tài phù hợp</p>
               <button onClick={() => {setSearchTerm(''); setSelectedDynasty('Tất cả'); setSelectedRole('Tất cả')}} className="mt-4 text-primary underline font-bold uppercase text-xs tracking-widest">Xóa bộ lọc</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCharacters;