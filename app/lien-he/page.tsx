import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Liên hệ - Công ty PCCC 899 IMEX',
  description: 'Liên hệ với Công ty 899 để nhận tư vấn và báo giá các giải pháp PCCC hàng đầu.',
};

export default function LienHePage() {
  return (
    <>
      <section className="relative bg-gray-800 text-white py-20">
        <Image src="/anh/marriott-da-nang-68a481b7734b2.webp" alt="Background" layout="fill" objectFit="cover" className="opacity-30 z-0"/>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold uppercase">Liên Hệ</h1>
            <div className="mt-4 text-sm">
                <Link href="/" className="hover:text-orange-primary">Trang chủ</Link><span className="mx-2">/</span><span>Liên Hệ</span>
            </div>
        </div>
      </section>

      <main className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 contact-section-title mb-6">Gửi Yêu Cầu Tư Vấn</h2>
              <p className="text-gray-600 mb-8">
                Quý khách vui lòng để lại thông tin, chúng tôi sẽ liên hệ lại ngay sau khi nhận được yêu cầu. XNK 899 xin chân thành cảm ơn!
              </p>
              <form action="#" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="sr-only">Họ và tên</label>
                    <input type="text" name="name" id="name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-primary focus:border-orange-primary" placeholder="Họ và tên (*)" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Số điện thoại</label>
                    <input type="tel" name="phone" id="phone" className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-primary focus:border-orange-primary" placeholder="Số điện thoại (*)" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" name="email" id="email" className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-primary focus:border-orange-primary" placeholder="Email" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Nội dung yêu cầu</label>
                  <textarea name="message" id="message" rows={6} className="w-full p-3 border border-gray-300 rounded-md focus:ring-orange-primary focus:border-orange-primary" placeholder="Nội dung yêu cầu (*)"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-gradient-to-r from-blue-800 via-green-600 to-transparent via-green-primary to-green-primary text-white font-bold uppercase py-3 px-6 rounded-md hover:opacity-90 transition duration-300">
                    Gửi đi
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Thông Tin Liên Hệ</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-4">
                      <i className="fa-solid fa-location-dot text-orange-primary text-xl mt-1 w-5 text-center"></i>
                      <span><strong className="text-gray-800">Địa chỉ:</strong> Số 97 ngõ 143 đường Xuân Phương, P. Phương Canh, Q. Nam Từ Liêm, TP. Hà Nội</span>
                  </div>
                  <div className="flex items-start space-x-4">
                      <i className="fa-solid fa-phone text-orange-primary text-xl mt-1 w-5 text-center"></i>
                      <span><strong className="text-gray-800">Hotline:</strong> 0987.811.158</span>
                  </div>
                    <div className="flex items-start space-x-4">
                      <i className="fa-solid fa-envelope text-orange-primary text-xl mt-1 w-5 text-center"></i>
                      <span><strong className="text-gray-800">Email:</strong> xnk899@gmail.com</span>
                  </div>
                    <div className="flex items-start space-x-4">
                      <i className="fa-solid fa-globe text-orange-primary text-xl mt-1 w-5 text-center"></i>
                      <span><strong className="text-gray-800">Website:</strong> xnk899.com</span>
                  </div>
                </div>
              </div>
              <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Bản Đồ</h3>
                  <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden shadow-lg">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.921382435424!2d105.7402664759051!3d21.03586028741368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455206a59677b%3A0x28a31362e67a4cf8!2zOTcgTmcuIDE0MyDEkC4gWHXDom4gUGjGsMahbmcsIFBobmjDsm5nIENhbmgsIE5hbSBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdE5hbQ!5e0!3m2!1svi!2s!4v1724254425585!5m2!1svi!2s" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Bản đồ vị trí Công ty CP XNK và Xây dựng 899"></iframe>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}