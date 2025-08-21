// app/san-pham/page.tsx
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function SanPhamPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const initialCategory = (searchParams.category as string) || 'all';

  const filteredProducts =
    initialCategory === 'all'
      ? products
      : products.filter(p => p.categorySlug === initialCategory);

  return (
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
