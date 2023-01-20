/*
  Warnings:

  - You are about to drop the `ProviderCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TypeOfAnswerQuestion" AS ENUM ('OBJECTIVE', 'MULTIPLE_CHOICE');

-- DropTable
DROP TABLE "ProviderCategory";

-- CreateTable
CREATE TABLE "provider_categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "requiredInitialQualification" BOOLEAN NOT NULL DEFAULT false,
    "requiredPeriodicQualification" BOOLEAN NOT NULL DEFAULT false,
    "periodicCheck" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "provider_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions_initial_qualification" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "providerCategoryId" INTEGER NOT NULL,
    "typeOfAnswer" "TypeOfAnswerQuestion" NOT NULL DEFAULT 'OBJECTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "questions_initial_qualification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "provider_categories_name_key" ON "provider_categories"("name");

-- AddForeignKey
ALTER TABLE "questions_initial_qualification" ADD CONSTRAINT "questions_initial_qualification_providerCategoryId_fkey" FOREIGN KEY ("providerCategoryId") REFERENCES "provider_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
