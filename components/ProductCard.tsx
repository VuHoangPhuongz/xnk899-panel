// components/ProductCard.tsx
import Link from 'next/link';
import Image from 'next/image';

// Định nghĩa kiểu dữ liệu cho props, khớp với dữ liệu từ DB
type ProductCardProps = {
  product: {
    id: string;
    name: string;
    images: string[];
    short_desc: string;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = (product.images && product.images[0]) 
                   ? product.images[0] 
                   : 'https://via.placeholder.com/400x300.png?text=No+Image';

  return (
    <Link href={`/san-pham/${product.id}`} className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-56">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 truncate group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {product.short_desc}
        </p>
      </div>
    </Link>
  );
}