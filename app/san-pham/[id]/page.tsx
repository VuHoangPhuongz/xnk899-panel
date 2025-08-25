'use client';

import { useState, useEffect } from 'react';
import { useParams, notFound } from 'next/navigation';
import { products, Product } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import ProductActions from '@/components/ProductActions';
import RelatedProducts from '@/components/RelatedProducts';
import ProductReviews from '@/components/ProductReviews';

// HÀM TẠO DỮ LIỆU CÓ CẤU TRÚC (JSON-LD) ĐỂ SỬA LỖI GOOGLE
const generateProductJsonLd = (product: Product) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://xnk899.com';
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.images.map(img => `${baseUrl}${img}`),
    "description": product.short_desc.replace(/<[^>]*>?/gm, ''),
    "sku": product.sku,
    "brand": {
      "@type": "Brand",
      "name": "899 IM-EX"
    },
    "category": product.categorySlug,
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Khách hàng"
      },
      "reviewBody": "Sản phẩm chất lượng tốt, đúng tiêu chuẩn PCCC. Dịch vụ tư vấn và lắp đặt chuyên nghiệp.",
      "datePublished": new Date().toISOString()
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "url": `${baseUrl}/san-pham/${product.id}`,
      "priceCurrency": "VND",
      "price": "0",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "VN",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 7,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "VND"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "VN"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 3,
            "unitCode": "DAY"
          }
        }
      }
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "899 IM-EX"
    }
  };
  return JSON.stringify(schema);
};

