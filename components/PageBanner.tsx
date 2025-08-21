import Link from 'next/link';
import Image from 'next/image';

// Định nghĩa kiểu dữ liệu cho props để component linh hoạt hơn
type Breadcrumb = {
  label: string;
  href: string;
};

type PageBannerProps = {
  title: string;
  breadcrumbs: Breadcrumb[];
  backgroundImageUrl: string; // Cho phép truyền ảnh nền tùy ý
};

const PageBanner = ({ title, breadcrumbs, backgroundImageUrl }: PageBannerProps) => {
  return (
    <section className="relative bg-gray-800 text-white py-20">
      {/* Ảnh nền */}
      <Image 
        src={backgroundImageUrl} 
        alt={`Banner cho trang ${title}`} 
        layout="fill" 
        objectFit="cover" 
        className="opacity-40 z-0"
        priority // Ưu tiên tải ảnh banner
      />
      {/* Lớp phủ màu */}
      <div className="absolute inset-0 bg-blue-primary/60 z-0"></div>

      {/* Nội dung */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold uppercase">{title}</h1>
        <div className="mt-4 text-sm breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              {index > 0 && <span className="mx-2">/</span>}
              <Link href={crumb.href} className="hover:text-green-primary transition-colors">
                {crumb.label}
              </Link>
            </span>
          ))}
          <span className="mx-2">/</span>
          <span>{title}</span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;