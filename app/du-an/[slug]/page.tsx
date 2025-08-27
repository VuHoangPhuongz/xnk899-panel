// app/du-an/[slug]/page.tsx
import { getProjectBySlug, getProjects } from '@/lib/actions';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

type DuAnDetailPageProps = {
  params: { slug: string };
};

// Hàm tạo metadata động cho SEO
export async function generateMetadata({ params }: DuAnDetailPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Không tìm thấy dự án',
    };
  }

  return {
    title: `${project.title} - Dự án tiêu biểu | 899 IM-EX`,
    description: `Thông tin chi tiết về dự án ${project.title} do 899 IM-EX thực hiện.`,
    openGraph: {
      title: project.title,
      description: `Thông tin chi tiết về dự án ${project.title}`,
      images: [project.imgSrc],
    },
  };
}

// Hàm này giúp Next.js tạo sẵn các trang tĩnh khi build
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function DuAnDetailPage({ params }: DuAnDetailPageProps) {
  // Lấy dữ liệu của 1 dự án từ database bằng Server Action
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound(); // Hiển thị trang 404 nếu không tìm thấy dự án
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
            <Image 
              src={project.imgSrc} 
              alt={project.title} 
              fill 
              style={{ objectFit: 'cover' }}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: project.content }}
          >
            {/* Nội dung HTML từ database sẽ được render ở đây */}
          </div>
        </div>
      </div>
    </div>
  );
}
