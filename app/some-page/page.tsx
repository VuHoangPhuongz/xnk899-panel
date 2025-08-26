// app/some-page/page.tsx (Code đã sửa)

import InteractiveButton from '@/components/InteractiveButton'; // Import component mới

// Trang này vẫn là một Server Component, giúp tải trang nhanh hơn
export default function SomePage() {
  return (
    <div>
      <h1>Welcome</h1>
      {/* Sử dụng Client Component cho phần cần tương tác */}
      <InteractiveButton />
    </div>
  );
}