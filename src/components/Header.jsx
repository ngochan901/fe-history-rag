import { useState } from 'react';

const Header = () => {
  return (
    <header className="bg-background dark:bg-surface-dim border-b border-outline-variant/30 sticky top-0 z-40">
      <nav className="flex justify-between items-center w-full px-margin-desktop py-unit max-w-container-max mx-auto h-16">
        <div className="flex items-center gap-8">
          <a
            className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim tracking-tight font-extrabold"
            href="#"
          >
            Sử Việt
          </a>
          <div className="hidden md:flex items-center space-x-6">
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors font-body-md text-body-md"
              href="#"
            >
              Trang Chủ
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors font-body-md text-body-md"
              href="#"
            >
              Kho Lưu Trữ
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors font-body-md text-body-md"
              href="#"
            >
              Triều Đại
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors font-body-md text-body-md"
              href="#"
            >
              Bản Đồ
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-primary dark:text-primary-fixed-dim font-bold hover:scale-95 transition-transform font-body-md text-body-md text-base">
            Đăng Nhập
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
