/*
  Warnings:

  - You are about to drop the column `requiredInitialQualification` on the `provider_categories` table. All the data in the column will be lost.
  - You are about to drop the column `requiredPeriodicQualification` on the `provider_categories` table. All the data in the column will be lost.
  - You are about to drop the `questions_initial_qualification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `questions_periodic_qualification` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "QualificationStatus" AS ENUM ('PENDING', 'QUALIFIED', 'QUALIFIED_WITH_RESTRICTIONS', 'NOT_QUALIFIED');

-- CreateEnum
CREATE TYPE "InitialQualificationAnswerType" AS ENUM ('YES', 'NO', 'NOT_APPLICABLE');

-- DropForeignKey
ALTER TABLE "questions_initial_qualification" DROP CONSTRAINT "questions_initial_qualification_providerCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "questions_periodic_qualification" DROP CONSTRAINT "questions_periodic_qualification_providerCategoryId_fkey";

-- AlterTable
ALTER TABLE "Provider" ADD COLUMN     "qualificationStatus" "QualificationStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "provider_categories" DROP COLUMN "requiredInitialQualification",
DROP COLUMN "requiredPeriodicQualification",
ADD COLUMN     "requiredPeriodicEvaluation" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "requiresInitialQualification" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "questions_initial_qualification";

-- DropTable
DROP TABLE "questions_periodic_qualification";

-- DropEnum
DROP TYPE "TypeOfAnswerQuestion";

-- CreateTable
CREATE TABLE "InitialQualificationQuestion" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "providerCategoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InitialQualificationQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InitialQualificationAnswer" (
    "id" SERIAL NOT NULL,
    "answer" "InitialQualificationAnswerType" NOT NULL DEFAULT 'NOT_APPLICABLE',
    "initialQualificationQuestionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InitialQualificationAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InitialQualification" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "qualificationStatus" "QualificationStatus" NOT NULL,
    "providerId" INTEGER NOT NULL,
    "initialQualificationQuestionId" INTEGER NOT NULL,

    CONSTRAINT "InitialQualification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InitialQualificationQuestion_question_key" ON "InitialQualificationQuestion"("question");

-- AddForeignKey
ALTER TABLE "InitialQualificationQuestion" ADD CONSTRAINT "InitialQualificationQuestion_providerCategoryId_fkey" FOREIGN KEY ("providerCategoryId") REFERENCES "provider_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InitialQualificationAnswer" ADD CONSTRAINT "InitialQualificationAnswer_initialQualificationQuestionId_fkey" FOREIGN KEY ("initialQualificationQuestionId") REFERENCES "InitialQualificationQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InitialQualification" ADD CONSTRAINT "InitialQualification_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Provider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InitialQualification" ADD CONSTRAINT "InitialQualification_initialQualificationQuestionId_fkey" FOREIGN KEY ("initialQualificationQuestionId") REFERENCES "InitialQualificationQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
