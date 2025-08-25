'use client';

import { useState } from "react";
import { useCart } from "@/context/CartContext";

type ProductActionsProps = {
  productId: string;
}

const ProductActions = ({ productId }: ProductActionsProps) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Cập nhật lại hàm addToCart trong Context để nhận thêm số lượng
    // addToCart(productId, quantity); 
    alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
  };

  return (
    <div className="not-prose mt-6">
        <div className="flex items-center space-x-4 mb-4">
            <label className="font-semibold">Số lượng:</label>
            <div className="flex items-center border rounded-md">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-1 text-lg">-</button>
                <input type="number" value={quantity} readOnly className="w-12 text-center border-l border-r" />
                <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-1 text-lg">+</button>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
            <button 
                onClick={handleAddToCart}
                className="flex-1 text-center bg-red-600 text-white px-6 py-3 rounded-md font-bold uppercase hover:bg-red-700 transition-colors"
            >
                <i className="fa-solid fa-cart-plus mr-2"></i> Thêm vào giỏ hàng
            </button>
            <a 
                href="https://zalo.me/0384358988 " 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center bg-blue-500 text-white px-6 py-3 rounded-md font-bold uppercase hover:bg-blue-600 transition-colors no-underline"
            >
                Tư Vấn Zalo
            </a>
        </div>
    </div>
  );
};

export default ProductActions;