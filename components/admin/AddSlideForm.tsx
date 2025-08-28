// components/admin/AddSlideForm.tsx
'use client';
import { useState, useRef } from 'react';
import { createHeroSlide } from '@/lib/actions';
import ImageUploader from './ImageUploader';
import Image from 'next/image';

export default function AddSlideForm() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleUpload = (url: string) => {
    setImageUrl(url);
  };

  const handleSubmit = async (formData: FormData) => {
    await createHeroSlide(formData);
    // Reset form và ảnh sau khi submit
    formRef.current?.reset();
    setImageUrl(null);
  };

  return (
    <form action={handleSubmit} ref={formRef} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Ảnh Slide</label>
        {!imageUrl ? (
          <ImageUploader onUpload={handleUpload} />
        ) : (
          <div className="relative border rounded-lg p-2 w-1/2">
            <Image src={imageUrl} alt="Ảnh đã tải lên" width={400} height={150} className="w-full h-auto rounded-md" />
            <button
              type="button"
              onClick={() => setImageUrl(null)}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
            >&times;</button>
          </div>
        )}
        <input type="hidden" name="url" value={imageUrl || ''} />
      </div>
      <div>
        <label htmlFor="alt" className="block text-sm font-medium text-gray-700">Văn bản thay thế (Alt Text)</label>
        <input
          type="text"
          id="alt"
          name="alt"
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!imageUrl}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          Thêm Slide
        </button>
      </div>
    </form>
  );
}