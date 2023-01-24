/*
  Warnings:

  - A unique constraint covering the columns `[providerId]` on the table `InitialQualification` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "InitialQualification_providerId_key" ON "InitialQualification"("providerId");
