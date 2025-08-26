// app/(admin)/posts/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getNewsArticles, deleteNewsArticle } from '@/lib/actions';
import DeletePostButton from '@/components/admin/DeletePostButton'; // 1. IMPORT component mới
// Component Nút Xóa (Client Component)


export default async function AdminPostsPage() {
  const articles = await getNewsArticles();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý Tin tức</h1>
        <Link 
          href="/posts/new" 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          + Thêm bài viết
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiêu đề</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày đăng</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {articles.map((article) => (
              <tr key={article.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Image src={article.imageUrl} alt={article.title} width={60} height={40} className="object-cover rounded-md"/>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{article.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(article.date).toLocaleDateString('vi-VN')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                  <Link href={`/posts/${article.slug}/edit`} className="text-indigo-600 hover:text-indigo-900">
                    Sửa
                  </Link>
                   <form action={deleteNewsArticle.bind(null, article.slug)} style={{ display: 'inline' }}>
                    <DeletePostButton />
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}