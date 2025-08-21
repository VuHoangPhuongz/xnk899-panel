'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  // Xóa hàm formatPrice vì không cần nữa

  return (
    <div className="product-card group bg-white rounded-lg shadow-md overflow-hidden text-center flex flex-col h-full transition-all duration-300 hover:shadow-xl">
      <Link href={`/san-pham/${product.id}`} className="block relative w-full h-56 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-110 transition-transform duration-500"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-semibold text-gray-800 group-hover:text-blue-primary transition-colors flex-grow min-h-[40px]">
          <Link href={`/san-pham/${product.id}`}>{product.name}</Link>
        </h3>
        {/* 👇 THAY ĐỔI NẰM Ở ĐÂY */}
        <p className="text-red-600 font-bold my-2 text-lg">
          Giá: Liên hệ
        </p>
        <button 
          onClick={() => addToCart(product.id)}
          className="mt-auto w-full bg-gradient-to-r from-blue-800 via-green-600 to-transparent  text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-secondary transition-colors"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default ProductCard;