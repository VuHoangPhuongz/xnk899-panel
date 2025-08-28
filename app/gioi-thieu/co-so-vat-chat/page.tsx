import { getPageBySlug } from '@/lib/actions';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('co-so-vat-chat');
  return {
    title: `${page?.title || 'Cơ sở vật chất'} - 899 IMEX`,
    description: 'Tổng quan về năng lực nhân sự, sơ đồ tổ chức và hệ thống máy móc, thiết bị hiện đại của 899 IMEX.',
  };
}

// ✨ Dữ liệu máy móc được hard code ở đây
const machinery = [
    { src: "/anh/1200w.webp", alt: "Máy cắt LASER 12000W" },
    { src: "/anh/yawei-68a481cadb6da.webp", alt: "Máy chấn YAWEI" },
    { src: "/anh/cns.jpg", alt: "Máy đột dập CNC" },
    { src: "/anh/robot-68a481c69c3d6.webp", alt: "Robot Hàn tự động" },
    { src: "/anh/phun-son-68a481bf28283.webp", alt: "Lò phun sơn tĩnh điện" },
    { src: "/anh/dong goi.webp", alt: "Máy đóng gói sản phẩm" },
];

export default async function CoSoVatChatPage() {
  // ✨ Chỉ cần lấy dữ liệu cho phần nội dung chính từ database
  const page = await getPageBySlug('co-so-vat-chat');

  if (!page) {
    notFound();
  }
  
  return (
    <div>
      {/* Phần 1: Render nội dung chính từ trình soạn thảo Tiptap */}
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: page.content }} 
      />

      {/* Phần 2: Render danh sách máy móc từ mảng hard code ở trên */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 not-prose mt-8">
        {machinery.map((item, index) => (
          <div key={index} className="group">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
              <Image 
                src={item.src} 
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="text-center font-semibold mt-2 text-gray-700">{item.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}