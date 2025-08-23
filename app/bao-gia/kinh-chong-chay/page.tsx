import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Báo giá Kính chống cháy - 899 IMEX',
  description: 'Thông tin sản phẩm chi tiết và so sánh các loại kính chống cháy EI60, EI120 được cung cấp bởi 899 IMEX.',
};

export default function BaoGiaKinhPage() {
    return (
        <>
            <h2 className="text-3xl font-bold text-center mt-0">BÁO GIÁ KÍNH CHỐNG CHÁY</h2>
            
            <h3 className="text-2xl font-bold mt-8">THÔNG TIN SẢN PHẨM – KÍNH CHỐNG CHÁY</h3>
            <div className="overflow-x-auto border rounded-lg my-6 not-prose">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100 text-gray-800">
                        <tr>
                            <th className="p-4 font-bold text-left w-[20%]">Hạng mục</th>
                            <th className="p-4 font-bold text-left w-[35%]">Thông tin</th>
                            <th className="p-4 font-bold text-left w-[45%]">Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        <tr className="hover:bg-gray-50"><td className="p-3 font-semibold align-top">Tên sản phẩm</td><td className="p-3">Kính chống cháy (nhiều lớp)</td><td className="p-3">Dùng cho vách, ô lấy sáng, cửa kính chống cháy.</td></tr>
                        <tr className="hover:bg-gray-50"><td className="p-3 font-semibold align-top">Phân loại chức năng</td><td className="p-3">E / EI (tùy yêu cầu dự án)</td><td className="p-3">E: giữ kín lửa/khói. EI: thêm cách nhiệt.</td></tr>
                        <tr className="hover:bg-gray-50"><td className="p-3 font-semibold align-top">Cấu tạo kính</td><td className="p-3">Kính nhiều lớp kẹp lớp chống cháy trương nở (intumescent)</td><td className="p-3">Trong suốt, không lưới thép.</td></tr>
                        <tr className="hover:bg-gray-50"><td className="p-3 font-semibold align-top">Khung tương thích</td><td className="p-3">Khung thép chịu nhiệt sơn tĩnh điện hoặc nhôm hệ chống cháy</td><td className="p-3">Chọn theo hạng mục vách/cửa.</td></tr>
                        <tr className="hover:bg-gray-50"><td className="p-3 font-semibold align-top">Phụ kiện đồng bộ</td><td className="p-3">Gioăng chịu nhiệt, keo chống cháy, nẹp giữ kính; bản lề/khóa chuyên dụng (nếu làm cửa)</td><td className="p-3">Đảm bảo kín khít, hạn chế khói.</td></tr>
                        <tr className="hover:bg-gray-50"><td className="p-3 font-semibold align-top">Mức chịu lửa</td><td className="p-3">30 / 60 / 90 / 120 phút</td><td className="p-3">Xác định theo yêu cầu thiết kế.</td></tr>
                        <tr className="hover:bg-gray-50"><td className="p-3 font-semibold align-top">Kích thước gia công</td><td className="p-3">Sản xuất theo đặt hàng</td><td className="p-3">Khảo sát và đo đạc hiện trường.</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 className="text-2xl font-bold mt-8">SO SÁNH KÍNH CHỐNG CHÁY EI60 VÀ EI120</h3>
            <p>Kính chống cháy EI60 và EI120 là hai loại vật liệu an toàn được sử dụng phổ biến trong các công trình yêu cầu nghiêm ngặt về phòng cháy chữa cháy (PCCC). Dưới đây là bảng so sánh chi tiết để giúp khách hàng lựa chọn loại kính phù hợp với nhu cầu sử dụng.</p>
            <div className="overflow-x-auto border rounded-lg my-6 not-prose">
                <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 font-bold">Tiêu chí</th>
                            <th className="p-3 font-bold">Kính chống cháy EI60</th>
                            <th className="p-3 font-bold">Kính chống cháy EI120</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        <tr><td className="p-3 font-semibold align-top">Khả năng chịu lửa & cách nhiệt</td><td className="p-3">Chịu lửa và cách nhiệt tối thiểu 60 phút.</td><td className="p-3">Chịu lửa và cách nhiệt tối thiểu 120 phút.</td></tr>
                        <tr><td className="p-3 font-semibold align-top">Cấu tạo</td><td className="p-3">Gồm nhiều lớp kính kết hợp với gel chống cháy, độ dày vừa phải, đảm bảo an toàn cho các công trình dân dụng.</td><td className="p-3">Cấu tạo nhiều lớp kính và gel chống cháy dày hơn, tăng khả năng cách nhiệt và chịu lửa lâu dài.</td></tr>
                        <tr><td className="p-3 font-semibold align-top">Ứng dụng</td><td className="p-3">Thích hợp cho các công trình dân dụng, văn phòng, tòa nhà cao tầng, nơi cần mức độ bảo vệ trung bình.</td><td className="p-3">Phù hợp với công trình đặc thù như bệnh viện, trung tâm thương mại lớn, nhà máy, kho xưởng có yêu cầu PCCC nghiêm ngặt.</td></tr>
                        <tr><td className="p-3 font-semibold align-top">Giá thành</td><td className="p-3">Mức giá trung bình, phù hợp với đa số dự án có ngân sách vừa phải.</td><td className="p-3">Giá thành cao hơn do cấu tạo phức tạp và hiệu quả bảo vệ lâu dài.</td></tr>
                        <tr><td className="p-3 font-semibold align-top">Điểm nổi bật</td><td className="p-3">Giải pháp cân bằng giữa chi phí và hiệu quả an toàn PCCC.</td><td className="p-3">Mang lại khả năng bảo vệ vượt trội, đáp ứng yêu cầu PCCC ở cấp độ cao nhất.</td></tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}