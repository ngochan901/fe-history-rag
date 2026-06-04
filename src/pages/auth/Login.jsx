import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Sau khi xử lý logic đăng nhập thành công:
    navigate('/admin');
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-surface">
      <div className="grain-overlay"></div>
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="relative w-full max-w-md">
          <div className="bg-surface-low border border-outline-variant/50 p-10 relative overflow-hidden shadow-xl">
            <div className="motif-corner-tl"></div>
            <div className="motif-corner-br"></div>
            
            <div className="text-center mb-10">
              <h1 className="font-headline text-3xl text-primary mb-2">Đăng nhập Hệ thống</h1>
              <p className="text-on-surface-variant italic text-sm font-body">Cổng thông tin di sản văn hóa Việt Nam</p>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-1 group transition-all focus-within:-translate-y-0.5">
                <label className="font-label text-[10px] text-primary uppercase tracking-widest font-bold">Tên đăng nhập</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">person</span>
                  <input type="text" placeholder="Nhập tài khoản" className="w-full bg-white/50 border border-outline-variant/50 focus:border-primary focus:ring-0 py-3 pl-11 pr-4 text-sm outline-none rounded-sm font-body" required />
                </div>
              </div>

              <div className="space-y-1 group transition-all focus-within:-translate-y-0.5">
                <div className="flex justify-between items-center">
                  <label className="font-label text-[10px] text-primary uppercase tracking-widest font-bold">Mật khẩu</label>
                  {/* <a href="#" className="text-[10px] text-on-surface-variant hover:text-primary underline font-body">Quên mật khẩu?</a> */}
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">lock</span>
                  <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="w-full bg-white/50 border border-outline-variant/50 focus:border-primary focus:ring-0 py-3 pl-11 pr-12 text-sm outline-none rounded-sm font-body" required />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              <button type="submit" className="w-full bg-primary text-white py-4 font-headline text-xl hover:bg-primary/90 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2">
                <span>Tiến bước</span>
                <span className="material-symbols-outlined text-[20px]">login</span>
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-outline-variant/30 text-center">
              <p className="text-sm text-on-surface-variant font-body">
                Chưa có tài khoản? <Link to="/register" className="text-primary font-bold underline decoration-primary/30 underline-offset-4 hover:decoration-primary">Đăng ký ngay</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;