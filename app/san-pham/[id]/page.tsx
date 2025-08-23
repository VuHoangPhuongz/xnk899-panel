'use client';

import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { products, Product } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import ProductActions from '@/components/ProductActions';
import RelatedProducts from '@/components/RelatedProducts';
import ProductReviews from '@/components/ProductReviews';
// HÀM TẠO DỮ LIỆU CÓ CẤU TRÚC (JSON-LD) ĐỂ SỬA LỖI GOOGLE
const generateProductJsonLd = (product: Product) => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": `https://xnk899.com${product.images[0]}`, // ⚠️ THAY BẰNG TÊN MIỀN CỦA BẠN
    "description": product.short_desc.replace(/<[^>]*>?/gm, ''), // Sửa lỗi thiếu "description"
    "sku": product.sku,
    "brand": {
      "@type": "Brand",
      "name": "899 IM-EX"
    },
    // Sửa lỗi thiếu "review" và "aggregateRating"
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5", // Dữ liệu mẫu
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Khách hàng" // Dữ liệu mẫu
      },
      "reviewBody": "Sản phẩm chất lượng tốt, đúng tiêu chuẩn PCCC. Dịch vụ tư vấn và lắp đặt chuyên nghiệp." // Dữ liệu mẫu
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9", // Dữ liệu mẫu
      "reviewCount": "25"  // Dữ liệu mẫu
    },
    "offers": {
      "@type": "Offer",
      "url": `https://xnk899.com/san-pham/${product.id}`, // ⚠️ THAY BẰNG TÊN MIỀN CỦA BẠN
      "priceCurrency": "VND",
      "price": "0", // Để là 0 cho sản phẩm cần "Liên hệ"
      "availability": "https://schema.org/InStoreOnly",
      // Sửa lỗi thiếu "hasMerchantReturnPolicy"
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "VN",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 7, // Ví dụ: đổi trả trong 7 ngày
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      },
      // Sửa lỗi thiếu "shippingDetails"
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0", // Ví dụ: Miễn phí vận chuyển
          "currency": "VND"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "VN"
        }
      }
    }
  };
  return JSON.stringify(schema);
};

export default function ProductDetailPage() {
  // Sửa lỗi params bằng cách dùng hook useParams
  const params = useParams();
  const id = params.id as string;

  const product = products.find(p => p.id === id);
  
  const [activeImage, setActiveImage] = useState(product?.images[0]);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return notFound();
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Thêm script JSON-LD để cung cấp dữ liệu cho Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateProductJsonLd(product) }}
      />
      
      <nav className="text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-green-primary">Trang chủ</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/san-pham" className="text-gray-500 hover:text-green-primary">Sản phẩm</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-800 font-semibold">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <div className="border rounded-lg p-2 mb-4">
            <div className="relative aspect-square">
              <Image src={activeImage || product.images[0]} alt={product.name} fill sizes="50vw" style={{ objectFit: 'contain' }} className="rounded-md"/>
            </div>
          </div>
          <div className="flex space-x-2">
            {product.images.map(img => (
                <div key={img} onClick={() => setActiveImage(img)} className={`w-20 h-20 border-2 rounded-md p-1 cursor-pointer ${activeImage === img ? 'border-blue-primary' : ''}`}>
                    <Image src={img} alt="thumbnail" width={80} height={80} className="object-contain w-full h-full"/>
                </div>
            ))}
          </div>
        </div>

        <div className="prose max-w-none">
          <h1 className="text-3xl lg:text-4xl font-bold text-blue-primary mt-0">{product.name}</h1>
          <p className="text-2xl font-bold my-4 text-red-600">
            Giá: <a href="tel:0987811158" className="hover:underline text-red-600">Liên hệ</a>
          </p>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-primary not-prose text-gray-700" dangerouslySetInnerHTML={{ __html: product.short_desc }}></div>
          <ProductActions productId={product.id} />
        </div>
      </div>

      <div className="mt-16">
        <div className="border-b">
            <button onClick={() => setActiveTab('description')} className={`py-2 px-4 font-semibold ${activeTab === 'description' ? 'border-b-2 border-blue-primary text-blue-primary' : 'text-gray-500'}`}>Mô tả</button>
            <button onClick={() => setActiveTab('specs')} className={`py-2 px-4 font-semibold ${activeTab === 'specs' ? 'border-b-2 border-blue-primary text-blue-primary' : 'text-gray-500'}`}>Thông số kỹ thuật</button>
            <button onClick={() => setActiveTab('reviews')} className={`py-2 px-4 font-semibold ${activeTab === 'reviews' ? 'border-b-2 border-blue-primary text-blue-primary' : 'text-gray-500'}`}>Đánh giá</button>
        </div>
        <div className="py-6 prose max-w-none">
            {activeTab === 'description' && ( <div dangerouslySetInnerHTML={{ __html: product.description }} /> )}
            {activeTab === 'specs' && (
              <table className="w-full text-sm text-left text-gray-500">
                <tbody className="divide-y">
                  {Object.entries(product.specs).map(([key, value]) => (
                     <tr key={key} className="hover:bg-gray-50">
                       <th className="px-6 py-4 font-medium text-gray-900 w-1/3 bg-gray-50">{key}</th>
                       <td className="px-6 py-4">{value}</td>
                     </tr>
                  ))}
                </tbody>
              </table>
            )}
            {activeTab === 'reviews' && (
                <ProductReviews />
            )}
        </div>
      </div>
      
      <RelatedProducts
        currentProductId={product.id}
        categorySlug={product.categorySlug}
      />
    </div>
  );
}