// create-admin.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const email = 'phuongcangm@gmail.com'; // << Thay bằng email thật của bạn
  const password = 'HoangPhuongA1.'; // << Thay bằng mật khẩu an toàn

  const hashedPassword = await bcrypt.hash(password, 10);

  const adminUser = await prisma.user.create({
    data: {
      email: email,
      password: hashedPassword,
      name: 'Admin',
    },
  });

  console.log('Tạo tài khoản admin thành công:', adminUser);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });