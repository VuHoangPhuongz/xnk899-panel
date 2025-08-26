// app/(admin)/profile/page.tsx

export default function ProfilePage() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Hồ sơ của bạn</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tên hiển thị</label>
          <input 
            type="text" 
            defaultValue="Admin User" 
            className="mt-1 block w-full md:w-1/2 border border-gray-300 rounded-md shadow-sm p-2" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            defaultValue="admin@example.com" 
            readOnly 
            className="mt-1 block w-full md:w-1/2 border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100" 
          />
        </div>
        <div>
            <h2 className="text-lg font-semibold mt-6 mb-2">Đổi mật khẩu</h2>
             <div>
                <label className="block text-sm font-medium text-gray-700">Mật khẩu mới</label>
                <input type="password" placeholder="••••••••" className="mt-1 block w-full md:w-1/2 border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
        </div>
        <div className="pt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Cập nhật hồ sơ
          </button>
        </div>
      </div>
    </div>
  );
}