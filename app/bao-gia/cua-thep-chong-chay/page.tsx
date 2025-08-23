import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Báo giá Cửa thép chống cháy - 899 IMEX',
  description: 'Thông tin sản phẩm chi tiết và so sánh các loại cửa thép chống cháy EI60, EI90, EI120.',
};

export default function BaoGiaCuaThepPage() {
    return (
        <>
            <h2 className="text-3xl font-bold text-center mt-0">BÁO GIÁ CỬA THÉP CHỐNG CHÁY</h2>

            <h3 className="text-2xl font-bold mt-8">THÔNG TIN SẢN PHẨM – CỬA THÉP CHỐNG CHÁY</h3>
            <div className="overflow-x-auto border rounded-lg my-6 not-prose">
                <table className="w-full text-sm">
                     <thead className="bg-gray-100 text-gray-800">
                        <tr>
                            <th className="p-4 font-bold text-left w-[20%]">Hạng mục</th>
                            <th className="p-4 font-bold text-left w-[35%]">Thông số kỹ thuật</th>
                            <th className="p-4 font-bold text-left w-[45%]">Mô tả chi tiết</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        <tr className="hover:bg-gray-50"><td className="p-3 font-semibold align-top">Tên sản phẩm</td><td className="p-3">Cửa thép chống cháy</td><td className="p-3">Được thiết kế chuyên dụng để ngăn cháy, hạn chế khói lan, đảm bảo an toàn PCCC.</td></tr>
                        <tr className="hover:bg-gray-50"><td className="p-3 font-semibold align-top">Vật liệu cánh</td><td className="p-3">Thép tấm dày 0.8 – 1.5mm, lõi chống cháy</td><td className="p-3">Thép sơn tĩnh điện 2 lớp, lõi bông thủy tinh/ gốm/ honeycomb chống cháy.</td></tr>
                        <tr className="hover:bg-gray-50"><td className="p-3 font-semibold align-top">Khung cửa</td><td className="p-3">Thép dày 1.2 – 2.0mm, sơn tĩnh điện</td><td className="p-3">Kết cấu vững chắc, chống cong vênh, biến dạng khi gặp nhiệt độ cao.</td></tr>
                        <tr className="hover:bg-gray-50"><td className="p-3 font-semibold align-top">Khả năng chịu lửa</td><td className="p-3">60 – 120 phút (EI60, EI90, EI120)</td><td className="p-3">Đáp ứng tiêu chuẩn PCCC Việt Nam, ngăn cháy trong thời gian quy định.</td></tr>
                        <tr className="hover:bg-gray-50"><td className="p-3 font-semibold align-top">Phụ kiện</td><td className="p-3">Bản lề thép, khóa chống cháy, tay co thủy lực</td><td className="p-3">Hỗ trợ đóng mở nhẹ nhàng, tăng độ kín khít, đảm bảo vận hành an toàn.</td></tr>
                        <tr className="hover:bg-gray-50"><td className="p-3 font-semibold align-top">Gioăng</td><td className="p-3">Gioăng cao su/ gioăng chống cháy</td><td className="p-3">Ngăn khói, tăng khả năng cách âm, giữ kín cửa trong tình huống cháy.</td></tr>
                        <tr className="hover:bg-gray-50"><td className="p-3 font-semibold align-top">Chứng chỉ</td><td className="p-3">Kiểm định PCCC – Cục Cảnh sát PCCC Việt Nam</td><td className="p-3">Được chứng nhận chất lượng, đảm bảo yêu cầu an toàn phòng cháy và pháp lý.</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 className="text-2xl font-bold mt-8">SO SÁNH CỬA THÉP CHỐNG CHÁY EI60 – EI90 – EI120</h3>
            <p>Cửa thép chống cháy là một trong những giải pháp quan trọng nhằm đảm bảo an toàn cho công trình trước nguy cơ hỏa hoạn. Tùy theo yêu cầu thiết kế và quy định PCCC, cửa được phân loại theo khả năng chịu lửa và cách nhiệt, phổ biến nhất là EI60, EI90 và EI120. Dưới đây là bảng so sánh chi tiết để giúp lựa chọn loại cửa phù hợp với từng nhu cầu.</p>
            <div className="overflow-x-auto border rounded-lg my-6 not-prose">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 font-bold">Tiêu chí</th>
                            <th className="p-3 font-bold">EI60</th>
                            <th className="p-3 font-bold">EI90</th>
                            <th className="p-3 font-bold">EI120</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        <tr><td className="p-3 font-semibold align-top">Khả năng chịu lửa & cách nhiệt</td><td className="p-3">Chịu lửa, cách nhiệt tối thiểu 60 phút</td><td className="p-3">Chịu lửa, cách nhiệt tối thiểu 90 phút</td><td className="p-3">Chịu lửa, cách nhiệt tối thiểu 120 phút</td></tr>
                        <tr><td className="p-3 font-semibold align-top">Cấu tạo</td><td className="p-3">Cánh thép dày 0.8–1.0mm, lõi chống cháy bằng giấy tổ ong hoặc bông thủy tinh.</td><td className="p-3">Cánh thép dày 1.0–1.2mm, lõi bằng bông gốm chống cháy mật độ cao.</td><td className="p-3">Cánh thép dày ≥1.2mm, lõi vật liệu gốm – bông khoáng cao cấp, gioăng chống cháy chuyên dụng.</td></tr>
                        <tr><td className="p-3 font-semibold align-top">Ứng dụng</td><td className="p-3">Dân dụng, văn phòng nhỏ, khu vực yêu cầu chống cháy cơ bản.</td><td className="p-3">Tòa nhà cao tầng, trung tâm thương mại, kho xưởng vừa.</td><td className="p-3">Nhà máy lớn, kho hóa chất, tầng hầm, khu vực trọng điểm nguy cơ cháy nổ cao.</td></tr>
                        <tr><td className="p-3 font-semibold align-top">Giá thành</td><td className="p-3">Trung bình, tiết kiệm chi phí.</td><td className="p-3">Cao hơn EI60, cân bằng giữa an toàn và chi phí.</td><td className="p-3">Cao nhất, đầu tư cho an toàn tối đa.</td></tr>
                        <tr><td className="p-3 font-semibold align-top">Điểm nổi bật</td><td className="p-3">Giải pháp kinh tế cho nhu cầu chống cháy cơ bản.</td><td className="p-3">Hiệu quả bảo vệ và an toàn vượt trội, đáp ứng yêu cầu PCCC khắt khe.</td><td className="p-3">Đạt chuẩn cao nhất về PCCC, đảm bảo an toàn tuyệt đối cho khu vực quan trọng.</td></tr>
                    </tbody>
                </table>
                
            </div>
            <p>Báo giá cửa thép chống cháy phụ thuộc bởi nhiều yếu tố như các số liệu, kích thước, giới hạn chịu lửa, chi phí lắp đặt. Vì vậy, để nhận được báo giá chính xác và tốt nhất, Quý khách hàng vui lòng liên hệ trực tiếp với chúng tôi.</p>
                            <p className="font-semibold">
                                Hotline: 0987822311 / 0987811158 / 0384 358 988 / 0383 522 018
                            </p>
        </>
    )
}