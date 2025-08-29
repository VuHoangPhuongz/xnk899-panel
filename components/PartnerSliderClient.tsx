'use client'; // This is required for interactive components

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Define the type for a single partner
type Partner = {
  id: string;
  logoUrl: string;
  name: string;
}

// This component receives the 'partners' array as a prop
export default function PartnerSliderClient({ partners }: { partners: Partner[] }) {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold uppercase section-title text-blue-primary">
                        Đối Tác Của Chúng Tôi
                    </h2>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={2}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 3, spaceBetween: 30 },
                        1024: { slidesPerView: 5, spaceBetween: 40 },
                    }}
                >
                    {partners.map((partner) => (
                        <SwiperSlide key={partner.id}>
                            <div className="flex justify-center items-center h-24">
                                <Image
                                    src={partner.logoUrl}
                                    alt={partner.name}
                                    width={150}
                                    height={96}
                                    className="max-h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};