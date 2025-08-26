// components/admin/ProjectForm.tsx
import Link from 'next/link';

interface Project {
  slug: string;
  title: string;
  imgSrc: string;
  content: string;
}

interface ProjectFormProps {
  project?: Project | null;
  formAction: (formData: FormData) => Promise<void>;
}

export default function ProjectForm({ project, formAction }: ProjectFormProps) {
  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Tên dự án</label>
        <input type="text" id="title" name="title" defaultValue={project?.title} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug (URL)</label>
        <input type="text" id="slug" name="slug" defaultValue={project?.slug} required readOnly={!!project} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 disabled:opacity-70" />
        { !project && <p className="text-xs text-gray-500 mt-1">Quan trọng: Không thể thay đổi sau khi tạo.</p> }
      </div>
       <div>
        <label htmlFor="imgSrc" className="block text-sm font-medium text-gray-700">Link ảnh đại diện</label>
        <input type="text" id="imgSrc" name="imgSrc" defaultValue={project?.imgSrc} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Nội dung chi tiết (HTML)</label>
        <textarea id="content" name="content" rows={10} defaultValue={project?.content} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 font-mono"></textarea>
      </div>
      <div className="flex justify-end gap-4 pt-4">
        <Link href="/projects" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Hủy</Link>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">{project ? 'Cập nhật' : 'Tạo mới'}</button>
      </div>
    </form>
  );
}