import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RichTextEditor from '../../../components/RichTextEditor';

const ArticleForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const fileInputRef = useRef(null);

  const [form, setForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '', 
    period: 'Nhà Hậu Lê (1428)',
    tags: ['Nhà Lê', 'Hậu Lê'],
    coverImage: null,
    imagePreview: null,
    status: 'published' 
  });

  // Load dữ liệu cũ khi ở chế độ Chỉnh sửa
  useEffect(() => {
    if (isEdit) {
      const mockContent = `
        <p>Thay trời hành hóa, Hoàng thượng truyền rằng...</p>
        <p><b>Quân cuồng Minh</b> thừa cơ gây họa, bọn gian tà bán nước cầu vinh.</p>
        <p>Nướng dân đen trên ngọn lửa hung tàn, vùi con đỏ xuống dưới hầm tai vạ.</p>
      `;

      setForm({
        title: 'Bình Ngô Đại Cáo - Tuyên ngôn độc lập',
        slug: 'binh-ngo-dai-cao',
        excerpt: '"Bình Ngô đại cáo" là bản tuyên ngôn thứ hai của dân tộc...',
        content: mockContent,
        period: 'Nhà Hậu Lê (1428)',
        tags: ['BìnhNgôĐạiCáo', 'HậuLê', 'NguyễnTrãi'],
        coverImage: null,
        imagePreview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Binh_Ngo_Dai_Cao.jpg/800px-Binh_Ngo_Dai_Cao.jpg' 
      });
    }
  }, [id, isEdit]);

  // Xử lý ảnh bài viết
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, coverImage: file, imagePreview: URL.createObjectURL(file) });
    }
  };

  const removeImage = (e) => {
    e.stopPropagation(); 
    setForm({ ...form, coverImage: null, imagePreview: null });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeTag = (tagToRemove) => {
    setForm({ ...form, tags: form.tags.filter(t => t !== tagToRemove) });
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 font-body">
      
      {/* HEADER ACTIONS */}
      <div className="flex flex-col md:flex-row justify-between items-end border-b border-outline-variant/30 pb-6 mb-10 gap-4">
        <div>
           <h2 className="font-headline text-4xl text-primary font-bold italic tracking-tight">
             {isEdit ? 'Hiệu đính Sử liệu' : 'Soạn thảo Bài viết Mới'}
           </h2>
           <p className="font-body text-sm text-on-surface-variant italic mt-2">"Ghi chép ngàn năm, lưu truyền vạn thế"</p>
        </div>
        <div className="flex gap-3 font-mono text-[10px] font-bold tracking-widest">
          <button onClick={() => navigate('/admin/articles')} className="px-6 py-2.5 border border-primary text-primary hover:bg-primary/5 transition-all uppercase">HỦY BỎ</button>
          <button className="px-8 py-2.5 bg-primary text-white shadow-lg hover:bg-primary-container flex items-center justify-center gap-2 transition-all active:scale-95 uppercase min-w-[160px]">
            <span className="material-symbols-outlined text-sm">save</span> 
            {isEdit ? 'CẬP NHẬT' : 'XUẤT BẢN'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-8">
          
          {/* Tiêu đề & Slug */}
          <section className="bg-white p-8 border border-outline-variant shadow-sm space-y-6">
            <div className="space-y-1">
              <label className="font-mono text-[10px] uppercase font-bold text-on-surface-variant tracking-widest opacity-60 block">Tiêu đề sử liệu *</label>
              <input 
                type="text" value={form.title} onChange={e => setForm({...form, title: e.target.value})}
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-primary py-2 font-headline text-2xl text-primary font-bold outline-none transition-all"
                placeholder="Nhập tiêu đề trang trọng..."
              />
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant font-mono text-[11px]">
              <span className="opacity-50 italic">suviet.vn/bai-viet/</span>
              <input type="text" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} className="bg-surface-low px-2 py-1 rounded outline-none font-bold text-primary" />
            </div>
          </section>

          {/* Tóm tắt */}
          <section className="bg-white p-6 border border-outline-variant shadow-sm">
            <label className="font-mono text-[10px] uppercase font-bold text-on-surface-variant mb-2 block tracking-widest opacity-60">Tóm lược bài viết</label>
            <textarea rows="3" value={form.excerpt} onChange={e => setForm({...form, excerpt: e.target.value})} className="w-full bg-transparent border-none focus:ring-0 font-body text-sm italic leading-relaxed resize-none outline-none" placeholder="Mô tả ngắn gọn nội dung..." />
          </section>

          {/* TRÌNH SOẠN THẢO VĂN BẢN DÙNG CHUNG */}
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase font-bold text-on-surface-variant opacity-60 block">Nội dung chi tiết bài nghiên cứu *</label>
            <RichTextEditor 
              value={form.content} 
              onChange={(html) => setForm({ ...form, content: html })} 
              placeholder="Bắt đầu ghi chép nội dung sử học..." 
            />
          </div>
        </div>

        {/* CỘT PHẢI (WIDGETS) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* MỤC TRẠNG THÁI */}
          <div className="bg-primary/90 text-white p-6 shadow-xl rounded-sm">
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest border-b border-white/20 pb-2 mb-4 italic">Cấu hình hiển thị</h4>
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase opacity-70">Trạng thái bài viết</label>
                <select 
                  value={form.status || 'published'} 
                  onChange={e => setForm({...form, status: e.target.value})}
                  className="w-full bg-white/10 border border-white/20 rounded p-2 text-sm outline-none focus:bg-white/20 transition-all cursor-pointer"
                >
                  <option value="published" className="text-black">Công khai</option>
                  <option value="draft" className="text-black">Bản nháp</option>
                </select>
              </div>
            </div>
          </div>
          {/* Ảnh sử liệu */}
          <div className="bg-white p-6 border border-outline-variant shadow-sm space-y-4">
            <h3 className="font-mono text-[10px] font-bold text-primary uppercase border-b border-outline-variant pb-2 tracking-widest">Ảnh bìa bài viết</h3>
            <div onClick={() => fileInputRef.current.click()} className="relative aspect-video bg-surface-low border-2 border-dashed border-outline-variant flex flex-col items-center justify-center cursor-pointer transition-all group overflow-hidden">
              {form.imagePreview ? (
                <>
                  <img src={form.imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                     <button onClick={removeImage} className="p-2 bg-red-600 text-white rounded-full hover:scale-110 transition-transform shadow-lg" title="Xóa ảnh"><span className="material-symbols-outlined text-sm">delete</span></button>
                  </div>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-4xl mb-2 group-hover:scale-110 transition-transform opacity-30">add_photo_alternate</span>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider opacity-40">Tải lên ảnh bìa</span>
                </>
              )}
            </div>
            <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageChange} />
          </div>

          {/* Thời kỳ */}
          <div className="bg-white p-6 border border-outline-variant shadow-sm space-y-4">
            <h3 className="font-mono text-[10px] font-bold text-primary uppercase border-b border-outline-variant pb-2 tracking-widest">Thời kỳ lịch sử</h3>
            <select value={form.period} onChange={e => setForm({...form, period: e.target.value})} className="w-full bg-surface-low border border-outline-variant rounded p-3 text-sm outline-none font-body cursor-pointer hover:border-primary transition-colors">
              <option>Nhà Hậu Lê (1428)</option>
              <option>Nhà Trần (1225)</option>
              <option>Nhà Lý (1009)</option>
              <option>Nhà Đinh (968)</option>
            </select>
          </div>

          {/* Tags */}
          <div className="bg-white p-6 border border-outline-variant shadow-sm space-y-4">
            <h3 className="font-mono text-[10px] font-bold text-primary uppercase border-b border-outline-variant pb-2 tracking-widest">Thẻ (Tags)</h3>
            <div className="flex flex-wrap gap-2">
              {form.tags.map(t => (
                <span key={t} className="px-2 py-1 bg-primary/10 text-primary rounded-sm text-[9px] font-bold border border-primary/20 font-mono flex items-center gap-1">
                  #{t} <button onClick={(e) => { e.stopPropagation(); removeTag(t); }} className="material-symbols-outlined text-[14px] hover:text-red-600 transition-colors">close</button>
                </span>
              ))}
            </div>
            <input className="w-full bg-transparent border-b border-outline-variant py-2 text-[11px] font-mono outline-none focus:border-primary placeholder:italic" placeholder="Gõ Enter để thêm thẻ..." 
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.value) {
                  setForm({...form, tags: [...new Set([...form.tags, e.target.value])]});
                  e.target.value = '';
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleForm;