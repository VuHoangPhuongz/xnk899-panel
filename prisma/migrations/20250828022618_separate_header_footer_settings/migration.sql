/*
  Warnings:

  - You are about to drop the column `addressHQ` on the `SiteSettings` table. All the data in the column will be lost.
  - You are about to drop the column `addressOffice` on the `SiteSettings` table. All the data in the column will be lost.
  - You are about to drop the column `copyrightYear` on the `SiteSettings` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `SiteSettings` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumbers` on the `SiteSettings` table. All the data in the column will be lost.
  - You are about to drop the `HeroSlide` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "public"."SiteSettings" DROP COLUMN "addressHQ",
DROP COLUMN "addressOffice",
DROP COLUMN "copyrightYear",
DROP COLUMN "email",
DROP COLUMN "phoneNumbers",
ADD COLUMN     "footerAddressHQ" TEXT NOT NULL DEFAULT 'Địa chỉ trụ sở',
ADD COLUMN     "footerAddressOffice" TEXT NOT NULL DEFAULT 'Địa chỉ văn phòng',
ADD COLUMN     "footerCopyrightYear" TEXT NOT NULL DEFAULT '2024',
ADD COLUMN     "footerEmail" TEXT NOT NULL DEFAULT 'email@example.com',
ADD COLUMN     "footerPhoneNumbers" TEXT NOT NULL DEFAULT 'SĐT Footer',
ADD COLUMN     "headerPhoneNumbers" TEXT NOT NULL DEFAULT 'SĐT Header';

-- DropTable
DROP TABLE "public"."HeroSlide";
