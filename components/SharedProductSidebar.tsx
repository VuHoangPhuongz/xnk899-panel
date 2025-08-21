import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '@/data/products';

const featuredProducts = products.slice(0, 5); // Lấy 5 sản phẩm đầu làm nổi bật

const SharedProductSidebar = () => {
    return (
        <aside className="lg:col-span-1 space-y-8">
            {/* Danh mục sản phẩm */}
            <div className="bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold p-4 bg-gray-100 border-b rounded-t-lg text-blue-primary">DANH MỤC SẢN PHẨM</h3>
                <ul className="space-y-1 p-4 text-sm">
                    {categories.filter(cat => cat.slug !== 'all').map(category => (
                         <li key={category.slug}>
                            <Link href={`/san-pham?category=${category.slug}`} className="block w-full text-left px-4 py-2 rounded-md font-semibold hover:bg-blue-primary hover:text-white transition-colors">
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sản phẩm nổi bật */}
            <div className="bg-white rounded-lg shadow-md">
                 <h3 className="text-lg font-bold p-4 bg-gray-100 border-b rounded-t-lg text-blue-primary">SẢN PHẨM NỔI BẬT</h3>
                 <ul className="space-y-4 p-4">
                    {featuredProducts.map(product => (
                        <li key={product.id} className="flex items-center space-x-3">
                            <Link href={`/san-pham/${product.id}`} className="flex-shrink-0">
                                <Image src={product.images[0]} alt={product.name} width={64} height={64} className="w-16 h-16 object-cover rounded-md border" />
                            </Link>
                            <div>
                                <h4 className="text-sm font-semibold leading-tight"><Link href={`/san-pham/${product.id}`} className="hover:text-green-primary">{product.name}</Link></h4>
                                <p className="text-sm text-red-600 font-bold">Giá: Liên hệ</p>
                            </div>
                        </li>
                    ))}
                 </ul>
            </div>
        </aside>
    )
}

export default SharedProductSidebar;