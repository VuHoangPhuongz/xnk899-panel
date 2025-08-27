// app/san-pham/layout.tsx
import SharedProductSidebar from "@/components/SharedProductSidebar";
import Link from 'next/link';
import Image from 'next/image';

// (Giả sử bạn đã có file data/categories.ts như đã tạo ở các bước trước)
import { categories } from '@/data/categories';

export default function SanPhamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="relative bg-gray-800 text-white py-20">
        <Image
          src="/anh/marriott-da-nang-68a481b7734b2.webp"
          alt="Banner trang sản phẩm"
          fill
          className="object-cover opacity-40 z-0"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-blue-primary/60 z-0"></div>
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

      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            <main className="lg:col-span-3 order-1 lg:order-2">
              {children}
            </main>
            <aside className="order-2 lg:order-1 lg:col-span-1">
              {/* Truyền danh sách categories vào sidebar */}
              <SharedProductSidebar categories={categories} />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}