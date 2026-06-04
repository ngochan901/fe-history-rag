import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate, NavLink } from 'react-router-dom';
import LogoutModal from './LogoutModal'; // Đảm bảo bạn đã tạo file này

const UserLayout = () => {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [tempInput, setTempInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Kính chào quý học giả. Tôi có thể hỗ trợ gì về sử liệu Đại Việt?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();
  
  // Trạng thái mở Modal đăng xuất
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  // --- LOGIC ĐĂNG NHẬP ---
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Hàm xác nhận đăng xuất thực sự (chạy khi bấm nút trong Modal)
  const handleConfirmLogout = () => {
    localStorage.removeItem('user');
    setIsLogoutOpen(false);
    setUser(null);
    navigate('/');
    window.location.reload(); // Để cập nhật lại trạng thái giao diện
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!tempInput.trim()) return;

    const userMsg = { role: 'user', content: tempInput };
    setMessages([...messages, userMsg]);
    setTempInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg = { 
        role: 'ai', 
        content: `Dựa trên Đại Việt Sử Ký, vấn đề "${userMsg.content}" có thể được hiểu là...` 
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#fcf9ee] font-body selection:bg-primary/20 relative flex flex-col">
      <div className="grain-overlay pointer-events-none fixed inset-0 z-0 opacity-5"></div>
      
      {/* 1. TOP APP BAR */}
      <header className="fixed top-0 left-0 right-0 z-[70] bg-white/95 backdrop-blur-md border-b border-outline-variant/20 h-20 shadow-sm">
        <div className="flex justify-between items-center w-full px-12 max-w-[1440px] mx-auto h-full">
          <Link to="/" className="text-3xl font-headline text-primary font-bold italic tracking-tighter">Sử Việt</Link>
          
          <nav className="hidden md:flex items-center gap-8 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-on-surface-variant">
            <NavLink to="/" end className={({ isActive }) => isActive ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary transition-all pb-1"}>Trang chủ</NavLink>
            <NavLink to="/posts" end className={({ isActive }) => isActive ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary transition-all pb-1"}>Bài viết</NavLink>
            <NavLink to="/periods" className={({ isActive }) => isActive ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary transition-all pb-1"}>Thời kỳ</NavLink>
            <NavLink to="/events" className={({ isActive }) => isActive ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary transition-all pb-1"}>Sự kiện</NavLink>
            <NavLink to="/characters" className={({ isActive }) => isActive ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary transition-all pb-1"}>Nhân vật</NavLink>
            <NavLink to="/locations" className={({ isActive }) => isActive ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary transition-all pb-1"}>Địa danh</NavLink>
            <NavLink to="/records" className={({ isActive }) => isActive ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary transition-all pb-1"}>Sử liệu</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4 border-l border-outline-variant/30 pl-6">
                <div className="text-right hidden lg:block">
                  <p className="font-headline font-bold text-primary text-xs italic leading-none">{user.username}</p>
                  <p className="font-mono text-[8px] uppercase tracking-tighter text-on-surface-variant mt-1">Thành viên sử học</p>
                </div>
                {/* NÚT ĐĂNG XUẤT ĐÃ SỬA LỖI LỒNG NHAU */}
                <button 
                  onClick={() => setIsLogoutOpen(true)}
                  className="bg-white border border-primary text-primary px-5 py-2 rounded-lg font-headline font-bold text-[10px] uppercase shadow-sm hover:bg-primary hover:text-white transition-all active:scale-95"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                 <button 
                  onClick={() => navigate('/login')}
                  className="bg-[#4b0004] text-white px-6 py-2.5 rounded-lg font-headline font-bold text-[11px] uppercase shadow-md hover:bg-black transition-all active:scale-95"
                >
                  Đăng nhập
                </button>
                <Link to="/register" className="font-mono text-[9px] font-bold text-primary uppercase tracking-widest hover:underline">Đăng ký</Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20 relative z-10">
        <Outlet />
      </main>

      <footer className="bg-surface-container-highest border-t border-outline-variant/30 py-16 relative z-20">
        <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h4 className="font-headline text-2xl text-primary font-bold italic">Đại Việt Sử Ký</h4>
            <p className="text-on-surface-variant text-sm max-w-md mx-auto md:mx-0 leading-relaxed font-body">
              Hệ thống lưu trữ và giải mã tri thức lịch sử dân tộc thông qua công nghệ trí tuệ nhân tạo RAG.
            </p>
          </div>
          <div className="flex justify-center md:justify-end gap-12 font-mono text-[10px] font-bold uppercase tracking-widest text-on-surface-variant self-end">
             <Link to="#" className="hover:text-primary">Quy định</Link>
             <Link to="#" className="hover:text-primary">Liên hệ</Link>
             <Link to="/admin" className="text-primary underline">Quản trị</Link>
          </div>
        </div>
      </footer>

      {/* AI CHAT FAB SYSTEM */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
        {isAIChatOpen && (
          <div className="w-80 h-[450px] bg-[#FBFBE2] border border-outline-variant shadow-2xl rounded-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300 font-body">
             <div className="bg-primary p-4 text-white font-headline italic font-bold flex justify-between items-center shadow-md">
                <div className="flex items-center gap-2">
                   <span className="material-symbols-outlined text-sm">psychology</span>
                   <span className="text-sm italic">Sử Quan AI</span>
                </div>
                <button onClick={() => setIsAIChatOpen(false)} className="material-symbols-outlined text-sm hover:rotate-90 transition-transform">close</button>
             </div>
             <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-surface-low custom-scrollbar text-on-surface">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white border border-outline-variant/30 text-on-surface-variant rounded-tl-none italic font-body'}`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isTyping && <div className="text-[10px] font-mono text-primary animate-pulse font-bold px-2 uppercase tracking-tighter">Đang tra cứu...</div>}
             </div>
             <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
                <div className="flex items-center gap-2 bg-surface-low rounded-full px-4 py-1 border border-outline-variant/30 transition-all">
                  <input type="text" value={tempInput} onChange={(e) => setTempInput(e.target.value)} placeholder="Đặt câu hỏi..." className="w-full bg-transparent border-none focus:ring-0 text-xs italic py-2 text-on-surface" />
                  <button type="submit" className="text-primary hover:scale-110 active:scale-90 transition-all">
                    <span className="material-symbols-outlined text-xl">send</span>
                  </button>
                </div>
             </form>
          </div>
        )}
        <button 
          onClick={() => setIsAIChatOpen(!isAIChatOpen)}
          className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-primary/30"
        >
           <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
             {isAIChatOpen ? 'close' : 'history_edu'}
           </span>
        </button>
      </div>

      {/* GỌI COMPONENT MODAL ĐĂNG XUẤT TẠI ĐÂY */}
      <LogoutModal 
        isOpen={isLogoutOpen} 
        onClose={() => setIsLogoutOpen(false)} 
        onConfirm={handleConfirmLogout} 
      />
    </div>
  );
};

export default UserLayout;