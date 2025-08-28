import { getPageBySlug } from '@/lib/actions';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Hàm này tạo metadata động cho trang
export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('thu-ngo');
  return {
    title: `${page?.title || 'Giới thiệu'} - 899 IMEX`,
    description: 'Giới thiệu về Công ty Cổ phần Xuất nhập khẩu và Xây dựng 899, đơn vị tiên phong trong lĩnh vực vật liệu PCCC công nghệ cao.',
  };
}

export default async function GioiThieuPage() {
  // Lấy nội dung trang bằng slug 'thu-ngo'
  const page = await getPageBySlug('thu-ngo');

  // Nếu không tìm thấy trang, hiển thị trang 404
  if (!page) {
    notFound();
  }
  
  return (
    // TailwindCSS 'prose' sẽ tự động tạo kiểu cho các thẻ HTML (p, h1, ul,...)
    <div 
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: page.content }} 
    />
  );
}