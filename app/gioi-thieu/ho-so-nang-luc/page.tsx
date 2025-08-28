import { getPageBySlug } from '@/lib/actions';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('ho-so-nang-luc');
  return {
    title: `${page?.title || 'Hồ sơ năng lực'} - 899 IMEX`,
    description: 'Thông tin hồ sơ năng lực của Công ty Cổ phần Xuất nhập khẩu và Xây dựng 899.',
  };
}

export default async function HoSoNangLucPage() {
  const page = await getPageBySlug('ho-so-nang-luc');

  if (!page) {
    notFound();
  }
  
  return (
    <div 
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: page.content }} 
    />
  );
}