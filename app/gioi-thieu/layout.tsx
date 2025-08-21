'use client'; // Bắt buộc vì có sử dụng hook usePathname

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook để lấy URL hiện tại
import Image from 'next/image';
// Component Sidebar chỉ dành riêng cho mục Giới thiệu
const GioiThieuSidebar = () => {
  const pathname = usePathname(); // Lấy đường dẫn URL, ví dụ: "/gioi-thieu/ho-so-nang-luc"

  const links = [
     { href: '/gioi-thieu', label: 'Thư ngỏ' },
    { href: '/gioi-thieu/ho-so-nang-luc', label: 'Hồ sơ năng lực' },
    { href: '/gioi-thieu/co-so-vat-chat', label: 'Cơ sở vật chất' },
    { href: '/gioi-thieu/chinh-sach-chat-luong', label: 'Chính sách chất lượng' },
    { href: '/gioi-thieu/chinh-sach-bao-mat', label: 'Chính sách bảo mật' },
  ];

  return (
    <aside className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-md p-4 sticky top-28">
        <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-orange-primary">Về Chúng Tôi</h3>
        <ul className="space-y-1">
          {links.map(link => {
            const isActive = pathname === link.href; // Kiểm tra xem link có đang active không

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  // Áp dụng class động để làm nổi bật link đang được chọn
                  className={`sidebar-link block w-full text-left px-4 py-3 rounded-md font-semibold transition-colors
                    ${isActive
                      ? 'bg-blue-primary text-white' // Style cho link active
                      : 'hover:bg-blue-primary hover:text-white' // Style khi hover
                    }
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

// Layout chính bao bọc các trang con
export default function GioiThieuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <section className="relative bg-gray-800 text-white py-20">
        {/* Ảnh nền */}
        <Image 
          src="/anh/marriott-da-nang-68a481b7734b2.webp"
          alt="Banner trang sản phẩm" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-40 z-0"
          priority
        />
        {/* Lớp phủ màu */}
        <div className="absolute inset-0 bg-blue-primary/60 z-0"></div>

        {/* Nội dung */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase">Sản phẩm</h1>
          <div className="mt-4 text-sm">
            <Link href="/" className="hover:text-green-primary transition-colors">
              Trang chủ
            </Link>
            <span className="mx-2">/</span>
            <span>Sản phẩm</span>
          </div>
        </div>
      </section>
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
          <GioiThieuSidebar />
          <div className="lg:col-span-3 bg-white rounded-lg shadow-md p-6 md:p-8">
            {/* children: Nội dung của các trang con sẽ được hiển thị ở đây */}
            {children}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}