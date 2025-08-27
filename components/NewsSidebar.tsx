// components/NewsSidebar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { NewsArticle } from '@prisma/client'; // Import kiểu dữ liệu từ Prisma

export default function NewsSidebar({ recentPosts }: { recentPosts: NewsArticle[] }) {
  return (
    <aside className="space-y-8 sticky top-24">
      {/* Phần bài viết mới nhất */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4 pb-2 border-b">Bài viết mới nhất</h3>
        <ul className="space-y-4">
          {recentPosts.map(post => (
            <li key={post.id}>
              <Link href={`/tin-tuc/${post.slug}`} className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-20 h-16 relative rounded-md overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(post.date).toLocaleDateString('vi-VN')}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Bạn có thể thêm các widget khác ở đây, ví dụ: danh mục tin tức */}
    </aside>
  );
}
