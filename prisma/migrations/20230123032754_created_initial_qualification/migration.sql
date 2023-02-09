/*
  Warnings:

  - You are about to drop the column `initialQualificationQuestionId` on the `InitialQualification` table. All the data in the column will be lost.
  - Added the required column `initialQualificationId` to the `InitialQualificationQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "InitialQualification" DROP CONSTRAINT "InitialQualification_initialQualificationQuestionId_fkey";

-- AlterTable
ALTER TABLE "InitialQualification" DROP COLUMN "initialQualificationQuestionId";

-- AlterTable
ALTER TABLE "InitialQualificationQuestion" ADD COLUMN     "initialQualificationId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "InitialQualificationQuestion" ADD CONSTRAINT "InitialQualificationQuestion_initialQualificationId_fkey" FOREIGN KEY ("initialQualificationId") REFERENCES "InitialQualification"("id") ON DELETE CASCADE ON UPDATE CASCADE;
