'use client';

import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const filteredProducts = useMemo(() => {
    if (initialCategory === 'all') {
      return products;
    }
    return products.filter(p => p.categorySlug === initialCategory);
  }, [initialCategory]);

  return (
    // 👇 THAY ĐỔI CHÍNH: Chúng ta sử dụng Fragment <> thay vì div có nền trắng
    <>
      <h1 className="text-3xl font-bold mb-8 pb-4 border-b text-blue-primary">
        Tất cả sản phẩm
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            Không tìm thấy sản phẩm nào.
          </p>
        )}
      </div>
    </>
  );
}