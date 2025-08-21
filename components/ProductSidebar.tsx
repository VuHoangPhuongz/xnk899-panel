'use client';

import { categories } from "@/data/products";

type ProductSidebarProps = {
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
};

const ProductSidebar = ({ activeCategory, onCategoryChange }: ProductSidebarProps) => {
  return (
    <aside className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-md sticky top-28">
        <h3 className="text-xl font-bold p-4 bg-blue-primary text-white rounded-t-lg">
          Danh Mục Sản Phẩm
        </h3>
        <ul className="space-y-1 p-4" id="category-sidebar">
          {categories.map(category => (
            <li key={category.slug}>
              <button
                onClick={() => onCategoryChange(category.slug)}
                className={`block w-full text-left px-4 py-3 rounded-md font-semibold transition-colors
                  ${activeCategory === category.slug 
                    ? 'bg-blue-primary text-white' 
                    : 'hover:bg-blue-primary hover:text-white'
                  }`}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ProductSidebar;