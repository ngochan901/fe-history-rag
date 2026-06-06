import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const HubEntityForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // --- QUẢN LÝ DỮ LIỆU THỰC THỂ ---
const [form, setForm] = useState({
  name: 'Lê Thánh Tông',
  type: 'Nhân vật',
  summary: 'Vị hoàng đế thứ tư của nhà Hậu Lê, người đưa Đại Việt đạt đến đỉnh cao phát triển...',
  status: 'published',
  sources: ['Đại Việt Sử Ký Toàn Thư', 'Khâm Định Việt Sử Thông Giám'],
  links: ['Cải cách Hồng Đức', 'Thăng Long', 'Tao đàn Nhị thập bát tú']
});

const removeSource = (name) => setForm({...form, sources: form.sources.filter(s => s !== name)});
const removeLink = (name) => setForm({...form, links: form.links.filter(l => l !== name)});

  return (
    <div className="flex-grow bg-surface min-h-screen font-body pb-20">
      <main className="p-8 max-w-6xl mx-auto space-y-10">
           {/* TIÊU ĐỀ */}
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-outline-variant/30 pb-6">
    <div>
      <h2 className="font-headline text-3xl text-primary font-bold tracking-tight">Hiệu đính Thực thể Mạng lưới</h2>
      <p className="text-on-surface-variant text-sm italic mt-1">Quản lý các nút thắt tri thức và liên kết trong hệ thống Sử Việt.</p>
    </div>

    <div className="flex gap-3 font-mono text-[10px] font-bold tracking-widest uppercase">
       <button onClick={() => navigate('/admin/hub')} className="px-5 py-2 border border-primary text-primary font-mono text-[10px] font-bold hover:bg-primary/5 transition-all uppercase" > HỦY BỎ </button>
       
       <button onClick={() => {alert('Đã lưu!'); navigate('/admin/hub')}} className="px-6 py-2 bg-primary text-white shadow-lg hover:bg-primary-container flex items-center justify-center gap-2 transition-all min-w-[160px]" >
         <span className="material-symbols-outlined text-sm">save</span> LƯU THAY ĐỔI
       </button>
    </div>
  </div>

        <div className="grid grid-cols-12 gap-8 items-start">
          {/* CỘT TRÁI: THÔNG TIN CHÍNH */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
             <section className="bg-white p-8 border border-outline-variant shadow-sm space-y-6">
                <h3 className="font-headline text-xl text-primary font-bold italic border-b border-outline-variant pb-3 mb-6">Thông tin chính</h3>
                <div className="grid grid-cols-2 gap-6">
                   <div className="col-span-2 md:col-span-1 space-y-1">
                      <label className="font-mono text-[10px] font-bold uppercase opacity-60">Tên thực thể</label>
                      {/* Tên thực thể */}
                      <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full bg-transparent border-b-2 border-outline-variant focus:border-primary py-2 font-headline text-2xl text-primary outline-none" />
                   </div>
                   <div className="col-span-2 md:col-span-1 space-y-1">
                      <label className="font-mono text-[10px] font-bold uppercase opacity-60">Loại thực thể</label>
                      {/* Loại thực thể */}
                     <select value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="w-full bg-transparent border-b-2 border-outline-variant py-2 outline-none cursor-pointer">
                        <option>Nhân vật</option><option>Sự kiện</option><option>Địa danh</option>
                     </select>

                   </div>
                   <div className="col-span-2 space-y-1">
                      <label className="font-mono text-[10px] font-bold uppercase opacity-60">Tóm lược (Summary)</label>
                     {/* Tóm lược */}
                     <textarea rows="3" value={form.summary} onChange={e => setForm({...form, summary: e.target.value})} className="w-full bg-surface-low border border-outline-variant p-4 rounded text-sm italic leading-relaxed outline-none focus:ring-1 focus:ring-primary/30" />
                   </div>
                </div>
             </section>

             <section className="bg-white p-8 border border-outline-variant shadow-sm space-y-6">
                <h3 className="font-headline text-xl text-primary font-bold italic border-b border-outline-variant pb-3 mb-6 flex items-center justify-between">
                   <span>Sử liệu trích dẫn</span>
                   <button className="font-mono text-[10px] font-bold text-accent">+ THÊM NGUỒN</button>
                </h3>
                <div className="space-y-3">
                   {['Đại Việt Sử Ký Toàn Thư', 'Khâm Định Việt Sử Thông Giám'].map(src => (
                     <div key={src} className="p-4 bg-surface-low border-l-4 border-primary flex justify-between items-center group">
                        <span className="font-bold italic text-sm text-primary">{src}</span>
                        <button className="material-symbols-outlined text-sm text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">delete</button>
                     </div>
                   ))}
                </div>
             </section>
          </div>

          {/* CỘT PHẢI: LIÊN KẾT */}
         <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* MỤC TRẠNG THÁI */}
            <div className="bg-primary/90 text-white p-6 shadow-xl rounded-sm">
               <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest border-b border-white/20 pb-2 mb-4 italic">Cấu hình mạng lưới</h4>
               <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase opacity-70">Trạng thái thực thể</label>
                  <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className="w-full bg-white/10 border border-white/20 rounded p-2 text-sm outline-none cursor-pointer">
                     <option value="published" className="text-black">Công khai</option>
                     <option value="draft" className="text-black">Bản nháp</option>
                  </select>
               </div>
            </div>

            {/* Liên kết thực thể */}
            <div className="bg-white p-6 border border-outline-variant shadow-sm space-y-6">
               <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary border-b pb-2 italic">Thực thể lân cận</h4>
               <div className="space-y-3">
                  {form.links.map(item => (
                  <div key={item} className="flex items-center gap-3 p-3 bg-surface-low rounded border border-transparent hover:border-primary transition-all group">
                     <span className="material-symbols-outlined text-sm text-primary">link</span>
                     <span className="text-xs font-bold flex-1">{item}</span>
                     <button onClick={() => removeLink(item)} className="material-symbols-outlined text-xs text-red-600 opacity-0 group-hover:opacity-100 transition-all">remove_circle</button>
                  </div>
                  ))}
               </div>
               <button className="w-full py-2 border-2 border-dashed border-outline-variant text-on-surface-variant font-bold text-[10px] uppercase hover:border-primary transition-all">+ Thiết lập liên kết mới</button>
            </div>
         </div>
        </div>
      </main>
    </div>
  );
};

export default HubEntityForm;