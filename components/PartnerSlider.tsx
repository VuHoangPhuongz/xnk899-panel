'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partners = [
     { src: "/anh/789 bo quoc phong.jpg", alt: "Bộ quốc phòng logo" },
    { src: "/anh/logo-saokim-cong-ty.png", alt: "GRAND M & E Logo" },
    { src: "/anh/logocongtyimc6.png", alt: "IMC Logo" },
    // Thêm các logo khác nếu có, có thể lặp lại để slider trông đầy đặn hơn
    { src: "/anh/logo-songda.png", alt: "Sông Đà logo" },
    { src: "/anh/Logo.svg", alt: "Conteccons Logo" },
    { src: "/anh/logocongtyimc6.png", alt: "IMC Logo" },
];

const PartnerSlider = () => {
    return (
        <section className="py-16 lg:py-24">
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
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex justify-center items-center h-24">
                                <Image
                                    src={partner.src}
                                    alt={partner.alt}
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

export default PartnerSlider;