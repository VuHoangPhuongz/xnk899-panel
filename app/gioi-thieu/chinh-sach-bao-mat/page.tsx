import { getPageBySlug } from '@/lib/actions';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('chinh-sach-bao-mat');
  return {
    title: `${page?.title || 'Chính sách bảo mật'} - 899 IMEX`,
    description: 'Quy định về thu thập, sử dụng và bảo mật thông tin khách hàng tại 899 IMEX.',
  };
}

export default async function ChinhSachBaoMatPage() {
  const page = await getPageBySlug('chinh-sach-bao-mat');

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