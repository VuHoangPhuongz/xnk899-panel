import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chính sách chất lượng - 899 IMEX',
  description: 'Cam kết về chính sách chất lượng sản phẩm và dịch vụ PCCC của Công ty 899 IMEX.',
};

export default function ChinhSachChatLuongPage() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 pb-3 border-b mt-0">Chính Sách Chất Lượng</h1>
      <ul className="list-disc list-inside text-gray-600 space-y-4 leading-relaxed">
        <li>Luôn cung cấp những sản phẩm dịch vụ tốt nhất, đảm bảo thi công đúng tiến độ, chất lượng, hiệu quả, an toàn như đã thỏa thuận với khách hàng.</li>
        <li>Không ngừng cải tiến về mọi mặt để đạt được sự hoàn hảo về sản phẩm và dịch vụ cung cấp, về mối quan hệ với khách hàng và khả năng cạnh tranh của Công ty trên thị trường.</li>
        <li>Tăng cường đầu tư trang thiết bị kỹ thuật và công nghệ thi công hiện đại; nghiên cứu và ứng dụng các phương thức quản lý hiệu quả, chuyên nghiệp, tiên tiến nhất nhằm đáp ứng tối đa yêu cầu của Khách hàng, Đối tác.</li>
        <li>Liên tục đào tạo, bồi dưỡng chuyên môn nhằm phát triển nguồn nhân lực; đáp ứng được nhu cầu đổi mới của thị trường, sự phát triển của khoa học công nghệ hiện đại.</li>
      </ul>
    </div>
  );
}