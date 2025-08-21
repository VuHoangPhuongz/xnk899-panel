'use client';

import { useState, useEffect } from 'react';

const FixedActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Logic để hiển thị/ẩn nút "Scroll to Top"
  useEffect(() => {
    const toggleVisibility = () => {
      // Nếu vị trí cuộn > 300px, hiển thị nút
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Dọn dẹp event listener khi component bị unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Hàm xử lý cuộn lên đầu trang mượt mà
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Nút Zalo & Điện thoại */}
      <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start gap-4">
        <div className="group relative flex items-center">
          <a href="https://zalo.me/0987811158" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg relative">
            {/* Sử dụng thẻ img thay vì Image của Next.js cho các ảnh nhỏ, tĩnh từ public */}
            <img src="/anh/zalo-68a481cb14004.webp" alt="Zalo icon" className="w-8 h-8"/>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          </a>
        </div>
        <div className="group relative flex items-center">
          <a href="tel:0987811158" className="w-14 h-14 bg-green-primary rounded-full flex items-center justify-center text-white shadow-lg relative">
            <i className="fa-solid fa-phone text-2xl"></i>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-primary opacity-75"></span>
          </a>
        </div>
      </div>
      
      {/* Nút Cuộn lên đầu trang */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          id="scrollToTopBtn"
          className="fixed bottom-24 right-5 z-50 w-14 h-14 bg-green-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-primary transition-all duration-300"
        >
          <i className="fa-solid fa-arrow-up text-xl"></i>
        </button>
      )}
    </>
  );
};

export default FixedActions;