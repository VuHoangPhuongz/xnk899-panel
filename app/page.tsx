'use client';
// Sử dụng dynamic import để tối ưu tốc độ tải trang
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

// Tải các component slider ở phía client để không ảnh hưởng đến server
const HeroSlider = dynamic(() => import('@/components/HeroSlider'), { ssr: false });
const FeaturedProducts = dynamic(() => import('@/components/FeaturedProducts'), { ssr: false });
const PartnerSlider = dynamic(() => import('@/components/PartnerSlider'), { ssr: false });

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* SECTION: GIỚI THIỆU */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="absolute -top-4 -left-4 w-full h-full border-4 border-green-primary rounded-lg z-0"></div>
                    <Image 
                      src="/anh/gioi thieu cong ty.png" 
                      alt="Về chúng tôi"
                      width={600}
                      height={400}
                      className="relative z-10 w-full h-auto rounded-lg shadow-xl object-cover"
                    />
                </div>
                <div className="text-gray-700 leading-relaxed">
                    <h2 className="text-3xl lg:text-4xl font-bold text-blue-primary mb-6">
                        Giới thiệu về XNK và Xây Dựng 899
                    </h2>
                    <p className='mb-4'><strong>Công ty cổ phần xuất nhập khẩu và xây dựng 899</strong> xin gửi tới Quý khách hàng lời chào trân trọng nhất!</p>
                    <p className='mb-4'>Với kinh nghiệm chuyên sâu về các sản phẩm PCCC, Công ty xuất nhập khẩu 899 phủ sóng toàn quốc các mặt hàng: Rèm/ Màn ngăn cháy, kính ngăn cháy hệ E, EI, khung thép ngăn cháy, và các sản phẩm ngăn cháy khác.</p>
                    <div className="mt-8">
                        <Link href="/gioi-thieu" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-800 via-green-600 to-transparent  text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
                            XEM THÊM <span className="ml-2">›</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      {/* SECTION: SẢN PHẨM NỔI BẬT */}
      <FeaturedProducts />

      {/* SECTION: THẾ MẠNH */}
      <section className="relative bg-gray-800 text-gray-200">
          <div className="absolute inset-0 z-0">
              <Image src="/anh/marriott-da-nang-68a481b7734b2.webp" alt="Background" fill style={{objectFit: 'cover'}} className="opacity-10"/>
              <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 max-w-5xl w-full py-16 md:py-24">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                      <Image src="/anh/giay chung nhan.webp" alt="Chứng nhận chất lượng XNK 899" width={400} height={500} className="rounded-lg shadow-xl w-full h-auto"/>
                  </div>
                  <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 uppercase section-title">Thế mạnh của chúng tôi</h2>
                      <div className="space-y-6">
                          <div className="flex items-start space-x-4">
                              <i className="fa-solid fa-award text-orange-primary text-3xl w-8 text-center pt-1"></i>
                              <div>
                                  <h3 className="text-xl font-semibold text-white mb-1">CHẤT LƯỢNG HÀNG ĐẦU</h3>
                                  <p className="text-gray-400">Sản phẩm nhập khẩu chính ngạch, có đầy đủ chứng nhận chất lượng theo tiêu chuẩn PCCC Việt Nam.</p>
                              </div>
                          </div>
                          <div className="flex items-start space-x-4">
                              <i className="fa-solid fa-handshake text-orange-primary text-3xl w-8 text-center pt-1"></i>
                              <div>
                                  <h3 className="text-xl font-semibold text-white mb-1">UY TÍN – CHUYÊN NGHIỆP</h3>
                                  <p className="text-gray-400">Luôn đặt chữ TÍN lên hàng đầu, với đội ngũ nhân sự chuyên nghiệp và tận tâm.</p>
                              </div>
                          </div>
                          <div className="flex items-start space-x-4">
                                <i className="fa-solid fa-headset text-orange-primary text-3xl w-8 text-center pt-1"></i>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-1">HỖ TRỢ 24/7</h3>
                                    <p className="text-gray-400">Sẵn sàng tư vấn, giải đáp mọi thắc mắc của khách hàng một cách nhanh chóng và hiệu quả.</p>
                                </div>
                            </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* SECTION: DỰ ÁN ĐÃ TRIỂN KHAI */}
      <section className="py-16 lg:py-24 bg-gray-50">
    <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold uppercase section-title text-blue-primary">
                Dự Án Đã Triển Khai
            </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Dự án 1 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image src="/anh/Công ty TNHH Keinhing Muramato Việt Nam.webp" alt="Dự án công ty Muramato" width={400} height={300} className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-r from-blue-800 via-green-600 to-transparent to-transparent text-white">
                    <h3 className="font-semibold">Công ty Keinhing Muramato Việt Nam</h3>
                </div>
            </div>
            
            {/* Dự án 2 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image src="/anh/ĐH GTVT.webp" alt="Dự án ĐH GTVT" width={400} height={300} className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-r from-blue-800 via-green-600 to-transparent text-white">
                    <h3 className="font-semibold">ĐH Giao thông Vận tải</h3>
                </div>
            </div>
            
            {/* Dự án 3 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image src="/anh/marriott-da-nang-68a481b7734b2.webp" alt="Dự án Marriot Đà Nẵng" width={400} height={300} className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-r from-blue-800 via-green-600 to-transparent text-white">
                    <h3 className="font-semibold">Khách sạn Marriot Đà Nẵng</h3>
                </div>
            </div>
            
            {/* Dự án 4 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image src="/anh/phu-son-68a481bdd3a9c.webp" alt="Dự án nhà máy Phú Sơn" width={400} height={300} className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-r from-blue-800 via-green-600 to-transparent text-white">
                    <h3 className="font-semibold">Nhà máy XL Rác Thải Phú Sơn</h3>
                </div>
            </div>
            
            {/* --- DỰ ÁN ĐƯỢC THÊM VÀO --- */}
            {/* Dự án 5 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image src="/anh/mh-innovation-vn-68a481b53c88d.webp" alt="Dự án công ty M&H INNOVATION" width={400} height={300} className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-r from-blue-800 via-green-600 to-transparent text-white">
                    <h3 className="font-semibold">CÔNG TY TNHH M&H INNOVATION</h3>
                </div>
            </div>
            
            {/* Dự án 6 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
                <Image src="/anh/nha-may-soi-cong-ty-tnhh-thuong-mai-bao-long-68a481b9afe19.webp" alt="Dự án nhà máy sợi Bảo Long" width={400} height={300} className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"/>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-r from-blue-800 via-green-600 to-transparent text-white">
                    <h3 className="font-semibold">Nhà máy sợi Bảo Long</h3>
                </div>
            </div>

        </div>
    </div>
</section>

      {/* SECTION: ĐỐI TÁC */}
      <PartnerSlider />
    </>
  );
}