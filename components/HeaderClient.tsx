// components/HeaderClient.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import CartSidebar from './CartSidebar';
import SearchOverlay from './SearchOverlay';
import { products, Product } from '@/data/products';

// Component này nhận dữ liệu tĩnh từ Server Component cha
export default function HeaderClient({ settings }: { settings: any }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const pathname = usePathname();
  const { cartCount, toggleCart } = useCart();

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }
    const foundProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(foundProducts);
  }, [searchTerm]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setIsSearchOpen(false);
    setSearchTerm('');
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/') return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <>
      <header id="header" className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="w-full bg-gradient-to-r from-blue-800 via-green-600 to-transparent text-white text-sm">
            <div className="container mx-auto px-4 flex justify-between items-center py-2">
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone-alt"></i>
                <span>{settings.phoneNumbers}</span>
              </div>
              <div className="font-semibold tracking-wide">CHÀO MỪNG BẠN ĐẾN VỚI 899 IMEX</div>
              <div className="flex space-x-4">
                <a href={settings.facebookUrl} className="hover:text-green-200" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href={settings.youtubeUrl} className="hover:text-green-200" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-2">
                    <Link href="/" className="flex-shrink-0">
                        <Image src="/anh/logo-68a481b451012.webp" alt="XNK 899 Logo" width={160} height={64} priority={true} className="h-16 w-auto"/>
                    </Link>
                    <nav className="flex items-center space-x-6">
                        <Link href="/" className={`main-nav-link uppercase tracking-wider ${isActive('/') ? 'text-green-primary font-bold' : 'font-semibold hover:text-green-primary'}`}>Trang chủ</Link>
                        <Link href="/gioi-thieu" className={`main-nav-link uppercase tracking-wider ${isActive('/gioi-thieu') ? 'text-green-primary font-bold' : 'font-semibold hover:text-green-primary'}`}>Giới thiệu</Link>
                        <Link href="/san-pham" className={`main-nav-link uppercase tracking-wider ${isActive('/san-pham') ? 'text-green-primary font-bold' : 'font-semibold hover:text-green-primary'}`}>Sản phẩm</Link>
                        <Link href="/bao-gia/rem-ngan-chay" className={`main-nav-link uppercase tracking-wider ${isActive('/bao-gia') ? 'text-green-primary font-bold' : 'font-semibold hover:text-green-primary'}`}>Báo giá</Link>
                        <Link href="/du-an" className={`main-nav-link uppercase tracking-wider ${isActive('/du-an') ? 'text-green-primary font-bold' : 'font-semibold hover:text-green-primary'}`}>Dự án</Link>
                        <Link href="/tin-tuc" className={`main-nav-link uppercase tracking-wider ${isActive('/tin-tuc') ? 'text-green-primary font-bold' : 'font-semibold hover:text-green-primary'}`}>Tin tức</Link>
                        <Link href="/lien-he" className={`main-nav-link uppercase tracking-wider ${isActive('/lien-he') ? 'text-green-primary font-bold' : 'font-semibold hover:text-green-primary'}`}>Liên hệ</Link>
                    </nav>
                    <div className="flex items-center space-x-4 text-gray-600">
                        <div className="relative">
                            {!isSearchOpen ? (
                                <button onClick={() => setIsSearchOpen(true)} aria-label="Search" className="hover:text-green-primary text-xl px-2"><i className="fa-solid fa-search"></i></button>
                            ) : (
                                <div className="flex items-center border-2 border-green-primary rounded-full px-3 py-1 bg-gray-50">
                                    <i className="fa-solid fa-search text-gray-400"></i>
                                    <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Tìm sản phẩm..." className="bg-transparent outline-none ml-2 w-48" autoFocus />
                                    <button onClick={() => { setIsSearchOpen(false); setSearchTerm(''); }} className="text-gray-400 hover:text-gray-700 ml-1"><i className="fa-solid fa-times"></i></button>
                                </div>
                            )}
                            {isSearchOpen && searchTerm && (
                                <div className="absolute top-full mt-2 w-72 bg-white rounded-lg shadow-lg max-h-80 overflow-y-auto z-20 right-0">
                                    {results.length > 0 ? ( results.map(product => (<Link key={product.id} href={`/san-pham/${product.id}`} className="block p-3 hover:bg-gray-100 border-b last:border-b-0 text-sm">{product.name}</Link>))) : (<div className="p-4 text-gray-500 text-sm">Không tìm thấy sản phẩm.</div>) }
                                </div>
                            )}
                        </div>
                        <button aria-label="Shopping Cart" className="hover:text-green-primary text-xl relative px-2" onClick={() => toggleCart(true)}>
                            <i className="fa-solid fa-shopping-cart"></i>
                            {cartCount > 0 && (<span className="absolute -top-2 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>)}
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          {/* ... (phần code mobile giữ nguyên, không cần sửa) ... */}
          <div className="w-full bg-gradient-to-r from-blue-800 via-green-600 to-transparent text-white text-sm">
             <div className="container mx-auto px-4 flex justify-center items-center py-2">
                <span className="font-semibold tracking-wide">CHÀO MỪNG BẠN ĐẾN VỚI 899 IMEX</span>
             </div>
        </div>
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-3">
                <button className="text-2xl" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                    <Image src="/anh/logo-68a481b451012.webp" alt="XNK 899 Logo" width={140} height={40} className="h-12 w-auto"/>
                </Link>
                <div className="flex items-center space-x-4">
                    <button onClick={() => setIsSearchOpen(true)} aria-label="Search" className="text-xl"><i className="fa-solid fa-search"></i></button>
                    <button onClick={() => toggleCart(true)} aria-label="Shopping Cart" className="text-xl relative"><i className="fa-solid fa-shopping-cart"></i>
                       {cartCount > 0 && (<span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>)}
                    </button>
                </div>
            </div>
        </div>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden bg-white shadow-lg border-t`}>
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
}