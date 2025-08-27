// app/bao-gia/layout.tsx
import PageBanner from "@/components/PageBanner";
import NewsSidebar from "@/components/NewsSidebar";
import BaoGiaSidebar from "@/components/BaoGiaSidebar"; // Import component mới
import { getNewsArticles } from "@/lib/actions"; // Import action để lấy dữ liệu

export default async function BaoGiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Lấy 5 bài viết mới nhất từ database
  const recentPosts = await getNewsArticles();
  const limitedPosts = recentPosts.slice(0, 5);

  return (
    <>
      <PageBanner
        title="Báo Giá"
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }]}
        backgroundImageUrl="/anh/marriott-da-nang-68a481b7734b2.webp"
      />
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Cột 1: Sidebar Báo giá (Client Component) */}
            <BaoGiaSidebar />
            
            {/* Cột 2: Nội dung chính */}
            <main className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 prose max-w-none">
                {children}
              </div>
            </main>

            {/* Cột 3: Sidebar Tin tức (Server Component) */}
            <div className="lg:col-span-1">
                {/* Truyền dữ liệu `recentPosts` đã lấy được vào NewsSidebar */}
                <NewsSidebar recentPosts={limitedPosts} />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
