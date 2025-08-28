-- CreateTable
CREATE TABLE "public"."Page" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CompanyProfile" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "taxId" TEXT NOT NULL,
    "headquartersAddress" TEXT NOT NULL,
    "transactionOffice" TEXT NOT NULL,
    "phoneNumbers" TEXT[],
    "email" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "representativeName" TEXT NOT NULL,
    "representativeTitle" TEXT NOT NULL,
    "productsProvided" TEXT[],
    "servicesProvided" TEXT[],
    "businessPhilosophy" TEXT NOT NULL,
    "developmentStrategy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanyProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FacilitiesPage" (
    "id" TEXT NOT NULL,
    "personnelIntro" TEXT NOT NULL,
    "organizationChartUrl" TEXT NOT NULL,
    "machineryIntro" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FacilitiesPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Machinery" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Machinery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Page_slug_key" ON "public"."Page"("slug");
