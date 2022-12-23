/*
  Warnings:

  - You are about to drop the column `documentCode` on the `DocumentCategory` table. All the data in the column will be lost.
  - Added the required column `codeFormat` to the `DocumentCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DocumentCategory" DROP COLUMN "documentCode",
ADD COLUMN     "codeFormat" "DocumentCodeFormat" NOT NULL;
