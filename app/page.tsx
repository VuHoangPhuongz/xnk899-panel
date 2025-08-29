// app/page.tsx

// 1. Xóa 'use client' ở đầu file (nếu có)

import Link from 'next/link';
import Image from 'next/image';

// 2. Import trực tiếp các Server Component và Actions
import HeroSlider from '@/components/HeroSlider';
import PartnerSlider from '@/components/PartnerSlider';
import FeaturedProducts from '@/components/FeaturedProducts';
import NewsCard from '@/components/NewsCard';
import { getNewsArticles, getProjects } from '@/lib/actions'; // Import action để lấy dữ liệu

// 3. Chuyển component thành một async function
export default async function HomePage() {
  
  // 4. Lấy dữ liệu động cho các phần khác trên trang chủ
  const latestNews = await getNewsArticles(); // Giả sử hàm này lấy tất cả, ta sẽ cắt sau
  const projects = await getProjects();     // Tương tự, lấy tất cả và cắt

  return (
    <>
      <HeroSlider />

      {/* SECTION: GIỚI THIỆU */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="border-4 border-green-primary rounded-xl overflow-hidden shadow-xl">
                    <Image 
                      src="/anh/gioi thieu.png" 
                      alt="Các giải pháp chống cháy của 899 IM-EX"
                      width={600}
                      height={450}
                      className="w-full h-auto object-cover"
                    />
                </div>
                <div className="text-gray-700 leading-relaxed">
                    <h2 className="text-3xl lg:text-4xl font-bold text-blue-primary mb-6">
                        Giới thiệu về XNK và Xây Dựng 899
                    </h2>
                    <p className='mb-4'><strong>Công ty cổ phần xuất nhập khẩu và xây dựng 899</strong> xin gửi tới Quý khách hàng lời chào trân trọng nhất!</p>
                    <p className='mb-4'>Hiện nay, tình trạng các tòa nhà văn phòng, nhà ở, hay khu vui chơi, giải trí hay xảy ra tai nạn về hỏa hoạn. Vì vậy việc xây dựng các hệ thống, thiết bị, vật tư đảm bảo phòng cháy chữa cháy là việc làm tất yếu.</p>
                    <div className="mt-8">
                        <Link href="/gioi-thieu" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-800 via-green-600 to-transparent text-white font-semibold rounded-lg shadow-md hover:bg-green-secondary transition duration-300 ease-in-out transform hover:-translate-y-1">
                            XEM THÊM <span className="ml-2">›</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
      
      {/* SECTION: SẢN PHẨM NỔI BẬT */}
      <FeaturedProducts />

      {/* SECTION: THẾ MẠNH (giữ nguyên) */}
            <section className="relative bg-blue-primary text-white">
    <div className="absolute inset-0 z-0">
        <Image src="/anh/marriott-da-nang-68a481b7734b2.webp" alt="Background" fill style={{objectFit: 'cover'}} className="opacity-10"/>
        <div className="relative bg-blue-primary text-white"></div>
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
                            <p className="text-white">Sản phẩm nhập khẩu chính ngạch, có đầy đủ chứng nhận chất lượng theo tiêu chuẩn PCCC Việt Nam.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <i className="fa-solid fa-handshake text-orange-primary text-3xl w-8 text-center pt-1"></i>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-1">UY TÍN – CHUYÊN NGHIỆP</h3>
                            <p className="text-white">Luôn đặt chữ TÍN lên hàng đầu, với đội ngũ nhân sự chuyên nghiệp và tận tâm.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <i className="fa-solid fa-headset text-orange-primary text-3xl w-8 text-center pt-1"></i>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-1">HỖ TRỢ 24/7</h3>
                            <p className="text-white">Sẵn sàng tư vấn, giải đáp mọi thắc mắc của khách hàng một cách nhanh chóng và hiệu quả.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

      {/* SECTION: DỰ ÁN ĐÃ TRIỂN KHAI (Dữ liệu động) */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold uppercase section-title text-blue-primary">
                    Dự Án Đã Triển Khai
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 5. Render dữ liệu dự án từ database, chỉ lấy 6 dự án mới nhất */}
              {projects.slice(0, 6).map((project) => (
                <Link key={project.id} href={`/du-an/${project.slug}`} className="relative group overflow-hidden rounded-lg shadow-lg block">
                  <Image src={project.imgSrc} alt={project.title} width={400} height={300} className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-r from-blue-800 via-green-600 to-transparent text-white">
                      <h3 className="font-semibold">{project.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
        </div>
      </section>

      {/* SECTION: TIN TỨC MỚI NHẤT (Dữ liệu động) */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold uppercase section-title text-blue-primary">
              Tin Tức Mới Nhất
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 6. Render dữ liệu tin tức từ database, chỉ lấy 3 bài mới nhất */}
            {latestNews.slice(0, 3).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: ĐỐI TÁC */}
      <PartnerSlider />
    </>
  );
}