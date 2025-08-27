// app/tin-tuc/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getNewsArticles } from '@/lib/actions'; // Import action

export default async function TinTucPage() {
  // Lấy tất cả bài viết từ database
  const articles = await getNewsArticles();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {articles.map((article) => (
        <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
          <Link href={`/tin-tuc/${article.slug}`} className="block">
            <div className="relative w-full h-56">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{new Date(article.date).toLocaleDateString('vi-VN')}</p>
              <h3 className="text-xl font-bold text-blue-primary group-hover:text-green-primary transition-colors mb-3">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">{article.excerpt}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
