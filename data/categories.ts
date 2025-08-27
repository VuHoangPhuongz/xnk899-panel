// data/categories.ts

// Định nghĩa kiểu dữ liệu cho một danh mục
export type Category = {
  name: string;
  slug: string;
};

// Mảng chứa tất cả các danh mục sản phẩm
export const categories: Category[] = [
    { name: 'Tất cả sản phẩm', slug: 'all' },
    { name: 'Rèm/Màn cuốn ngăn cháy', slug: 'rem' },
    { name: 'Kính chống cháy', slug: 'kinh-chong-chay' },
    { name: 'Cửa thép chống cháy', slug: 'cua-thep' },
    { name: 'Tấm Panel chống cháy', slug: 'panel' },
    { name: 'Tấm MGO chống cháy', slug: 'mgo' },
];