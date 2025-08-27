// components/SharedProductSidebar.tsx
'use client'; // Cần 'use client' để dùng hook useSearchParams

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// Định nghĩa kiểu dữ liệu cho categories
type Category = {
  name: string;
  slug: string;
};

export default function SharedProductSidebar({ categories }: { categories: Category[] }) {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
      <h3 className="text-xl font-bold mb-4 pb-2 border-b">Danh mục sản phẩm</h3>
      <ul className="space-y-2">
        {categories.map(category => (
          <li key={category.slug}>
            <Link
              href={category.slug === 'all' ? '/san-pham' : `/san-pham?category=${category.slug}`}
              className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                currentCategory === category.slug
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}