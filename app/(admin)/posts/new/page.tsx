// app/(admin)/posts/new/page.tsx
import PostForm from '@/components/admin/PostForm';
import { createNewsArticle } from '@/lib/actions';

export default function NewPostPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Soạn bài viết mới</h1>
      <PostForm formAction={createNewsArticle} />
    </div>
  );
}