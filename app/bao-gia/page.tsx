import type { Metadata } from 'next';
import Image from 'next/image';
import PageBanner from '@/components/PageBanner';
import NewsSidebar from '@/components/NewsSidebar';

export const metadata: Metadata = {
  title: 'Báo giá Màn ngăn cháy - 899 IMEX',
  description: 'Thông tin về báo giá, tiêu chuẩn và các câu hỏi thường gặp về màn ngăn cháy tại 899 IM-EX.',
};

export default function BaoGiaPage() {
  return (
    <>
      <PageBanner
        title="Báo Giá"
        breadcrumbs={[{ label: 'Trang chủ', href: '/' }]}
        backgroundImageUrl="/anh/marriott-da-nang-68a481b7734b2.webp"
      />
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-12 lg:py-16">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">

            {/* CỘT TRÁI: NỘI DUNG CHÍNH */}
            <main className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 prose max-w-none">
                <h2 className="text-3xl font-bold text-center">BÁO GIÁ MÀN NGĂN CHÁY/RÈM NGĂN CHÁY MỚI NHẤT TẠI 899 IM-EX</h2>
                
                <h3 className="text-2xl font-bold mt-8">THÔNG TIN SẢN PHẨM</h3>
                {/* Phần này trống theo yêu cầu, có thể bạn sẽ thêm nội dung sau */}
                  <div className="overflow-x-auto border rounded-lg my-8 not-prose">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 text-gray-800">
          <tr>
            <th className="p-4 font-bold text-left w-[20%]">Hạng mục</th>
            <th className="p-4 font-bold text-left w-[30%]">Thông số kỹ thuật</th>
            <th className="p-4 font-bold text-left w-[50%]">Mô tả chi tiết</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {/* Row 1 */}
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-semibold align-top">Tên sản phẩm</td>
            <td className="p-4 align-top">Màn ngăn cháy tự động</td>
            <td className="p-4 align-top">
              Giúp ngăn chặn sự lan truyền của khói và lửa, đảm bảo an toàn cho khu
              vực lân cận.
            </td>
          </tr>
          {/* Row 2 */}
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-semibold align-top">Vải màn</td>
            <td className="p-4 align-top">Sợi thủy tinh chịu nhiệt</td>
            <td className="p-4 align-top">
              Khả năng chịu nhiệt lên tới 120 phút (EI120) theo tiêu chuẩn quốc
              tế.
            </td>
          </tr>
          {/* Row 3 */}
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-semibold align-top">Hộp kỹ thuật</td>
            <td className="p-4 align-top">Thép mạ kẽm sơn tĩnh điện</td>
            <td className="p-4 align-top">
              Hộp cuộn màn được lắp đặt âm trần hoặc lộ thiên, đảm bảo thẩm mỹ và
              an toàn.
            </td>
          </tr>
          {/* Row 4 */}
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-semibold align-top">Motor</td>
            <td className="p-4 align-top">Ống quay chuyên dụng</td>
            <td className="p-4 align-top">
              Motor chạy êm, hiệu suất cao, có thể kết nối với hệ thống báo cháy
              tự động.
            </td>
          </tr>
          {/* Row 5 */}
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-semibold align-top">Kích thước</td>
            <td className="p-4 align-top">Tùy chỉnh theo yêu cầu</td>
            <td className="p-4 align-top">
              Chúng tôi sản xuất theo kích thước thực tế của từng công trình.
            </td>
          </tr>
          {/* Row 6 */}
          <tr className="hover:bg-gray-50">
            <td className="p-4 font-semibold align-top">Chứng chỉ</td>
            <td className="p-4 align-top">Giấy chứng nhận kiểm định PCCC</td>
            <td className="p-4 align-top">
              Sản phẩm đã được kiểm định và cấp phép bởi Cục Cảnh sát PCCC Việt
              Nam.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
                <h3 className="text-2xl font-bold mt-8"><strong>SO SÁNH TRỰC QUAN SẢN PHẨM</strong></h3>
                <p>Mỗi sản phẩm đều có ưu điểm và tính chất riêng biệt, phù hợp với nhu cầu đa dạng của mọi khách hàng. Dưới đây là một bảng so sánh nhỏ để bạn có thể tham khảo thêm về sản phẩm của chúng tôi trước khi cân nhắc lựa chọn sản phẩm phù hợp:</p>
                
                {/* HÌNH ẢNH SỐ 1 ĐƯỢC CHÈN TẠI ĐÂY */}
              

                <p>Màn ngăn cháy tại 899 IM-EX được sản xuất từ vải sợi thủy tinh phủ lớp chống cháy đặc biệt, chịu nhiệt lên đến 1000°C, giúp ngăn chặn lửa và khói lan rộng. Sản phẩm đạt tiêu chuẩn PCCC, thích hợp cho các tòa nhà, nhà xưởng, trung tâm thương mại và kho bãi.</p>
                <p>Việc lựa chọn loại màn ngăn cháy nào phụ thuộc vào tính chất của công trình, yêu cầu PCCC của cơ quan chức năng và ngân sách đầu tư. Chúng tôi luôn sẵn sàng tư vấn để quý khách lựa chọn được sản phẩm phù hợp và an toàn nhất.</p>

                  <div className="overflow-x-auto border rounded-lg my-8 not-prose">
  <table className="w-full text-sm">
    <thead className="bg-gray-100 text-gray-800">
      <tr>
        <th className="p-4 font-bold text-left w-1/5">Tiêu chí</th>
        <th className="p-4 font-bold text-left w-2/5">Màn ngăn cháy EI30</th>
        <th className="p-4 font-bold text-left w-2/5">Màn ngăn cháy EI90</th>
      </tr>
    </thead>
    <tbody className="divide-y">
      {/* Row 1: Khả năng chịu lửa & cách nhiệt */}
      <tr className="hover:bg-gray-50">
        <td className="p-4 font-semibold align-top">Khả năng chịu lửa & cách nhiệt</td>
        <td className="p-4">Chịu lửa và cách nhiệt trong tối thiểu <strong>30 phút</strong>.</td>
        <td className="p-4">Chịu lửa và cách nhiệt trong tối thiểu <strong>90 phút</strong>.</td>
      </tr>
      {/* Row 2: Cấu tạo */}
      <tr className="hover:bg-gray-50">
        <td className="p-4 font-semibold align-top">Cấu tạo</td>
        <td className="p-4">Sử dụng vải chống cháy thông thường, có cấu tạo đơn giản.</td>
        <td className="p-4">Sử dụng vải chống cháy cao cấp, độ dày và mật độ vật liệu cách nhiệt lớn hơn.</td>
      </tr>
      {/* Row 3: Ứng dụng */}
      <tr className="hover:bg-gray-50">
        <td className="p-4 font-semibold align-top">Ứng dụng</td>
        <td className="p-4">Phù hợp cho các công trình dân dụng, chung cư, văn phòng có yêu cầu chống cháy cơ bản, nơi thời gian sơ tán ngắn.</td>
        <td className="p-4">Được sử dụng tại các khu vực có nguy cơ cháy cao hơn như nhà xưởng, kho bãi, trung tâm thương mại lớn, nơi yêu cầu thời gian sơ tán dài hơn.</td>
      </tr>
      {/* Row 4: Giá thành */}
      <tr className="hover:bg-gray-50">
        <td className="p-4 font-semibold align-top">Giá thành</td>
        <td className="p-4">Mức giá thấp, phù hợp với ngân sách tiết kiệm.</td>
        <td className="p-4">Mức giá cao hơn, nhưng mang lại hiệu quả bảo vệ và an toàn vượt trội.</td>
      </tr>
      {/* Row 5: Điểm nổi bật */}
      <tr className="hover:bg-gray-50">
        <td className="p-4 font-semibold align-top">Điểm nổi bật</td>
        <td className="p-4">Giải pháp kinh tế, hiệu quả cho các công trình có yêu cầu PCCC ở mức cơ bản.</td>
        <td className="p-4">An toàn vượt trội, đáp ứng yêu cầu PCCC nghiêm ngặt tại các công trình trọng điểm.</td>
      </tr>
    </tbody>
  </table>
</div>

                <div className="bg-blue-50 p-6 rounded-lg my-8 border-l-4 border-blue-primary">
                    <h3 className="mt-0">Phân biệt màn ngăn cháy theo tiêu chuẩn EI</h3>
                    <p>Các màn ngăn cháy được phân loại dựa trên tiêu chuẩn EI - một tiêu chuẩn quốc tế về khả năng chống cháy, được kiểm định nghiêm ngặt.</p>
                    <ul>
                        <li><strong>E (Integrity - Tính toàn vẹn):</strong> Khả năng chịu lửa mà không bị nứt, vỡ, gãy hoặc biến dạng.</li>
                        <li><strong>I (Insulation - Tính cách nhiệt):</strong> Khả năng ngăn chặn sự truyền nhiệt từ đám cháy sang khu vực an toàn.</li>
                    </ul>
                    <p>Thời gian (30, 60, 90 phút) đi kèm với ký hiệu EI chính là thời gian tối thiểu mà sản phẩm có thể duy trì được cả hai tính năng trên khi xảy ra hỏa hoạn.</p>
                </div>

                {/* HÌNH ẢNH SỐ 2 ĐƯỢC CHÈN TẠI ĐÂY */}
                <figure className="my-8">
                    <Image src="/anh/baogia/z6932184683582_82cddcf208a0fbc7e6f757b2415331c7.jpg" alt="Kiểm định tiêu chuẩn PCCC" width={800} height={450} className="w-full rounded-lg shadow-md" />
                </figure>
              </div>
                <h3 className="text-2xl font-bold mt-8"><strong>DỊCH VỤ VÀ CHÍNH SÁCH HẬU MÃI</strong></h3>
                <p>899 IM-EX luôn ưu tiên mang lại trải nghiệm dịch vụ tốt nhất cho khách hàng:</p>
                <ul>
                    <li><strong>Chính sách bảo hành:</strong> Thời gian bảo hành 12 tháng.</li>
                    <li><strong>Dịch vụ hỗ trợ:</strong> Chính sách bảo trì, sửa chữa, và dịch vụ tư vấn kỹ thuật.</li>
                    <li><strong>Cam kết chất lượng:</strong> Đảm bảo sản phẩm chính hãng, đạt tiêu chuẩn an toàn PCCC.</li>
                    <li><strong>Hỗ trợ kỹ thuật 24/7:</strong> Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ khi có sự cố.</li>
                </ul>
                
                <p>Báo giá Màn ngăn cháy phụ thuộc bởi nhiều yếu tố như các số liệu, kích thước, giới hạn chịu lửa, chi phí lắp đặt. Vì vậy, để nhận được báo giá chính xác và tốt nhất, Quý khách hàng vui lòng liên hệ trực tiếp với chúng tôi.</p>
                <p className="font-semibold">
                    Hotline: 0987822311 / 0987811158 / 0384 358 988 / 0383 522 018
                </p>

                <div className="mt-12 border-t pt-8">
                    <h3 className="text-center text-2xl font-bold mt-8"><strong>PHẦN HỎI ĐÁP (FAQ)</strong></h3>
                   <div className="space-y-4 mt-6">
                        <div>
                            <h4><strong>Màn ngăn cháy có thể lắp đặt ở đâu?</strong></h4>
                            <p>Màn ngăn cháy có thể lắp đặt ở các vị trí cần ngăn cháy lan như thang cuốn, hành lang, khu vực sản xuất,...</p>
                        </div>
                        <div>
                            <h4><strong>Thời gian lắp đặt mất bao lâu?</strong></h4>
                            <p>Tùy thuộc vào số lượng kích thước và độ phức tạp, thời gian lắp đặt thường mất từ 3-5 ngày.</p>
                        </div>
                        <div>
                            <h4><strong>Chi phí bảo trì hàng năm là bao nhiêu?</strong></h4>
                            <p>Chi phí bảo trì phụ thuộc vào số lượng và loại màn ngăn cháy. Vui lòng liên hệ để chúng tôi báo giá chi tiết.</p>
                        </div>
                        <div>
                            <h4><strong>Sản phẩm có đầy đủ giấy tờ PCCC không?</strong></h4>
                            <p>Tất cả sản phẩm màn ngăn cháy của chúng tôi đều có đầy đủ chứng nhận kiểm định của Cục Cảnh sát PCCC Việt Nam.</p>
                        </div>
                    </div>
                </div>

                <p className="text-center font-semibold mt-12">Sự an toàn của bạn là ưu tiên hàng đầu của chúng tôi. Hãy để 899 IM-EX đồng hành cùng bạn bằng cách liên hệ ngay hôm nay để nhận báo giá chi tiết và tư vấn miễn phí!</p>
           
            </main>

            {/* CỘT PHẢI: SIDEBAR */}
            <NewsSidebar />

          </div>
        </div>
      </div>
    </>
  );
}