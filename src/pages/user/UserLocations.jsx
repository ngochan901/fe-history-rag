import React from 'react';
import { Link } from 'react-router-dom';

const UserLocations = () => {
  // Dữ liệu đầy đủ 6 địa danh lịch sử tiêu biểu
  const locations = [
    { 
      id: 1, 
      name: 'Cố đô Huế', 
      province: 'Thừa Thiên Huế', 
      type: 'Capital City', 
      desc: 'Kinh đô của triều đại nhà Nguyễn, biểu tượng cho quyền lực và sự tinh xảo trong kiến trúc phong kiến cuối cùng.', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy9HOsSy2w5f4u8FOROpkAqDh91oFc040gmrIqvtUnfdASl5Yv9fpuP_-v4xHO4hsVTXFgvPoQU1zC-N-xtLmqBi7yI1Z5ywQqyAB92yDXzJ00RHI38gz9tYVAVrPha-f4mvXsYjgaUHHeWvmRY0PhijQlbC0VRcBNS3-RfERtElu_eZ5o6c8rXInSXEzTRrYZaxDQ65FF6EICyYGBypPopErqsIRLrd_nuI4027TYKL4-azB9b0bnqQbJXIfHzi3tPXRGwi212ueN' 
    }, 
      { 
      id: 2, 
      name: 'Hoàng Thành Thăng Long', 
      province: 'Hà Nội', 
      type: 'Imperial Citadel', 
      desc: 'Trung tâm chính trị, văn hóa quan trọng nhất của Việt Nam trong suốt 13 thế kỷ liên tiếp từ thời Lý đến Nguyễn.', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc93rr9Ln2v2v8oDXqcTThoFyvbU-lGRm-n2qyByLfGgx6QaY8sv2gDhR7DX3C83E0dbHwOLQSfFneh__EzEdMIz5U1dLpfRjorC21h4GwJ1bAJ3Vl2qOppE6m6VD4jtyZ2jO6RuPzfsRHwZdIp8QH-Bgt0FH1yyQKXZ-5zdQx0pJHYJ5aSKr4B2aRWDJMh4kFEjJT5T9SRT20VT6MDYN7vANjbJ2FcJ3nj4xLYwONlrcSAe0eCojuMEzE0EMelzyrqrXy6TDFvRWW' 
    },
    { 
      id: 3, 
      name: 'Cố đô Hoa Lư', 
      province: 'Ninh Bình', 
      type: 'Ancient Capital', 
      desc: 'Kinh đô đầu tiên của nước Việt độc lập sau 1000 năm Bắc thuộc, gắn liền với sự nghiệp thống nhất của Đinh Bộ Lĩnh.', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4zEJVUzoNRwMJqYZdNwfr3q46wbgd1Hrw79_Mrt3_mSJVw9bDu4ty1xtGhd2WK13hV5LE4tvo-wI2GtqJv4U3w-soRt_ywdRAGCGL4bosK_ZmVvCPzizbLil7IDmYzsyz3QssJMF5u9zfxauzzPQ0z4yRTsF0VJyJyaFh3CSaceFdiTeEan44feuxMDSnkuNeXhg_b2CQezVPHci4oGO9PrrDXqsB_0wP3V4jwpH9Akka8QC3XacpsLnreP6LoTmLCn08_v3Yds6s' 
    },
    { 
      id: 4, 
      name: 'Văn Miếu - Quốc Tử Giám', 
      province: 'Hà Nội', 
      type: 'Temple of Literature', 
      desc: 'Trường đại học đầu tiên của Việt Nam, nơi lưu giữ tinh hoa khoa bảng ngàn năm và 82 tấm bia Tiến sĩ quý giá.', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmNocjFRWbOeTTb4D0X6GrSEqRqAXqYKuZffaLLwlhDsSOh0IFLQkAgBfW2d1MdC4FTUsi96mBv2FryFIh-X2wAsezin7d4QckXyAroun0MplIEGEDNN6v6Y6vsl1otxU8kond2lnWMMIZdA1xNS5XKkNquZrLNF83nVGEYXFHFFKkc1gAgMDV_OLj-wHq6I7ziUbvMbrilELjQCgrDGH3ua9wBkEfakzf1loum-zGM5B7q7hkOf7FFNZJh7sLDFiihew0LiUD-bCo' 
    },
    { 
      id: 5, 
      name: 'Di tích Lam Kinh', 
      province: 'Thanh Hóa', 
      type: 'Royal Sanctuary', 
      desc: 'Nơi phát tích của cuộc khởi nghĩa Lam Sơn và là khu lăng tẩm hoàng gia linh thiêng của vương triều Hậu Lê.', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDh48rEx3whFt-uLgXeFfaouAxswoghSNKU3kZ0uZthttK9uZCGTtlrwat-dkOuIDQm8JgoQQgtoI5UE7kWk5locGj5ph9lA_kJAM1vAKKqJp6lTSacw_RMEvhyo3E4Crdwo-zQY3o80VtVsvTy8v-t1RELwDqRYwfd7MTtX9U1B9MtfFli_rLejuz-vyFk7E25UI5VQYur_BU3UwparR335gjSs06YNDEsCDfa1gea0wCV15Q-yk7VAsxz7yMHk6wx439Phkko_zFW' 
    },
    { 
      id: 6, 
      name: 'Thành Nhà Hồ', 
      province: 'Thanh Hóa', 
      type: 'Stone Citadel', 
      desc: 'Công trình kiến trúc đá độc đáo nhất Đông Nam Á, minh chứng cho một giai đoạn cải cách ngắn ngủi nhưng rực rỡ của Hồ Quý Ly.', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJoRC650I6qGHlB-liUmpUhN1cmPPsDEtlcEfeAUIcSsSs6svYVE8Co0BmVMg6bEz8Yji6sUXFqVuYzsnk8GQboz8qQcrC4iUvfXRzeX-ZeHc_kp0D7KdCeUmqpuunBVK7Y1Kv_cjh8_PVKweEwOkkxYdgxSRG_MlTXgEIL_iTwT8ekG0gv0jAA78-6_BI7pHMNhEEHAypLyTFDK0pzrn0oLUuJ83wfqV7Gj7X14l55Z1v4WC4tyhB_e8kSJqdKF_EASTe8pOn-v48' 
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-12 py-16 font-body animate-in fade-in duration-700">
      {/* 1. BODY HEADER: TIÊU ĐỀ ĐỒNG BỘ */}
      <header className="mb-12 space-y-4 border-l-4 border-primary pl-8">
        <span className="bg-primary/10 text-primary px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm">Bản Đồ Di Sản</span>
        <h1 className="font-headline text-4xl md:text-5xl text-primary font-bold italic tracking-tight leading-none">
          Danh sách Địa danh Lịch sử
        </h1>
        <p className="font-body text-lg text-on-surface-variant max-w-3xl leading-relaxed italic">
          Khám phá những kinh đô cổ, di tích khảo cổ và các địa điểm ghi dấu những thăng trầm của dân tộc Việt từ thời lập quốc.
        </p>
      </header>

      {/* 2. FILTER BAR: ĐỒNG BỘ MÀU SẮC */}
      <div className="bg-white border border-outline-variant/30 p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-8 items-end mb-16 relative overflow-hidden">
         <div className="absolute inset-0 bg-primary/5 opacity-40 dong-son-pattern"></div>
         <div className="flex-1 space-y-3 relative z-10 w-full">
            <label className="font-mono text-[9px] font-bold text-primary uppercase tracking-widest opacity-60">Tìm kiếm địa danh</label>
            <div className="relative border-b-2 border-primary/20 focus-within:border-primary transition-all">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">travel_explore</span>
              <input type="text" className="w-full bg-transparent pl-8 py-2 outline-none italic text-sm font-body" placeholder="Nhập tên cố đô, thành quách..." />
            </div>
         </div>
         <button className="bg-primary text-white px-10 py-3 rounded-lg font-headline font-bold text-xs uppercase shadow-xl hover:brightness-110 active:scale-95 transition-all relative z-10 tracking-widest">
           Lọc kết quả
         </button>
      </div>

      {/* 3. CONTENT GRID: HIỂN THỊ ĐỦ 6 ĐỊA DANH */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {locations.map(loc => (
          <article key={loc.id} className="group bg-white border border-outline-variant/30 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col relative">
            
            {/* Image Header */}
            <div className="h-64 overflow-hidden relative">
              <img 
                src={loc.image} 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                alt={loc.name} 
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-md px-3 py-1 font-mono text-[9px] font-bold text-primary uppercase shadow-sm tracking-widest">
                  {loc.type}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 space-y-4 border-t-[3px] border-primary/5 flex-grow">
               <div className="flex justify-between items-start">
                  <h3 className="font-headline text-2xl text-primary font-bold italic tracking-tight leading-tight group-hover:text-primary transition-colors">
                    {loc.name}
                  </h3>
                  <span className="material-symbols-outlined text-primary/30 group-hover:text-primary transition-colors">bookmark</span>
               </div>
               <p className="font-body text-sm text-on-surface-variant leading-relaxed line-clamp-3 italic opacity-80">
                 "{loc.desc}"
               </p>
               <div className="pt-4 flex gap-2">
                  <span className="bg-surface-low text-on-surface-variant px-2 py-0.5 rounded-sm text-[9px] font-mono font-bold border border-outline-variant/30 uppercase tracking-tighter shadow-sm">
                    UNESCO
                  </span>
                  <span className="bg-surface-low text-on-surface-variant px-2 py-0.5 rounded-sm text-[9px] font-mono font-bold border border-outline-variant/30 uppercase tracking-tighter shadow-sm">
                    {loc.province}
                  </span>
               </div>
            </div>

            {/* Footer action */}
        <div className="px-8 pb-6">
          <Link 
            to={`/locations/${loc.id}`} 
            className="inline-block text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em] border-b border-primary/20 pb-0.5 hover:border-primary transition-all active:scale-95"
          >
            Khám phá chi tiết
          </Link>
      </div>
    </article>
        ))}
      </div>

      {/* 4. PAGINATION */}
      <div className="flex justify-center mt-24 gap-3">
        <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full text-secondary opacity-30 cursor-not-allowed transition-all">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-primary text-white font-bold text-xs rounded-full shadow-lg">1</button>
        <button className="w-10 h-10 flex items-center justify-center border border-outline-variant text-secondary hover:bg-primary hover:text-white transition-all font-bold text-xs rounded-full">2</button>
        <button className="w-10 h-10 flex items-center justify-center border border-outline-variant text-secondary hover:bg-primary hover:text-white transition-all rounded-full">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default UserLocations;