// components/admin/ProductForm.tsx
'use client';

import { useState } from 'react';
import { Product, categories } from '@/data/products'; // Lấy danh sách category từ file data
import Link from 'next/link';
// Bỏ category "Tất cả sản phẩm"
const productCategories = categories.filter(c => c.slug !== 'all');

interface ProductFormProps {
  product?: Product | null; // Dữ liệu sản phẩm để chỉnh sửa (optional)
  formAction: (formData: FormData) => Promise<void>; // Server action để gọi
}

export default function ProductForm({ product, formAction }: ProductFormProps) {
  // State để quản lý các thông số kỹ thuật (specs)
  const [specs, setSpecs] = useState(
    product ? Object.entries(product.specs).map(([key, value]) => ({ key, value })) : [{ key: '', value: '' }]
  );

  const handleSpecChange = (index: number, field: 'key' | 'value', value: string) => {
    const newSpecs = [...specs];
    newSpecs[index][field] = value;
    setSpecs(newSpecs);
  };

  const addSpec = () => {
    setSpecs([...specs, { key: '', value: '' }]);
  };

  const removeSpec = (index: number) => {
    const newSpecs = specs.filter((_, i) => i !== index);
    setSpecs(newSpecs);
  };

  // Chuyển đổi specs array sang object trước khi submit
  const specsAsObject = specs.reduce((acc, spec) => {
    if (spec.key) acc[spec.key] = spec.value;
    return acc;
  }, {} as Record<string, string>);

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cột trái */}
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
            <input type="text" id="name" name="name" defaultValue={product?.name} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID (URL Slug)</label>
            <input type="text" id="id" name="id" defaultValue={product?.id} required readOnly={!!product} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 disabled:opacity-70" />
            { !product && <p className="text-xs text-gray-500 mt-1">Quan trọng: Không thể thay đổi sau khi tạo. Dùng chữ thường, không dấu, ngăn cách bằng dấu gạch ngang (ví dụ: kinh-chong-chay-e60).</p> }
          </div>
          <div>
            <label htmlFor="sku" className="block text-sm font-medium text-gray-700">SKU</label>
            <input type="text" id="sku" name="sku" defaultValue={product?.sku} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Giá (để trống nếu là 'Liên hệ')</label>
            <input type="number" id="price" name="price" defaultValue={product?.price ?? ''} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label htmlFor="categorySlug" className="block text-sm font-medium text-gray-700">Danh mục</label>
            <select
              id="categorySlug"
              name="categorySlug"
              defaultValue={product?.categorySlug}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              // Tự động điền tên danh mục khi slug thay đổi
              onChange={(e) => {
                const selectedCategory = productCategories.find(c => c.slug === e.target.value);
                const categoryNameInput = document.getElementById('category') as HTMLInputElement;
                if (categoryNameInput && selectedCategory) {
                  categoryNameInput.value = selectedCategory.name;
                }
              }}
            >
              <option value="">-- Chọn danh mục --</option>
              {productCategories.map(cat => (
                <option key={cat.slug} value={cat.slug}>{cat.name}</option>
              ))}
            </select>
             {/* Input ẩn để lưu tên danh mục */}
            <input type="hidden" id="category" name="category" defaultValue={product?.category || productCategories.find(c => c.slug === product?.categorySlug)?.name || ''} />
          </div>
          <div>
             <label htmlFor="images" className="block text-sm font-medium text-gray-700">Link ảnh (cách nhau bằng dấu phẩy)</label>
            <textarea id="images" name="images" rows={3} defaultValue={product?.images.join(', ')} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
            <p className="text-xs text-gray-500 mt-1">Ví dụ: /anh/anh-1.webp, /anh/anh-2.webp. (Nâng cấp sau: Tích hợp upload ảnh).</p>
          </div>
        </div>

        {/* Cột phải */}
        <div className="space-y-4">
          <div>
            <label htmlFor="short_desc" className="block text-sm font-medium text-gray-700">Mô tả ngắn</label>
            <textarea id="short_desc" name="short_desc" rows={5} defaultValue={product?.short_desc} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Mô tả chi tiết (HTML)</label>
            <textarea id="description" name="description" rows={10} defaultValue={product?.description} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-mono"></textarea>
            <p className="text-xs text-gray-500 mt-1">Nâng cấp sau: Tích hợp trình soạn thảo Rich Text Editor.</p>
          </div>
        </div>
      </div>
      
      {/* Thông số kỹ thuật */}
      <div className="pt-4 border-t">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Thông số kỹ thuật</h3>
        <div id="specs-container" className="space-y-2">
            {specs.map((spec, index) => (
                <div key={index} className="flex items-center gap-2">
                    <input type="text" placeholder="Tên thông số" value={spec.key} onChange={(e) => handleSpecChange(index, 'key', e.target.value)} className="w-1/3 border border-gray-300 rounded-md shadow-sm p-2" />
                    <input type="text" placeholder="Giá trị" value={spec.value} onChange={(e) => handleSpecChange(index, 'value', e.target.value)} className="w-2/3 border border-gray-300 rounded-md shadow-sm p-2" />
                    <button type="button" onClick={() => removeSpec(index)} className="text-red-500 p-2 rounded-md hover:bg-red-100">-</button>
                </div>
            ))}
        </div>
        <input type="hidden" name="specs" value={JSON.stringify(specsAsObject)} />
        <button type="button" onClick={addSpec} className="mt-2 text-sm text-blue-600 hover:underline">+ Thêm thông số</button>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <Link href="/products" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Hủy</Link>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">{product ? 'Cập nhật' : 'Tạo mới'}</button>
      </div>
    </form>
  );
}