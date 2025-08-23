import type { Metadata } from 'next';

// Metadata này sẽ dành cho trang /gioi-thieu chính
export const metadata: Metadata = {
  title: 'Giới thiệu về 899 IMEX',
  description: 'Giới thiệu về Công ty Cổ phần Xuất nhập khẩu và Xây dựng 899, đơn vị tiên phong trong lĩnh vực vật liệu PCCC công nghệ cao.',
};

// Nội dung của trang này chính là nội dung của trang "Thư ngỏ"
export default function GioiThieuPage() {
  return (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 pb-3 border-b mt-0">Thư Ngỏ</h1>
                    <p className='mb-4'><strong>Kính gửi: Quý khách hàng!</strong></p>
                    <p className='mb-4'><strong>Công ty cổ phần xuất nhập khẩu và xây dựng 899</strong> xin gửi tới Quý khách hàng lời chào trân trọng nhất!</p>
                    <p className='mb-4'>Hiện nay, tình trạng các tòa nhà văn phòng, nhà ở, hay khu vui chơi, giải trí hay xảy ra tai nạn về hỏa hoạn. Vì vậy việc xây dựng các hệ thống, thiết bị, vật tư đảm bảo phòng cháy chữa cháy là việc làm tất yếu.</p>
                    <p className='mb-4'>Với kinh nghiệm chuyên sâu về các sản phẩm PCCC, Công ty xuất nhập khẩu 899 phủ sóng toàn quốc các mặt hàng: Rèm/ Màn ngăn cháy, kính ngăn cháy hệ E, EI, khung thép ngăn cháy, ống nhựa C-PVC ngăn cháy, tấm panel ngăn cháy và các sản phẩm ngăn cháy khác.</p>
                    <p className='mb-4'>Tất cả các sản phẩm mà Công ty 899 cung cấp đều được nhập khẩu chính ngạch, có nguồn gốc, xuất xứ rõ ràng, chất lượng đảm bảo theo tiêu chuẩn phòng cháy chữa cháy. Ngoài ra, không chỉ đảm bảo tính an toàn cho công trình, các sản phẩm chúng tôi mang đến còn có tính thẩm mỹ cao, giúp cho không gian ngôi nhà, văn phòng,….của quý vị trở nên hiện đại, sang trọng.</p>
                    <p className='mb-4'><em>“ĐỘT PHÁ CÔNG NGHỆ - KIẾN TẠO TƯƠNG LAI”:</em> chính là Phương châm làm việc của Công ty 899. Chúng tôi luôn là đơn vị tiên phong trong lĩnh vực các vật liệu ngăn cháy với công nghệ mới nhất, hiện đại nhất.</p>
                    <p className='mb-4'>Chúng tôi rất mong được tiếp tục đồng hành cùng Quý khách hàng trong những chặng đường xa hơn và lớn mạnh hơn.</p>
                    <p className='mb-4'>Xin trân trọng cảm ơn!</p>

                    
    </div>
  )
}