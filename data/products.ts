// Định nghĩa kiểu dữ liệu cho một sản phẩm
export type Product = {
  id: string;
  name: string;
  price: number | null; // Cho phép giá là null nếu chỉ có "Liên hệ"
  category: string;
  categorySlug: 'rem' | 'mgo' | 'panel' | 'keo' | 'ron' | 'kinh-chong-chay';
  sku: string;
  images: string[];
  short_desc: string;
  description: string;
  specs: Record<string, string>;
};

// Mảng chứa tất cả sản phẩm
export const products: Product[] = [
  // --- Rèm/Màn ngăn cháy ---
  {
    id: 'rem-1-lop',
    name: 'Rèm/ màn ngăn cháy 1 lớp',
    price: 4500000,
    category: 'Rèm/Màn cuốn ngăn cháy',
    categorySlug: 'rem',
    sku: 'RNC-01',
    images: ['/anh/man-ngan-chay-1-lop-68a481b6e3c76.webp'],
    short_desc: 'Giải pháp PCCC hiệu quả, gọn nhẹ và thẩm mỹ cho các công trình hiện đại. Sản phẩm được làm từ vật liệu composite chống cháy cao cấp, có khả năng tự động sập xuống khi có tín hiệu báo cháy.',
    description: `<p>Rèm ngăn cháy 1 lớp được thiết kế để thay thế cho các giải pháp cửa chống cháy truyền thống ở những khu vực cần không gian mở và tính thẩm mỹ cao như sảnh trung tâm thương mại, lối thoát hiểm, khu vực sản xuất...</p><h4>Ưu điểm nổi bật:</h4><ul><li>Thiết kế gọn nhẹ, hiện đại, tiết kiệm diện tích.</li><li>Tự động hoạt động khi có hỏa hoạn, đảm bảo an toàn tối đa.</li><li>Vật liệu cao cấp, đã được kiểm định PCCC theo tiêu chuẩn Việt Nam.</li><li>Dễ dàng lắp đặt, bảo trì và bảo dưỡng.</li></ul>`,
    specs: {'Giới hạn chịu lửa': 'E 120 (chỉ ngăn lửa, không ngăn nhiệt)', 'Vật liệu': 'Vải thủy tinh phủ silicone/PU', 'Độ dày': '0.8mm - 2.0mm', 'Cơ chế hoạt động': 'Tự động, điều khiển bằng Motor và Hộp điều khiển trung tâm', 'Tiêu chuẩn': 'TCVN 9383:2012'}
  },
  {
    id: 'rem-ei-90',
    name: 'Rèm/ màn ngăn cháy EI 90 phút',
    price: 6650000,
    category: 'Rèm/Màn cuốn ngăn cháy',
    categorySlug: 'rem',
    sku: 'RNC-02',
    images: ['/anh/ie-90-68a481af219a7.webp'],
    short_desc: 'Sản phẩm rèm ngăn cháy cao cấp với giới hạn chịu lửa và cách nhiệt lên đến 90 phút, đáp ứng các tiêu chuẩn PCCC khắt khe nhất cho các công trình trọng điểm.',
    description: `<p>Rèm ngăn cháy EI 90 là giải pháp an toàn tối ưu cho các khu vực có nguy cơ cháy nổ cao. Với cấu tạo nhiều lớp vật liệu chống cháy và cách nhiệt, sản phẩm đảm bảo ngăn chặn lửa và nhiệt độ hiệu quả trong 90 phút, tạo thời gian vàng cho công tác sơ tán và chữa cháy.</p><h4>Ứng dụng:</h4><ul><li>Nhà xưởng sản xuất, kho chứa hàng hóa có giá trị cao.</li><li>Tầng hầm, bãi đậu xe của các tòa nhà chung cư, trung tâm thương mại.</li><li>Phòng máy, phòng kỹ thuật, khu vực chứa thiết bị quan trọng.</li></ul>`,
    specs: {'Giới hạn chịu lửa': 'EI 90 phút (ngăn lửa và cách nhiệt)', 'Vật liệu': 'Vải chống cháy đa lớp, bông gốm ceramic cách nhiệt', 'Độ dày': '3.0mm - 5.0mm', 'Cơ chế hoạt động': 'Tự động, điều khiển bằng Motor, có thể tích hợp UPS', 'Tiêu chuẩn': 'QCVN 06:2021/BXD'}
  },
  {
    id: 'rem-ei-60',
    name: 'Rèm/ màn ngăn cháy EI 60 phút',
    price: 5060000,
    category: 'Rèm/Màn cuốn ngăn cháy',
    categorySlug: 'rem',
    sku: 'RNC-03',
    images: ['/anh/ie 60 test.webp'],
    short_desc: 'Giải pháp cân bằng giữa chi phí và hiệu quả, cung cấp khả năng ngăn cháy và cách nhiệt trong 60 phút, phù hợp với đa số các công trình dân dụng và công nghiệp.',
    description: `<p>Rèm ngăn cháy EI 60 là lựa chọn phổ biến nhất hiện nay. Sản phẩm không chỉ đảm bảo các yêu cầu về PCCC mà còn có thiết kế hiện đại, dễ dàng lắp đặt và vận hành.</p>`,
    specs: {'Giới hạn chịu lửa': 'EI 60 phút (ngăn lửa và cách nhiệt)', 'Vật liệu': 'Vải thủy tinh phủ hợp chất chống cháy', 'Độ dày': '1.5mm - 2.5mm', 'Cơ chế hoạt động': 'Tự động, kết nối hệ thống báo cháy', 'Tiêu chuẩn': 'TCVN 9383:2012'}
  },
  {
    "id": "kinh-chong-chay-e60-day-8mm",
    "name": "Kính chống cháy E60, dày 8mm",
    "price": 0,
    "category": "Kính chống cháy",
    "categorySlug": "kinh-chong-chay",
    "sku": "KCC-E60-8",
    "images": [
      "/files/sanpham/138/200_1/jpg/kinh-chong-chay-e60-day-8mm_200x200.jpg"
    ],
    "short_desc": "Kính chống cháy loại E60 với độ dày 8mm, đạt giới hạn chịu lửa 60 phút, chỉ ngăn lửa và khói, không ngăn nhiệt. Phù hợp cho vách ngăn, cửa quan sát tại các khu vực yêu cầu PCCC cơ bản.",
    "description": "<p><strong>Kính chống cháy E60, dày 8mm</strong> là giải pháp kinh tế cho các công trình cần đảm bảo an toàn PCCC theo quy định. Kính duy trì tính toàn vẹn (E) trong 60 phút khi tiếp xúc với lửa, ngăn chặn hiệu quả sự lan truyền của lửa và khói.</p><h4>Đặc điểm kỹ thuật:</h4><ul><li><strong>Giới hạn chịu lửa:</strong> E60 (chỉ ngăn lửa, không ngăn nhiệt).</li><li><strong>Độ dày:</strong> 8mm.</li><li><strong>Cấu tạo:</strong> Kính cường lực được xử lý đặc biệt.</li><li><strong>Ứng dụng:</strong> Cửa đi, cửa sổ, vách ngăn trong các tòa nhà văn phòng, chung cư, nhà xưởng.</li></ul>",
    "specs": {
      "Giới hạn chịu lửa": "E60 (60 phút)",
      "Độ dày": "8mm",
      "Loại kính": "Kính cường lực chống cháy",
      "Khả năng cách nhiệt": "Không (Chỉ ngăn lửa)"
    }
  },
  {
    "id": "kinh-chong-chay-cach-nhiet-ei30-day-22mm",
    "name": "KÍNH CHỐNG CHÁY CÁCH NHIỆT EI30, KÍNH DÀY 22MM",
    "price": 0,
    "category": "Kính chống cháy cách nhiệt",
    "categorySlug": "kinh-chong-chay",
    "sku": "KCC-EI30-22",
    "images": [
      "/files/sanpham/137/200_1/png/kinh-chong-chay-cach-nhiet-ei30-kinh-day-22mm_200x200.png"
    ],
    "short_desc": "Kính chống cháy cách nhiệt EI30, dày 22mm, có khả năng ngăn lửa, khói và cả nhiệt lượng trong 30 phút. Đảm bảo an toàn cho lối thoát hiểm, giúp người di tản không bị ảnh hưởng bởi sức nóng của đám cháy.",
    "description": "<p><strong>Kính chống cháy cách nhiệt EI30</strong> là loại kính cao cấp, vừa duy trì tính toàn vẹn (E) vừa có khả năng cách nhiệt (I) trong 30 phút. Khi có hỏa hoạn, một mặt kính tiếp xúc với lửa nhưng mặt còn lại vẫn giữ nhiệt độ an toàn, không gây bỏng khi chạm vào.</p><h4>Ưu điểm vượt trội:</h4><ul><li><strong>An toàn tối đa:</strong> Ngăn chặn cả lửa, khói và nhiệt, bảo vệ lối thoát hiểm.</li><li><strong>Tầm nhìn rõ ràng:</strong> Giữ được độ trong suốt ngay cả khi tiếp xúc với nhiệt độ cao.</li><li><strong>Cấu tạo nhiều lớp:</strong> Gồm nhiều lớp kính và lớp keo ngăn cháy cách nhiệt ở giữa.</li></ul>",
    "specs": {
      "Giới hạn chịu lửa": "EI30 (30 phút)",
      "Độ dày": "22mm",
      "Loại kính": "Kính nhiều lớp có keo cách nhiệt",
      "Khả năng cách nhiệt": "Có (Ngăn nhiệt, lửa, khói)"
    }
  },
  {
    "id": "kinh-chong-chay-cach-nhiet-ei90-day-38mm",
    "name": "Kính chống cháy cách nhiệt EI90, dày 38mm",
    "price": 0,
    "category": "Kính chống cháy cách nhiệt",
    "categorySlug": "kinh-chong-chay",
    "sku": "KCC-EI90-38",
    "images": [
      "/files/sanpham/133/200_1/jpg/kinh-chong-chay-cach-nhiet-ei90-day-38mm_200x200.jpg"
    ],
    "short_desc": "Kính chống cháy cách nhiệt EI90, dày 38mm, cung cấp khả năng bảo vệ vượt trội, ngăn lửa, khói và nhiệt lên đến 90 phút. Giải pháp an toàn cho các công trình có yêu cầu PCCC nghiêm ngặt.",
    "description": "<p><strong>Kính chống cháy cách nhiệt EI90, dày 38mm</strong> đáp ứng các tiêu chuẩn PCCC khắt khe nhất. Với khả năng chịu lửa và cách nhiệt lên tới 90 phút, sản phẩm là lựa chọn hàng đầu cho các khu vực trọng yếu như phòng máy, kho chứa vật liệu dễ cháy, và các khu vực cần thời gian di tản dài.</p><h4>Ứng dụng:</h4><ul><li>Vách kính ngăn cháy cho các khu vực có nguy cơ cháy nổ cao.</li><li>Cửa kính cho lối thoát hiểm trong các tòa nhà cao tầng, trung tâm thương mại.</li><li>Đảm bảo an toàn và tuân thủ Nghị định 136 về PCCC.</li></ul>",
    "specs": {
      "Giới hạn chịu lửa": "EI90 (90 phút)",
      "Độ dày": "38mm",
      "Loại kính": "Kính nhiều lớp có keo cách nhiệt cao cấp",
      "Khả năng cách nhiệt": "Có (Ngăn nhiệt, lửa, khói)"
    }
  },
  {
    "id": "kinh-chong-chay-cach-nhiet-ei120-day-38mm",
    "name": "Kính chống cháy cách nhiệt EI120, dày 38mm",
    "price": 0,
    "category": "Kính chống cháy cách nhiệt",
    "categorySlug": "kinh-chong-chay",
    "sku": "KCC-EI120-38",
    "images": [
      "/files/sanpham/132/200_1/jpg/kinh-chong-chay-cach-nhiet-ei120-day-38mm_200x200.jpg"
    ],
    "short_desc": "Kính chống cháy cách nhiệt EI120, dày 38mm. Đây là giải pháp an toàn PCCC cao cấp nhất, với khả năng ngăn lửa, khói và cách nhiệt toàn diện trong 120 phút.",
    "description": "<p><strong>Kính chống cháy cách nhiệt EI120</strong> mang lại mức độ bảo vệ tối đa, đảm bảo tính toàn vẹn và khả năng cách nhiệt trong suốt 120 phút. Sản phẩm được sử dụng cho những công trình trọng điểm, yêu cầu an toàn PCCC ở mức cao nhất, giúp kéo dài thời gian vàng cho công tác cứu hộ và di tản.</p>",
    "specs": {
      "Giới hạn chịu lửa": "EI120 (120 phút)",
      "Độ dày": "38mm",
      "Loại kính": "Kính nhiều lớp có keo cách nhiệt đặc biệt",
      "Khả năng cách nhiệt": "Có (Ngăn nhiệt, lửa, khói)"
    }
  },
  {
    "id": "kinh-chong-chay-e90-day-10mm",
    "name": "Kính chống cháy E90, dày 10mm",
    "price": 0,
    "category": "Kính chống cháy",
    "categorySlug": "kinh-chong-chay",
    "sku": "KCC-E90-10",
    "images": [
      "/files/sanpham/131/200_1/jpg/kinh-chong-chay-e90-day-10mm_200x200.jpg"
    ],
    "short_desc": "Kính chống cháy loại E90, dày 10mm, có khả năng ngăn chặn lửa và khói trong thời gian tối thiểu 90 phút. Là lựa chọn tối ưu về chi phí cho các vách ngăn lớn cần thời gian chống cháy dài.",
    "description": "<p><strong>Kính chống cháy E90, dày 10mm</strong> được thiết kế để duy trì tính toàn vẹn (ngăn lửa, khói) trong 90 phút. Sản phẩm không có chức năng cách nhiệt nhưng vẫn đảm bảo ngăn chặn sự bùng phát và lan truyền của đám cháy hiệu quả, tạo điều kiện cho việc sơ tán.</p>",
    "specs": {
      "Giới hạn chịu lửa": "E90 (90 phút)",
      "Độ dày": "10mm",
      "Loại kính": "Kính cường lực chống cháy",
      "Khả năng cách nhiệt": "Không (Chỉ ngăn lửa)"
    }
  },
  {
    "id": "cua-kinh-ngan-chay-ei45-1-canh-mo-2-chieu",
    "name": "CỬA KÍNH NGĂN CHÁY EI45 - 1 CÁNH MỞ 2 CHIỀU",
    "price": 0,
    "category": "Cửa kính chống cháy",
    "categorySlug": "kinh-chong-chay",
    "sku": "CKCC-EI45-1C2C",
    "images": [
      "/files/sanpham/150/200_1/jpg/cua-kinh-ngan-chay-ei45-1-canh-mo-2-chieu_200x200.jpg"
    ],
    "short_desc": "Cửa kính ngăn cháy EI45 một cánh, sử dụng bản lề sàn mở 2 chiều tiện lợi. Hệ cửa đảm bảo khả năng ngăn lửa và cách nhiệt trong 45 phút, phù hợp làm cửa thoát hiểm, cửa thông phòng.",
    "description": "<p>Hệ <strong>cửa kính ngăn cháy EI45</strong> được thiết kế hiện đại với khung thép chắc chắn và kính chống cháy cách nhiệt EI45. Bản lề sàn cho phép cửa mở được cả hai chiều, tự động đóng lại sau khi mở, luôn đảm bảo trạng thái an toàn PCCC. Sản phẩm vừa đảm bảo an toàn, vừa mang lại tính thẩm mỹ cao cho công trình.</p>",
    "specs": {
      "Giới hạn chịu lửa": "EI45 (45 phút)",
      "Vật liệu khung": "Thép sơn tĩnh điện",
      "Kính": "Kính chống cháy cách nhiệt EI45",
      "Phụ kiện": "Bản lề sàn, tay nắm, gioăng ngăn khói"
    }
  },
  {
    "id": "vach-kinh-ngan-chay-ei90",
    "name": "VÁCH KÍNH NGĂN CHÁY EI90",
    "price": 0,
    "category": "Vách kính chống cháy",
    "categorySlug": "kinh-chong-chay",
    "sku": "VKCC-EI90",
    "images": [
      "/files/sanpham/149/200_1/jpg/vach-kinh-ngan-chay-ei90_200x200.jpg"
    ],
    "short_desc": "Hệ vách kính cố định ngăn cháy tiêu chuẩn EI90. Sử dụng khung thép kiên cố và kính chống cháy cách nhiệt EI90, tạo ra một bức tường lửa trong suốt, ngăn chặn lửa, khói và nhiệt trong 90 phút.",
    "description": "<p><strong>Vách kính ngăn cháy EI90</strong> là giải pháp phân chia không gian an toàn cho các hành lang, sảnh chờ, khu vực sản xuất. Hệ vách kính không chỉ đáp ứng yêu cầu nghiêm ngặt về PCCC mà còn giúp không gian thông thoáng, tận dụng ánh sáng tự nhiên.</p>",
    "specs": {
      "Giới hạn chịu lửa": "EI90 (90 phút)",
      "Vật liệu khung": "Thép, Inox",
      "Kính": "Kính chống cháy cách nhiệt EI90",
      "Đặc điểm": "Vách cố định"
    }
  },
  // --- Tấm MGO ---
  {
    id: 'tam-mgo-10mm',
    name: 'Tấm Eron - MGO 10mm cách nhiệt',
    price: 350000,
    category: 'Tấm MGO chống cháy',
    categorySlug: 'mgo',
    sku: 'MGO-01',
    images: ['/anh/mgo-10mm-68a481b8947b4.webp'],
    short_desc: 'Tấm MGO (Magnesium Oxide) dày 10mm với khả năng chống cháy, cách âm, cách nhiệt và chống ẩm vượt trội, là vật liệu xanh cho xây dựng hiện đại.',
    description: `<p>Tấm MGO 10mm là vật liệu xây dựng thế hệ mới, không chứa amiăng, an toàn cho sức khỏe và thân thiện với môi trường.</p>`,
    specs: {'Độ dày': '10mm', 'Chất liệu': 'Magnesium Oxide (MGO)', 'Kích thước tiêu chuẩn': '1220mm x 2440mm', 'Chống cháy': 'Loại A1 (không cháy)'}
  },
  {
    id: 'tam-mgo-5mm',
    name: 'Tấm MGO-Eron chống cháy 5mm',
    price: 250000,
    category: 'Tấm MGO chống cháy',
    categorySlug: 'mgo',
    sku: 'MGO-02',
    images: ['/anh/mgo-eron-68a481b8ae6a0.webp'],
    short_desc: 'Phiên bản tấm MGO mỏng hơn, linh hoạt cho các ứng dụng ốp tường, trần, vách ngăn yêu cầu khả năng chống cháy nhưng cần tối ưu về trọng lượng.',
    description: `<p>Với độ dày chỉ 5mm, tấm MGO-Eron dễ dàng thi công, uốn cong, phù hợp cho nhiều thiết kế phức tạp.</p>`,
    specs: {'Độ dày': '5mm', 'Chất liệu': 'Magnesium Oxide (MGO)', 'Kích thước tiêu chuẩn': '1220mm x 2440mm', 'Chống cháy': 'Loại A1 (không cháy)'}
  },
  {
    id: 'tam-mgo-tong-hop',
    name: 'Tấm chống cháy MGO',
    price: null,
    category: 'Tấm MGO chống cháy',
    categorySlug: 'mgo',
    sku: 'MGO-03',
    images: ['/anh/tam-chong-chay-68a481c8a27e4.webp'],
    short_desc: 'Dòng sản phẩm tấm MGO đa dạng về độ dày và quy cách, đáp ứng mọi nhu cầu về giải pháp chống cháy cho công trình.',
    description: `<p>Cung cấp các loại tấm MGO với độ dày từ 3mm đến 20mm, phù hợp làm vách ngăn, sàn, trần chống cháy.</p>`,
    specs: {'Độ dày': 'Tùy chọn (3mm - 20mm)', 'Chất liệu': 'Magnesium Oxide (MGO)', 'Ứng dụng': 'Ốp tường, trần, sàn, vách ngăn', 'Chống cháy': 'Loại A1 (không cháy)'}
  },
  // --- Tấm Panel ---
  {
    id: 'panel-xop-10cm',
    name: 'PANEL LÕI XỐP THƯỜNG DÀY 10 CM',
    price: null,
    category: 'Tấm Panel chống cháy',
    categorySlug: 'panel',
    sku: 'PNL-01',
    images: ['/anh/panel-loi-xop-thuong-day-10-cm-300x300-68a481bc511d7.webp'],
    short_desc: 'Tấm panel EPS (lõi xốp) dày 10cm, giải pháp cách nhiệt, cách âm hiệu quả với chi phí hợp lý cho nhà xưởng, kho lạnh, phòng sạch.',
    description: `<p>Cấu tạo gồm 2 lớp tôn mạ màu và lớp xốp EPS ở giữa, giúp thi công nhanh chóng và tiết kiệm chi phí.</p>`,
    specs: {'Độ dày': '10 cm', 'Lõi': 'Xốp EPS (Expandable Polystyrene)', 'Tỷ trọng xốp': '10 - 16 kg/m³', 'Ứng dụng': 'Vách, trần nhà xưởng, kho lạnh'}
  },
  {
    id: 'panel-bong-khoang-100mm',
    name: 'PANEL LÕI BÔNG KHOÁNG DÀY 100 MM',
    price: null,
    category: 'Tấm Panel chống cháy',
    categorySlug: 'panel',
    sku: 'PNL-02',
    images: ['/anh/panel-loi-bong-khoang-day-100-mm-300x300-68a481bb9ce46.webp'],
    short_desc: 'Panel Rockwool (lõi bông khoáng) chống cháy vượt trội, là giải pháp tối ưu cho các công trình yêu cầu tiêu chuẩn PCCC cao.',
    description: `<p>Lõi bông khoáng có khả năng chống cháy lên đến 2 giờ, đồng thời cách âm và cách nhiệt hiệu quả.</p>`,
    specs: {'Độ dày': '100 mm', 'Lõi': 'Bông khoáng (Rockwool)', 'Tỷ trọng': '80 - 120 kg/m³', 'Chống cháy': 'Lên đến 2 giờ'}
  },
  {
    id: 'panel-mai-rockwool',
    name: 'PANEL MÁI LÕI BÔNG KHOÁNG (ROCKWOOL)',
    price: null,
    category: 'Tấm Panel chống cháy',
    categorySlug: 'panel',
    sku: 'PNL-03',
    images: ['/anh/panel-mai-loi-bong-khoang-rockwool-300x300-68a481bd0e7ab.webp'],
    short_desc: 'Loại panel chuyên dụng cho lợp mái, có tạo sóng giúp thoát nước tốt, kết hợp khả năng chống cháy, chống nóng và chống ồn ưu việt.',
    description: `<p>Thiết kế sóng tôn đặc biệt giúp tăng độ cứng và khả năng thoát nước cho mái nhà xưởng, nhà kho.</p>`,
    specs: {'Loại': 'Panel lợp mái', 'Lõi': 'Bông khoáng (Rockwool)', 'Số sóng': '3 sóng / 5 sóng', 'Chống cháy': 'Lên đến 2 giờ'}
  },
  // --- Keo Chống Cháy ---
  {
    id: 'keo-f200',
    name: 'Keo Silicone chống cháy Ssangkom Topseal F200',
    price: null,
    category: 'Keo chống cháy',
    categorySlug: 'keo',
    sku: 'KEO-01',
    images: ['/anh/keo-f200-68a481ae7cd20.webp'],
    short_desc: 'Keo silicone cao cấp gốc Acrylic, chuyên dụng để trám, bịt kín các khe hở, mối nối trong hệ thống PCCC, ngăn cháy lan hiệu quả.',
    description: `<p>Sản phẩm có khả năng bám dính tốt trên nhiều loại vật liệu xây dựng và chịu được nhiệt độ cao.</p>`,
    specs: {'Thương hiệu': 'Ssangkom Topseal', 'Mã sản phẩm': 'F200', 'Gốc': 'Acrylic', 'Ứng dụng': 'Trám khe hở, ống gió, vách ngăn'}
  },
  {
    id: 'keo-m1',
    name: 'Keo silicone chống cháy Fixacryl M1 Grey 300 ml',
    price: null,
    category: 'Keo chống cháy',
    categorySlug: 'keo',
    sku: 'KEO-02',
    images: ['/anh/keo-m1-68a481af49245.webp'],
    short_desc: 'Keo silicone chống cháy lan gốc Acrylic Polymer, đạt tiêu chuẩn M1 của Pháp về chống cháy.',
    description: `<p>Dùng để bịt kín các khe co giãn, mối nối tường, cửa chống cháy, đảm bảo tính toàn vẹn của kết cấu khi có hỏa hoạn.</p>`,
    specs: {'Thương hiệu': 'Fixacryl', 'Mã sản phẩm': 'M1', 'Màu sắc': 'Xám (Grey)', 'Dung tích': '300 ml'}
  },
  {
    id: 'keo-m1c',
    name: 'KEO SILICONE CHỐNG CHÁY LAN SELSIL M1C',
    price: null,
    category: 'Keo chống cháy',
    categorySlug: 'keo',
    sku: 'KEO-03',
    images: ['/anh/keo-m1c-68a481b03777f.webp'],
    short_desc: 'Keo trám gốc Acrylic có khả năng trương nở khi gặp nhiệt độ cao, tạo thành một lớp than hóa ngăn chặn lửa và khói hiệu quả.',
    description: `<p>Được sử dụng rộng rãi trong việc thi công các hệ thống PCCC cho tòa nhà cao tầng, nhà máy.</p>`,
    specs: {'Thương hiệu': 'Selsil', 'Mã sản phẩm': 'M1C', 'Tính năng': 'Trương nở khi gặp nhiệt', 'Đóng gói': 'Tuýp 310ml'}
  },
  // --- Ron Chống Cháy ---
  {
    id: 'ron-cua-thep',
    name: 'Ron chống cháy cửa thép',
    price: null,
    category: 'Ron chống cháy',
    categorySlug: 'ron',
    sku: 'RON-01',
    images: ['/anh/ron-chong-chay-cua-thep-300x300-68a481c75cc6f.webp'],
    short_desc: 'Ron (gioăng) cao su chuyên dụng cho cửa thép chống cháy, giúp làm kín khít giữa cánh và khung cửa, ngăn khói độc lan tỏa.',
    description: `<p>Ron cao su có độ đàn hồi tốt, chịu được nhiệt độ cao và không bị lão hóa theo thời gian.</p>`,
    specs: {'Vật liệu': 'Cao su EPDM', 'Ứng dụng': 'Lắp đặt trên khung cửa thép chống cháy', 'Tính năng': 'Ngăn khói, giảm chấn'}
  },
  {
    id: 'ron-thanh',
    name: 'Ron chống cháy thanh',
    price: null,
    category: 'Ron chống cháy',
    categorySlug: 'ron',
    sku: 'RON-02',
    images: ['/anh/ron-chong-chay-thanh-300x300-68a481c837eba.webp'],
    short_desc: 'Thanh ron (intumescent strip) có khả năng trương nở gấp nhiều lần thể tích ban đầu khi tiếp xúc nhiệt độ cao, bịt kín hoàn toàn khe hở cửa.',
    description: `<p>Thường được dán vào mép cánh cửa hoặc khung bao, là thành phần bắt buộc trong cửa chống cháy EI.</p>`,
    specs: {'Vật liệu': 'Graphite trương nở', 'Kích thước': '10x2mm, 20x2mm,...', 'Tính năng': 'Trương nở, ngăn lửa và khói'}
  },
  {
    id: 'ron-mem',
    name: 'Ron chống cháy mềm',
    price: null,
    category: 'Ron chống cháy',
    categorySlug: 'ron',
    sku: 'RON-03',
    images: ['/anh/ron-chong-chay-mem-300x300-68a481c7da4bc.webp'],
    short_desc: 'Loại ron dẻo, dễ dàng uốn lượn và lắp đặt cho các vị trí phức tạp, đảm bảo độ kín khít và khả năng ngăn cháy lan.',
    description: `<p>Giải pháp linh hoạt cho các loại cửa có hình dạng đặc biệt hoặc các khe hở không đồng đều.</p>`,
    specs: {'Vật liệu': 'Polymer chống cháy', 'Đóng gói': 'Cuộn', 'Tính năng': 'Linh hoạt, ngăn khói'}
  },
  
];

// Định nghĩa danh mục sản phẩm để sử dụng cho sidebar và lọc
export const categories = [
    { name: 'Tất cả sản phẩm', slug: 'all' },
    { name: 'Rèm/Màn cuốn ngăn cháy', slug: 'rem' },
    { name: 'Tấm MGO chống cháy', slug: 'mgo' },
    { name: 'Tấm Panel chống cháy', slug: 'panel' },
    { name: 'Keo chống cháy', slug: 'keo' },
    { name: 'Ron chống cháy', slug: 'ron' },
    { name: 'Kính chống cháy', slug: 'kinh-chong-chay' },
    { name: 'Cửa thép chống cháy', slug: 'kinh' },
];