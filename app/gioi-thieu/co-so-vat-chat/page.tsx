import { getPageBySlug } from '@/lib/actions';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('co-so-vat-chat');
  return {
    title: `${page?.title || 'Cơ sở vật chất'} - 899 IMEX`,
    description: 'Tổng quan về năng lực nhân sự, sơ đồ tổ chức và hệ thống máy móc, thiết bị hiện đại của 899 IMEX.',
  };
}

export default async function CoSoVatChatPage() {
  const page = await getPageBySlug('co-so-vat-chat');

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