// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

// Import dữ liệu cũ từ các file tĩnh
import { products } from '../data/products';
import { newsData } from '../data/news';
import { projectsData } from '../data/projects';

const prisma = new PrismaClient();

async function main() {
  console.log('Bắt đầu quá trình seeding...');

  // Xóa dữ liệu cũ để tránh trùng lặp khi chạy lại seed
  console.log('Xóa dữ liệu cũ...');
  await prisma.product.deleteMany({});
  await prisma.newsArticle.deleteMany({});
  await prisma.project.deleteMany({});
  await prisma.user.deleteMany({});

  // --- Seed Products ---
  console.log('Seeding sản phẩm...');
  for (const p of products) {
    await prisma.product.create({
      data: {
        ...p,
        id: p.id || undefined // Prisma sẽ tự tạo ID nếu không có
      }
    });
  }

  // --- Seed News Articles ---
  console.log('Seeding tin tức...');
  for (const n of newsData) {
    await prisma.newsArticle.create({
      data: {
        slug: n.slug,
        title: n.title,
        excerpt: n.excerpt,
        imageUrl: n.imageUrl,
        date: new Date(n.date), // Chuyển đổi chuỗi ngày thành đối tượng Date
        content: n.content,
      },
    });
  }

  // --- Seed Projects ---
  console.log('Seeding dự án...');
  for (const p of projectsData) {
    await prisma.project.create({
      data: {
        slug: p.slug,
        title: p.title,
        imgSrc: p.imgSrc,
        content: p.content,
      },
    });
  }

  // --- Tạo tài khoản Admin ---
  console.log('Tạo tài khoản admin...');
  const adminEmail = 'admin@example.com';
  const adminPassword = 'admin123';
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await prisma.user.create({
    data: {
      email: adminEmail,
      password: hashedPassword,
      name: 'Admin User',
    },
  });

  console.log('Seeding hoàn tất!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });