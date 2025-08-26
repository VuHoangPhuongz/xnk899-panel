// components/admin/AdminHeader.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { signOutAction } from '@/lib/actions';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
// Icon Search (SVG)
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 text-gray-500"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

// Component AdminHeader
export default function AdminHeader() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
      {/* Ô tìm kiếm (bên trái) */}
      <div className="flex items-center">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:bg-white focus:border-blue-500"
          />
        </div>
      </div>

      {/* Thông tin người dùng (bên phải) */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          onBlur={() => setTimeout(() => setDropdownOpen(false), 150)} // Tự đóng khi click ra ngoài
          className="flex items-center space-x-2 focus:outline-none"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="hidden md:inline text-sm font-medium">Admin User</span>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div
            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20"
          >
            <Link
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setDropdownOpen(false)}
            >
              Hồ sơ
            </Link>
            <Link
              href="/settings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setDropdownOpen(false)}
            >
              Cài đặt
            </Link>
            <div className="border-t border-gray-100"></div>
            {/* Form để gọi Server Action đăng xuất */}
            <form action={signOutAction}>
               <button
  onClick={() => signOut({ callbackUrl: '/login' })} // Gọi hàm signOut
  className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
>
  Đăng xuất
</button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}