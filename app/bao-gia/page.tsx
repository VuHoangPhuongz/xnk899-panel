import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Báo giá Màn ngăn cháy - 899 IMEX',
  description: 'Bảng báo giá tham khảo các loại màn ngăn cháy EI30, EI60, EI90 và phụ kiện PCCC mới nhất.',
};

export default function BaoGiaPage() {
  return (
    <>
      <section className="relative bg-gray-800 text-white py-20">
        <Image src="/anh/marriott-da-nang-68a481b7734b2.webp" alt="Background" layout="fill" objectFit="cover" className="opacity-30 z-0"/>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold uppercase">Báo Giá</h1>
            <div className="mt-4 text-sm">
                <Link href="/" className="hover:text-green-primary">Trang chủ</Link><span className="mx-2">/</span><span>Báo giá</span>
            </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-3 border-b text-center section-title">BÁO GIÁ MÀN NGĂN CHÁY MỚI NHẤT</h2>
            
            <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-4">Bảng Báo Giá Tham Khảo Màn Ngăn Cháy</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="p-3 font-bold uppercase">Nội dung chi tiết</th>
                    <th className="p-3 font-bold uppercase">Giới hạn chịu lửa</th>
                    <th className="p-3 font-bold uppercase">Đơn vị</th>
                    <th className="p-3 font-bold uppercase text-right">Đơn giá (VNĐ)</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-gray-50">
                    <td rowSpan={3} className="p-3 align-top">
                      <p className="font-bold">BỘ MÀN CUỐN NGĂN CHÁY (TRỌN BỘ)</p>
                      <ul className="list-disc list-inside text-sm mt-2">
                        <li>Màn cuốn ngăn khói, ngăn cháy tự động</li>
                        <li>Cấu tạo gồm vải silica chống cháy, bông gốm...</li>
                        <li>Hộp kỹ thuật, lô cuốn, ray dẫn hướng</li>
                        <li>Nút ấn điều khiển, động cơ, tủ điều khiển</li>
                      </ul>
                    </td>
                    <td className="p-3 text-red-600 font-bold">EI 30 phút</td>
                    <td className="p-3">M²</td>
                    <td className="p-3 text-right font-semibold">4,730,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 text-red-600 font-bold">EI 60 phút</td>
                    <td className="p-3">M²</td>
                    <td className="p-3 text-right font-semibold">5,060,000</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 text-red-600 font-bold">EI 90 phút</td>
                    <td className="p-3">M²</td>
                    <td className="p-3 text-right font-semibold">6,650,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600 italic mt-2"><strong>Lưu ý:</strong> Báo giá trên chưa bao gồm VAT, chi phí vận chuyển và nhân công lắp đặt.</p>
          </div>
        </div>
      </section>
    </>
  );
}