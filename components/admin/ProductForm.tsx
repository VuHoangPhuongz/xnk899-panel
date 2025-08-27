// components/admin/ProductForm.tsx
'use client';

import { useState, useTransition } from 'react';
import { Product } from '@prisma/client';
import Link from 'next/link';
import Image from 'next/image';
import ImageUploader from './ImageUploader';
import Editor from './Editor';

import { categories } from '@/data/categories';
const productCategories = categories.filter(c => c.slug !== 'all');

interface Spec {
  key: string;
  value: string;
}

interface ProductFormProps {
  product?: Product | null;
  formAction: (data: any) => Promise<void>;
}

export default function ProductForm({ product, formAction }: ProductFormProps) {
  const [name, setName] = useState(product?.name || '');
  const [slug, setSlug] = useState(product?.id || '');
  const [sku, setSku] = useState(product?.sku || '');
  const [price, setPrice] = useState<number | ''>(product?.price ?? '');
  const [categorySlug, setCategorySlug] = useState(product?.categorySlug || '');
  const [category, setCategory] = useState(product?.category || '');
  const [shortDesc, setShortDesc] = useState(product?.short_desc || '');
  const [description, setDescription] = useState(product?.description || '');
  const [images, setImages] = useState<string[]>(product?.images || []);
  const [specs, setSpecs] = useState<Spec[]>(
    product && typeof product.specs === 'object' && !Array.isArray(product.specs)
      ? Object.entries(product.specs).map(([key, value]) => ({ key, value: String(value) }))
      : [{ key: '', value: '' }]
  );
  
  const [isPending, startTransition] = useTransition();

  const handleSpecChange = (index: number, field: 'key' | 'value', value: string) => {
    const newSpecs = [...specs];
    newSpecs[index][field] = value;
    setSpecs(newSpecs);
  };
  const addSpec = () => setSpecs([...specs, { key: '', value: '' }]);
  const removeSpec = (index: number) => setSpecs(specs.filter((_, i) => i !== index));
  const specsAsObject = specs.reduce((acc, spec) => {
    if (spec.key) acc[spec.key] = spec.value;
    return acc;
  }, {} as Record<string, string>);

  const handleImageUpload = (url: string) => setImages([...images, url]);
  const removeImage = (index: number) => setImages(images.filter((_, i) => i !== index));

  const handleSubmit = () => {
    const productData = {
      name, slug, sku, price: price === '' ? null : Number(price),
      categorySlug, category, short_desc: shortDesc, description,
      images, specs: specsAsObject,
    };
    
    startTransition(() => {
      formAction(productData);
    });
  };

  return (
    <form action={handleSubmit} className="space-y-8 p-6 bg-white shadow-lg rounded-lg"> {/* Thêm padding, shadow */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Cột trái */}
        <div className="space-y-5"> {/* Tăng khoảng cách */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Tên sản phẩm</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="input-field" />
          </div>
          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
            <input type="text" id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} required readOnly={!!product} className="input-field bg-gray-100 disabled:opacity-75 cursor-not-allowed" />
            { !product && <p className="text-xs text-gray-500 mt-1">Quan trọng: Không thể thay đổi sau khi tạo. Dùng chữ thường, không dấu, ngăn cách bằng dấu gạch ngang (ví dụ: kinh-chong-chay-e60).</p> }
          </div>
          <div>
            <label htmlFor="sku" className="block text-sm font-medium text-gray-700 mb-1">SKU</label>
            <input type="text" id="sku" value={sku} onChange={(e) => setSku(e.target.value)} required className="input-field" />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Giá (để trống nếu là 'Liên hệ')</label>
            <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value === '' ? '' : Number(e.target.value))} className="input-field" />
          </div>
          <div>
            <label htmlFor="categorySlug" className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
            <select
              id="categorySlug" value={categorySlug}
              onChange={(e) => {
                const selectedSlug = e.target.value;
                setCategorySlug(selectedSlug);
                setCategory(productCategories.find(c => c.slug === selectedSlug)?.name || '');
              }}
              required className="input-field"
            >
              <option value="">-- Chọn danh mục --</option>
              {productCategories.map(cat => (
                <option key={cat.slug} value={cat.slug}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Cột phải */}
        <div className="space-y-5"> {/* Tăng khoảng cách */}
          <div>
            <label htmlFor="short_desc" className="block text-sm font-medium text-gray-700 mb-1">Mô tả ngắn</label>
            <textarea id="short_desc" value={shortDesc} onChange={(e) => setShortDesc(e.target.value)} rows={5} required className="input-field"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả chi tiết</label>
            <Editor value={description} onChange={setDescription} />
          </div>
        </div>
      </div>
      
      {/* Quản lý ảnh */}
      <div className="pt-6 border-t border-gray-200"> {/* Thêm border-t */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Hình ảnh sản phẩm</h3> {/* Tăng cỡ chữ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-6"> {/* Tăng số cột, khoảng cách */}
            {images.map((url, index) => (
              <div key={index} className="relative group aspect-square rounded-md overflow-hidden border border-gray-200 shadow-sm">
                <Image src={url} alt={`Ảnh ${index + 1}`} fill style={{ objectFit: 'cover' }} className="transition-transform group-hover:scale-105" />
                <button type="button" onClick={() => removeImage(index)} className="absolute top-1 right-1 bg-red-600 text-white rounded-full h-7 w-7 flex items-center justify-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 hover:bg-red-700">X</button>
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div> {/* Overlay khi hover */}
              </div>
            ))}
        </div>
        <ImageUploader onUpload={handleImageUpload} />
      </div>

      {/* Thông số kỹ thuật */}
      <div className="pt-6 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Thông số kỹ thuật</h3>
        <div className="space-y-3 mb-4"> {/* Tăng khoảng cách */}
            {specs.map((spec, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center gap-3"> {/* Responsive flex */}
                    <input type="text" placeholder="Tên thông số" value={spec.key} onChange={(e) => handleSpecChange(index, 'key', e.target.value)} className="input-field sm:w-1/3 w-full" />
                    <input type="text" placeholder="Giá trị" value={spec.value} onChange={(e) => handleSpecChange(index, 'value', e.target.value)} className="input-field sm:w-2/3 w-full" />
                    <button type="button" onClick={() => removeSpec(index)} className="btn-icon-remove w-full sm:w-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 01-2 0v6a1 1 0 112 0V8z" clipRule="evenodd" />
                      </svg>
                    </button>
                </div>
            ))}
        </div>
        <button type="button" onClick={addSpec} className="btn-text-icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Thêm thông số
        </button>
      </div>

      <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
        <Link href="/products" className="btn-secondary">Hủy</Link>
        <button type="submit" className="btn-primary" disabled={isPending}>
          {isPending ? 'Đang lưu...' : (product ? 'Cập nhật' : 'Tạo mới')}
        </button>
      </div>
    </form>
  );
}