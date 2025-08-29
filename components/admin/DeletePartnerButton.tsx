// components/admin/DeletePartnerButton.tsx
'use client';
import { useFormStatus } from 'react-dom';

export default function DeletePartnerButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
      aria-label="Xóa đối tác"
    >
      &times;
    </button>
  );
}