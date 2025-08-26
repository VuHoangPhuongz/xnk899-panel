import SharedProductSidebar from "@/components/SharedProductSidebar";
import Link from 'next/link';
import Image from 'next/image';

export default function SanPhamLayout({
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
          fill
          className="object-cover opacity-40 z-0"
          priority
          sizes="100vw"
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

      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          {/* Trên mobile: 1 cột -> sản phẩm trước, sidebar sau */}
          {/* Trên desktop: grid 4 cột -> sidebar chiếm 1, sản phẩm chiếm 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Nội dung chính */}
            <main className="lg:col-span-3 order-1">
              {children}
            </main>

            {/* Sidebar */}
            <aside className="order-2 lg:order-1 lg:col-span-1">
              <SharedProductSidebar />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
