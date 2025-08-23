import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Dự án đã triển khai - 899 IMEX',
  description: 'Các dự án PCCC tiêu biểu đã được Công ty 899 IMEX triển khai thành công.',
};

const projects = [
    { slug: "kcn-keinhing-muramato", imgSrc: "/anh/Công ty TNHH Keinhing Muramato Việt Nam.webp", title: "Công ty Keinhing Muramato Việt Nam" },
    { slug: "dh-gtvt-ha-noi", imgSrc: "/anh/ĐH GTVT.webp", title: "ĐẠI HỌC GIAO THÔNG VẬN TẢI HÀ NỘI" },
    { slug: "mh-innovation-vn", imgSrc: "/anh/mh-innovation-vn-68a481b53c88d.webp", title: "CÔNG TY TNHH M&H INNOVATION" },
    { slug: "marriott-da-nang", imgSrc: "/anh/marriott-da-nang-68a481b7734b2.webp", title: "KHÁCH SẠN MARRIOT ĐÀ NẴNG" },
    { slug: "nha-may-soi-bao-long", imgSrc: "/anh/nha-may-soi-cong-ty-tnhh-thuong-mai-bao-long-68a481b9afe19.webp", title: "CÔNG TY TNHH THƯƠNG MẠI BẢO LONG" },
    { slug: "nha-xuong-tkg-eco-material", imgSrc: "/anh/nha-xuong-tkg-eco-material-vina-68a481bbc7110.webp", title: "CÔNG TY TKG ECO MATERIAL VINA" },
    { slug: "nha-may-rac-phu-son", imgSrc: "/anh/phu-son-68a481bdd3a9c.webp", title: "NHÀ MÁY XỬ LÝ RÁC THẢI PHÚ SƠN" },
    { slug: "kcn-hai-phong-a10", imgSrc: "/anh/khu-cong-nghiep-hai-phong-68a481b13e312.webp", title: "Nhà máy A10 Khu công nghiệp Hải Phòng" },
    { slug: "cong-ty-panel-viet-nam", imgSrc: "/anh/projects/cong-ty-panel-viet-nam.webp", title: "Công ty TNHH Công nghệ điện tử Panel Việt Nam - VSIP Bắc Ninh" },
    { slug: "vpbank-diamond-lounge", imgSrc: "/anh/projects/vpbank-diamond-lounge.webp", title: "KHU VỰC VPBANK DIAMOND LOUNGE - TẦNG 3 TÒA NHÀ NEXUS" },
    { slug: "charm-long-hai-resort", imgSrc: "/anh/projects/charm-long-hai-resort.webp", title: "CHARM LONG HẢI RESORT & SPA - Vũng Tàu" },
    { slug: "cong-an-yen-bai", imgSrc: "/anh/projects/cong-an-yen-bai.webp", title: "Công An Tỉnh Yên Bái" },
    { slug: "nha-khach-my-khe", imgSrc: "/anh/projects/nha-khach-my-khe.webp", title: "Nhà khách Mỹ Khê (T50)/ Quân khu 5" },
    { slug: "nha-kho-lanh-itl", imgSrc: "/anh/projects/nha-kho-lanh-itl.webp", title: "NHÀ KHO LẠNH ITL, KCN VSIP, Bình Dương" },
    { slug: "kcn-dong-van-3", imgSrc: "/anh/projects/kcn-dong-van-3.webp", title: "Khu công nghiệp hỗ trợ Đồng Văn III" },
    { slug: "dh-y-khoa-pnt", imgSrc: "/anh/projects/dh-y-khoa-pnt.webp", title: "Đại Học Y Khoa Phạm Ngọc Thạch - TP HCM" },
];

export default function DuAnPage() {
  return (
    <>
      <section className="relative bg-gray-800 text-white py-20">
        <Image src="/anh/marriott-da-nang-68a481b7734b2.webp" alt="Background" layout="fill" objectFit="cover" className="opacity-30 z-0"/>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold uppercase">Dự án</h1>
            <div className="mt-4 text-sm">
                <Link href="/" className="hover:text-green-primary">Trang chủ</Link><span className="mx-2">/</span><span>Dự án</span>
            </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Link key={index} href={`/du-an/${project.slug}`} className="relative group overflow-hidden rounded-lg shadow-lg block">
                <Image 
                  src={project.imgSrc} 
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-r from-blue-800 via-green-600 to-transparent to-transparent text-white text-center">
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