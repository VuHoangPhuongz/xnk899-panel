// app/(admin)/pages/page.tsx
import { getAllPages } from '@/lib/actions';
import Link from 'next/link';

export default async function AdminPagesPage() {
  const pages = await getAllPages();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Quản lý nội dung trang</h1>
      <div className="space-y-3">
        {pages.map(page => (
          <div key={page.id} className="flex justify-between items-center p-4 border rounded-md hover:bg-gray-50 transition-colors">
            <span className="font-medium text-gray-800">{page.title}</span>
            <Link 
              href={`/pages/edit/${page.slug}`}
              className="text-indigo-600 hover:text-indigo-900 font-semibold text-sm"
            >
              Chỉnh sửa
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}