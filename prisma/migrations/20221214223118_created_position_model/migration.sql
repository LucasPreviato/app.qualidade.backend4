/*
  Warnings:

  - Added the required column `positionId` to the `Collaborator` table without a default value. This is not possible if the table is not empty.
  - Made the column `unitId` on table `Department` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Collaborator" ADD COLUMN     "positionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Department" ALTER COLUMN "unitId" SET NOT NULL;

-- CreateTable
CREATE TABLE "PositionCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PositionCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "requiredQualifications" TEXT,
    "desiredQualifications" TEXT,
    "requiredEducation" TEXT,
    "desiredEducation" TEXT,
    "requiredExperience" TEXT,
    "desiredExperience" TEXT,
    "responsibilities" TEXT,
    "version" INTEGER DEFAULT 0,
    "revisionAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "alterations" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "positionCategoryId" INTEGER NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PositionCategory_name_key" ON "PositionCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Position_name_key" ON "Position"("name");

-- AddForeignKey
ALTER TABLE "Collaborator" ADD CONSTRAINT "Collaborator_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_positionCategoryId_fkey" FOREIGN KEY ("positionCategoryId") REFERENCES "PositionCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
