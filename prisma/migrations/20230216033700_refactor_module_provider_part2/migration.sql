/*
  Warnings:

  - You are about to drop the column `questionsInitialQualificationId` on the `ProviderQualification` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProviderQualification" DROP CONSTRAINT "ProviderQualification_questionsInitialQualificationId_fkey";

-- AlterTable
ALTER TABLE "ProviderQualification" DROP COLUMN "questionsInitialQualificationId";
