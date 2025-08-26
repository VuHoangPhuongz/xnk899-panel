// app/du-an/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projectsData } from '@/data/projects'; // Import dữ liệu từ file mới

export default function DuAnDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find(p => p.slug === params.slug); // Sử dụng projectsData

  if (!project) {
    return notFound();
  }

  return (
    <div className="bg-white">
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <nav className="text-sm mb-8">
                    <Link href="/" className="text-gray-500 hover:text-green-primary">Trang chủ</Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <Link href="/du-an" className="text-gray-500 hover:text-green-primary">Dự án</Link>
                </nav>
                <h1 className="text-3xl md:text-4xl font-bold text-blue-primary mb-8">{project.title}</h1>
                <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
                    <Image src={project.imgSrc} alt={project.title} fill style={{objectFit: 'cover'}} />
                </div>
                <div className="prose max-w-none">
                    <p>{project.content}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

// (Tùy chọn) Hàm này giúp Next.js tạo sẵn các trang tĩnh khi build, tăng tốc độ tải trang
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}