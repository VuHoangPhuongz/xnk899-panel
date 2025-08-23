import { MetadataRoute } from 'next';
import { products } from '@/data/products'; // Import dữ liệu sản phẩm
import { newsData } from '@/data/news';   // Import dữ liệu tin tức

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://xnk899.com'; 

  // Các trang tĩnh
  const staticRoutes = [
    '/',
    '/gioi-thieu',
    '/san-pham',
    '/bao-gia',
    '/du-an',
    '/tin-tuc',
    '/lien-he',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  // Các trang sản phẩm động
  const productRoutes = products.map((product) => ({
    url: `${siteUrl}/san-pham/${product.id}`,
    lastModified: new Date(),
  }));

  // Các trang tin tức động
  const newsRoutes = newsData.map((article) => ({
    url: `${siteUrl}/tin-tuc/${article.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes, ...newsRoutes];
}