// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';


const prisma = new PrismaClient();

async function main() {
  console.log('Bắt đầu quá trình seeding...');

  const pages = [
    { slug: 'thu-ngo', title: 'Thư ngỏ / Giới thiệu chung' },
    { slug: 'ho-so-nang-luc', title: 'Hồ sơ năng lực' },
    { slug: 'co-so-vat-chat', title: 'Cơ sở vật chất' },
    { slug: 'chinh-sach-chat-luong', title: 'Chính sách chất lượng' },
    { slug: 'chinh-sach-bao-mat', title: 'Chính sách bảo mật' },
  ];

  for (const page of pages) {
    await prisma.page.upsert({
      where: { slug: page.slug },
      update: {},
      create: {
        slug: page.slug,
        title: page.title,
        content: `<p>Nội dung cho trang <strong>${page.title}</strong>. Vui lòng cập nhật từ trang quản trị.</p>`,
      },
    });
  }
  console.log('Seeding các trang tĩnh hoàn tất.');
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });