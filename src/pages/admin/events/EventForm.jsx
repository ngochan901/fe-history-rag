import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// IMPORT COMPONENT DÙNG CHUNG
import RichTextEditor from '../../../components/RichTextEditor';

const EventForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    name: '',
    time: '',
    dynasty: '',
    summary: '',
    content: '',
    status: 'published' 
  });

  // Load dữ liệu cũ
  useEffect(() => {
    if (isEdit) {
      const mockContent = '<p>Sau thất bại ở Tây Kết, quân Nguyên của Toa Đô rút về đóng ở bến Hàm Tử...</p>';
      setFormData({
        name: 'Trận Hàm Tử (1285)',
        time: 'Tháng 5 năm 1285',
        dynasty: 'Nhà Trần',
        summary: 'Trận đánh then chốt do Trần Quang Khải chỉ huy tiêu diệt quân Nguyên...',
        content: mockContent,
        status: 'published'
      });
    }
  }, [id, isEdit]);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 font-body">
      
      {/* 1. HEADER ACTIONS */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-outline-variant/30 pb-6 mb-10 gap-4">
        <div>
           <h2 className="font-headline text-4xl text-primary font-bold italic tracking-tight">
             {isEdit ? 'Hiệu đính Sự kiện' : 'Thêm Sự kiện Lịch sử Mới'}
           </h2>
           <p className="font-body text-sm text-on-surface-variant italic mt-2">"Ghi chép những cột mốc vàng son của dân tộc"</p>
        </div>
        <div className="flex gap-3 font-mono text-[10px] font-bold tracking-widest">
          <button onClick={() => navigate('/admin/events')} 
            className="px-6 py-2.5 border border-primary text-primary hover:bg-primary/5 transition-all uppercase"> HỦY BỎ </button>
          
          <button className="px-8 py-2.5 bg-primary text-white shadow-lg hover:bg-primary-container flex items-center justify-center gap-2 transition-all active:scale-95 uppercase min-w-[160px]">
            <span className="material-symbols-outlined text-sm">save</span> 
            {isEdit ? 'CẬP NHẬT' : 'LƯU SỰ KIỆN'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-8">
          
          {/* Thông tin cơ bản */}
          <section className="bg-white p-8 border border-outline-variant shadow-sm space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5"><span className="material-symbols-outlined text-[80px]">shield</span></div>
            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase font-bold text-on-surface-variant tracking-widest opacity-60 block">Tên sự kiện lịch sử *</label>
              <input 
                type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary py-2 font-headline text-2xl text-primary font-bold outline-none transition-all"
                placeholder="Ví dụ: Định đô Thăng Long..."
              />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase font-bold text-on-surface-variant tracking-widest opacity-60 block">Thời gian xảy ra</label>
                <input type="text" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary py-2 outline-none font-medium" placeholder="Ví dụ: Năm 1010" />
              </div>
              <div className="space-y-1">
                <label className="font-mono text-[10px] uppercase font-bold text-on-surface-variant tracking-widest opacity-60 block">Triều đại</label>
                <select value={formData.dynasty} onChange={e => setFormData({...formData, dynasty: e.target.value})} className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary py-2 outline-none cursor-pointer">
                  <option>Nhà Lý</option><option>Nhà Trần</option><option>Nhà Lê Sơ</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase font-bold text-on-surface-variant tracking-widest opacity-60 block">Tóm lược (Summary)</label>
              <textarea rows="3" value={formData.summary} onChange={e => setFormData({...formData, summary: e.target.value})} className="w-full bg-transparent border-none focus:ring-0 font-body text-sm italic leading-relaxed resize-none outline-none" placeholder="Mô tả tóm tắt diễn biến..." />
            </div>
          </section>

          {/* RICHTEXTEDITOR  */}
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase font-bold text-on-surface-variant opacity-60 block">Nội dung sự kiện chi tiết *</label>
            <RichTextEditor 
              value={formData.content} 
              onChange={(html) => setFormData({ ...formData, content: html })} 
              placeholder="Bắt đầu ghi chép diễn biến sự kiện..."
            />
          </div>
        </div>

        {/* CỘT PHẢI: CẤU HÌNH & LIÊN KẾT */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* MỤC TRẠNG THÁI*/}
          <div className="bg-primary/90 text-white p-6 shadow-xl rounded-sm">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest border-b border-white/20 pb-2 mb-4 italic">Cấu hình hiển thị</h4>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase opacity-70">Trạng thái sự kiện</label>
                <select 
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full bg-white/10 border border-white/20 rounded p-2 text-sm outline-none focus:bg-white/20 transition-all cursor-pointer"
                >
                  <option value="published" className="text-black">Công khai</option>
                  <option value="draft" className="text-black">Bản nháp</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 border border-outline-variant shadow-sm space-y-4">
            <h4 className="font-mono text-[10px] font-bold text-primary uppercase border-b pb-2 tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">location_on</span> Địa danh liên quan
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Bến Hàm Tử', 'Chương Dương'].map(loc => (
                  <span key={loc} className="inline-flex items-center gap-1 bg-surface-low text-on-surface px-2 py-1 rounded text-[10px] font-bold border border-outline-variant mr-2 italic">#{loc}</span>
                ))}
                <button className="w-full mt-2 py-2 border border-dashed border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest hover:bg-primary/5 transition-all">+ Gắn địa danh</button>
            </div>
          </div>

          <div className="bg-white p-6 border border-outline-variant shadow-sm space-y-4">
            <h4 className="font-mono text-[10px] font-bold text-primary uppercase border-b pb-2 tracking-widest">Nhân vật then chốt</h4>
            <div className="space-y-3">
              {['Trần Quang Khải', 'Trần Nhật Duật'].map(name => (
                <div key={name} className="flex items-center gap-3 p-2 bg-surface-low border border-outline-variant/30 hover:bg-white transition-all cursor-pointer group">
                  <div className="w-8 h-8 bg-primary/10 flex items-center justify-center rounded text-primary"><span className="material-symbols-outlined text-sm">person</span></div>
                  <span className="text-xs font-bold flex-1">{name}</span>
                  <span className="material-symbols-outlined text-xs opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;