import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@/data/news'; // Import kiểu dữ liệu

type NewsCardProps = {
  article: NewsArticle;
};

const NewsCard = ({ article }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group h-full flex flex-col">
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
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 mb-2">{new Date(article.date).toLocaleDateString('vi-VN')}</p>
        <h3 className="text-xl font-bold text-blue-primary group-hover:text-green-primary transition-colors mb-3 flex-grow">
          <Link href={`/tin-tuc/${article.slug}`}>
            {article.title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
        <div className="mt-auto">
            <Link href={`/tin-tuc/${article.slug}`} className="font-semibold text-green-primary hover:text-blue-primary">
                Đọc thêm →
            </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;