// components/Header.tsx
import { getSiteSettings } from '@/lib/actions';
import HeaderClient from './HeaderClient'; // Import component client mới

export default async function Header() {
  // 1. Lấy dữ liệu cài đặt trên máy chủ
  const settings = await getSiteSettings();

  // 2. Kết xuất Thành phần máy khách và chuyển dữ liệu xuống dưới dạng đạo cụ
  return <HeaderClient settings={settings} />;
}