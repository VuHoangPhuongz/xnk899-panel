// app/(admin)/settings/page.tsx
import { getSiteSettings, updateSiteSettings } from "@/lib/actions";
import ColorPicker from "@/components/admin/ColorPicker";

export default async function SettingsPage() {
  const settings = await getSiteSettings();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Cài đặt chung</h1>
      <form action={updateSiteSettings} className="space-y-6">
        {/* === HEADER SECTION === */}
        <div className="p-4 border rounded-md">
          <h2 className="text-lg font-semibold mb-3">Header</h2>
          <div>
            {/* Thay đổi name và defaultValue */}
            <label htmlFor="headerPhoneNumbers" className="block text-sm font-medium text-gray-700">Các số điện thoại (ngăn cách bằng /)</label>
            <input type="text" id="headerPhoneNumbers" name="headerPhoneNumbers" defaultValue={settings.headerPhoneNumbers} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="facebookUrl" className="block text-sm font-medium text-gray-700">Link Facebook</label>
              <input type="url" id="facebookUrl" name="facebookUrl" defaultValue={settings.facebookUrl} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
            <div>
              <label htmlFor="youtubeUrl" className="block text-sm font-medium text-gray-700">Link YouTube</label>
              <input type="url" id="youtubeUrl" name="youtubeUrl" defaultValue={settings.youtubeUrl} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
          </div>
        </div>
        
        {/* === FOOTER SECTION === */}
        <div className="p-4 border rounded-md">
          <h2 className="text-lg font-semibold mb-3">Footer</h2>
          <div>
            {/* Thay đổi name và defaultValue */}
            <label htmlFor="footerAddressHQ" className="block text-sm font-medium text-gray-700">Địa chỉ trụ sở</label>
            <input type="text" id="footerAddressHQ" name="footerAddressHQ" defaultValue={settings.footerAddressHQ} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div className="mt-4">
            {/* Thay đổi name và defaultValue */}
            <label htmlFor="footerAddressOffice" className="block text-sm font-medium text-gray-700">Địa chỉ văn phòng</label>
            <input type="text" id="footerAddressOffice" name="footerAddressOffice" defaultValue={settings.footerAddressOffice} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          {/* + Thêm trường SĐT cho Footer */}
          <div className="mt-4">
            <label htmlFor="footerPhoneNumbers" className="block text-sm font-medium text-gray-700">Số điện thoại Footer</label>
            <input type="text" id="footerPhoneNumbers" name="footerPhoneNumbers" defaultValue={settings.footerPhoneNumbers} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div className="mt-4">
            {/* Thay đổi name và defaultValue */}
            <label htmlFor="footerEmail" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="footerEmail" name="footerEmail" defaultValue={settings.footerEmail} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div className="mt-4">
            {/* Thay đổi name và defaultValue */}
            <label htmlFor="footerCopyrightYear" className="block text-sm font-medium text-gray-700">Năm bản quyền</label>
            <input type="text" id="footerCopyrightYear" name="footerCopyrightYear" defaultValue={settings.footerCopyrightYear} className="mt-1 block w-1/4 border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
        </div>

        {/* ... Các phần còn lại giữ nguyên ... */}
        <div className="p-4 border rounded-md">
          <h2 className="text-lg font-semibold mb-3">Tùy chỉnh màu sắc</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ColorPicker
              label="Màu chủ đạo (Primary)"
              name="primaryColor"
              defaultValue={settings.primaryColor || '#1e40af'}
            />
            <ColorPicker
              label="Màu nền chính (Background)"
              name="backgroundColor"
              defaultValue={settings.backgroundColor || '#ffffff'}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Lưu thay đổi</button>
        </div>
      </form>
    </div>
  );
}