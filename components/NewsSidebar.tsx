import Link from 'next/link';
import Image from 'next/image';
import { newsData } from '@/data/news';
import { categories } from '@/data/products';

// Lấy 5 bài viết đầu tiên làm "Bài viết xem nhiều"
const popularArticles = newsData.slice(0, 5);

const NewsSidebar = () => {
    return (
        <aside className="lg:col-span-1 space-y-8 sticky top-28">
            {/* Bài viết xem nhiều */}
            <div className="bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold p-4 bg-gray-100 border-b rounded-t-lg text-blue-primary">BÀI VIẾT XEM NHIỀU</h3>
                <ul className="space-y-4 p-4">
                    {popularArticles.map(article => (
                        <li key={article.id} className="flex items-center space-x-3">
                            <Link href={`/tin-tuc/${article.slug}`} className="flex-shrink-0">
                                <Image 
                                    src={article.imageUrl} 
                                    alt={article.title} 
                                    width={64} 
                                    height={64} 
                                    className="w-16 h-16 object-cover rounded-md border" 
                                />
                            </Link>
                            <div>
                                <h4 className="text-sm font-semibold leading-tight">
                                    <Link href={`/tin-tuc/${article.slug}`} className="hover:text-green-primary">
                                        {article.title}
                                    </Link>
                                </h4>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

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
        </aside>
    );
};

export default NewsSidebar;