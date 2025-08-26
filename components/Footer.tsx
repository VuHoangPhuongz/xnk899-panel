// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getSiteSettings } from '@/lib/actions'; // Import action để lấy dữ liệu

export default async function Footer() {
  // Lấy dữ liệu cài đặt từ server
  const settings = await getSiteSettings(); 
  
  // Xử lý chuỗi số điện thoại để xuống dòng đúng cách
  const formattedPhoneNumbers = settings.phoneNumbers.replace(/ - /g, '<br />');

  return (
    <footer className="relative bg-blue-primary text-white">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* === Cột 1: Thông tin công ty (Dữ liệu động) === */}
                <div>
                    <div className="bg-white p-1 rounded inline-block mb-4">
                      <Image 
                        src="/anh/logo-68a481b451012.webp" 
                        alt="XNK 899 Logo Footer" 
                        width={120} 
                        height={48}
                        className="h-12 w-auto"
                      />
                    </div>
                    <p className="font-bold text-white mb-2 uppercase">CÔNG TY CP XUẤT NHẬP KHẨU VÀ XÂY DỰNG 899</p>
                    <p className="text-sm leading-relaxed "><i className="fa-solid fa-location-dot w-4 mr-2"></i>Trụ sở: {settings.addressHQ}</p>
                    <p className="text-sm leading-relaxed mt-2"><i className="fa-solid fa-location-dot w-4 mr-2"></i>Văn phòng: {settings.addressOffice}</p>
                    <p 
                      className="text-sm mt-2"
                      dangerouslySetInnerHTML={{ __html: `<i class="fa-solid fa-phone w-4 mr-2"></i>Hotline:<br />${formattedPhoneNumbers}` }}
                    />
                    <p className="text-sm mt-2"><i className="fa-solid fa-envelope w-4 mr-2"></i>Email: {settings.email}</p>
                </div>

                {/* === Cột 2: Về chúng tôi (Giữ nguyên) === */}
                <div>
                    <h4 className="text-lg font-bold text-white mb-4">VỀ CHÚNG TÔI</h4>
                    <ul className="space-y-2">
                        <li><Link href="/gioi-thieu" className="hover:text-green-primary transition-colors">Giới thiệu</Link></li>
                        <li><Link href="/gioi-thieu/ho-so-nang-luc" className="hover:text-green-primary transition-colors">Hồ sơ năng lực</Link></li>
                        <li><Link href="/gioi-thieu/co-so-vat-chat" className="hover:text-green-primary transition-colors">Cơ sở vật chất</Link></li>
                    </ul>
                </div>

                {/* === Cột 3: Chính sách (Giữ nguyên) === */}
                <div>
                    <h4 className="text-lg font-bold text-white mb-4">CHÍNH SÁCH</h4>
                    <ul className="space-y-2">
                        <li><Link href="/gioi-thieu/chinh-sach-chat-luong" className="hover:text-green-primary transition-colors">Chính sách chất lượng</Link></li>
                        <li><Link href="/gioi-thieu/chinh-sach-bao-mat" className="hover:text-green-primary transition-colors">Chính sách bảo mật</Link></li>
                    </ul>
                </div>

                {/* === Cột 4: Danh mục sản phẩm (Giữ nguyên) === */}
                <div>
                    <h4 className="text-lg font-bold text-white mb-4">DANH MỤC SẢN PHẨM CHÍNH</h4>
                    <ul className="space-y-2">
                        <li><Link href="/san-pham?category=rem" className="hover:text-green-primary transition-colors">Rèm/Màn cuốn ngăn cháy</Link></li>
                        <li><Link href="/san-pham?category=kinh-chong-chay" className="hover:text-green-primary transition-colors">Kính chống cháy</Link></li>
                        <li><Link href="/san-pham?category=cua-thep" className="hover:text-green-primary transition-colors">Cửa thép chống cháy</Link></li>
                        <li><Link href="/san-pham?category=panel" className="hover:text-green-primary transition-colors">Tấm Panel chống cháy</Link></li>
                        <li><Link href="/san-pham?category=mgo" className="hover:text-green-primary transition-colors">Tấm MGO chống cháy</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* === Phần Copyright (Dữ liệu động) === */}
        <div className="bg-gray-800">
            <div className="container mx-auto px-4 text-center text-gray-400 text-sm py-4">
                <p>© {settings.copyrightYear} Bản quyền thuộc về Công ty CP XNK & XD 899</p>
            </div>
        </div>
    </footer>
  );
};