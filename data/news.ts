export type NewsArticle = {
  id: number;
  slug: string; // Dùng cho URL, ví dụ: /tin-tuc/hieu-dung-ve-man-cuon-ngan-chay
  title: string;
  excerpt: string; // Đoạn tóm tắt ngắn
  imageUrl: string; // Ảnh đại diện
  date: string; // Ngày đăng bài
  content: string; // Nội dung HTML đầy đủ
};

export const newsData: NewsArticle[] = [
  {
    id: 1,
    slug: '899-imex-ra-mat-man-cuon-ngan-chay-the-he-moi',
    title: '899 IMEX Ra Mắt Màn Cuốn Ngăn Cháy Tự Động – Bước Tiến Mới Trong Giải Pháp An Toàn',
    excerpt: 'Trong bối cảnh yêu cầu PCCC ngày càng khắt khe, 899 IMEX đã chính thức ra mắt màn cuốn ngăn cháy thế hệ mới, hứa hẹn trở thành giải pháp tối ưu...',
    imageUrl: '/anh/news/anh-thanh-pho.jpg', // Ảnh hồ và thành phố
    date: '2025-08-25',
    content: `
      <p><strong>Hà Nội</strong> – Trong bối cảnh các yêu cầu về phòng cháy chữa cháy ngày càng khắt khe, Công ty Cổ phần Xuất Nhập Khẩu & Xây Dựng 899 đã chính thức ra mắt màn cuốn ngăn cháy thế hệ mới – sản phẩm kết hợp công nghệ hiện đại và tiêu chuẩn an toàn quốc tế, hứa hẹn trở thành giải pháp tối ưu bảo vệ tính mạng và tài sản cho hàng nghìn công trình trên cả nước.</p>
      
      <figure class="my-6">
        <img src="/anh/news/nhan-vien-tu van.jpg" alt="Nhân viên 899 IMEX tư vấn cho cán bộ PCCC tại triển lãm" class="w-full rounded-lg shadow-md" />
      </figure>

      <h3>Bảo vệ toàn diện – An tâm tuyệt đối</h3>
      <p>Được nghiên cứu và sản xuất trên dây chuyền công nghệ tiên tiến, màn cuốn ngăn cháy của 899 IMEX có khả năng chống cháy và ngăn khói lan tới 90 phút, giúp kéo dài thời gian thoát hiểm và hạn chế thiệt hại khi xảy ra sự cố.</p>
      <p>Với thiết kế gọn nhẹ, vận hành tự động hoặc bán tự động, sản phẩm phù hợp cho mọi loại công trình: từ trung tâm thương mại, cao ốc văn phòng, nhà máy sản xuất cho tới kho bãi, nhà xưởng.</p>
      
      <figure class="my-6">
        <img src="/anh/news/man-cuon-san-pham.jpg" alt="Sản phẩm màn cuốn ngăn cháy tự động của 899 IMEX" class="w-full rounded-lg shadow-md" />
      </figure>

      <h3>Kinh nghiệm và uy tín đã được khẳng định</h3>
      <p>Trải qua nhiều năm hoạt động trong lĩnh vực xây dựng và cung ứng giải pháp an toàn, 899 IMEX đã trở thành đối tác tin cậy của hàng trăm dự án lớn nhỏ trên toàn quốc.</p>
      <p>Không chỉ cung cấp sản phẩm chất lượng, công ty còn sở hữu đội ngũ kỹ thuật viên giàu kinh nghiệm, sẵn sàng tư vấn, thiết kế và lắp đặt theo yêu cầu riêng biệt của từng khách hàng.</p>
      
      <figure class="my-6">
        <img src="/anh/news/nha-may-san-xuat.jpg" alt="Nhà máy sản xuất các sản phẩm ngăn cháy của 899 IMEX" class="w-full rounded-lg shadow-md" />
        <figcaption class="text-center text-sm text-gray-500 mt-2">Nhà máy sản xuất các sản phẩm ngăn cháy của 899 IMEX</figcaption>
      </figure>
      
      <h3>Hình ảnh thực tế – Khẳng định chất lượng</h3>
      <p>Màn cuốn ngăn cháy 899 đã được lắp đặt thành công tại nhiều công trình trọng điểm, đáp ứng đầy đủ tiêu chuẩn PCCC Việt Nam và quốc tế. Sự bền bỉ, tính thẩm mỹ và hiệu quả ngăn cháy đã được minh chứng qua thời gian và phản hồi tích cực từ khách hàng.</p>
      
      <h3>Cam kết của 899 IMEX</h3>
      <ul>
        <li>Sản phẩm đạt tiêu chuẩn kiểm định an toàn</li>
        <li>Miễn phí khảo sát, tư vấn và thiết kế</li>
        <li>Dịch vụ bảo hành – bảo trì tận tâm, lâu dài</li>
        <li>Luôn đặt an toàn & sự hài lòng của khách hàng lên hàng đầu</li>
      </ul>
      
      <figure class="my-6">
        <img src="/anh/news/logo-va-chung-nhan.jpg" alt="Logo và các chứng nhận chất lượng của 899 IMEX" class="w-full rounded-lg shadow-md" />
      </figure>

      <h3>📞 Liên hệ:</h3>
      <p>
        <strong>Hotline:</strong> 0987822311 / 0987811158 / 0384 358 988 / 0383 522 018<br>
        <strong>Email:</strong> xnk899@gmail.com<br>
        <strong>Website:</strong> https://xnk899.com
      </p>
    `
  },
   {
    id: 3,
    slug: '5-loi-ich-khi-chon-man-ngan-chay-899',
    title: '5 Lợi ích có được khi chọn màn ngăn cháy 899',
    excerpt: 'Không chỉ dừng lại ở chức năng bảo vệ, sản phẩm màn cuốn ngăn cháy của 899 IMEX còn mang đến sự tiện nghi, tính thẩm mỹ và độ bền vượt trội.',
    imageUrl: '/anh/news/5-loi-ich.jpg', // Ảnh chờ sẵn, bạn hãy đặt ảnh thật vào đây
    date: '2025-08-24',
    content: `
      <p>Trong bối cảnh an toàn cháy nổ ngày càng được đặt lên hàng đầu, việc lựa chọn giải pháp phòng cháy hiệu quả không chỉ bảo vệ tài sản mà còn là bảo vệ tính mạng con người. <strong>Màn cuốn ngăn cháy</strong> của <strong>Công ty CP Xuất Nhập Khẩu 899 (899 IMEX)</strong> chính là lựa chọn đáng tin cậy mà nhiều chủ đầu tư, doanh nghiệp và hộ gia đình đang tin dùng.</p>
      <p>Dưới đây là 5 lợi ích nổi bật mà bạn nhận được khi chọn màn ngăn cháy của chúng tôi:</p>
      
      <h3>1. An Toàn Tối Đa – Bảo Vệ Con Người và Tài Sản</h3>
      <p>Màn cuốn được làm từ vật liệu chống cháy đạt tiêu chuẩn quốc tế, có khả năng chịu lửa lên đến <strong>90 phút</strong>, giúp ngăn lửa và khói lan rộng. Khoảng thời gian quý giá này tạo điều kiện cho mọi người thoát hiểm an toàn và giảm thiểu thiệt hại tài sản.</p>
      
      <h3>2. Thiết Kế Gọn Gàng – Linh Hoạt Mọi Không Gian</h3>
      <p>Khác với các vách ngăn cứng, màn cuốn ngăn cháy có thiết kế nhỏ gọn, chỉ hạ xuống khi cần thiết, đảm bảo <strong>thẩm mỹ và không gian sử dụng</strong>. Dù là nhà xưởng, văn phòng, trung tâm thương mại hay căn hộ cao tầng, sản phẩm vẫn phù hợp.</p>

      <h3>3. Hoạt Động Tự Động – Tiết Kiệm Nhân Lực</h3>
      <p>Hệ thống vận hành thông minh, tự động kích hoạt khi có tín hiệu báo cháy, không phụ thuộc vào thao tác thủ công. Điều này đặc biệt hữu ích trong tình huống khẩn cấp, khi mỗi giây đều quý giá.</p>
      
      <h3>4. Độ Bền Cao – Chi Phí Hợp Lý</h3>
      <p>Sản phẩm được sản xuất từ vật liệu chất lượng cao, chống ăn mòn, chịu nhiệt tốt, <strong>tuổi thọ lên đến hàng chục năm</strong> nếu được bảo trì định kỳ. Đây là khoản đầu tư một lần nhưng mang lại giá trị lâu dài.</p>
      
      <h3>5. Dịch Vụ Trọn Gói – Hỗ Trợ Toàn Quốc</h3>
      <p>Với đội ngũ kỹ thuật viên dày dặn kinh nghiệm, <strong>899 IMEX</strong> cung cấp dịch vụ <strong>tư vấn – thiết kế – lắp đặt – bảo trì</strong> tại tất cả các tỉnh thành trên cả nước, đảm bảo khách hàng luôn yên tâm sử dụng.</p>

      <p>🔥 <strong>Kết luận:</strong> Chọn màn cuốn ngăn cháy của 899 IMEX không chỉ là mua một sản phẩm, mà là <strong>đầu tư vào sự an toàn và bền vững</strong> cho công trình của bạn.</p>
      <p>📞 <strong>Liên hệ ngay hôm nay</strong> để được tư vấn giải pháp phù hợp nhất cho nhu cầu của bạn.</p>
    `
  },
    {
    id: 2,
    slug: 'chu-dong-phong-chay-ly-do-chon-man-cuon-ngan-chay',
    title: 'Chủ động phòng cháy: Lý do các công trình hiện đại chọn màn cuốn ngăn cháy',
    excerpt: 'Trong số các phương án PCCC, màn cuốn ngăn cháy đang nổi lên như một giải pháp an toàn, linh hoạt và thẩm mỹ, được nhiều chủ đầu tư ưu tiên lựa chọn.',
    imageUrl: '/anh/news/chay-nha-xuong.jpg', // Ảnh đại diện
    date: '2025-08-23',
    content: `
      <p>Trong bối cảnh các vụ cháy nổ tại nhà xưởng, trung tâm thương mại và tòa nhà cao tầng gia tăng, nhu cầu tìm kiếm giải pháp ngăn cháy hiệu quả đang trở thành mối quan tâm hàng đầu của các chủ đầu tư và đơn vị quản lý công trình trên khắp cả nước. Trong số các phương án được khuyến nghị, <strong>màn cuốn ngăn cháy</strong> đang nổi lên như một giải pháp an toàn – linh hoạt – thẩm mỹ.</p>
      
      <p>Theo thống kê của Cục Cảnh sát PCCC và CNCH, chỉ trong 6 tháng đầu năm 2025, cả nước đã xảy ra hơn 1.500 vụ cháy, gây thiệt hại hàng trăm tỷ đồng. Nhiều vụ hỏa hoạn cho thấy nguyên nhân thương vong cao là do lửa lan nhanh qua các khu vực thông tầng, cửa ra vào hoặc hành lang không có hệ thống ngăn cách phù hợp.</p>
      
      <p>Màn cuốn ngăn cháy được chế tạo từ vật liệu chịu nhiệt đặc biệt, có khả năng ngăn lửa và khói lan rộng, giúp kéo dài thời gian thoát hiểm và giảm thiểu thiệt hại.So với vách ngăn cố định, màn cuốn có thể thu gọn khi không sử dụng, giữ nguyên không gian thoáng đãng và tính thẩm mỹ cho công trình.</p>

      <figure class="my-6">
        <img src="/anh/news/man-cuon-trong-nha.jpg" alt="Màn cuốn ngăn cháy lắp đặt tại lối đi" class="w-full rounded-lg shadow-md" />
      </figure>

      <p>Ông Lê Đức Toàn, đại diện Công ty Cổ phần Xuất nhập khẩu 899 – đơn vị cung cấp và thi công màn cuốn ngăn cháy trên toàn quốc – cho biết: “Chúng tôi đã triển khai lắp đặt màn cuốn ngăn cháy cho nhiều công trình từ Bắc vào Nam, bao gồm trung tâm thương mại, nhà xưởng và tòa nhà văn phòng. Giải pháp này vừa tiết kiệm chi phí xây dựng, vừa đạt tiêu chuẩn PCCC khắt khe.”</p>
      
      <p>Đặc biệt, màn cuốn ngăn cháy hiện nay có thể tích hợp hệ thống báo cháy tự động: khi phát hiện nhiệt độ hoặc khói bất thường, màn sẽ tự động hạ xuống, tạo lớp chắn an toàn và hạn chế tối đa nguy cơ cháy lan.</p>
      
      <figure class="my-6">
        <img src="/anh/news/man-cuon-trung-tam-thuong-mai.jpg" alt="Màn cuốn ngăn cháy lắp đặt tại trung tâm thương mại" class="w-full rounded-lg shadow-md" />
      </figure>

      <p>Với ưu điểm an toàn, tiện lợi và tính ứng dụng cao, màn cuốn ngăn cháy đang trở thành lựa chọn ưu tiên của nhiều công trình hiện đại trên toàn quốc.Chọn màn cuốn ngăn cháy của 899 IMEX không chỉ là mua một sản phẩm, mà là đầu tư vào sự an toàn và bền vững cho công trình của bạn.</p>
      
      <h3>📞 Liên hệ ngay hôm nay để được tư vấn giải pháp phù hợp nhất:</h3>
      <p>0987822311 / 0987811158 / 0384 358 988 / 0383 522 018 </p>
    `
  },
  {
    id: 4,
    slug: '899-imex-ghi-dau-an-tai-trien-lam-quoc-te-pccc-2025',
    title: 'Công ty 899 ghi dấu ấn tại Triển lãm Quốc tế về PCCC & CNCH 2025',
    excerpt: 'Từ ngày 14 đến 16/8/2025, 899 IMEX đã để lại nhiều dấu ấn với gian hàng trưng bày các giải pháp PCCC hiện đại tại SECC, TP. HCM.',
    imageUrl: '/anh/news/trien-lam-pccc-2025.jpg',
    date: '2025-08-22',
    content: `
      <p>Từ ngày 14 đến 16/8/2025, tại Trung tâm Hội chợ và Triển lãm Sài Gòn (SECC, TP. Hồ Chí Minh), Triển lãm Quốc tế về Kỹ thuật, Phòng cháy chữa cháy, Cứu nạn cứu hộ và An ninh – Secutech Vietnam 2025 đã diễn ra sôi nổi với sự tham gia của hàng trăm doanh nghiệp trong và ngoài nước.</p>
      <p>Trong số đó, <strong>Công ty Cổ phần Xuất nhập khẩu và Xây dựng 899 (899 IMEX)</strong> là một trong những đơn vị để lại nhiều dấu ấn với gian hàng trưng bày các sản phẩm và giải pháp phòng cháy chữa cháy hiện đại.</p>
      <p>Nhiều khách tham quan, nhà thầu và đối tác đã bày tỏ sự quan tâm đến các sản phẩm như màn ngăn cháy, kính ngắn cháy, cửa thép chống cháy,.. vốn được đánh giá cao về chất lượng và tính ứng dụng thực tế.</p>
      <h3>Khẳng định vị thế và trách nhiệm</h3>
      <p>Đại diện công ty cho biết, việc tham gia triển lãm không chỉ nhằm giới thiệu sản phẩm mà còn để lắng nghe phản hồi từ thị trường, kết nối với các đối tác trong và ngoài nước. “Chúng tôi xác định phòng cháy chữa cháy không chỉ là lĩnh vực kinh doanh, mà còn gắn liền với trách nhiệm xã hội và sự an toàn cộng đồng” – lãnh đạo 899 chia sẻ.</p>
      <p>Với những dấu ấn tại triển lãm lần này, Công ty CP Xuất nhập khẩu và Xây dựng 899 tiếp tục khẳng định uy tín và năng lực trong lĩnh vực PCCC, đặt mục tiêu không ngừng đổi mới, mang đến các giải pháp an toàn, bền vững cho cộng đồng.</p>
    `
  },
  {
    id: 12,
    slug: 'cua-kinh-chong-chay-cau-tao-va-quy-trinh-lap-dat',
    title: 'Cửa kính chống cháy: Cấu tạo chuyên dụng và quy trình lắp đạt chuẩn',
    excerpt: 'Trong bối cảnh an toàn PCCC ngày càng được chú trọng, cửa kính chống cháy không chỉ là giải pháp bảo vệ mà còn là yếu tố thẩm mỹ cao.',
    imageUrl: '/anh/news/cua-kinh-chong-chay.jpg',
    date: '2025-08-21',
    content: `
      <p>Trong bối cảnh an toàn PCCC ngày càng được chú trọng, cửa kính chống cháy không chỉ là giải pháp bảo vệ mà còn là yếu tố thẩm mỹ cao, thường được ứng dụng tại các trung tâm thương mại, văn phòng cao cấp, bệnh viện, trường học...</p>
      <h3>Cấu tạo đạt chuẩn</h3>
      <p>Một hệ cửa kính chống cháy chuẩn bao gồm:</p>
      <ul>
        <li><strong>Khung thép chịu nhiệt:</strong> Chất liệu thép đặc biệt, chịu được lửa nhưng không biến dạng, thường được xử lý sơn tĩnh điện.</li>
        <li><strong>Kính chống cháy nhiều lớp:</strong> Gồm các tấm kính cường lực với lớp gel cách nhiệt chống cháy ở giữa. Khi gặp nhiệt, lớp gel giãn nở tạo barrier cách nhiệt hiệu quả.</li>
        <li><strong>Hệ gioăng và miếng chèn chịu cháy:</strong> Đảm bảo độ kín khít giữa kính và khung.</li>
        <li><strong>Các phụ kiện chuyên dụng:</strong> Bao gồm thanh nẹp kính, keo chịu nhiệt, vít chống cháy.</li>
      </ul>
      <h3>Quy trình lắp đặt chuẩn mực</h3>
      <p>Việc lắp đặt đòi hỏi sự tỉ mỉ từ khâu đo đạc đến hoàn thiện:</p>
      <ol>
        <li><strong>Chuẩn bị – đo đạc chính xác:</strong> Xác định kích thước và chuẩn bị vật tư.</li>
        <li><strong>Lắp khung thép lên tường:</strong> Khung được cố định chắc chắn, đảm bảo cân bằng.</li>
        <li><strong>Cố định kính chống cháy:</strong> Đặt tấm kính vào khung và sử dụng keo, gioăng chuyên dụng.</li>
        <li><strong>Hoàn thiện – kiểm định chất lượng:</strong> Đảm bảo không có khe hở, vệ sinh và kiểm tra hiệu quả đóng kín.</li>
      </ol>
      <p>Cửa kính chống cháy, khi được chế tác và lắp đặt theo đúng quy trình, không chỉ đáp ứng yêu cầu an toàn PCCC mà còn giữ vững yếu tố thẩm mỹ và tiện lợi cho công trình.</p>
    `
  },
  {
    id: 9,
    slug: 'hieu-dung-ve-co-che-hoat-dong-cua-man-cuon-ngan-chay',
    title: 'Hiểu đúng về cơ chế hoạt động của màn cuốn ngăn cháy',
    excerpt: 'Màn cuốn ngăn cháy không chỉ đơn thuần là “hạ xuống khi có cháy” mà là cả một chuỗi cơ chế liên hoàn giữa hệ thống báo cháy, bộ điều khiển, motor điện...',
    imageUrl: '/anh/news/Co-che-man-ngan-chay.jpg',
    date: '2025-08-20',
    content: `
      <p>Màn cuốn ngăn cháy được thiết kế vận hành hoàn toàn tự động, đồng bộ với hệ thống báo cháy trung tâm. Nguyên lý hoạt động có thể mô tả qua các bước sau:</p>
      <h3>1. Trạng thái bình thường</h3>
      <p>Khi không có sự cố, màn luôn ở trạng thái cuộn gọn trong hộp cuốn phía trên. Bộ điều khiển (Control Panel) kết nối với hệ thống báo cháy để nhận tín hiệu.</p>
      <h3>2. Khi xảy ra sự cố cháy</h3>
      <p>Khi đầu dò phát hiện khói hoặc nhiệt, tín hiệu kích hoạt được gửi đến tủ điều khiển màn cuốn. Motor điện lập tức vận hành, hạ màn xuống theo tốc độ an toàn.</p>
      <h3>3. Trong trường hợp mất điện</h3>
      <p>Màn cuốn ngăn cháy được tích hợp UPS (bộ lưu điện). Nếu nguồn điện chính bị ngắt, UPS sẽ duy trì hoạt động. Trường hợp khẩn cấp hơn, hệ thống cơ khí trọng lực sẽ tự động nhả màn xuống.</p>
      <p>Như vậy, nguyên lý hoạt động của màn cuốn ngăn cháy là cả một chuỗi cơ chế liên hoàn nhằm đảm bảo màn luôn hoạt động ổn định trong mọi tình huống.</p>
    `
  },
  {
    id: 11,
    slug: 'cua-thep-chong-chay-co-that-su-can-thiet',
    title: 'Cửa thép chống cháy là gì? Việc lắp đặt có thật sự cần thiết?',
    excerpt: 'Vụ cháy chung cư mini gần đây đã gióng lên hồi chuông cảnh tỉnh về an toàn thoát hiểm. Cửa thép chống cháy trở thành “tấm lá chắn cứu sinh”...',
    imageUrl: '/anh/news/cua-thep-loi-thoat.jpg',
    date: '2025-08-19',
    content: `
      <p>Tháng 5 vừa qua, vụ cháy chung cư mini tại Hà Nội khiến hàng chục người thương vong đã gióng lên hồi chuông cảnh tỉnh: an toàn thoát hiểm mới là yếu tố sống còn khi xảy ra hỏa hoạn.</p>
      <h3>Cửa thép chống cháy là gì?</h3>
      <p>Khác với cửa thép thông thường, cửa thép chống cháy được chế tạo từ thép chịu nhiệt, bên trong có lớp vật liệu cách nhiệt đặc biệt. Khi có cháy, loại cửa này có thể chịu lửa từ 45 đến 120 phút, giúp ngăn lửa và khói lan sang các khu vực khác.</p>
      <h3>Vì sao lại quan trọng?</h3>
      <ul>
        <li><strong>Kéo dài “thời gian vàng” để thoát hiểm:</strong> 5–10 phút đầu tiên của vụ cháy là quyết định sự sống còn. Cửa giúp giữ cho lối thoát hiểm không bị lửa xâm chiếm.</li>
        <li><strong>Ngăn chặn khói độc:</strong> Hơn 70% ca tử vong trong hỏa hoạn đến từ khói độc. Lớp gioăng đặc biệt của cửa hạn chế tối đa khói len lỏi vào.</li>
        <li><strong>Đáp ứng quy định pháp luật:</strong> Quy chuẩn QCVN 06:2022/BXD quy định tại lối thoát hiểm, cửa chống cháy là bắt buộc.</li>
      </ul>
      <p>Trong thời đại mà an toàn PCCC được đặt lên hàng đầu, cửa thép chống cháy không còn là “tùy chọn”, mà là một hạng mục bắt buộc nếu muốn bảo vệ trọn vẹn tính mạng và tài sản.</p>
    `
  },
  {
    id: 6,
    slug: 'kinh-nghiem-lap-dat-va-bao-duong-man-cuon-ngan-chay',
    title: 'Kinh nghiệm lắp đặt và bảo dưỡng màn cuốn ngăn cháy',
    excerpt: 'Để đạt được hiệu quả tối đa, yếu tố lắp đặt đúng và bảo dưỡng bài bản màn cuốn ngăn cháy là không thể bỏ qua. Cùng tìm hiểu giải pháp vàng cho an toàn công trình.',
    imageUrl: '/anh/news/bao-duong-man-cuon.jpg',
    date: '2025-08-18',
    content: `
      <p>Để màn cuốn ngăn cháy đạt được hiệu quả tối đa, yếu tố lắp đặt đúng và bảo dưỡng bài bản là không thể bỏ qua.</p>
      <h3>1. Lắp đặt chuẩn mực – Nền tảng của hiệu quả</h3>
      <ul>
        <li><strong>Khảo sát chi tiết:</strong> Xác định chính xác vị trí, đảm bảo không cản trở lối thoát hiểm.</li>
        <li><strong>Tuân thủ kỹ thuật:</strong> Vật liệu phải chịu nhiệt cao và đạt thời gian chịu nhiệt phù hợp (60-90 phút).</li>
        <li><strong>Thi công chuyên nghiệp:</strong> Lắp đặt sai lệch dù chỉ vài millimet có thể khiến màn không đóng kín khi có sự cố.</li>
      </ul>
      <h3>2. Bảo trì đúng cách – Đầu tư dài hạn cho an toàn</h3>
      <ul>
        <li><strong>Kiểm tra định kỳ:</strong> Đánh giá độ kín khít, khả năng cuốn – hạ, và phát hiện sớm hư hỏng.</li>
        <li><strong>Vệ sinh & bôi trơn:</strong> Trục cuốn và động cơ cần được bảo dưỡng để tránh kẹt.</li>
        <li><strong>Thử nghiệm giả lập:</strong> Tạo điều kiện thực tế để kiểm tra hoạt động của màn.</li>
      </ul>
      <p>An toàn công trình không chỉ dừng lại ở bản thiết kế. Hãy để 899 IMEX đồng hành cùng bạn trong hành trình bảo vệ tính mạng và tài sản.</p>
    `
  },
  {
    id: 7,
    slug: 'bong-gom-vat-lieu-then-chot-trong-man-cuon-ngan-chay',
    title: 'Bông gốm – Vật liệu then chốt trong màn cuốn ngăn cháy',
    excerpt: 'Bông gốm cách nhiệt đang nổi lên như vật liệu then chốt trong cấu tạo màn cuốn ngăn cháy, với khả năng chịu được nhiệt độ lên tới 1.430°C.',
    imageUrl: '/anh/news/bong-gom.jpg',
    date: '2025-08-15',
    content: `
      <p>Trong các thiết bị PCCC, bông gốm cách nhiệt đang nổi lên như vật liệu then chốt trong cấu tạo màn cuốn ngăn cháy.</p>
      <h3>Vật liệu chịu nhiệt vượt trội</h3>
      <p>Bông gốm là loại sợi gốm tổng hợp có khả năng chịu được nhiệt độ từ 1.260 đến 1.430°C. Vật liệu này không bắt lửa, không co ngót khi gặp nhiệt độ cao và có độ bền cơ học tốt.</p>
      <h3>Ứng dụng thực tế tại Việt Nam</h3>
      <p>Công ty 899 IMEX cho biết các sản phẩm màn cuốn ngăn cháy do đơn vị sản xuất đạt thời gian ngăn cháy từ 60 đến 180 phút. Đại diện công ty chia sẻ: “Bông gốm chính là yếu tố quan trọng để đảm bảo hiệu quả ngăn cháy và cách nhiệt. Đây là vật liệu mà chúng tôi coi như ‘trái tim’ của màn cuốn ngăn cháy.”</p>
      <p>Khi các công trình ngày càng chú trọng yếu tố an toàn, việc kết hợp bông gốm và vải thủy tinh trong cấu tạo màn cuốn ngăn cháy đã trở thành giải pháp gần như bắt buộc.</p>
    `
  },
  {
    id: 8,
    slug: 'man-cuon-va-cua-cuon-ngan-chay-giai-phap-nao-toi-uu',
    title: 'Màn cuốn và cửa cuốn ngăn cháy: Đâu là giải pháp tối ưu?',
    excerpt: 'Cả hai đều có khả năng chống cháy, nhưng sự khác biệt lại quyết định đến tính an toàn, thẩm mỹ và chi phí lâu dài của công trình.',
    imageUrl: '/anh/news/man-cuon-trung-tam-thuong-mai.jpg',
    date: '2025-08-12',
    content: `
      <p>Trên thị trường hiện nay, hai sản phẩm phổ biến nhất là màn cuốn ngăn cháy và cửa cuốn ngăn cháy. Đâu là giải pháp tối ưu?</p>
      <h3>1. Cấu tạo và thiết kế</h3>
      <p><strong>Màn cuốn ngăn cháy:</strong> sử dụng vải thủy tinh phủ chống cháy, cuộn gọn gàng, giữ cho không gian mở và thoáng. Phù hợp cho công trình yêu cầu thẩm mỹ cao.</p>
      <p><strong>Cửa cuốn ngăn cháy:</strong> làm từ thép dày, nặng, cồng kềnh, dễ phá vỡ sự đồng bộ kiến trúc.</p>
      <h3>2. Hiệu quả chống cháy</h3>
      <p><strong>Màn cuốn:</strong> chịu lửa 60–90 phút, vừa ngăn cháy, vừa cách nhiệt, giảm bức xạ nhiệt. An toàn hơn cho người thoát hiểm.</p>
      <p><strong>Cửa cuốn:</strong> chịu lửa tương tự, nhưng bản chất thép dẫn nhiệt mạnh, khiến bề mặt nóng đỏ, tiềm ẩn nguy cơ bỏng.</p>
      <p>Kết luận, nếu cửa cuốn ngăn cháy vẫn giữ vai trò quan trọng trong kho bãi, thì trong công trình thương mại hiện đại, màn cuốn ngăn cháy đang trở thành xu hướng tất yếu.</p>
    `
  },
  {
    id: 10,
    slug: 'tai-sao-nen-chon-kinh-chong-chay-thay-vi-kinh-thuong',
    title: 'Tại sao nên chọn kính chống cháy thay vì kính thường?',
    excerpt: 'Kính chống cháy là loại vật liệu chuyên dụng vượt trội so với kính thường cả về độ an toàn lẫn tính ứng dụng trong công trình hiện đại.',
    imageUrl: '/anh/news/kinh-chong-chay-so-sanh.jpg',
    date: '2025-08-10',
    content: `
      <p>Trong bối cảnh các vụ cháy nổ ngày càng phức tạp, yêu cầu về vật liệu xây dựng an toàn trở thành ưu tiên hàng đầu. Kính chống cháy là một trong những giải pháp nổi bật.</p>
      <h3>1. Khả năng chịu lửa vượt trội</h3>
      <p>Kính thường chỉ chịu nhiệt khoảng 200–300°C, trong khi kính chống cháy (EI, EW) chịu nhiệt từ 700–1000°C trong 45-120 phút.</p>
      <h3>2. Ngăn khói, ngăn lửa lan</h3>
      <p>Kính chống cháy không chỉ chịu nhiệt mà còn ngăn lửa, khói và khí độc. Loại EI (Integrity + Insulation) còn có lớp cách nhiệt, đảm bảo bề mặt không quá nóng.</p>
      <h3>3. Đảm bảo ánh sáng và thẩm mỹ</h3>
      <p>So với tường ngăn, kính chống cháy vẫn giữ được tính trong suốt, giúp không gian sáng và hiện đại.</p>
      <p>Việc lựa chọn kính chống cháy thay vì kính thường không chỉ là xu hướng, mà đã trở thành yêu cầu tất yếu trong xây dựng hiện đại, dung hòa giữa an toàn – thẩm mỹ – bền vững.</p>
    `
  },
  {
    id: 5,
    slug: 'man-cuon-ngan-chay-tam-la-chan-vang',
    title: 'Màn cuốn ngăn cháy: Tấm lá chắn vàng bảo vệ mọi không gian',
    excerpt: 'Đây không phải là một món đồ trang trí, mà là một lớp lá chắn vô hình, được thiết kế để tự động hạ xuống và bảo vệ con người, tài sản khi hỏa hoạn xảy ra.',
    imageUrl: '/anh/news/la-chan-vang.jpg',
    date: '2025-08-05',
    content: `
      <p>Khi nghĩ về an toàn PCCC, chúng ta thường hình dung đến bình cứu hỏa. Tuy nhiên, có một "người hùng thầm lặng" đang dần trở thành giải pháp không thể thiếu: màn cuốn ngăn cháy tự động.</p>
      <p>Bằng cách ngăn chặn khói và lửa lan truyền, màn cuốn ngăn cháy không chỉ là một rào cản vật lý mà còn là tấm khiên vàng, mua thêm thời gian quý giá cho hoạt động sơ tán và cứu hộ.</p>
      <p>Sự khác biệt của những chiếc màn này nằm ở công nghệ và vật liệu. Với cấu tạo từ sợi thủy tinh hoặc sợi gốm chịu nhiệt, màn cuốn có thể đứng vững trước ngọn lửa dữ dội, tuân thủ các tiêu chuẩn nghiêm ngặt như EI30, EI60, EI90.</p>
      <p>Với kinh nghiệm và năng lực chuyên sâu, Công ty XNK và Xây dựng 899 tự hào mang đến các giải pháp màn cuốn ngăn cháy chất lượng cao, nhập khẩu chính hãng. Hãy để chúng tôi đồng hành cùng bạn, kiến tạo nên những công trình không chỉ kiên cố mà còn an toàn tối đa.</p>
    `
  },
];