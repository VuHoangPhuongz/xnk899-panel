// app/(admin)/projects/new/page.tsx
import ProjectForm from '@/components/admin/ProjectForm';
import { createProject } from '@/lib/actions';

export default function NewProjectPage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Thêm dự án mới</h1>
      <ProjectForm formAction={createProject} />
    </div>
  );
}