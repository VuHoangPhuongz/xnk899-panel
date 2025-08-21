'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { products } from '@/data/products';
import ProductCard from './ProductCard';

// Định nghĩa kiểu cho props truyền vào
type RelatedProductsProps = {
  categorySlug: string;
  currentProductId: string;
};

const RelatedProducts = ({ categorySlug, currentProductId }: RelatedProductsProps) => {
  // Lọc để tìm các sản phẩm thỏa mãn 2 điều kiện:
  // 1. Cùng danh mục (categorySlug)
  // 2. Không phải là sản phẩm đang xem (currentProductId)
  const relatedProducts = products
    .filter(p => p.categorySlug === categorySlug && p.id !== currentProductId)
    .slice(0, 5); // Lấy tối đa 5 sản phẩm tương tự

  // Nếu không có sản phẩm nào liên quan thì không hiển thị gì cả
  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16 border-t pt-12">
      <h2 className="text-2xl lg:text-3xl font-bold text-blue-primary mb-8 section-title text-center">
        Sản phẩm tương tự
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-10" // Thêm padding bottom cho nút navigation không bị che
      >
        {relatedProducts.map(product => (
          <SwiperSlide key={product.id} className="h-auto">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProducts;