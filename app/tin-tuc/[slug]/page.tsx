import { newsData } from '@/data/news';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// ✅ dùng type chuẩn App Router
interface NewsDetailPageProps {
  params: {
    slug: string;
  };
}

// ✅ generateStaticParams cho SSG
export async function generateStaticParams() {
  return newsData.map((article) => ({ slug: article.slug }));
}

// ✅ Trang chi tiết bài viết
export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = newsData.find((p) => p.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-8">
        <Link href="/" className="text-gray-500 hover:text-green-primary">
          Trang chủ
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/tin-tuc" className="text-gray-500 hover:text-green-primary">
          Tin tức
        </Link>
      </nav>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">
        {article.title}
      </h1>
      <p className="text-gray-500 mb-8">
        Ngày đăng: {new Date(article.date).toLocaleDateString('vi-VN')}
      </p>

      {/* Image */}
      <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}
