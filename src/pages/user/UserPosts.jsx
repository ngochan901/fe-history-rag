import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserPosts = () => {
  const [filterDynasty, setFilterDynasty] = useState('Tất cả Triều đại');

  // Dữ liệu bài viết
  const articles = [
    {
      id: 1,
      tag: "Kiến trúc",
      dynasty: "Hậu Lê (1428–1527)",
      title: "Kiến trúc Cung điện Thăng Long: Biểu tượng Quyền lực và Văn hóa",
      slug: "kien-truc-thang-long", // Khớp với ArticleDetail
      excerpt: "Phân tích sự giao thoa kiến trúc giữa các triều đại và ảnh hưởng của Nho giáo trong quy hoạch cung đình thời Lê Sơ.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiaBD8cV4iBRP9zjbZQw4_Vj_gsiyTIWMdR0dlYOaEfq1Tf9vcfZhm8SOPhu08iK2P2g79gUtu3PEuojk3AOkK43P4MqTIm6kTwhOA0QhjPAbFDNXw72IDZPOD5qNp6ECqBwYv9FKtMsXJtePf5TCDDTBGSTJXGWiWrCnD-jpiLs5Tqq_GV4D-YSJ8CdBc1wnXnteLTUzZ7KMqdXAGAHN3W8srpGGpNjPxygJXs3VUub5dW0qljkAR0wd_lTzL--nkhQRPukBdw208",
      likes: "1.2k",
      comments: 42,
      readTime: "15 phút đọc",
      featured: true // Đánh dấu là bài tiêu biểu
    },
    {
      id: 2,
      tag: "Quân sự",
      dynasty: "Nhà Trần (1225–1400)",
      title: "Chiến thuật quân sự thời Trần: Nghệ thuật lấy yếu thắng mạnh",
      slug: "chien-thuat-quan-su-tran",
      excerpt: "Phân tích chuyên sâu về kế sách 'Vườn không nhà trống' và cách thức huy động sức mạnh toàn dân trong ba lần kháng chiến chống Nguyên Mông...",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3a77zZzYMUsdTOHvAF9_PiEOkVKvj0_uWPBw0XOjIvwzLpkJ1bUAXzyWp8_UF2OoVT8k932oFMseFCy-5WElGsQZUPqSjs4cz-sryMw2jgxC2j81tklVq5cl9HbymrSqz16aPc5EeYXQFV2w2wyIRd-LUU3opyR7oP7QiQxI88NqZe49bjFSLhEh0FHPNxXaLoc_9r9aYOGlE559Q0AW8TXozYq5w3xDE-ufs8aR2yX7oj3hoMwzNjXOzMJwUJX2PVVtTK7PLam7Q",
      likes: "1.2k",
      comments: 84,
      readTime: "12 phút đọc"
    },
    {
      id: 3,
      tag: "Ngoại giao",
      dynasty: "Nhà Lê Sơ (1428–1527)",
      title: "Ngoại giao thời Lê Sơ: Bản lĩnh cương nhu của một quốc gia độc lập",
      slug: "ngoai-giao-le-so",
      excerpt: "Nghiên cứu về các văn bản bang giao giữa Đại Việt và nhà Minh, khẳng định chủ quyền lãnh thổ thông qua luận điểm chính nghĩa...",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOs5npR0CdWtGFo-0OPI7dJyYo42tKGWhiEl5t2xrEoV-z84zKAZhyz3WqtGk7m8XfCsCgePy_TMtk0tGl9vZjcNBGWiTlwmqbLQv2ufC937Dd5W2WT7OZmi1m4gGyHBvqTK__w2AKvJKcCUm8jzGK4eEwRlnXk4u2xMrlnryCfvnFmDtiUYGIodWC6GKcmmuMmZMgZI1YTvMVXIwb-ezJJBXztHaAnLp_Du1F2cGDnJr9KVi3Muv_Cbvoua1gw_cp2UnhYIw9Zy01",
      likes: "856",
      comments: 42,
      readTime: "18 phút đọc"
    },
    {
      id: 4,
      tag: "Văn hóa",
      dynasty: "Nhà Nguyễn (1802–1945)",
      title: "Lễ nhạc cung đình Huế: Di sản tinh thần của vương triều cuối cùng",
      slug: "le-nhac-cung-dinh-hue",
      excerpt: "Tìm hiểu về Nhã nhạc cung đình Huế - kiệt tác truyền khẩu và phi vật thể của nhân loại, biểu trưng cho sự hài hòa giữa con người...",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfz81rCs9YqMYEFHI-wcQUH5rmc9bQpaGpVvfTGlSANJRXJi_GeiPpYGWIj4iIAGMp34nxm-8L4HFl03NFvuRNYTuk7yOwMTwHz2fmpSlhl1P5dJpJWAxZsejXAAlxjlKptb52C8Iyl8RgrjGlw3mAMcL210xSm6AjYBShvpuv9-wcLnDYvFE9oHyKNSFn3EzgDDc2CnF_hPgs0vLkmQLeVzutLzT4YVI3NhEnaP5U-ZzLINNVzLIipX6j1EIG2ajvWNigBvp1O5L7",
      likes: "2.1k",
      comments: 156,
      readTime: "25 phút đọc"
    }
  ];

  // Lấy bài viết tiêu biểu (bài đầu tiên có featured: true)
  const featuredArt = articles.find(a => a.featured);
  // Danh sách còn lại
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="parchment-texture min-h-screen font-body selection:bg-primary/10">
      <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-12">
        
        {/* 1. FEATURED RESEARCH SECTION */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px flex-grow bg-outline-variant/30"></span>
            <h2 className="font-headline text-2xl text-primary italic uppercase tracking-[0.3em] px-4 text-center md:text-left">Công trình tiêu biểu</h2>
            <span className="h-px flex-grow bg-outline-variant/30"></span>
          </div>
          
          {featuredArt && (
            <div className="grid grid-cols-1 lg:grid-cols-12 border border-secondary/20 bg-white shadow-xl overflow-hidden rounded-sm group">
              <div className="lg:col-span-7 relative h-[400px] lg:h-auto overflow-hidden">
                <Link to={`/articles/${featuredArt.slug}`}>
                  <img 
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 cursor-pointer" 
                    src={featuredArt.image} 
                    alt="Featured" 
                  />
                </Link>
                <div className="absolute top-6 left-6">
                  <span className="bg-primary text-white px-6 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-lg italic">Nghiên cứu đặc biệt</span>
                </div>
              </div>
              <div className="lg:col-span-5 p-12 flex flex-col justify-center bg-[#f7f4e9] border-l border-secondary/10">
                <span className="text-secondary font-mono text-[10px] font-bold uppercase tracking-widest mb-3">{featuredArt.dynasty}</span>
                <Link to={`/articles/${featuredArt.slug}`}>
                  <h3 className="font-headline text-4xl text-on-surface mb-6 leading-tight italic font-bold hover:text-primary transition-colors cursor-pointer tracking-tight">
                    {featuredArt.title}
                  </h3>
                </Link>
                <p className="font-body text-base text-on-surface-variant mb-10 italic leading-relaxed">
                  {featuredArt.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-4 text-secondary/60 font-mono text-[10px] font-bold">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {featuredArt.readTime.toUpperCase()}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">verified</span> CHỨNG THỰC</span>
                  </div>
                  <Link 
                    to={`/articles/${featuredArt.slug}`} 
                    className="bg-primary text-white px-10 py-3 font-bold text-[10px] uppercase tracking-widest hover:brightness-110 transition-all shadow-md active:scale-95"
                  >
                    KHÁM PHÁ
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 2. FILTERS AND SORTING (GIỮ NGUYÊN) */}
        <div className="sticky top-20 z-40 bg-[#fcf9ee]/90 backdrop-blur-md py-6 border-y border-outline-variant/20 mb-16 px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex flex-wrap gap-6 items-center">
              <div className="relative group">
                <select 
                  value={filterDynasty}
                  onChange={(e) => setFilterDynasty(e.target.value)}
                  className="appearance-none bg-transparent border-none border-b-2 border-secondary/20 text-secondary font-bold text-[11px] uppercase tracking-widest pr-10 py-2 focus:ring-0 focus:border-primary cursor-pointer transition-all"
                >
                  <option>Tất cả Triều đại</option>
                  <option>Nhà Lý</option>
                  <option>Nhà Trần</option>
                  <option>Nhà Lê Sơ</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-secondary text-sm">expand_more</span>
              </div>
              
              <div className="flex gap-3">
                <button className="px-5 py-1.5 rounded-full border border-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-tighter hover:bg-primary hover:text-white transition-all">Sử liệu gốc</button>
                <button className="px-5 py-1.5 rounded-full border border-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-tighter hover:bg-primary hover:text-white transition-all">Phân tích mới</button>
              </div>
            </div>
            
            <div className="flex items-center gap-6 border-l border-outline-variant/40 pl-8 font-mono">
              <span className="text-on-surface-variant text-[10px] font-bold uppercase opacity-50">Sắp xếp:</span>
              <button className="text-primary font-bold text-[11px] uppercase tracking-widest border-b-2 border-primary">Mới nhất</button>
              <button className="text-on-surface-variant font-bold text-[11px] uppercase tracking-widest hover:text-primary transition-all">Đọc nhiều</button>
            </div>
          </div>
        </div>

        {/* 3. POST GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {regularArticles.map((art) => (
            <article key={art.id} className="group bg-white border border-secondary/10 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl flex flex-col">
              <div className="h-60 overflow-hidden relative">
                <Link to={`/articles/${art.slug}`}>
                  <img 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-700" 
                    src={art.image} 
                    alt={art.title} 
                  />
                </Link>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#4f3800] text-white px-4 py-1 text-[9px] font-bold uppercase tracking-[0.2em] shadow-lg">{art.tag}</span>
                </div>
              </div>
              <div className="p-8 border-t border-secondary/5 flex flex-col flex-grow">
                <span className="text-secondary font-mono text-[9px] font-bold uppercase tracking-widest mb-3 opacity-60">{art.dynasty}</span>
                <Link to={`/articles/${art.slug}`}>
                  <h4 className="font-headline text-2xl text-on-surface group-hover:text-primary transition-colors mb-5 italic font-bold leading-tight tracking-tight">
                    {art.title}
                  </h4>
                </Link>
                <p className="font-body text-sm text-on-surface-variant line-clamp-3 mb-8 italic leading-relaxed">
                  {art.excerpt}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10 mt-auto font-mono">
                  <div className="flex gap-5">
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-secondary/70">
                      <span className="material-symbols-outlined text-[18px]">favorite</span> {art.likes}
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-secondary/70">
                      <span className="material-symbols-outlined text-[18px]">chat_bubble</span> {art.comments}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase text-on-surface-variant opacity-50 tracking-tighter">{art.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 4. PAGINATION (GIỮ NGUYÊN) */}
        <div className="mt-24 flex justify-center items-center gap-3">
          <button className="w-12 h-12 border border-secondary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all rounded-sm">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-12 h-12 border border-primary bg-primary text-white font-headline font-bold text-lg italic shadow-lg">1</button>
          <button className="w-12 h-12 border border-secondary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all font-headline font-bold text-lg italic">2</button>
          <button className="w-12 h-12 border border-secondary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all font-headline font-bold text-lg italic">3</button>
          <span className="text-secondary px-4 font-bold opacity-30">...</span>
          <button className="w-12 h-12 border border-secondary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all rounded-sm">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default UserPosts;