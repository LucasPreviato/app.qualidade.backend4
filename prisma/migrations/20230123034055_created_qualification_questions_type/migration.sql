/*
  Warnings:

  - Added the required column `initialQualificationQuestionTypeId` to the `InitialQualificationQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InitialQualificationQuestion" ADD COLUMN     "initialQualificationQuestionTypeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "InitialQualificationQuestionType" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "providerCategoryId" INTEGER,
    "initialQualificationId" INTEGER,

    CONSTRAINT "InitialQualificationQuestionType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InitialQualificationQuestion" ADD CONSTRAINT "InitialQualificationQuestion_initialQualificationQuestionT_fkey" FOREIGN KEY ("initialQualificationQuestionTypeId") REFERENCES "InitialQualificationQuestionType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InitialQualificationQuestionType" ADD CONSTRAINT "InitialQualificationQuestionType_providerCategoryId_fkey" FOREIGN KEY ("providerCategoryId") REFERENCES "provider_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InitialQualificationQuestionType" ADD CONSTRAINT "InitialQualificationQuestionType_initialQualificationId_fkey" FOREIGN KEY ("initialQualificationId") REFERENCES "InitialQualification"("id") ON DELETE SET NULL ON UPDATE CASCADE;
