'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Product, products } from '@/data/products';

// Định nghĩa kiểu dữ liệu cho một sản phẩm trong giỏ hàng (thêm thuộc tính quantity)
export interface CartItem extends Product {
  quantity: number;
}

// Định nghĩa kiểu dữ liệu cho Context
interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleCart: (isOpen?: boolean) => void;
  cartCount: number;
}

// Tạo Context với giá trị mặc định
const CartContext = createContext<CartContextType | undefined>(undefined);

// Tạo Provider để "bọc" ứng dụng
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load giỏ hàng từ localStorage khi ứng dụng khởi chạy lần đầu
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('shoppingCart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      localStorage.removeItem('shoppingCart');
    }
  }, []);

  // Lưu giỏ hàng vào localStorage mỗi khi có sự thay đổi
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleCart = useCallback((isOpen?: boolean) => {
    setIsCartOpen(prev => typeof isOpen === 'boolean' ? isOpen : !prev);
  }, []);

  const addToCart = useCallback((productId: string) => {
    const productToAdd = products.find(p => p.id === productId);
    if (!productToAdd) return;

    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === productId);
      if (existingItem) {
        // Nếu sản phẩm đã có, tăng số lượng
        return prevItems.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Nếu chưa có, thêm sản phẩm mới vào giỏ
        return [...prevItems, { ...productToAdd, quantity: 1 }];
      }
    });
    
    // Tự động mở giỏ hàng khi thêm sản phẩm
    toggleCart(true);
  }, [toggleCart]);

  const removeFromCart = useCallback((productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      // Nếu số lượng <= 0, xóa sản phẩm khỏi giỏ
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  }, [removeFromCart]);

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const value = {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Tạo một hook tùy chỉnh để dễ dàng sử dụng context trong các component khác
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};