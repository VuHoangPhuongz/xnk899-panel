// components/admin/DeletePostButton.tsx
'use client'; // <-- BẮT BUỘC: Đánh dấu đây là Client Component

// Component này chỉ chứa nút bấm và logic client-side (hàm confirm)
export default function DeletePostButton() {
  return (
    <button
      type="submit"
      className="text-red-600 hover:text-red-900"
      // Sự kiện onClick nằm hoàn toàn bên trong Client Component, nên sẽ hợp lệ
      onClick={(e) => {
        if (!confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
          e.preventDefault(); // Hủy việc submit form nếu người dùng không đồng ý
        }
      }}
    >
      Xóa
    </button>
  );
}