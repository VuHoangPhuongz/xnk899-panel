// app/san-pham/page.tsx
import { getProducts } from '@/lib/actions';
import { categories } from '@/data/categories'; // Import danh sách categories để sắp xếp
import ProductCard from '@/components/ProductCard';
import { Product } from '@prisma/client';

export default async function SanPhamPage() {
  // 1. Lấy tất cả sản phẩm từ database
  const allProducts = await getProducts();

  // 2. Tạo một bản đồ thứ tự cho các danh mục
  const displayCategories = categories.filter(cat => cat.slug !== 'all');
  const categoryOrder = new Map(
    displayCategories.map((cat, index) => [cat.slug, index])
  );

  // 3. Sắp xếp mảng sản phẩm dựa trên thứ tự của danh mục
  const sortedProducts = allProducts.sort((a, b) => {
    const orderA = categoryOrder.get(a.categorySlug) ?? Infinity;
    const orderB = categoryOrder.get(b.categorySlug) ?? Infinity;
    return orderA - orderB;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {sortedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
