// components/admin/AddPartnerForm.tsx
'use client';
import { useState, useRef } from 'react';
import { createPartner } from '@/lib/actions';
import ImageUploader from './ImageUploader';
import Image from 'next/image';

export default function AddPartnerForm() {
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (formData: FormData) => {
    await createPartner(formData);
    formRef.current?.reset();
    setLogoUrl(null);
  };

  return (
    <form action={handleSubmit} ref={formRef} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Logo Đối Tác</label>
        {!logoUrl ? (
          <ImageUploader onUpload={(url) => setLogoUrl(url)} />
        ) : (
          <div className="relative border rounded-lg p-2 w-40 h-24 flex items-center justify-center">
            <Image src={logoUrl} alt="Logo đã tải lên" width={120} height={80} className="object-contain" />
            <button
              type="button"
              onClick={() => setLogoUrl(null)}
              className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
            >&times;</button>
          </div>
        )}
        <input type="hidden" name="logoUrl" value={logoUrl || ''} />
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên Đối Tác (Alt Text)</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!logoUrl}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          Thêm Đối Tác
        </button>
      </div>
    </form>
  );
}