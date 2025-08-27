// app/api/upload/route.ts
import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');

  if (!filename || !request.body) {
    return NextResponse.json({ message: 'No filename provided.' }, { status: 400 });
  }

  try {
    const blob = await put(filename, request, {
      access: 'public',
      multipart: true, // Quan trọng cho Next.js 14+
    });
    return NextResponse.json(blob);
  } catch (error) {
    console.error("Lỗi từ Vercel Blob:", error);
    // Trả về một JSON lỗi rõ ràng
    return NextResponse.json({ message: 'Upload to Vercel Blob failed.' }, { status: 500 });
  }
}