// components/admin/DeleteProductButton.tsx
'use client';

// Component này chỉ chứa phần UI và logic phía client (hàm confirm)
export default function DeleteProductButton() {
  return (
    <button
      type="submit"
      className="text-red-600 hover:text-red-900"
      onClick={(e) => {
        if (!confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
          e.preventDefault(); // Hủy việc submit form nếu người dùng không đồng ý
        }
      }}
    >
      Xóa
    </button>
  );
}