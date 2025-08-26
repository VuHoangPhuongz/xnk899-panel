// app/(admin)/projects/[slug]/edit/page.tsx
import ProjectForm from '@/components/admin/ProjectForm';
import { getProjectBySlug, updateProject } from '@/lib/actions';
import { notFound } from 'next/navigation';

export default async function EditProjectPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const project = await getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }

  const updateProjectWithSlug = updateProject.bind(null, slug);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Chỉnh sửa: {project.title}</h1>
      <ProjectForm project={project} formAction={updateProjectWithSlug} />
    </div>
  );
}