import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserEvents = () => {
  // --- STATE QUẢN LÝ LỌC ---
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('Tất cả');
  const [selectedYearRange, setSelectedYearRange] = useState('Tất cả');
  const [searchYear, setSearchYear] = useState('');

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

    // --- LOGIC LỌC DỮ LIỆU ---
  const filteredEvents = events.filter(event => {
    const eventYear = parseInt(event.year);
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecificYear = !searchYear || event.year === searchYear;
    const matchesPeriod = selectedPeriod === 'Tất cả' || event.category.includes(selectedPeriod);
    
    let matchesRange = true;
    if (selectedYearRange !== 'Tất cả') {
      if (selectedYearRange === 'Thế kỷ X - XII') matchesRange = eventYear >= 901 && eventYear <= 1200;
      if (selectedYearRange === 'Thế kỷ XIII - XV') matchesRange = eventYear >= 1201 && eventYear <= 1500;
      if (selectedYearRange === 'Thế kỷ XVI - XVIII') matchesRange = eventYear >= 1501 && eventYear <= 1800;
      if (selectedYearRange === 'Thế kỷ XIX - XX') matchesRange = eventYear >= 1801 && eventYear <= 2000;
    }

    return matchesSearch && matchesSpecificYear && matchesPeriod && matchesRange;
  });

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
          {/* LỌC THEO THỜI KỲ */}
          <section>
            <h3 className="font-mono text-[10px] text-secondary uppercase font-bold tracking-[0.2em] mb-4 border-b border-outline-variant/30 pb-2">Tìm kiếm</h3>
            <div className="relative border-b-2 border-outline-variant focus-within:border-primary transition-all">
              <input 
                type="text" placeholder="Tên sự kiện..." 
                value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent py-2 pr-10 outline-none italic text-sm font-body" 
              />
              <span className="material-symbols-outlined absolute right-0 top-2 text-secondary">search</span>
            </div>
          </section>

          {/* 2. THỜI KỲ */}
          <section>
            <h3 className="font-mono text-[10px] text-secondary uppercase font-bold tracking-[0.2em] mb-6 border-b border-outline-variant/30 pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">history_edu</span> THỜI KỲ
            </h3>
            <div className="space-y-4">
              {['Tất cả', 'Triều Lý', 'Triều Trần', 'Triều Lê Sơ', 'Triều Nguyễn'].map(t => (
                <label key={t} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" name="period"
                      checked={selectedPeriod === t}
                      onChange={() => setSelectedPeriod(t)}
                      className="peer appearance-none w-5 h-5 border-2 border-outline-variant rounded-full checked:border-primary transition-all" 
                    />
                    <div className="absolute w-2.5 h-2.5 bg-primary rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
                  </div>
                  <span className={`${selectedPeriod === t ? 'text-primary font-bold text-lg italic font-headline' : 'text-on-surface-variant'} group-hover:text-primary transition-colors font-medium`}>{t}</span>
                </label>
              ))}
            </div>
          </section>

          {/* 3. NIÊN ĐẠI */}
          <section>
            <h3 className="font-mono text-[10px] text-secondary uppercase font-bold tracking-[0.2em] mb-6 border-b border-outline-variant/30 pb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">event</span> NIÊN ĐẠI
            </h3>
            <div className="space-y-4">
              {['Tất cả', 'Thế kỷ X - XII', 'Thế kỷ XIII - XV', 'Thế kỷ XVI - XVIII', 'Thế kỷ XIX - XX'].map(range => (
                <label key={range} className="flex items-center gap-3 cursor-pointer group text-sm font-medium transition-all">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="radio" name="yearRange"
                      checked={selectedYearRange === range}
                      onChange={() => setSelectedYearRange(range)}
                      className="peer appearance-none w-5 h-5 border-2 border-outline-variant rounded-full checked:border-primary transition-all" 
                    />
                    <div className="absolute w-2.5 h-2.5 bg-primary rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
                  </div>
                  <span className={`${selectedYearRange === range ? 'text-primary font-bold text-lg italic font-headline' : 'text-on-surface-variant'} group-hover:text-primary transition-colors`}>{range}</span>
                </label>
              ))}
            </div>
            
            {/* Ô nhập năm cụ thể */}
            <div className="mt-8 space-y-3">
              <p className="font-mono text-[9px] font-bold text-primary opacity-60 uppercase">Tìm năm cụ thể</p>
              <div className="relative border-b-2 border-outline-variant focus-within:border-primary transition-all">
                <input 
                  type="number" value={searchYear}
                  onChange={(e) => setSearchYear(e.target.value)}
                  placeholder="Vd: 1288" 
                  className="w-full bg-transparent py-2 pr-10 outline-none italic text-sm font-body [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <span className="absolute right-0 top-2 material-symbols-outlined text-sm text-secondary">search</span>
              </div>
            </div>
          </section>
        </aside>

        {/* 3. CONTENT GRID */}
        <div className="flex-1">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {filteredEvents.map((event) => (
                <article key={event.id} className="group bg-white border border-outline-variant/20 hover:border-primary/40 transition-all duration-500 group rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl">
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
          ) : (
            /* Hiển thị khi không có kết quả lọc */
            <div className="flex flex-col items-center justify-center py-40 opacity-40 text-center">
               <span className="material-symbols-outlined text-6xl mb-4 text-primary">history_edu</span>
               <p className="font-headline text-2xl italic font-bold">Không tìm thấy sự kiện nào khớp với bộ lọc</p>
               <button onClick={() => {setSelectedPeriod('Tất cả'); setSelectedYearRange('Tất cả'); setSearchYear(''); setSearchTerm('')}} className="mt-4 text-primary underline font-bold uppercase text-xs tracking-widest">Đặt lại bộ lọc</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserEvents;