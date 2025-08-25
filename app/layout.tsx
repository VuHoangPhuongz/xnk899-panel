import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // Sẽ tạo ở bước tiếp theo
import Footer from "@/components/Footer"; // Sẽ tạo ở bước tiếp theo
import { CartProvider } from "@/context/CartContext";
import FixedActions from "@/components/FixedActions";
import { Analytics } from '@vercel/analytics/next';
// Tối ưu hóa font chữ với Next.js
const roboto = Roboto({
  subsets: ["latin", "vietnamese"], // Thêm "vietnamese" để hỗ trợ tiếng Việt
  weight: ["300", "400", "500", "700", "900"],
});

// Cấu hình metadata cho SEO
export const metadata: Metadata = {
  title: "899 IMEX - Giải Pháp PCCC: Màn ngăn cháy, Kính chống cháy",
  description: "Công ty XNK 899 chuyên cung cấp các vật liệu ngăn cháy công nghệ cao: rèm cuốn ngăn cháy EI, tấm MGO chống cháy, panel cách nhiệt, keo và ron PCCC. Sản phẩm nhập khẩu, đạt chuẩn.",
  keywords: "rèm ngăn cháy, màn ngăn cháy, tấm mgo, panel chống cháy, vật liệu pccc, xnk 899, ei 60, ei 90",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Nhúng Font Awesome CDN */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body className={roboto.className}>
        <CartProvider> 
        <Header />
        <main>{children}<Analytics /></main> {/* children chính là nội dung của từng trang con */}
        <Footer />
        <FixedActions />
        </CartProvider> 
        {/* Các nút gọi hành động cố định có thể đặt ở đây hoặc trong một component riêng */}
        {/* Chúng ta sẽ xử lý chúng ở bước sau */}
      </body>
    </html>
  );
}