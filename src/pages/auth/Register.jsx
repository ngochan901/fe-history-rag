import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-4">
      <div className="grain-overlay"></div>
      <div className="relative w-full max-w-md">
        <div className="bg-surface-low border border-outline-variant/50 p-10 shadow-xl relative overflow-hidden">
          <div className="motif-corner-tl"></div>
          <div className="motif-corner-br"></div>
          
          <div className="text-center mb-10">
            <h1 className="font-headline text-3xl text-primary mb-2">Khởi tạo Tài khoản</h1>
            <p className="text-on-surface-variant italic text-sm font-body">Tham gia cộng đồng lưu trữ sử liệu</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-1">
              <label className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Tên đăng nhập</label>
              <input type="text" className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-3 outline-none font-body" placeholder="Nhập tên người dùng..." required />
            </div>
            <div className="space-y-1">
              <label className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Mật khẩu</label>
              <input type="password" className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary py-3 outline-none font-body" placeholder="••••••••" required />
            </div>
            <button type="submit" className="w-full bg-primary text-white font-headline text-xl py-4 hover:bg-primary-container transition-all active:scale-95 shadow-lg">Đăng ký</button>
          </form>

          <div className="mt-8 text-center border-t border-outline-variant/30 pt-6">
            <Link to="/login" className="text-on-surface-variant hover:text-primary transition-colors text-xs underline underline-offset-4 font-body">
              Đã có tài khoản? Đăng nhập tại đây
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;