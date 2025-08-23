import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chính sách bảo mật - 899 IMEX',
};

export default function ChinhSachBaoMatPage() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 pb-3 border-b mt-0">Chính Sách Bảo Mật</h1>
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <div>
          <h4 className="text-lg font-bold text-gray-700 mb-2">1. Mục đích thu thập thông tin</h4>
          <p>Chúng tôi thu thập thông tin cá nhân của khách hàng (họ tên, số điện thoại, email, địa chỉ) nhằm mục đích: tư vấn, báo giá, xử lý đơn đặt hàng, giao hàng và thực hiện các chính sách sau bán hàng.</p>
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-700 mb-2">2. Phạm vi sử dụng thông tin</h4>
          <p>Thông tin cá nhân thu thập được sẽ chỉ được sử dụng trong nội bộ Công ty CP XNK & XD 899. Chúng tôi cam kết không bán, chia sẻ hay trao đổi thông tin cá nhân của khách hàng cho một bên thứ ba nào khác.</p>
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-700 mb-2">3. Thời gian lưu trữ thông tin</h4>
          <p>Dữ liệu cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ từ khách hàng. Còn lại trong mọi trường hợp thông tin cá nhân khách hàng sẽ được bảo mật trên máy chủ của chúng tôi.</p>
        </div>
      </div>
    </div>
  )
}