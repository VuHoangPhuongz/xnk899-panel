'use client';

import { useState, useEffect } from 'react';

const FixedActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showZalo, setShowZalo] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start gap-4">
        {/* Nút Zalo */}
        <div className="group relative flex items-center">
          <button
            onClick={() => {
              setShowZalo(!showZalo);
              setShowPhone(false);
            }}
            className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg relative"
          >
            <img src="/anh/zalo-68a481cb14004.webp" alt="Zalo icon" className="w-8 h-8" />
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          </button>

          <div
            className={`
              absolute left-16 bottom-0 bg-white shadow-lg rounded-xl p-2 flex flex-row gap-3 
              overflow-x-auto whitespace-nowrap transform transition-transform duration-300 ease-out
              max-w-[260px] sm:max-w-[400px] md:max-w-[600px]
              ${showZalo ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0 pointer-events-none'}
            `}
          >
            {[
              { href: "https://zalo.me/0384358988", text: "0384 358 988" },
              { href: "https://zalo.me/0987822311", text: "0987 822 311" },
              { href: "https://zalo.me/0383522018", text: "0383 522 018" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                className="min-w-[140px] px-3 py-2 bg-blue-100 rounded-lg text-blue-600 font-medium text-sm hover:bg-blue-200 transition"
              >
                Zalo: {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* Nút Điện thoại */}
        <div className="group relative flex items-center">
          <button
            onClick={() => {
              setShowPhone(!showPhone);
              setShowZalo(false);
            }}
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg relative"
          >
            <i className="fa-solid fa-phone text-2xl"></i>
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          </button>

          <div
            className={`
              absolute left-16 bottom-0 bg-white shadow-lg rounded-xl p-2 flex flex-row gap-3 
              overflow-x-auto whitespace-nowrap transform transition-transform duration-300 ease-out
              max-w-[260px] sm:max-w-[400px] md:max-w-[600px]
              ${showPhone ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0 pointer-events-none'}
            `}
          >
            {[
              { href: "tel:0384358988", text: "0384 358 988" },
              { href: "tel:0987822311", text: "0987 822 311" },
              { href: "tel:0383522018", text: "0383 522 018" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="min-w-[140px] px-3 py-2 bg-green-100 rounded-lg text-green-600 font-medium text-sm hover:bg-green-200 transition"
              >
                📞 {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Nút Cuộn lên đầu trang */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          id="scrollToTopBtn"
          className="fixed bottom-24 right-5 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-500 transition-all duration-300"
        >
          <i className="fa-solid fa-arrow-up text-xl"></i>
        </button>
      )}
    </>
  );
};

export default FixedActions;
