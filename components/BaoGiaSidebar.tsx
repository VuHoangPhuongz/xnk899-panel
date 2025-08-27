// components/BaoGiaSidebar.tsx
'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BaoGiaSidebar() {
  const pathname = usePathname();
  const links = [
    { href: '/bao-gia/rem-ngan-chay', label: 'Báo giá Màn/Rèm ngăn cháy' },
    { href: '/bao-gia/kinh-chong-chay', label: 'Báo giá Kính chống cháy' },
    { href: '/bao-gia/cua-thep-chong-chay', label: 'Báo giá Cửa thép chống cháy' },
  ];

  return (
    <aside className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-md p-4 sticky top-28">
        <h3 className="text-xl font-bold mb-4 pb-2 border-b-2 border-orange-primary">DANH MỤC BÁO GIÁ</h3>
        <ul className="space-y-1">
          {links.map(link => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block w-full text-left px-4 py-3 rounded-md font-semibold transition-colors
                    ${isActive ? 'bg-blue-primary text-white' : 'hover:bg-blue-primary hover:text-white'}
                  `}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  );
};
