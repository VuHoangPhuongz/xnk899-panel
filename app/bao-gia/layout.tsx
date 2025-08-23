'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PageBanner from '@/components/PageBanner';
import NewsSidebar from '@/components/NewsSidebar'; // 👈 Import sidebar tin tức

// Component Sidebar chỉ dành riêng cho mục Báo giá
const BaoGiaSidebar = () => {
  const pathname = usePathname();
  const links = [
    { href: '/bao-gia/rem-ngan-chay', label: 'Báo giá Màn/Rèm ngăn cháy' },
    { href: '/bao-gia/kinh-chong-chay', label: 'Báo giá Kính chống cháy' },
    { href: '/bao-gia/cua-thep-chong-chay', label: 'Báo giá Cửa thép chống cháy' },
  ];

  return (
    <aside className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-md p-4 sticky top-28">
        <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-orange-primary">DANH MỤC BÁO GIÁ</h3>
        <ul className="space-y-1">
          {links.map(link => {
            const isActive = pathname.startsWith(link.href); // Dùng startsWith để active đúng hơn
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`sidebar-link block w-full text-left px-4 py-3 rounded-md font-semibold transition-colors
                    ${isActive ? 'bg-blue-primary text-white' : 'hover:bg-blue-primary hover:text-white'}
                  `}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  );
};

export default function BaoGiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageBanner
        title="Báo Giá"
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }]}
        backgroundImageUrl="/anh/marriott-da-nang-68a481b7734b2.webp"
      />
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          {/* 👇 THAY ĐỔI BỐ CỤC TẠI ĐÂY */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Cột 1: Sidebar Báo giá */}
            <BaoGiaSidebar />
            
            {/* Cột 2: Nội dung chính (chiếm 3 cột) */}
            <main className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 prose max-w-none">
                {children}
              </div>
            </main>

            {/* Cột 3: Sidebar Tin tức */}
            <div className="lg:col-span-1">
                <NewsSidebar />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}