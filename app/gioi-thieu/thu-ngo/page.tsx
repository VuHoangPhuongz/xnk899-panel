import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thư ngỏ - 899 IMEX',
};

export default function ThuNgoPage() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 pb-3 border-b mt-0">Thư Ngỏ</h1>
      <p className="text-gray-600 leading-relaxed mb-4">Kính gửi: Quý khách hàng!</p>
      <p className="text-gray-600 leading-relaxed mb-4">Công ty cổ phần xuất nhập khẩu và xây dựng 899 xin gửi tới Quý khách hàng lời chào trân trọng nhất!</p>
      <p className="text-gray-600 leading-relaxed mb-4">Với kinh nghiệm chuyên sâu về các sản phẩm PCCC, Công ty xuất nhập khẩu 899 phủ sóng toàn quốc các mặt hàng: Rèm/ Màn ngăn cháy, kính ngăn cháy hệ E, EI, khung thép ngăn cháy, ống nhựa C-PVC ngăn cháy, tấm panel ngăn cháy và các sản phẩm ngăn cháy khác.</p>
      <p className="text-gray-600 leading-relaxed mb-4"><strong>“ĐỘT PHÁ CÔNG NGHỆ - KIẾN TẠO TƯƠNG LAI":</strong> chính là Phương châm làm việc của Công ty 899. Chúng tôi luôn là đơn vị tiên phong trong lĩnh vực các vật liệu ngăn cháy với công nghệ mới nhất, hiện đại nhất.</p>
      <p className="text-gray-600 leading-relaxed">Xin trân trọng cảm ơn!</p>
    </div>
  )
}