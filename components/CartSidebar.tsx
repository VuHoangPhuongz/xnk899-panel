'use client';

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const CartSidebar = () => {
  const { isCartOpen, toggleCart, cartItems, removeFromCart, cartCount } = useCart();

  // Vì giá là "Liên hệ", chúng ta sẽ hiển thị text thay vì tính tổng
  const subtotalText = "Liên hệ";

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Lớp phủ mờ */}
      <div 
        className="absolute inset-0 bg-black/60"
        onClick={() => toggleCart(false)}
      ></div>

      {/* Nội dung giỏ hàng */}
      <div className="relative h-full w-full max-w-sm ml-auto bg-white flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-xl font-bold text-blue-primary">Giỏ Hàng Của Bạn ({cartCount})</h3>
            <button 
              onClick={() => toggleCart(false)}
              className="text-2xl text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="flex-grow p-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">Giỏ hàng của bạn đang trống.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center space-x-4">
                  <Image src={item.images[0]} alt={item.name} width={80} height={80} className="rounded-md border object-cover"/>
                  <div className="flex-grow">
                    <Link href={`/san-pham/${item.id}`} className="font-semibold text-sm hover:text-green-primary" onClick={() => toggleCart(false)}>
                      {item.name}
                    </Link>
                    <p className="text-xs text-gray-500">Số lượng: {item.quantity}</p>
                    <p className="font-bold text-green-primary text-sm">Liên hệ</p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t">
            <div className="flex justify-between items-center font-bold text-lg">
                <span>Tổng cộng:</span>
                <span className="text-green-primary">{subtotalText}</span>
            </div>
            <Link 
              href="/lien-he"
              onClick={() => toggleCart(false)}
              className="block w-full text-center bg-green-primary text-white p-3 rounded-lg mt-4 font-bold uppercase hover:bg-blue-primary transition-colors"
            >
              Gửi yêu cầu báo giá
            </Link>
        </div>
      </div>
      {/* Thêm keyframes cho animation */}
      <style jsx>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CartSidebar;