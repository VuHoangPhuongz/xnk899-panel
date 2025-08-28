// app/(admin)/pages/edit/[slug]/page.tsx
import { getPageBySlug } from '@/lib/actions';
import PageEditor from '@/components/admin/PageEditor';
import { notFound } from 'next/navigation';

export default async function EditPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">
        Chỉnh sửa trang: <span className="text-blue-600">{page.title}</span>
      </h1>
      <PageEditor page={page} />
    </div>
  );
}