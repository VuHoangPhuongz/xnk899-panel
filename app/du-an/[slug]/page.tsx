import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Dữ liệu dự án (bạn có thể tách ra file riêng nếu muốn)
const projects = [
    { 
        slug: "kcn-keinhing-muramato", 
        imgSrc: "/anh/Công ty TNHH Keinhing Muramato Việt Nam.webp", 
        title: "Công ty Keinhing Muramoto Việt Nam", 
        content: "Nội dung chi tiết về dự án Công ty Keinhing Muramoto Việt Nam đang được cập nhật..." 
    },
    { 
        slug: "dh-gtvt-ha-noi", 
        imgSrc: "/anh/ĐH GTVT.webp", 
        title: "ĐẠI HỌC GIAO THÔNG VẬN TẢI HÀ NỘI", 
        content: "Nội dung chi tiết về dự án Đại học Giao thông Vận tải Hà Nội đang được cập nhật..." 
    },
    { 
        slug: "mh-innovation-vn", 
        imgSrc: "/anh/mh-innovation-vn-68a481b53c88d.webp", 
        title: "CÔNG TY TNHH M&H INNOVATION", 
        content: "Nội dung chi tiết về dự án Công ty TNHH M&H Innovation đang được cập nhật..." 
    },
    { 
        slug: "marriott-da-nang", 
        imgSrc: "/anh/marriott-da-nang-68a481b7734b2.webp", 
        title: "KHÁCH SẠN MARRIOTT ĐÀ NẴNG", 
        content: "Nội dung chi tiết về dự án Khách sạn Marriott Đà Nẵng đang được cập nhật..." 
    },
    { 
        slug: "nha-may-soi-bao-long", 
        imgSrc: "/anh/nha-may-soi-cong-ty-tnhh-thuong-mai-bao-long-68a481b9afe19.webp", 
        title: "CÔNG TY TNHH THƯƠNG MẠI BẢO LONG", 
        content: "Nội dung chi tiết về dự án Công ty TNHH Thương mại Bảo Long đang được cập nhật..." 
    },
    { 
        slug: "nha-xuong-tkg-eco-material", 
        imgSrc: "/anh/nha-xuong-tkg-eco-material-vina-68a481bbc7110.webp", 
        title: "CÔNG TY TKG ECO MATERIAL VINA", 
        content: "Nội dung chi tiết về dự án Công ty TKG Eco Material Vina đang được cập nhật..." 
    },
    { 
        slug: "nha-may-rac-phu-son", 
        imgSrc: "/anh/phu-son-68a481bdd3a9c.webp", 
        title: "NHÀ MÁY XỬ LÝ RÁC THẢI PHÚ SƠN", 
        content: "Nội dung chi tiết về dự án Nhà máy xử lý rác thải Phú Sơn đang được cập nhật..." 
    },
    { 
        slug: "kcn-hai-phong-a10", 
        imgSrc: "/anh/khu-cong-nghiep-hai-phong-68a481b13e312.webp", 
        title: "Nhà máy A10 Khu công nghiệp Hải Phòng", 
        content: "Nội dung chi tiết về dự án Nhà máy A10 Khu công nghiệp Hải Phòng đang được cập nhật..." 
    },
    { 
        slug: "cong-ty-panel-viet-nam", 
        imgSrc: "/anh/projects/cong-ty-panel-viet-nam.webp", 
        title: "Công ty TNHH Công nghệ điện tử Panel Việt Nam - VSIP Bắc Ninh", 
        content: "Nội dung chi tiết về dự án Công ty Panel Việt Nam đang được cập nhật..." 
    },
    { 
        slug: "vpbank-diamond-lounge", 
        imgSrc: "/anh/projects/vpbank-diamond-lounge.webp", 
        title: "KHU VỰC VPBANK DIAMOND LOUNGE - TẦNG 3 TÒA NHÀ NEXUS", 
        content: "Nội dung chi tiết về dự án VPBank Diamond Lounge đang được cập nhật..." 
    },
    { 
        slug: "charm-long-hai-resort", 
        imgSrc: "/anh/projects/charm-long-hai-resort.webp", 
        title: "CHARM LONG HẢI RESORT & SPA - Vũng Tàu", 
        content: "Nội dung chi tiết về dự án Charm Long Hải Resort & Spa đang được cập nhật..." 
    },
    { 
        slug: "cong-an-yen-bai", 
        imgSrc: "/anh/projects/cong-an-yen-bai.webp", 
        title: "Công An Tỉnh Yên Bái", 
        content: "Nội dung chi tiết về dự án Công an Tỉnh Yên Bái đang được cập nhật..." 
    },
    { 
        slug: "nha-khach-my-khe", 
        imgSrc: "/anh/projects/nha-khach-my-khe.webp", 
        title: "Nhà khách Mỹ Khê (T50)/ Quân khu 5", 
        content: "Nội dung chi tiết về dự án Nhà khách Mỹ Khê đang được cập nhật..." 
    },
    { 
        slug: "nha-kho-lanh-itl", 
        imgSrc: "/anh/projects/nha-kho-lanh-itl.webp", 
        title: "NHÀ KHO LẠNH ITL, KCN VSIP, Bình Dương", 
        content: "Nội dung chi tiết về dự án Nhà kho lạnh ITL đang được cập nhật..." 
    },
    { 
        slug: "kcn-dong-van-3", 
        imgSrc: "/anh/projects/kcn-dong-van-3.webp", 
        title: "Khu công nghiệp hỗ trợ Đồng Văn III", 
        content: "Nội dung chi tiết về dự án KCN Đồng Văn III đang được cập nhật..." 
    },
    { 
        slug: "dh-y-khoa-pnt", 
        imgSrc: "/anh/projects/dh-y-khoa-pnt.webp", 
        title: "Đại Học Y Khoa Phạm Ngọc Thạch - TP HCM", 
        content: "Nội dung chi tiết về dự án Đại học Y khoa Phạm Ngọc Thạch đang được cập nhật..." 
    },
    { 
        slug: "nha-may-hyosung-quang-nam", 
        imgSrc: "/anh/projects/nha-may-hyosung.webp", 
        title: "Nhà máy Hyosung - KCN Tam Thăng, Quảng Nam", 
        content: "Nội dung chi tiết về dự án Nhà máy Hyosung Quảng Nam đang được cập nhật..." 
    },
    { 
        slug: "khach-san-sheraton-can-tho", 
        imgSrc: "/anh/projects/sheraton-can-tho.webp", 
        title: "Tổ hợp khách sạn Sheraton Cần Thơ", 
        content: "Nội dung chi tiết về dự án Khách sạn Sheraton Cần Thơ đang được cập nhật..." 
    },
    { 
        slug: "nha-may-goertek-vinh", 
        imgSrc: "/anh/projects/goertek-vinh.webp", 
        title: "Nhà máy Goertek Vina - KCN WHA, Nghệ An", 
        content: "Nội dung chi tiết về dự án Nhà máy Goertek Vina đang được cập nhật..." 
    },
    { 
        slug: "san-bay-quoc-te-da-nang-t2", 
        imgSrc: "/anh/projects/san-bay-da-nang.webp", 
        title: "Nhà ga hành khách T2 - Sân bay Quốc tế Đà Nẵng", 
        content: "Nội dung chi tiết về dự án Nhà ga T2 Sân bay Đà Nẵng đang được cập nhật..." 
    }
];

export default function DuAnDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);

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
                    {/* Bạn có thể thêm nhiều nội dung chi tiết hơn về dự án ở đây */}
                </div>
            </div>
        </div>
    </div>
  );
}