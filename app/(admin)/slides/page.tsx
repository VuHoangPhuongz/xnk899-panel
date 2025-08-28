// app/(admin)/slides/page.tsx
import { getHeroSlides } from "@/lib/actions";
import AddSlideForm from "@/components/admin/AddSlideForm";
import SlideList from "@/components/admin/SlideList";

export default async function SlidesPage() {
  const slides = await getHeroSlides();

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Thêm Slide Mới</h1>
        <AddSlideForm />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Danh sách Slide Hiện Tại</h1>
        <SlideList initialSlides={slides} />
      </div>
    </div>
  );
}