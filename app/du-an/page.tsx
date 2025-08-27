// app/du-an/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getProjects } from '@/lib/actions'; // Import action lấy dữ liệu từ database

export const metadata: Metadata = {
  title: 'Dự án đã triển khai - 899 IMEX',
  description: 'Các dự án PCCC tiêu biểu đã được Công ty 899 IMEX triển khai thành công, đảm bảo an toàn và chất lượng hàng đầu.',
};

export default async function DuAnPage() {
  // Lấy danh sách tất cả dự án từ database
  const projects = await getProjects();

  return (
    <>
      <section className="relative bg-gray-800 text-white py-20">
        <Image 
          src="/anh/marriott-da-nang-68a481b7734b2.webp" 
          alt="Dự án tiêu biểu của 899 IMEX" 
          fill
          style={{objectFit: 'cover'}}
          className="opacity-30 z-0"
          priority
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold uppercase">Dự án</h1>
            <div className="mt-4 text-sm">
                <Link href="/" className="hover:text-green-primary">Trang chủ</Link>
                <span className="mx-2">/</span>
                <span>Dự án</span>
            </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/du-an/${project.slug}`} className="relative group overflow-hidden rounded-lg shadow-lg block">
                <Image 
                  src={project.imgSrc} 
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-r from-blue-800 via-green-600 to-transparent text-white text-center">
                    <h3 className="font-semibold transition-colors duration-500">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
