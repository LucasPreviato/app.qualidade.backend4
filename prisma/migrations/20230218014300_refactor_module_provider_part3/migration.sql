/*
  Warnings:

  - You are about to drop the `ProviderQualification` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProviderQualification" DROP CONSTRAINT "ProviderQualification_providerId_fkey";

-- DropTable
DROP TABLE "ProviderQualification";

-- DropEnum
DROP TYPE "QualificationStatus";
