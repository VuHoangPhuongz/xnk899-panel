import { getPageBySlug } from '@/lib/actions';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('chinh-sach-chat-luong');
  return {
    title: `${page?.title || 'Chính sách chất lượng'} - 899 IMEX`,
    description: 'Cam kết về chính sách chất lượng sản phẩm và dịch vụ PCCC của Công ty 899 IMEX.',
  };
}

export default async function ChinhSachChatLuongPage() {
  const page = await getPageBySlug('chinh-sach-chat-luong');

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