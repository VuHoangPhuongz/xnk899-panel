import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Dự án đã triển khai - 899 IMEX',
  description: 'Các dự án PCCC tiêu biểu đã được Công ty 899 IMEX triển khai thành công.',
};

const projects = [
    { imgSrc: "/anh/Công ty TNHH Keinhing Muramato Việt Nam.webp", title: "Công ty Keinhing Muramato Việt Nam" },
    { imgSrc: "/anh/ĐH GTVT.webp", title: "ĐẠI HỌC GIAO THÔNG VẬN TẢI HÀ NỘI" },
    { imgSrc: "/anh/mh-innovation-vn-68a481b53c88d.webp", title: "CÔNG TY TNHH M&H INNOVATION" },
    { imgSrc: "/anh/marriott-da-nang-68a481b7734b2.webp", title: "KHÁCH SẠN MARRIOT ĐÀ NẴNG" },
    { imgSrc: "/anh/nha-may-soi-cong-ty-tnhh-thuong-mai-bao-long-68a481b9afe19.webp", title: "CÔNG TY TNHH THƯƠNG MẠI BẢO LONG" },
    { imgSrc: "/anh/nha-xuong-tkg-eco-material-vina-68a481bbc7110.webp", title: "CÔNG TY TKG ECO MATERIAL VINA" },
    { imgSrc: "/anh/phu-son-68a481bdd3a9c.webp", title: "NHÀ MÁY XỬ LÝ RÁC THẢI PHÚ SƠN" },
    { imgSrc: "/anh/khu-cong-nghiep-hai-phong-68a481b13e312.webp", title: "Nhà máy A10 Khu công nghiệp Hải Phòng" },
     { imgSrc: "/anh/projects/cong-ty-panel-viet-nam.jpg", title: "Công ty TNHH Công nghệ điện tử Panel Việt Nam - VSIP Bắc Ninh" },
    { imgSrc: "/anh/projects/vpbank-diamond-lounge.webp", title: "KHU VỰC VPBANK DIAMOND LOUNGE - TẦNG 3 TÒA NHÀ NEXUS" },
    { imgSrc: "/anh/projects/charm-long-hai-resort.webp", title: "CHARM LONG HẢI RESORT & SPA - Vũng Tàu" },
    { imgSrc: "/anh/projects/cong-an-yen-bai.webp", title: "Công An Tỉnh Yên Bái" },
    { imgSrc: "/anh/projects/nha-khach-my-khe.wedp", title: "Nhà khách Mỹ Khê (T50)/ Quân khu 5" },
    { imgSrc: "/anh/projects/nha-kho-lanh-itl.webp", title: "NHÀ KHO LẠNH ITL, KCN VSIP, Bình Dương" },
    { imgSrc: "/anh/projects/ubnd-yen-bai.jpg", title: "Trụ sở UBND Tỉnh Yên Bái" },
    { imgSrc: "/anh/projects/kcn-dong-van-3.webp", title: "Khu công nghiệp hỗ trợ Đồng Văn III" },
    { imgSrc: "/anh/projects/dh-y-khoa-pnt.webp", title: "Đại Học Y Khoa Phạm Ngọc Thạch - TP HCM" },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image 
                  src={project.imgSrc} 
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-r from-blue-800 via-green-600 to-transparent to-transparent text-white text-center">
                    <h3 className="font-semibold  transition-colors duration-500">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}