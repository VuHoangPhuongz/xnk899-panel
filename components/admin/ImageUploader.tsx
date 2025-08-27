// components/admin/ImageUploader.tsx
'use client';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface ImageUploaderProps {
  onUpload: (url: string) => void;
}

export default function ImageUploader({ onUpload }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);

  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    setUploading(true);

    try {
      const response = await fetch(
        `/api/upload?filename=${file.name}`,
        {
          method: 'POST',
          body: file,
        },
      );

      const newBlob = await response.json();
      onUpload(newBlob.url);
    } catch (error) {
      console.error('Lỗi khi tải ảnh:', error);
    } finally {
      setUploading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.png', '.gif', '.webp'] }, // Chỉ chấp nhận các định dạng ảnh phổ biến
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`
        flex flex-col items-center justify-center p-8 border-2 rounded-lg text-center transition-all duration-200
        ${isDragActive ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md' : 'border-gray-300 bg-gray-50 text-gray-600 hover:border-blue-400 hover:bg-blue-25'}
        cursor-pointer min-h-[120px]
      `}
    >
      <input {...getInputProps()} />
      {uploading ? (
        <p className="text-lg font-medium text-blue-600">Đang tải lên...</p>
      ) : isDragActive ? (
        <p className="text-lg font-medium">Thả ảnh vào đây...</p>
      ) : (
        <>
          <svg className="w-10 h-10 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a3 3 0 013 3v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4"></path></svg>
          <p className="text-base font-medium">Kéo thả ảnh vào đây, hoặc <span className="text-blue-600 hover:underline">nhấn để chọn tệp</span></p>
          <p className="text-sm text-gray-500 mt-1">Chỉ chấp nhận 1 ảnh. Định dạng: JPG, PNG, GIF, WEBP</p>
        </>
      )}
    </div>
  );
}