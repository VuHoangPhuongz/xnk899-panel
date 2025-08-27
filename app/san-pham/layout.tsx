// app/san-pham/layout.tsx
import { Suspense } from 'react'; // 1. Import Suspense
import SharedProductSidebar from "@/components/SharedProductSidebar";
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/categories';

// Component fallback UI cho Sidebar
const SidebarSkeleton = () => (
  <div className="bg-white p-6 rounded-lg shadow-md animate-pulse">
    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
    <div className="space-y-2">
      <div className="h-8 bg-gray-200 rounded"></div>
      <div className="h-8 bg-gray-200 rounded"></div>
      <div className="h-8 bg-gray-200 rounded"></div>
      <div className="h-8 bg-gray-200 rounded"></div>
    </div>
  </div>
);

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
              {/* 2. Bọc Sidebar trong Suspense */}
              <Suspense fallback={<SidebarSkeleton />}>
                <SharedProductSidebar categories={categories} />
              </Suspense>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
