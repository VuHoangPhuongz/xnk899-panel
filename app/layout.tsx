// app/layout.tsx
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import FixedActions from "@/components/FixedActions";
import { Analytics } from '@vercel/analytics/next';
import { getSiteSettings } from "@/lib/actions"; // 1. Import hàm lấy cài đặt

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "899 IMEX - Giải Pháp PCCC: Màn ngăn cháy, Kính chống cháy",
  description: "Công ty XNK 899 chuyên cung cấp các vật liệu ngăn cháy công nghệ cao: rèm cuốn ngăn cháy EI, tấm MGO chống cháy, panel cách nhiệt, keo và ron PCCC. Sản phẩm nhập khẩu, đạt chuẩn.",
  keywords: "rèm ngăn cháy, màn ngăn cháy, tấm mgo, panel chống cháy, vật liệu pccc, xnk 899, ei 60, ei 90",
};

// 2. Chuyển component thành `async` để có thể lấy dữ liệu từ server
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 3. Lấy dữ liệu cài đặt mới nhất từ cơ sở dữ liệu
  const settings = await getSiteSettings();

  // 4. Tạo đối tượng style chứa các biến màu CSS
  const rootStyle = {
    '--background-color': settings.backgroundColor,
    '--primary-color': settings.primaryColor,
  } as React.CSSProperties;

  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      {/* 5. Áp dụng các biến màu vào thẻ body */}
      <body className={roboto.className} style={rootStyle}>
        <CartProvider> 
          <Header />
          <main>{children}<Analytics /></main>
          <Footer />
          <FixedActions />
        </CartProvider> 
      </body>
    </html>
  );
}