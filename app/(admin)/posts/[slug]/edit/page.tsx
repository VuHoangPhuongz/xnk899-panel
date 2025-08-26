// app/(admin)/posts/[slug]/edit/page.tsx
import PostForm from '@/components/admin/PostForm';
import { getNewsArticleBySlug, updateNewsArticle } from '@/lib/actions';
import { notFound } from 'next/navigation';

export default async function EditPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = await getNewsArticleBySlug(slug);
  
  if (!post) {
    notFound();
  }

  const updatePostWithSlug = updateNewsArticle.bind(null, slug);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Chỉnh sửa: {post.title}</h1>
      <PostForm post={post} formAction={updatePostWithSlug} />
    </div>
  );
}