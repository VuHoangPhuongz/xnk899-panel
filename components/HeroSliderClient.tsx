// components/HeroSliderClient.tsx
'use client'; // Bắt buộc phải có để định nghĩa đây là Client Component

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

// Import CSS của Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Định nghĩa kiểu dữ liệu cho một slide để code rõ ràng hơn
type Slide = {
  id: string;
  url: string;
  alt: string;
};

// Component này nhận dữ liệu 'slides' từ cha (là Server Component)
export default function HeroSliderClient({ slides }: { slides: Slide[] }) {
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
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
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
        
        {/* Nút điều hướng */}
        <div className="swiper-button-prev !text-white !w-8 !h-8 sm:!w-10 sm:!h-10 !left-2 sm:!left-4 !bg-black/30 !rounded-full hover:!bg-black/50 transition-colors"></div>
        <div className="swiper-button-next !text-white !w-8 !h-8 sm:!w-10 sm:!h-10 !right-2 sm:!right-4 !bg-black/30 !rounded-full hover:!bg-black/50 transition-colors"></div>
      </Swiper>
    </section>
  );
};