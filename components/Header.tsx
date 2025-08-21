'use client'; // Đánh dấu đây là Client Component vì có sử dụng state và event listener

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext'; // 👈 Thêm import
import CartSidebar from './CartSidebar';
import SearchOverlay from './SearchOverlay';
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Hook để lấy đường dẫn hiện tại
 const { cartCount, toggleCart } = useCart();
 const [isSearchOpen, setIsSearchOpen] = useState(false); 
  // Tự động đóng menu mobile khi chuyển trang
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  
  // Hàm kiểm tra link có active không
  const isActive = (path: string) => pathname === path;

  return (
    <>
    <header id="header" className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="w-full bg-gradient-to-r from-blue-800 via-green-600 to-transparent text-white text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          <div className="flex items-center space-x-2">
            <i className="fas fa-phone-alt"></i>
            <span>0987.811.158</span>
          </div>
          <div className="hidden md:block font-semibold tracking-wide">
            CHÀO MỪNG BẠN ĐẾN VỚI 899 IM-EX
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-200"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-green-200"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-green-200"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-green-200"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/anh/logo-68a481b451012.webp" 
                alt="XNK 899 Logo" 
                width={160} 
                height={64}
                priority={true} // Ưu tiên tải logo
                className="h-12 md:h-16 w-auto"
              />
            </Link>

            <nav id="main-nav" className="hidden lg:flex items-center space-x-6">
              <Link href="/" className={`main-nav-link uppercase tracking-wider ${isActive('/') ? 'text-green-primary font-bold' : 'font-semibold'}`}>Trang chủ</Link>
              <Link href="/gioi-thieu" className={`main-nav-link uppercase tracking-wider ${pathname.startsWith('/gioi-thieu') ? 'text-green-primary font-bold' : 'font-semibold'}`}>Giới thiệu</Link>
              <Link href="/san-pham" className={`main-nav-link uppercase tracking-wider ${pathname.startsWith('/san-pham') ? 'text-green-primary font-bold' : 'font-semibold'}`}>Sản phẩm</Link>
              <Link href="/bao-gia" className={`main-nav-link uppercase tracking-wider ${isActive('/bao-gia') ? 'text-green-primary font-bold' : 'font-semibold'}`}>Báo giá</Link>
              <Link href="/du-an" className={`main-nav-link uppercase tracking-wider ${isActive('/du-an') ? 'text-green-primary font-bold' : 'font-semibold'}`}>Dự án</Link>
              <Link href="/tin-tuc" className={`main-nav-link uppercase tracking-wider ${isActive('/tin-tuc') ? 'text-green-primary font-bold' : 'font-semibold'}`}>Tin tức</Link>
              <Link href="/lien-he" className={`main-nav-link uppercase tracking-wider ${isActive('/lien-he') ? 'text-green-primary font-bold' : 'font-semibold'}`}>Liên hệ</Link>
            </nav>

            <div className="hidden lg:flex items-center space-x-6 text-gray-600">
                {/* 👇 3. Thêm sự kiện onClick cho nút tìm kiếm */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Search"
                  className="hover:text-green-primary text-xl"
                >
                  <i className="fa-solid fa-search"></i>
                </button>
                <button
                  aria-label="Shopping Cart"
                  className="hover:text-green-primary text-xl relative"
                  onClick={() => toggleCart(true)}
                >
                  <i className="fa-solid fa-shopping-cart"></i>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            
            <button id="mobile-menu-button" className="lg:hidden text-2xl" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white shadow-lg border-t`}>
        <nav className="flex flex-col">
            <Link href="/" className="block py-3 px-4 font-semibold border-b hover:bg-gray-50">Trang chủ</Link>
            <Link href="/gioi-thieu" className="block py-3 px-4 font-semibold border-b hover:bg-gray-50">Giới thiệu</Link>
            <Link href="/san-pham" className="block py-3 px-4 font-semibold border-b hover:bg-gray-50">Sản phẩm</Link>
            <Link href="/du-an" className="block py-3 px-4 font-semibold border-b hover:bg-gray-50">Dự án</Link>
            <Link href="/tin-tuc" className="block py-3 px-4 font-semibold border-b hover:bg-gray-50">Tin tức</Link>
            <Link href="/lien-he" className="block py-3 px-4 font-semibold hover:bg-gray-50">Liên hệ</Link>
        </nav>
      </div>
    </header>
       <CartSidebar /> 
       {isSearchOpen && <SearchOverlay onClose={() => setIsSearchOpen(false)} />}
    </>
  );
};

export default Header;