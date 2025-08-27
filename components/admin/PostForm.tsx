// components/admin/PostForm.tsx
import Link from 'next/link';
import { NewsArticle } from '@/data/news';

interface PostFormProps {
  post?: NewsArticle | null;
  formAction: (formData: FormData) => Promise<void>;
}

export default function PostForm({ post, formAction }: PostFormProps) {
  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Tiêu đề bài viết</label>
        <input type="text" id="title" name="title" defaultValue={post?.title} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug (URL)</label>
        <input type="text" id="slug" name="slug" defaultValue={post?.slug} required readOnly={!!post} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 disabled:opacity-70" />
        { !post && <p className="text-xs text-gray-500 mt-1">Quan trọng: Không thể thay đổi sau khi tạo. Dùng chữ thường, không dấu, ngăn cách bằng dấu gạch ngang.</p> }
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Ngày đăng</label>
          <input type="date" id="date" name="date" defaultValue={post?.date.toISOString().substring(0, 10)} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Link ảnh đại diện</label>
          <input type="text" id="imageUrl" name="imageUrl" defaultValue={post?.imageUrl} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
        </div>
      </div>
      <div>
        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">Tóm tắt ngắn (Excerpt)</label>
        <textarea id="excerpt" name="excerpt" rows={3} defaultValue={post?.excerpt} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Nội dung đầy đủ (HTML)</label>
        <textarea id="content" name="content" rows={15} defaultValue={post?.content} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-mono"></textarea>
        <p className="text-xs text-gray-500 mt-1">Nâng cấp sau: Tích hợp trình soạn thảo Rich Text Editor.</p>
      </div>
      <div className="flex justify-end gap-4 pt-4">
        <Link href="/posts" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Hủy</Link>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">{post ? 'Cập nhật' : 'Tạo mới'}</button>
      </div>
    </form>
  );
}