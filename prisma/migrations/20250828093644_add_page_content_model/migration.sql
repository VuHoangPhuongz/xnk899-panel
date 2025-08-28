/*
  Warnings:

  - You are about to drop the `CompanyProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FacilitiesPage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Machinery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Page` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."CompanyProfile";

-- DropTable
DROP TABLE "public"."FacilitiesPage";

-- DropTable
DROP TABLE "public"."Machinery";

-- DropTable
DROP TABLE "public"."Page";

-- CreateTable
CREATE TABLE "public"."PageContent" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageContent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PageContent_slug_key" ON "public"."PageContent"("slug");
