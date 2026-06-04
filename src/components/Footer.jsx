const Footer = () => {
  return (
    <footer className="bg-surface-container-low dark:bg-surface-container-highest border-t border-outline-variant/50 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-desktop py-12 max-w-container-max mx-auto space-y-4 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-headline-md text-headline-md text-primary dark:text-primary-fixed-dim">
            Sử Việt
          </span>
          <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
            © 2024 Sử Việt - Bảo tồn Di sản Văn hóa Việt Nam
          </p>
        </div>
        <div className="flex space-x-8">
          <a
            className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary dark:hover:text-secondary-fixed-dim transition-colors duration-200"
            href="#"
          >
            Về chúng tôi
          </a>
          <a
            className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary dark:hover:text-secondary-fixed-dim transition-colors duration-200"
            href="#"
          >
            Điều khoản
          </a>
          <a
            className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary dark:hover:text-secondary-fixed-dim transition-colors duration-200"
            href="#"
          >
            Chính sách bảo mật
          </a>
          <a
            className="text-on-surface-variant font-label-sm text-label-sm hover:text-primary dark:hover:text-secondary-fixed-dim transition-colors duration-200"
            href="#"
          >
            Liên hệ
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
