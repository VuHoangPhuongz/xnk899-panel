// app/tin-tuc/[slug]/page.tsx
import { getNewsArticleBySlug, getNewsArticles } from '@/lib/actions';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

type NewsDetailPageProps = {
  params: { slug: string };
};

// Hàm tạo metadata động cho SEO
export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const article = await getNewsArticleBySlug(params.slug);
  if (!article) {
    return { title: 'Không tìm thấy bài viết' };
  }
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
    },
  };
}

// Hàm tạo sẵn các trang tĩnh khi build
export async function generateStaticParams() {
  const articles = await getNewsArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = await getNewsArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">
        {article.title}
      </h1>
      <p className="text-gray-500 mb-8">
        Ngày đăng: {new Date(article.date).toLocaleDateString('vi-VN')}
      </p>

      <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}
