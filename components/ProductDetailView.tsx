// components/ProductDetailView.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ProductActions from '@/components/ProductActions';
import RelatedProducts from '@/components/RelatedProducts';
import ProductReviews from '@/components/ProductReviews';
import { JsonValue } from '@prisma/client/runtime/library';

// Định nghĩa kiểu dữ liệu cho product, khớp với Prisma model
type ProductType = {
  id: string;
  name: string;
  images: string[];
  sku: string;
  short_desc: string;
  description: string;
  categorySlug: string;
  specs: JsonValue;
};

// Component này nhận dữ liệu product từ cha (Server Component)
export default function ProductDetailView({ product }: { product: ProductType }) {
  // Toàn bộ logic tương tác của bạn được giữ nguyên ở đây
  const [activeImage, setActiveImage] = useState(product.images[0] || 'https://via.placeholder.com/600x600.png?text=No+Image');
  const [activeTab, setActiveTab] = useState('description');
  const [imageLoading, setImageLoading] = useState(true);
  
  // Chuyển đổi specs từ JSON sang object để render
  const specs = product.specs && typeof product.specs === 'object' && !Array.isArray(product.specs) 
                ? product.specs 
                : {};

  useEffect(() => {
    product.images.forEach((img) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img;
      document.head.appendChild(link);
    });
  }, [product]);

  return (
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 md:p-6">
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* Product Images - Enhanced Mobile Experience */}
        <div className="order-1">
          <div className="border rounded-lg p-2 mb-4 bg-white shadow-sm">
            <div className="relative aspect-square overflow-hidden rounded-md">
              {imageLoading && <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-md" />}
              <Image 
                src={activeImage}
                alt={`${product.name} - Thiết bị PCCC chính hãng`}
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }} 
                className="rounded-md transition-opacity duration-300"
                onLoad={() => setImageLoading(false)}
                priority
                quality={85}
              />
            </div>
          </div>
          <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
            {product.images.map((img, index) => (
              <div 
                key={img} 
                onClick={() => { setActiveImage(img); setImageLoading(true); }}
                className={`flex-shrink-0 w-20 h-20 border-2 rounded-md p-1 cursor-pointer transition-all ${activeImage === img ? 'border-blue-primary shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <Image 
                  src={img} 
                  alt={`${product.name} ảnh ${index + 1}`}
                  width={80} height={80} 
                  className="object-contain w-full h-full rounded-sm"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info - Enhanced Typography and Spacing */}
        <div className="order-2 space-y-4 sm:space-y-6">
          <header>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-primary leading-tight">{product.name}</h1>
            <p className="text-sm text-gray-600 mt-2">SKU: <span className="font-mono">{product.sku}</span></p>
          </header>
          <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border border-red-200">
            <p className="text-xl sm:text-2xl font-bold text-red-600">Giá: <a href="tel:0987822311" className="ml-2 hover:underline">Liên hệ</a></p>
          </div>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border-l-4 border-green-primary prose prose-sm max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: product.short_desc }} />
          <ProductActions productId={product.id} />
        </div>
      </div>

      {/* Product Details Tabs - Enhanced Mobile UX */}
      <section className="mt-8 sm:mt-12 lg:mt-16">
        <div className="border-b border-gray-200 overflow-x-auto">
          <nav className="flex space-x-0 min-w-max" role="tablist">
            {[
              { key: 'description', label: 'Mô tả chi tiết', icon: '📝' },
              { key: 'specs', label: 'Thông số kỹ thuật', icon: '⚙️' },
              { key: 'reviews', label: 'Đánh giá', icon: '⭐' }
            ].map((tab) => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={`flex items-center py-3 px-4 sm:px-6 font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-200 border-b-2 ${activeTab === tab.key ? 'border-blue-primary text-blue-primary bg-blue-50' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                <span className="mr-2 text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="py-6">
          {activeTab === 'description' && (
            <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
          )}
          {activeTab === 'specs' && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(specs).map(([key, value]) => (
                    <tr key={key} className="border-b">
                      <th className="px-4 py-2 font-medium text-left bg-gray-50 w-1/3">{key}</th>
                      <td className="px-4 py-2">{String(value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 'reviews' && <ProductReviews />}
        </div>
      </section>

      <section className="mt-8 sm:mt-12">
        <RelatedProducts currentProductId={product.id} categorySlug={product.categorySlug} />
      </section>
    </div>
  );
}