// app/tin-tuc/layout.tsx
import PageBanner from "@/components/PageBanner";
import NewsSidebar from "@/components/NewsSidebar";
import { getNewsArticles } from "@/lib/actions"; // Import action

export default async function TinTucLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Lấy 5 bài viết mới nhất để hiển thị trên sidebar
  const recentPosts = await getNewsArticles(); 
  const limitedPosts = recentPosts.slice(0, 5);

  return (
    <>
      <PageBanner
        title="Tin tức & Sự kiện"
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }]}
        backgroundImageUrl="/anh/marriott-da-nang-68a481b7734b2.webp"
      />
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            <main className="lg:col-span-3">
              {children}
            </main>
            {/* Truyền dữ liệu bài viết mới nhất vào sidebar */}
            <NewsSidebar recentPosts={limitedPosts} />
          </div>
        </div>
      </div>
    </>
  );
}
