// components/admin/Editor.tsx
'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import LinkExtension from '@tiptap/extension-link'; // Để hỗ trợ link
import ImageExtension from '@tiptap/extension-image'; // Để hỗ trợ ảnh

// Component thanh công cụ cho Editor
const Toolbar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const addImage = () => {
    const url = window.prompt('URL của ảnh');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const Button = ({ onClick, isActive, children }: any) => (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors
        ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
      `}
    >
      {children}
    </button>
  );

  return (
    <div className="flex flex-wrap gap-2 border border-gray-300 rounded-t-lg p-2 bg-gray-50">
      <Button onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive('bold')}>
        Bold
      </Button>
      <Button onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive('italic')}>
        Italic
      </Button>
      <Button onClick={() => editor.chain().focus().toggleStrike().run()} isActive={editor.isActive('strike')}>
        Strike
      </Button>
      <Button onClick={() => editor.chain().focus().toggleBlockquote().run()} isActive={editor.isActive('blockquote')}>
        Blockquote
      </Button>
      <Button onClick={() => editor.chain().focus().setParagraph().run()} isActive={editor.isActive('paragraph')}>
        Paragraph
      </Button>
      <Button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} isActive={editor.isActive('heading', { level: 1 })}>
        H1
      </Button>
      <Button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} isActive={editor.isActive('heading', { level: 2 })}>
        H2
      </Button>
      <Button onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive('bulletList')}>
        List
      </Button>
      <Button onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive('orderedList')}>
        Numbered List
      </Button>
      <Button onClick={setLink} isActive={editor.isActive('link')}>
        Link
      </Button>
      <Button onClick={addImage}>
        Image
      </Button>
      <Button onClick={() => editor.chain().focus().undo().run()}>
        Undo
      </Button>
      <Button onClick={() => editor.chain().focus().redo().run()}>
        Redo
      </Button>
    </div>
  );
};

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function Editor({ value, onChange }: EditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      LinkExtension.configure({
        openOnClick: false,
      }),
      ImageExtension.configure({
        inline: true,
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'prose max-w-none p-4 border border-t-0 border-gray-300 rounded-b-lg min-h-[200px] focus:outline-none focus:ring-1 focus:ring-blue-500', // Thêm focus style
      },
    },
  });

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}