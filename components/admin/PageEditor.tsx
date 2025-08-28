// components/admin/PageEditor.tsx
'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { updatePage } from '@/lib/actions';
import { useState, useTransition } from 'react';

// Một thanh công cụ đơn giản cho Tiptap
const EditorToolbar = ({ editor }: { editor: any }) => {
  if (!editor) return null;
  return (
    <div className="border p-2 rounded-t-md flex gap-2">
      <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive('bold') ? 'is-active' : ''}>Bold</button>
      <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''}>Italic</button>
      <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive('bulletList') ? 'is-active' : ''}>List</button>
    </div>
  );
};

export default function PageEditor({ page }: { page: { slug: string; content: string } }) {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState('');

  const editor = useEditor({
    extensions: [StarterKit],
    content: page.content,
    editorProps: {
      attributes: {
        class: 'prose max-w-none p-4 border min-h-[400px] rounded-b-md focus:outline-none',
      },
    },
     immediatelyRender: false,
  });

  const handleSave = () => {
    if (!editor) return;
    const html = editor.getHTML();
    startTransition(async () => {
      const result = await updatePage(page.slug, html);
      setMessage(result.message);
      // Ẩn thông báo sau 3 giây
      setTimeout(() => setMessage(''), 3000);
    });
  };

  return (
    <div>
      <EditorToolbar editor={editor} />
      <EditorContent editor={editor} />
      <div className="flex justify-end mt-4">
        <button
          onClick={handleSave}
          disabled={isPending}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isPending ? 'Đang lưu...' : 'Lưu thay đổi'}
        </button>
      </div>
      {message && <p className="text-sm text-green-600 mt-2 text-right">{message}</p>}
    </div>
  );
}