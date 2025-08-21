'use client';

import React from 'react';
import Image from 'next/image';

// Import các thành phần và module của Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

// Import CSS của Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Dữ liệu bây giờ chỉ cần đường dẫn ảnh và alt text
const slideImages = [
  {
    url: '/anh/1.webp',
    alt: 'Hình ảnh slider 1 - Giải pháp PCCC',
  },
  {
    url: '/anh/2.webp',
    alt: 'Hình ảnh slider 2 - Màn ngăn cháy tự động',
  },
  {
    url: '/anh/3.webp',
    alt: 'Hình ảnh slider 3 - Panel chống cháy',
  },
  {
    url: '/anh/4.webp',
    alt: 'Hình ảnh slider 4',
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full h-[500px] lg:h-[600px]">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect={'fade'} // Hiệu ứng mờ ảo khi chuyển ảnh
        autoplay={{
          delay: 4000, // Tự chuyển ảnh sau 4 giây
          disableOnInteraction: false,
        }}
        navigation={true} // Giữ lại nút next/prev để người dùng điều khiển
        className="h-full"
      >
        {slideImages.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Bây giờ bên trong slide chỉ còn duy nhất component Image */}
            <Image
              src={slide.url}
              alt={slide.alt}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
              sizes="100vw"
              quality={85}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;