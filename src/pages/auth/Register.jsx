import React, { useState } from 'react'; // Đã thêm useState
import { Link } from 'react-router-dom';

const Register = () => {
  // Quản lý trạng thái ẩn/hiện cho 2 ô mật khẩu riêng biệt
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4">
      <div className="grain-overlay"></div>
      <div className="relative w-full max-w-md">
        <div className="bg-surface-low border border-outline-variant/50 p-10 shadow-xl relative overflow-hidden rounded-sm">
          <div className="motif-corner-tl"></div>
          <div className="motif-corner-br"></div>
          
          <div className="text-center mb-10">
            <h1 className="font-headline text-3xl text-primary mb-2 font-bold italic">Khởi tạo Tài khoản</h1>
            <p className="text-on-surface-variant italic text-sm font-body">Tham gia cộng đồng lưu trữ sử liệu</p>
          </div>

          <form className="space-y-6">
            {/* Tên đăng nhập */}
            <div className="space-y-1 group transition-all focus-within:-translate-y-0.5">
              <label className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Tên đăng nhập</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">person</span>
                <input type="text" className="w-full bg-white/50 border border-outline-variant/50 focus:border-primary focus:ring-0 py-3 pl-11 pr-4 text-sm outline-none rounded-sm font-body" placeholder="Nhập tên người dùng..." required />
              </div>
            </div>

            {/* Mật khẩu */}
            <div className="space-y-1 group transition-all focus-within:-translate-y-0.5">
              <label className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Mật khẩu</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">lock</span>
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="w-full bg-white/50 border border-outline-variant/50 focus:border-primary focus:ring-0 py-3 pl-11 pr-12 text-sm outline-none rounded-sm font-body" 
                  placeholder="••••••••" 
                  required 
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            {/* Xác nhận mật khẩu */}
            <div className="space-y-1 group transition-all focus-within:-translate-y-0.5">
              <label className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Xác nhận mật khẩu</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">lock_reset</span>
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  className="w-full bg-white/50 border border-outline-variant/50 focus:border-primary focus:ring-0 py-3 pl-11 pr-12 text-sm outline-none rounded-sm font-body" 
                  placeholder="••••••••" 
                  required 
                />
                <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">{showConfirmPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            <button type="submit" className="w-full bg-primary text-white font-headline text-xl py-4 hover:bg-primary-container transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2">
              <span>Đăng ký</span>
              <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
            </button>
          </form>

          <div className="mt-8 text-center border-t border-outline-variant/30 pt-6 font-body">
            <Link to="/login" className="text-on-surface-variant hover:text-primary transition-colors text-xs underline underline-offset-4">
              Đã có tài khoản? Đăng nhập tại đây
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;