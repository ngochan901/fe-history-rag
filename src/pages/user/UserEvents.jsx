import React from 'react';
import { Link } from 'react-router-dom';

const UserEvents = () => {
  const events = [
    {
      id: 'EVT-1288',
      year: '1288',
      title: 'Trận Bạch Đằng Lần Thứ Ba',
      category: 'Quân sự • Triều Trần',
      desc: 'Chiến thắng oanh liệt của quân dân nhà Trần đập tan ý đồ xâm lược của đế quốc Nguyên Mông trên dòng sông Bạch Đằng.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBArlscw3wc_0llom4YXbNv7OUtmTW1u8adGJtB0r_R9ouLWRlOhBtwANhi8h-y-oKCXyjtcMAw-fv_DqJa8j9I0UYbf6VIaYfgHL50aCXOYoKCdQKYmjZdoMl1JYnzrRbkzkf79To66-2d-f1XfB1xrJTtxZoVqJiuNrqbgJSqttpHAF3wZGHnereJFQmlr7zvRv_OYZP3ifnXN8WYT8_1w8_n43OLOx1lJp01FpEjYuFGNSEqolT22CJMX1LelRwU2FVHe3Qq_fbP'
    },
    {
      id: 'EVT-1427',
      year: '1427',
      title: 'Hội Thề Đông Quan',
      category: 'Ngoại giao • Triều Lê Sơ',
      desc: 'Đánh dấu sự kết thúc của khởi nghĩa Lam Sơn, mở ra kỷ nguyên độc lập lâu dài sau khi quân Minh rút về nước.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDTXt3tOmQLzCboBJbQ63U5COKxdxaq5GrOn1775TXtXg3zq28AuTTb3mfVjKs6uj5Nkhc7auEFnCrMuCs6G4YIcZmzBgEE4ZdY3awqlP12VklH3BWkRe6Q83fhxNWatx1MbYcLIq7RztTsqI3HQRxPVW7T-TPQdwD7HM2eOSpwVHwup9Hp3K7KuNRjtoiaNSNbwvYXV_yv4pvRx5WIpTl05zH0YYusegbAB7v9qKEqrHI9SzL2DI2Hb0snIW35b9H7yKKrRRXIf79'
    },
    {
      id: 'EVT-1070',
      year: '1070',
      title: 'Khởi dựng Văn Miếu',
      category: 'Văn hóa • Triều Lý',
      desc: 'Vua Lý Thánh Tông cho xây dựng Văn Miếu tại Thăng Long, mở đầu cho nền giáo dục đại học chính thống đầu tiên của Việt Nam.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-vfyWu8AZJ8zXJcGYqxgtuwF8kgnNnxqHfqVCWu6IexNxd58MLyYryN2Pd4GPPIwQcgir92iGx39PPcocu5YwY0dKB88RM80ItVGkDs80nIlov0g4PRkKkWZqNqeAX2cgwfngoBoFqIt07Pir--2qzfNsUbTW8P_bXbYNjOL9IKt34YPVLuKa93Sk3GhQCaHLTecwGQGCZuSq0bnrOOq6oXKKmx5RiNGxRXHOQb6CiTjXlTeHajpZq_8iG4JClpUY9GWZsiRXvkTh'
    },
    {
      id: 'EVT-1400',
      year: '1400',
      title: 'Hồ Quý Ly Lên Ngôi',
      category: 'Chính trị • Triều Hồ',
      desc: 'Cuộc chuyển giao quyền lực từ nhà Trần sang nhà Hồ, đi kèm với những cải cách táo bạo về kinh tế như phát hành tiền giấy.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4caq0Hz2eYlMe3uSRBnCVHc_v6ZE3OZuOiVIabi5YlcmijvCq4M8bX3IEg7SY59EKl0MwDo3JTUZ2_Ci3raC_sHQNmpXCc0RDmP9B6XKOuXkYhzMHScR0Qakd2h7JfSanG9LPOYmCUx-XBFxvtVokGaZJ2AuSeQFxh7i5KBZRJfutwlhArn9Kj1pF4cKakBCa9v-hKJpZoKHZurx_WXB54v4_aepQwcdwcXDWbZvDxCXTuc5UUhxb0BQsuUVzmvGuBciJOl4-K726'
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-12 py-16 font-body animate-in fade-in duration-700">
      {/* 1. HERO HEADER */}
      <header className="mb-16 relative h-64 rounded-2xl overflow-hidden shadow-2xl">
        <img 
          className="w-full h-full object-cover grayscale-[20%] sepia-[10%] brightness-50" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAVKTpmIOsVPz71VTF7L-eaHzXN4Oh6ub8EnTMlfUxrO0hDH1qbwKqQtEnBGtuK1LPKBy5AJGrq5evViTFpOavYjCKc58Nv9n6_KOuHFJmbJp9zdQyAwqo25I9dqHTc82z_zNxCvJEdmuN7_Gfjkz4j9mxGG-E-Ip-ns87D3W7Hvs0eWMOiKI9S5Ng0eSOpToLtO9W5MjbkR0iTXZZR8SBLrVLBIAitzFajiYDuc-aFI2C0FXPJgzc0QWAMp4Dl6sTZfmH2AhB54N6" 
          alt="history header" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-10">
          <h1 className="font-headline text-5xl text-white font-bold italic tracking-tight">Niên Biểu Sự Kiện</h1>
          <p className="text-white/70 text-sm italic mt-2 max-w-xl">Khám phá những cột mốc vàng son trong dòng chảy lịch sử dân tộc.</p>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* 2. SIDEBAR FILTER */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-12">
          <section>
            <h3 className="font-mono text-[10px] text-secondary uppercase font-bold tracking-[0.2em] mb-6 border-b border-outline-variant/30 pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">filter_list</span> BỘ LỌC
            </h3>
            <div className="space-y-6">
               <div className="space-y-3">
                  <p className="font-mono text-[9px] font-bold text-primary opacity-60 uppercase">Thời kỳ</p>
                  {['Triều Lý', 'Triều Trần', 'Triều Lê Sơ', 'Triều Nguyễn'].map(t => (
                    <label key={t} className="flex items-center gap-3 cursor-pointer group text-sm">
                      <input type="checkbox" className="rounded-sm border-secondary text-primary focus:ring-primary/20" />
                      <span className="text-on-surface-variant group-hover:text-primary transition-colors">{t}</span>
                    </label>
                  ))}
               </div>
            </div>
          </section>

          <div className="bg-surface-low p-6 border border-outline-variant/30 relative overflow-hidden group rounded-xl">
             <div className="relative z-10 space-y-4">
                <span className="material-symbols-outlined text-primary text-3xl">history_edu</span>
                <h4 className="font-headline text-xl text-primary font-bold italic">Đóng góp tư liệu</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">Bạn có tài liệu hoặc hình ảnh quý hiếm về các sự kiện lịch sử?</p>
                <button className="text-primary font-mono text-[9px] font-bold uppercase tracking-widest border-b border-primary pb-1 group-hover:translate-x-2 transition-all">Gửi yêu cầu</button>
             </div>
          </div>
        </aside>

        {/* 3. CONTENT GRID */}
        <div className="flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {events.map((event) => (
              <article key={event.id} className="bg-white border border-outline-variant/20 hover:border-primary/40 transition-all duration-500 group rounded-2xl overflow-hidden flex flex-col shadow-sm">
                <div className="h-56 overflow-hidden relative">
                  <img src={event.image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={event.title} />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white font-mono text-[10px] font-bold px-3 py-1 rounded-sm shadow-lg">{event.year}</span>
                  </div>
                </div>
                <div className="p-8 space-y-4 flex-grow">
                   <span className="font-mono text-[9px] font-bold text-accent uppercase tracking-widest block border-b border-outline-variant/20 pb-2">{event.category}</span>
                   <h3 className="font-headline text-2xl text-primary font-bold italic tracking-tight group-hover:underline">{event.title}</h3>
                   <p className="font-body text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                     {event.desc}
                   </p>
                   <div className="pt-4 mt-auto">
                     <Link to={`/events/${event.id}`} className="text-primary font-mono text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group/link">
                        XEM CHI TIẾT <span className="material-symbols-outlined text-sm group-hover/link:translate-x-2 transition-transform">open_in_new</span>
                     </Link>
                   </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEvents;