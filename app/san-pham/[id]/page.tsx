// app/san-pham/[id]/page.tsx
import { getProductById, getProducts } from '@/lib/actions';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductDetailView from '@/components/ProductDetailView'; // Import component client mới
import { Metadata } from 'next';
import { Product } from '@prisma/client';

type ProductDetailPageProps = {
  params: { id: string };
};

// Hàm tạo metadata động cho SEO (chạy trên server)
export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const product = await getProductById(params.id);
  if (!product) {
    return { title: 'Không tìm thấy sản phẩm' };
  }
  
  const cleanDescription = product.short_desc.replace(/<[^>]*>?/gm, '').substring(0, 160);
  const imageUrl = (product.images && product.images[0]) ? product.images[0] : '/default-og-image.jpg';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://xnk899.com';

  return {
    title: `${product.name} - Thiết bị PCCC chính hãng`,
    description: cleanDescription,
    keywords: `${product.name}, thiết bị PCCC, phòng cháy chữa cháy, ${product.categorySlug}`,
    openGraph: {
      title: `${product.name} - Thiết bị PCCC chính hãng`,
      description: cleanDescription,
      images: [`${baseUrl}${imageUrl}`],
      url: `${baseUrl}/san-pham/${product.id}`,
       type: 'article',
       
    },
  };
}

// Hàm này giúp Next.js tạo sẵn các trang tĩnh khi build
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ id: product.id }));
}

// Hàm tạo JSON-LD cho SEO (chạy trên server)
const generateProductJsonLd = (productData: Product) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://xnk899.com';
  return JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": productData.name,
    "image": productData.images.map(img => `${baseUrl}${img}`),
    "description": productData.short_desc.replace(/<[^>]*>?/gm, ''),
    "sku": productData.sku,
    "brand": { "@type": "Brand", "name": "899 IM-EX" },
    //... (có thể thêm các trường khác nếu cần)
  });
};


export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  // Lấy dữ liệu sản phẩm trên server
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Script SEO được render trên server */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateProductJsonLd(product) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <Link href="/" className="text-gray-500 hover:text-blue-600">Trang chủ</Link>
        <span className="mx-2">/</span>
        <Link href="/san-pham" className="text-gray-500 hover:text-blue-600">Sản phẩm</Link>
      </nav>

      {/* Truyền dữ liệu cho Client Component để render và xử lý tương tác */}
      <ProductDetailView product={product} />
    </div>
  );
}