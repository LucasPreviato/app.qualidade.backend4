/*
  Warnings:

  - Made the column `unitId` on table `Collaborator` required. This step will fail if there are existing NULL values in that column.
  - Made the column `departmentId` on table `Collaborator` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Collaborator" ALTER COLUMN "unitId" SET NOT NULL,
ALTER COLUMN "departmentId" SET NOT NULL;
