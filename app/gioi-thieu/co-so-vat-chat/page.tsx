import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Cơ sở vật chất & Năng lực nhân sự - 899 IMEX',
  description: 'Tổng quan về năng lực nhân sự, sơ đồ tổ chức và hệ thống máy móc, thiết bị hiện đại của 899 IMEX.',
};

const machinery = [
    { src: "/anh/1200w.webp", alt: "Máy cắt LASER 12000W" },
    { src: "/anh/yawei-68a481cadb6da.webp", alt: "Máy chấn YAWEI" },
    { src: "/anh/cns.jpg", alt: "Máy đột dập CNC" },
    { src: "/anh/robot-68a481c69c3d6.webp", alt: "Robot Hàn tự động" },
    { src: "/anh/phun-son-68a481bf28283.webp", alt: "Lò phun sơn tĩnh điện" },
    { src: "/anh/dong goi.webp", alt: "Máy đóng gói sản phẩm" },
];

export default function CoSoVatChatPage() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 pb-3 border-b mt-0">Năng lực nhân sự</h1>
      <p className="text-gray-600 leading-relaxed mb-6">Yếu tố con người chính là một trong những điều quan trọng dẫn đến sự thành công của công ty. Với đội ngũ nhân viên chuyên nghiệp, trình độ chuyên môn cao, tất cả các sản phẩm của công ty đều được kiểm tra kỹ thuật, chất lượng kỹ càng trước khi đưa đến tận tay khác hàng.</p>
      <figure>
        <Image 
          src="/anh/nang-luc-68a481b9a240a.webp" 
          alt="Sơ đồ tổ chức công ty 899 IMEX"
          width={800}
          height={600}
          className="rounded-lg shadow-md my-6 w-full h-auto"
        />
        <figcaption className="text-center text-sm text-gray-500">Sơ đồ tổ chức công ty</figcaption>
      </figure>

      <h2 className="text-3xl font-bold text-gray-800 my-8 pb-3 border-b">Năng lực thiết bị, máy móc</h2>
      <p className="text-gray-600 leading-relaxed mb-6">XNK 899 tự hào sở hữu nhà máy sản xuất hiện đại, được đầu tư hệ thống dây chuyền máy móc nhập khẩu đồng bộ, cho phép sản xuất hàng loạt với độ chính xác cao.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
        {machinery.map((item, index) => (
          <div key={index} className="group">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                <Image 
                    src={item.src} 
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <p className="text-center font-semibold mt-2 text-gray-700">{item.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}