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

// Dữ liệu ảnh
const slideImages = [
  {
    url: '/anh/slides/1.png',
    alt: 'Hình ảnh slider 1 - Tổng họp sản phẩm ngăn cháy',
  },
  {
    url: '/anh/slides/2.png',
    alt: 'Hình ảnh slider 2 - Công nghệ và nhà máy sản xuất',
  },
  {
    url: '/anh/slides/3.png',
    alt: 'Hình ảnh slider 3 - Màn ngăn cháy ',
  },
  {
    url: '/anh/slides/4.png',
    alt: 'Hình ảnh slider 4 - Kính ngăn cháy',
  },
    {
    url: '/anh/slides/5.png',
    alt: 'Hình ảnh slider 5 - Cửa thép chống cháy ',
  },
    {
    url: '/anh/slides/6.png',
    alt: 'Hình ảnh slider 6 - Thông tin chung',
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full h-[15vh] lg:h-[47vh]">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        slidesPerView={1}
        loop
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="h-full"
      >
        {slideImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.url}
                alt={slide.alt}
                fill
                className="object-contain sm:object-cover"
                priority={index === 0}
                sizes="100vw"
                quality={90}
              />
            </div>
          </SwiperSlide>
        ))}
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-white !w-8 !h-8 sm:!w-10 sm:!h-10 !left-2 sm:!left-4 !bg-black/30 !rounded-full hover:!bg-black/50 transition-colors"></div>
        <div className="swiper-button-next !text-white !w-8 !h-8 sm:!w-10 sm:!h-10 !right-2 sm:!right-4 !bg-black/30 !rounded-full hover:!bg-black/50 transition-colors"></div>
      </Swiper>
    </section>
  );
};

export default HeroSlider;