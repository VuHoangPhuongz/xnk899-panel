// components/admin/SlideList.tsx
'use client';
import Image from 'next/image';
import { deleteHeroSlide } from '@/lib/actions';
import { useTransition } from 'react';

type Slide = {
  id: string;
  url: string;
  alt: string;
  order: number;
};

export default function SlideList({ initialSlides }: { initialSlides: Slide[] }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = (id: string) => {
    if (confirm('Bạn có chắc chắn muốn xóa slide này?')) {
      startTransition(() => {
        deleteHeroSlide(id);
      });
    }
  };

  return (
    <div className="space-y-4">
      {initialSlides.map((slide) => (
        <div key={slide.id} className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex items-center gap-4">
            <Image src={slide.url} alt={slide.alt} width={150} height={60} className="object-cover rounded-md" />
            <span className="text-sm font-medium">{slide.alt}</span>
          </div>
          <button
            onClick={() => handleDelete(slide.id)}
            disabled={isPending}
            className="text-red-500 hover:text-red-700 disabled:text-gray-400"
          >
            Xóa
          </button>
        </div>
      ))}
      {initialSlides.length === 0 && (
        <p className="text-center text-gray-500">Chưa có slide nào.</p>
      )}
    </div>
  );
}