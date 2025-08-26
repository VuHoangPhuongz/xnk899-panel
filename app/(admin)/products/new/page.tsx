// app/(admin)/products/new/page.tsx
import ProductForm from '@/components/admin/ProductForm';
import { createProduct } from '@/lib/actions';

export default function NewProductPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Thêm sản phẩm mới</h1>
      <ProductForm formAction={createProduct} />
    </div>
  );
}