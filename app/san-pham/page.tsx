// app/san-pham/page.tsx
import { getProducts } from '@/lib/actions';
import { categories } from '@/data/categories'; // Import danh sách categories
import ProductCard from '@/components/ProductCard';
import SharedProductSidebar from '@/components/SharedProductSidebar'; // Import Sidebar

// Page component giờ sẽ nhận 'searchParams' để biết cần lọc theo category nào
export default async function SanPhamPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  // 1. Lấy category từ URL, nếu không có thì mặc định là 'all'
  const currentCategory = searchParams.category || 'all';

  // 2. Lấy tất cả sản phẩm từ database
  const allProducts = await getProducts();

  // 3. Lọc sản phẩm dựa trên category hiện tại từ URL
  const filteredProducts =
    currentCategory === 'all'
      ? allProducts // Nếu là 'all' thì giữ nguyên tất cả sản phẩm
      : allProducts.filter(
          product => product.categorySlug === currentCategory
        );

  // 4. Sắp xếp danh sách sản phẩm ĐÃ ĐƯỢC LỌC (giữ nguyên logic sắp xếp của bạn)
  const displayCategories = categories.filter(cat => cat.slug !== 'all');
  const categoryOrder = new Map(
    displayCategories.map((cat, index) => [cat.slug, index])
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    const orderA = categoryOrder.get(a.categorySlug) ?? Infinity;
    const orderB = categoryOrder.get(b.categorySlug) ?? Infinity;
    return orderA - orderB;
  });

  return (

      <>
      {/* Danh sách sản phẩm - Cột bên phải */}
        <h1 className="text-3xl font-bold mb-8 pb-4 border-b text-blue-primary">
        Danh sách sản phẩm
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {sortedProducts.length > 0 ? (
            sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Không tìm thấy sản phẩm nào trong danh mục này.
            </p>
        )}
      </div>
       
    
    </>
  );
}
