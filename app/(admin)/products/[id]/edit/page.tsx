// app/(admin)/products/[id]/edit/page.tsx
import ProductForm from '@/components/admin/ProductForm';
import { getProductById, updateProduct } from '@/lib/actions';
import { notFound } from 'next/navigation';

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await getProductById(id);
  
  if (!product) {
    notFound();
  }

  // Dùng .bind() để truyền sẵn ID vào server action
  const updateProductWithId = updateProduct.bind(null, id);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Chỉnh sửa: {product.name}</h1>
      <ProductForm product={product} formAction={updateProductWithId} />
    </div>
  );
}