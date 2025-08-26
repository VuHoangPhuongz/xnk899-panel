// components/admin/DeleteProjectButton.tsx
'use client'; // <-- BẮT BUỘC: Đánh dấu đây là Client Component

export default function DeleteProjectButton() {
  return (
    <button
      type="submit"
      className="text-red-600 hover:text-red-900"
      // Sự kiện onClick nằm hoàn toàn bên trong Client Component, nên sẽ hợp lệ
      onClick={(e) => {
        if (!confirm('Bạn có chắc chắn muốn xóa dự án này?')) {
          e.preventDefault(); // Hủy việc submit form nếu người dùng không đồng ý
        }
      }}
    >
      Xóa
    </button>
  );
}