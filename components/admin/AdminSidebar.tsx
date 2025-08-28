// components/admin/AdminSidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Sản phẩm', href: '/products' },
  { name: 'Dự án', href: '/projects' },
  { name: 'Tin tức', href: '/posts' },
   { name: 'Cài đặt', href: '/settings' },
    { name: 'Hero Slider', href: '/slides' },
     { name: 'pages', href: '/pages' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <nav>
        <ul>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 hover:bg-gray-700 ${isActive ? 'bg-gray-900' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}