import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hồ sơ năng lực - 899 IMEX',
  description: 'Thông tin hồ sơ năng lực của Công ty Cổ phần Xuất nhập khẩu và Xây dựng 899.',
};

export default function HoSoNangLucPage() {
  return (
    <div className="prose max-w-none prose-p:my-3">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 pb-3 border-b mt-0">Hồ Sơ Năng Lực</h1>
      <div className="space-y-4 text-gray-700">
        <p><strong>Tên công ty:</strong> CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU VÀ XÂY DỰNG 899</p>
        <p><strong>Mã số thuế:</strong> 0109676893</p>
        <p><strong>Trụ sở:</strong> Số 97 ngõ 143 đường Xuân Phương, Phường Xuân Phương, Thành phố Hà Nội, Việt Nam</p>
        <p><strong>VPGD:</strong> Housinco Premium - 288 Nguyễn Xiển - Thanh Liệt - Hà Nội.</p>
        <p><strong>Điện thoại:</strong> 0987 822 311 - 0987811 158 - 0989 253 992</p>
        <p><strong>Email:</strong> xnk899@gmail.com</p>
        <p><strong>Website:</strong> https://xnk899.com/</p>
        <p><strong>Đại diện:</strong> Ông  Hoàng Quốc Chiến - Chức vụ: Tổng Giám Đốc</p>
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Lĩnh vực hoạt động</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li><strong>Sản phẩm cung cấp:</strong> Rèm ngăn cháy, Kính ngăn cháy cách nhiệt hệ E, EI, Tấm panel ngăn cháy, Ống nhựa C-PVC ngăn cháy, và các sản phẩm ngăn cháy khác.</li>
        <li><strong>Dịch vụ cung cấp:</strong> Thi công, lắp đặt các hạng mục Phòng cháy chữa cháy.</li>
      </ul>
      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Triết lý kinh doanh</h3>
      <p className="text-gray-600 leading-relaxed pl-4 border-l-4 border-orange-primary">Chữ “TÍN” chính là triết lý kinh doanh của Công ty. Sự uy tín của khách hàng là thước đo để đánh giá năng lực phục vụ, khả năng cung cấp sản phẩm của chúng tôi. Không chỉ là bán sản phẩm, mà chúng tôi còn muốn mang đến những giá trị về tinh thần.</p>
      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Chiến lược phát triển</h3>
      <p className="text-gray-600 leading-relaxed pl-4 border-l-4 border-orange-primary">Tập trung trí tuệ và sức lực, nắm bắt thời cơ, khai thác tối đa nguồn vốn, mạnh dạn đầu tư thiết bị, con người, ứng dụng công nghệ tiên tiến vào sản xuất kinh doanh; xây dựng Công ty trở thành một doanh nghiệp phát triển mạnh toàn diện trong lĩnh vực các vật liệu xây dựng ngăn cháy.</p>
    </div>
  );
}