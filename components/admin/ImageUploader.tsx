// components/admin/ImageUploader.tsx
'use client';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

// Định nghĩa props cho component
interface ImageUploaderProps {
  // Hàm sẽ được gọi với URL của ảnh sau khi tải lên thành công
  onUpload: (url: string) => void;
  // (Tùy chọn) Hàm sẽ được gọi nếu có lỗi xảy ra
  onError?: (message: string) => void;
}

export default function ImageUploader({ onUpload, onError }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sử dụng useCallback để tối ưu hóa hàm onDrop
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Reset trạng thái lỗi và bắt đầu tải lên
    setError(null);
    setUploading(true);

    try {
      // Gửi request đến API endpoint
      const response = await fetch(
        `/api/upload?filename=${encodeURIComponent(file.name)}`,
        {
          method: 'POST',
          body: file,
        },
      );

      // Xử lý nếu request không thành công
      if (!response.ok) {
        throw new Error('Server trả về lỗi khi tải ảnh lên.');
      }

      // Lấy URL từ kết quả JSON
      const newBlob = await response.json();
      
      // Gọi hàm callback onUpload với URL nhận được
      onUpload(newBlob.url);

    } catch (err: any) {
      const errorMessage = 'Tải ảnh thất bại. Vui lòng thử lại.';
      console.error(errorMessage, err);
      setError(errorMessage);
      // Gọi callback onError nếu có
      if (onError) {
        onError(errorMessage);
      }
    } finally {
      // Kết thúc trạng thái tải lên
      setUploading(false);
    }
  }, [onUpload, onError]);

  // Cấu hình react-dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'] },
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`
        flex flex-col items-center justify-center p-8 border-2 rounded-lg text-center transition-all duration-200
        ${isDragActive 
          ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-md' 
          : error 
            ? 'border-red-500 bg-red-50 text-red-700' 
            : 'border-dashed border-gray-300 bg-gray-50 text-gray-600 hover:border-blue-400 hover:bg-blue-50'
        }
        cursor-pointer min-h-[150px]
      `}
    >
      <input {...getInputProps()} />
      {uploading ? (
        <p className="text-lg font-medium text-blue-600">⏳ Đang tải lên...</p>
      ) : error ? (
        <>
          <p className="text-lg font-bold text-red-600">🚫 Đã xảy ra lỗi</p>
          <p className="text-sm text-red-500">{error}</p>
          <p className="text-sm text-gray-500 mt-2">Nhấn để thử lại</p>
        </>
      ) : isDragActive ? (
        <p className="text-lg font-medium"> thả ảnh vào đây...</p>
      ) : (
        <>
          <svg className="w-10 h-10 mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6L16 6a3 3 0 013 3v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4"></path></svg>
          <p className="text-base font-medium">Kéo thả ảnh vào đây, hoặc <span className="text-blue-600 hover:underline">nhấn để chọn tệp</span></p>
          <p className="text-sm text-gray-500 mt-1">Hỗ trợ: JPG, PNG, GIF, WEBP</p>
        </>
      )}
    </div>
  );
}