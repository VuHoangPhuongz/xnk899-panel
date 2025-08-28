// app/api/upload/route.ts (Phiên bản đã sửa)
import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  // Kiểm tra xem có tên tệp và body không
  if (!filename || !request.body) {
    return NextResponse.json(
      { message: 'Không có tên tệp hoặc nội dung tệp được cung cấp.' },
      { status: 400 }
    );
  }

  try {
    // Sửa ở đây: Truyền request.body và xóa multipart: true
    const blob = await put(filename, request.body, {
      access: 'public',
    });
    
    // Trả về thông tin blob (bao gồm URL)
    return NextResponse.json(blob);
  } catch (error) {
    console.error("Lỗi khi tải lên Vercel Blob:", error);
    return NextResponse.json(
      { message: 'Tải lên Vercel Blob thất bại.' },
      { status: 500 }
    );
  }
}