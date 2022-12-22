-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('WORD', 'EXCEL', 'PDF');

-- CreateEnum
CREATE TYPE "DocumentCodeFormat" AS ENUM ('SIMPLE', 'NUMBERED_BY_DEPARTMENT', 'NUMBERED_SEPARATELY_BY_DEPARTMENT');

-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "documentCategoryId" INTEGER;

-- CreateTable
CREATE TABLE "DocumentCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "documentType" "DocumentType" NOT NULL,
    "documentCode" "DocumentCodeFormat" NOT NULL,

    CONSTRAINT "DocumentCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DocumentCategory_name_key" ON "DocumentCategory"("name");

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_documentCategoryId_fkey" FOREIGN KEY ("documentCategoryId") REFERENCES "DocumentCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