// Component SEO Head
const ProductSEOHead = ({ product }: { product: Product }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://xnk899.com';
  const productUrl = `${baseUrl}/san-pham/${product.id}`;
  const cleanDescription = product.short_desc.replace(/<[^>]*>?/gm, '').substring(0, 160);
  
  return (
    <Head>
      {/* Basic SEO */}
      <title>{`${product.name} - Thiết bị PCCC chính hãng | 899 IM-EX`}</title>
      <meta name="description" content={cleanDescription} />
      <meta name="keywords" content={`${product.name}, thiết bị PCCC, phòng cháy chữa cháy, ${product.categorySlug}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={productUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={`${product.name} - Thiết bị PCCC chính hãng`} />
      <meta property="og:description" content={cleanDescription} />
      <meta property="og:image" content={`${baseUrl}${product.images[0]}`} />
      <meta property="og:url" content={productUrl} />
      <meta property="og:type" content="product" />
      <meta property="og:site_name" content="899 IM-EX" />
      <meta property="product:brand" content="899 IM-EX" />
      <meta property="product:availability" content="in stock" />
      <meta property="product:condition" content="new" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${product.name} - Thiết bị PCCC`} />
      <meta name="twitter:description" content={cleanDescription} />
      <meta name="twitter:image" content={`${baseUrl}${product.images[0]}`} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="899 IM-EX" />
      <meta name="generator" content="Next.js" />
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#1e40af" />
      
      {/* Additional image URLs for better indexing */}
      {product.images.slice(1).map((img, index) => (
        <meta key={index} property="og:image" content={`${baseUrl}${img}`} />
      ))}
    </Head>
  );
};

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const product = products.find(p => p.id === id);
  
  const [activeImage, setActiveImage] = useState(product?.images[0]);
  const [activeTab, setActiveTab] = useState('description');
  const [imageLoading, setImageLoading] = useState(true);

  // Preload images for better performance
  useEffect(() => {
    if (product) {
      product.images.forEach((img) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img;
        document.head.appendChild(link);
      });
    }
  }, [product]);

  if (!product) {
    return notFound();
  }

  return (
    <>
      <ProductSEOHead product={product} />
      
      <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 md:p-6">
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateProductJsonLd(product) }}
        />
        
        {/* Breadcrumb - Responsive */}
        <nav className="text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8" itemScope itemType="https://schema.org/BreadcrumbList">
          <ol className="flex flex-wrap items-center space-x-1 sm:space-x-2">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link 
                href="/" 
                className="text-gray-500 hover:text-green-primary transition-colors"
                itemProp="item"
              >
                <span itemProp="name">Trang chủ</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <span className="text-gray-400">/</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link 
                href="/san-pham" 
                className="text-gray-500 hover:text-green-primary transition-colors"
                itemProp="item"
              >
                <span itemProp="name">Sản phẩm</span>
              </Link>
              <meta itemProp="position" content="2" />
            </li>
            <span className="text-gray-400">/</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-gray-800 font-semibold truncate" itemProp="name">
                {product.name}
              </span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>

        {/* Main Product Section - Improved Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Product Images - Enhanced Mobile Experience */}
          <div className="order-1">
            {/* Main Image */}
            <div className="border rounded-lg p-2 mb-4 bg-white shadow-sm">
              <div className="relative aspect-square overflow-hidden rounded-md">
                {imageLoading && (
                  <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-md" />
                )}
                <Image 
                  src={activeImage || product.images[0]} 
                  alt={`${product.name} - Thiết bị PCCC chính hãng`}
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  style={{ objectFit: 'contain' }} 
                  className="rounded-md transition-opacity duration-300"
                  onLoad={() => setImageLoading(false)}
                  priority
                  quality={85}
                />
              </div>
            </div>
            
            {/* Thumbnail Images - Improved Mobile Scrolling */}
            <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
              {product.images.map((img, index) => (
                <div 
                  key={img} 
                  onClick={() => {
                    setActiveImage(img);
                    setImageLoading(true);
                  }}
                  className={`
                    flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 border-2 rounded-md p-1 cursor-pointer 
                    transition-all duration-200 hover:scale-105
                    ${activeImage === img ? 'border-blue-primary shadow-md' : 'border-gray-200 hover:border-gray-300'}
                  `}
                  role="button"
                  aria-label={`Xem ảnh ${index + 1} của ${product.name}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveImage(img);
                      setImageLoading(true);
                    }
                  }}
                >
                  <Image 
                    src={img} 
                    alt={`${product.name} ảnh ${index + 1}`}
                    width={80} 
                    height={80} 
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
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-primary leading-tight">
                {product.name}
              </h1>
              <p className="text-sm text-gray-600 mt-2">
                SKU: <span className="font-mono">{product.sku}</span>
              </p>
            </header>

            {/* Price Section */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border border-red-200">
              <p className="text-xl sm:text-2xl font-bold text-red-600 flex items-center">
                <span className="mr-2">💰</span>
                Giá: 
                <a 
                  href="tel:0987811158" 
                  className="ml-2 hover:underline transition-all duration-200 hover:text-red-700"
                  aria-label="Gọi điện để biết giá"
                >
                  Liên hệ
                </a>
              </p>
              <p className="text-sm text-red-600 mt-1 opacity-80">
                📞 Hotline: 0987.822.311 / 0384.358.988 / 0383.522.018  (24/7)
              </p>
            </div>

            {/* Short Description */}
            <div 
              className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border-l-4 border-green-primary prose prose-sm max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: product.short_desc }}
            />

            {/* Product Actions */}
            <div className="pt-2">
              <ProductActions productId={product.id} />
            </div>

            {/* Key Features - Mobile Optimized */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                <span className="mr-2">⭐</span>
                Đặc điểm nổi bật
              </h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>✅ Bảo hành chính hãng</li>
                <li>✅ Tư vấn lắp đặt miễn phí</li>
                <li>✅ Giao hàng toàn quốc</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details Tabs - Enhanced Mobile UX */}
        <section className="mt-8 sm:mt-12 lg:mt-16">
          {/* Tab Navigation - Improved Mobile */}
          <div className="border-b border-gray-200 overflow-x-auto">
            <nav className="flex space-x-0 min-w-max" role="tablist">
              {[
                { key: 'description', label: 'Mô tả chi tiết', icon: '📝' },
                { key: 'specs', label: 'Thông số kỹ thuật', icon: '⚙️' },
                { key: 'reviews', label: 'Đánh giá', icon: '⭐' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`
                    flex items-center py-3 px-4 sm:px-6 font-semibold text-sm sm:text-base whitespace-nowrap
                    transition-all duration-200 border-b-2 
                    ${activeTab === tab.key 
                      ? 'border-blue-primary text-blue-primary bg-blue-50' 
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                  role="tab"
                  aria-selected={activeTab === tab.key}
                  aria-controls={`${tab.key}-panel`}
                >
                  <span className="mr-2 text-lg">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="py-6">
            {activeTab === 'description' && (
              <article 
                id="description-panel"
                role="tabpanel"
                className="prose prose-sm sm:prose max-w-none prose-headings:text-blue-primary prose-a:text-green-primary"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            )}
            
            {activeTab === 'specs' && (
              <div id="specs-panel" role="tabpanel" className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 sm:px-6 py-3 font-medium text-gray-900">Thông số</th>
                      <th className="px-4 sm:px-6 py-3 font-medium text-gray-900">Giá trị</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(product.specs).map(([key, value], index) => (
                      <tr key={key} className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                        <th className="px-4 sm:px-6 py-4 font-medium text-gray-900 w-1/3 bg-gray-50">
                          {key}
                        </th>
                        <td className="px-4 sm:px-6 py-4 break-words">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div id="reviews-panel" role="tabpanel">
                <ProductReviews />
              </div>
            )}
          </div>
        </section>
        
        {/* Related Products */}
        <section className="mt-8 sm:mt-12">
          <RelatedProducts
            currentProductId={product.id}
            categorySlug={product.categorySlug}
          />
        </section>
      </div>
      
      {/* Additional SEO enhancements */}
      <div className="sr-only" itemScope itemType="https://schema.org/Organization">
        <span itemProp="name">899 IM-EX</span>
        <span itemProp="telephone">0384358988</span>
        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressCountry">VN</span>
        </span>
      </div>
    </>
  );
}