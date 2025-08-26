// app/(admin)/projects/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getProjects, deleteProject } from '@/lib/actions';
import DeleteProjectButton from '@/components/admin/DeleteProjectButton'; // 1. IMPORT component mới


export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý Dự án</h1>
        <Link 
          href="/projects/new" 
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          + Thêm dự án
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên dự án</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project.slug}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Image src={project.imgSrc} alt={project.title} width={80} height={60} className="object-cover rounded-md"/>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{project.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                  <Link href={`/projects/${project.slug}/edit`} className="text-indigo-600 hover:text-indigo-900">
                    Sửa
                  </Link>
                   <form action={deleteProject.bind(null, project.slug)} style={{ display: 'inline' }}>
                    <DeleteProjectButton />
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}