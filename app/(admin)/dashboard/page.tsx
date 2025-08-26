// app/(admin)/dashboard/page.tsx
import Link from 'next/link';
import { getProductCount, getNewsArticleCount, getProjectCount } from '@/lib/actions';

// --- Sub-components cho trang Dashboard ---

// Component thẻ thống kê
const StatCard = ({ title, value, icon }: { title: string; value: number; icon: string; }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
    <div className="bg-blue-100 p-3 rounded-full">
      <i className={`fa-solid ${icon} text-blue-600 text-2xl`}></i>
    </div>
    <div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

// Component nút hành động nhanh
const QuickActionButton = ({ title, href, icon }: { title: string; href: string; icon: string; }) => (
  <Link href={href} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-100 transition-all flex flex-col items-center justify-center text-center">
    <div className="bg-green-100 p-4 rounded-full mb-3">
      <i className={`fa-solid ${icon} text-green-600 text-3xl`}></i>
    </div>
    <p className="font-semibold text-gray-700">{title}</p>
  </Link>
);


// --- Component chính của trang Dashboard ---

export default async function DashboardPage() {
  // Gọi đồng thời các hàm lấy dữ liệu để tăng hiệu suất
  const [productCount, articleCount, projectCount] = await Promise.all([
    getProductCount(),
    getNewsArticleCount(),
    getProjectCount(),
  ]);

  return (
    <div className="space-y-8">
      {/* === Phần tiêu đề === */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 mt-1">Tổng quan hệ thống quản trị nội dung.</p>
      </div>

      {/* === Phần thống kê === */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard title="Tổng sản phẩm" value={productCount} icon="fa-box-open" />
          <StatCard title="Tổng bài viết" value={articleCount} icon="fa-newspaper" />
          <StatCard title="Tổng dự án" value={projectCount} icon="fa-hard-hat" />
        </div>
      </section>

      {/* === Phần hành động nhanh === */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Hành động nhanh</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <QuickActionButton title="Thêm sản phẩm mới" href="/products/new" icon="fa-plus-circle" />
          <QuickActionButton title="Quản lý tin tức" href="/posts" icon="fa-edit" />
          <QuickActionButton title="Quản lý dự án" href="/projects" icon="fa-tasks" />
          <QuickActionButton title="Cài đặt chung" href="/settings" icon="fa-cogs" />
        </div>
      </section>
      
    </div>
  );
}