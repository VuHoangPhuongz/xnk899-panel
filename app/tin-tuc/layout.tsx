import PageBanner from "@/components/PageBanner";
import NewsSidebar from "@/components/NewsSidebar";

export default function TinTucLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageBanner
        title="Tin tức & Sự kiện"
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }]}
        backgroundImageUrl="/anh/marriott-da-nang-68a481b7734b2.webp" // Đảm bảo bạn có ảnh này
      />
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Cột trái chứa nội dung chính (danh sách hoặc chi tiết bài viết) */}
            <main className="lg:col-span-3">
              {children}
            </main>

            {/* Cột phải chứa Sidebar */}
            <NewsSidebar />
          </div>
        </div>
      </div>
    </>
  );
}