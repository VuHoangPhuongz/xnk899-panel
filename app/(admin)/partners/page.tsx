// app/(admin)/partners/page.tsx
import { getPartners, deletePartner } from '@/lib/actions';
import AddPartnerForm from '@/components/admin/AddPartnerForm';
import Image from 'next/image';
import DeletePartnerButton from '@/components/admin/DeletePartnerButton';

export default async function PartnersPage() {
  const partners = await getPartners();

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Thêm Đối Tác Mới</h1>
        <AddPartnerForm />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Danh sách Đối Tác Hiện Tại</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner) => (
            <div key={partner.id} className="relative group border rounded-lg p-4 flex flex-col items-center justify-center aspect-square">
              <Image src={partner.logoUrl} alt={partner.name} width={120} height={80} className="object-contain" />
              <p className="text-xs text-center mt-2 text-gray-600">{partner.name}</p>
              <form action={deletePartner.bind(null, partner.id)} className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <DeletePartnerButton />
              </form>
            </div>
          ))}
        </div>
        {partners.length === 0 && (
          <p className="text-center text-gray-500">Chưa có đối tác nào.</p>
        )}
      </div>
    </div>
  );
}