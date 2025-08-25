'use client';

import { products } from '@/data/products';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type SearchOverlayProps = {
  onClose: () => void;
};

const SearchOverlay = ({ onClose }: SearchOverlayProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<typeof products>([]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }
    const foundProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(foundProducts);
  }, [searchTerm]);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 pt-[15vh]">
      <div className="relative w-full max-w-2xl">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Tìm kiếm sản phẩm..."
          className="w-full p-4 rounded-lg text-lg border-2 border-green-primary focus:ring-2 focus:ring-green-300 outline-none"
          autoFocus
        />
        <button
          onClick={onClose}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl text-gray-400 hover:text-gray-700"
        >
          <i className="fas fa-times"></i>
        </button>
        {searchTerm && (
          <div className="bg-white mt-2 rounded-lg max-h-[50vh] overflow-y-auto">
            {results.length > 0 ? (
              results.map(product => (
                <Link
                  key={product.id}
                  href={`/san-pham/${product.id}`}
                  onClick={onClose}
                  className="block p-4 hover:bg-gray-100 border-b last:border-b-0"
                >
                  {product.name}
                </Link>
              ))
            ) : (
              <div className="p-4 text-gray-500">Không tìm thấy sản phẩm nào.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;