import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-blue-primary text-white">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div>
                    <div className="bg-white p-1 rounded inline-block mb-4">
                      <Image 
                        src="/anh/logo-68a481b451012.webp" 
                        alt="XNK 899 Logo Footer" 
                        className="h-12 w-auto"
                      />
                    </div>
                    <p className="font-bold text-white mb-2 uppercase">CÔNG TY CP XUẤT NHẬP KHẨU VÀ XÂY DỰNG 899</p>
                    <p className="text-sm leading-relaxed "><i className="fa-solid fa-location-dot w-4 mr-2"></i>Trụ sở: Số 97 ngõ 143 đường Xuân Phương, Phường Xuân Phương, Thành phố Hà Nội, Việt Nam</p>
                    <p className="text-sm leading-relaxed mt-2"><i className="fa-solid fa-location-dot w-4 mr-2"></i>Văn phòng: Housinco Premium, 288 Nguyễn Xiển, Thanh Liệt, Hà Nội</p>
                    <p className="text-sm mt-2"><i className="fa-solid fa-phone w-4 mr-2"></i>Hotline:<br /> 0987 822 311 - Ms Phương <br /> 0384 358 988 - Ms Mai<br /> 0383 522 018 - Ms Thùy</p>
                    <p className="text-sm mt-2"><i className="fa-solid fa-envelope w-4 mr-2"></i>Email: xnk899@gmail.com</p>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white mb-4">VỀ CHÚNG TÔI</h4>
                    <ul className="space-y-2">
                        <li><Link href="/gioi-thieu" className="hover:text-green-primary transition-colors">Giới thiệu</Link></li>
                        {/* Chúng ta sẽ tạo các trang này sau */}
                        <li><Link href="/gioi-thieu/ho-so-nang-luc" className="hover:text-green-primary transition-colors">Hồ sơ năng lực</Link></li>
                        <li><Link href="/gioi-thieu/co-so-vat-chat" className="hover:text-green-primary transition-colors">Cơ sở vật chất</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white mb-4">CHÍNH SÁCH</h4>
                    <ul className="space-y-2">
                        <li><Link href="/gioi-thieu/chinh-sach-chat-luong" className="hover:text-green-primary transition-colors">Chính sách chất lượng</Link></li>
                        <li><Link href="/gioi-thieu/chinh-sach-bao-mat" className="hover:text-green-primary transition-colors">Chính sách bảo mật</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white mb-4">DANH MỤC SẢN PHẨM CHÍNH</h4>
                    <ul className="space-y-2">
                        {/* Các link này sẽ trỏ đến trang sản phẩm với filter tương ứng */}
                        <li><Link href="/san-pham?category=rem" className="hover:text-green-primary transition-colors">Rèm/Màn cuốn ngăn cháy</Link></li>
                        <li><Link href="/san-pham?category=kinh-chong-chay" className="hover:text-green-primary transition-colors">Kính chống cháy</Link></li>
                        <li><Link href="/san-pham?category=cua-thep" className="hover:text-green-primary transition-colors">Cửa thép chống cháy</Link></li>
                        <li><Link href="/san-pham?category=panel" className="hover:text-green-primary transition-colors">Tấm Panel chống cháy</Link></li>
                        <li><Link href="/san-pham?category=mgo" className="hover:text-green-primary transition-colors">Tấm MGO chống cháy</Link></li>

                    </ul>
                </div>
            </div>
        </div>
        <div className="relative bg-gray-800 text-white">
            <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
                <p>© 2025 Bản quyền thuộc về Công ty CP XNK & XD 899</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;