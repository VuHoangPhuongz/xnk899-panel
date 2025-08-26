// app/(admin)/layout.tsx
import AdminSidebar from '@/components/admin/AdminSidebar'; // Component sidebar cho admin
import AdminHeader from '@/components/admin/AdminHeader';   // Component header cho admin

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Logic kiểm tra xác thực (authentication) nên được đặt ở đây.
  // Ví dụ: kiểm tra session, nếu không phải admin thì redirect về trang login.

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4 md:p-6">
          {children} {/* Nội dung của từng trang admin sẽ được render ở đây */}
        </main>
      </div>
    </div>
  );
}