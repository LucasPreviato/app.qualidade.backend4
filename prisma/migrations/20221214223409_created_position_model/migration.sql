/*
  Warnings:

  - Made the column `version` on table `Position` required. This step will fail if there are existing NULL values in that column.
  - Made the column `revisionAt` on table `Position` required. This step will fail if there are existing NULL values in that column.
  - Made the column `alterations` on table `Position` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Collaborator" DROP CONSTRAINT "Collaborator_positionId_fkey";

-- AlterTable
ALTER TABLE "Collaborator" ALTER COLUMN "positionId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Position" ALTER COLUMN "version" SET NOT NULL,
ALTER COLUMN "revisionAt" SET NOT NULL,
ALTER COLUMN "alterations" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Collaborator" ADD CONSTRAINT "Collaborator_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE SET NULL ON UPDATE CASCADE;
