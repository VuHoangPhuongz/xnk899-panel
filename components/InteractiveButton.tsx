// components/InteractiveButton.tsx

'use client'; // <-- Bước quan trọng nhất: Đánh dấu đây là Client Component

export default function InteractiveButton() {
  // Toàn bộ logic tương tác nằm ở đây
  return (
    <button onClick={() => alert('Button clicked!')}>
      Click Me
    </button>
  );
}