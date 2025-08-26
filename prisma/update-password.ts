// prisma/update-password.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const emailToUpdate = 'xnk899@gmail.com'; // Email của tài khoản admin cần đổi mật khẩu
  const newPassword = 'PasswordMoiAnToan123!'; // << ĐẶT MẬT KHẨU MỚI Ở ĐÂY

  if (!newPassword) {
    console.error('Lỗi: Mật khẩu mới không được để trống.');
    return;
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  try {
    const updatedUser = await prisma.user.update({
      where: {
        email: emailToUpdate,
      },
      data: {
        password: hashedPassword,
      },
    });
    console.log(`Cập nhật mật khẩu thành công cho user: ${updatedUser.email}`);
  } catch (error) {
    console.error(`Không tìm thấy user với email: ${emailToUpdate}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });