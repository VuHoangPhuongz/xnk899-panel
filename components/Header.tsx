// components/Header.tsx
import { getSiteSettings } from '@/lib/actions';
import HeaderClient from './HeaderClient'; // Import component client mới

export default async function Header() {
  // 1. Lấy dữ liệu cài đặt trên server
  const settings = await getSiteSettings();

  // 2. Render Client Component và truyền dữ liệu xuống làm props
  return <HeaderClient settings={settings} />;
}