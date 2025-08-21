'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { products } from '@/data/products';
import ProductCard from './ProductCard';

// Lấy 8 sản phẩm đầu tiên làm sản phẩm nổi bật
const featuredProducts = products.slice(0, 8);

const FeaturedProducts = () => {
    return (
        <section className="py-16 lg:py-24 bg-gray-100 relative">
            {/* Shape Divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
                <svg viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="relative block w-full h-[50px]">
                    <path className="fill-current text-white" d="M1000 100H0L0 96H480.929C482.255 96 483.527 95.4732 484.464 94.5355L497.879 81.1213C499.05 79.9497 500.95 79.9497 502.121 81.1213L515.536 94.5355C516.473 95.4732 517.745 96 519.071 96H1000V100Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold uppercase section-title text-blue-primary">
                        Sản phẩm nổi bật
                    </h2>
                </div>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    className="!pb-10" // Thêm padding bottom cho nút navigation
                >
                    {featuredProducts.map(product => (
                        <SwiperSlide key={product.id} className="h-auto">
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default FeaturedProducts;