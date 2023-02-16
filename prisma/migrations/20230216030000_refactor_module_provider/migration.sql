-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('WORD', 'EXCEL', 'PDF');

-- CreateEnum
CREATE TYPE "DocumentCodeFormat" AS ENUM ('SIMPLE', 'NUMBERED_BY_DEPARTMENT', 'NUMBERED_SEPARATELY_BY_DEPARTMENT');

-- CreateEnum
CREATE TYPE "DocumentStatus" AS ENUM ('ELABORATION', 'REVISION', 'APPROVAL', 'APPROVED', 'REJECTED', 'OBSOLETE', 'INATIVE');

-- CreateEnum
CREATE TYPE "QualificationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "Unit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "text" TEXT,

    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "initials" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "unitId" INTEGER NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collaborator" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hireDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "unitId" INTEGER NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "positionId" INTEGER,

    CONSTRAINT "Collaborator_pkey" PRIMARY KEY ("id")
);

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
    "version" INTEGER NOT NULL DEFAULT 0,
    "revisionAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alterations" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "positionCategoryId" INTEGER NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "reference" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "fileURL" TEXT,
    "pdfURL" TEXT,
    "elaboratorId" INTEGER NOT NULL,
    "elaboratorAt" TIMESTAMP(3),
    "revisorId" INTEGER NOT NULL,
    "revisorAt" TIMESTAMP(3),
    "approverId" INTEGER NOT NULL,
    "approverAt" TIMESTAMP(3),
    "status" "DocumentStatus" NOT NULL DEFAULT 'ELABORATION',
    "unitId" INTEGER NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "documentCategoryId" INTEGER,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "documentType" "DocumentType" NOT NULL,
    "codeFormat" "DocumentCodeFormat" NOT NULL,

    CONSTRAINT "DocumentCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProviderCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "needsInitialQualification" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ProviderCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Provider" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "providerCategoryId" INTEGER NOT NULL,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProviderQualification" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "providerId" INTEGER NOT NULL,
    "questionsInitialQualificationId" INTEGER NOT NULL,
    "qualificationStatus" "QualificationStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "ProviderQualification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionsInitialQualification" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "providerCategoryId" INTEGER NOT NULL,

    CONSTRAINT "QuestionsInitialQualification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Unit_name_key" ON "Unit"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "Department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Department_initials_key" ON "Department"("initials");

-- CreateIndex
CREATE UNIQUE INDEX "Collaborator_email_key" ON "Collaborator"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PositionCategory_name_key" ON "PositionCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Position_name_key" ON "Position"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Document_name_key" ON "Document"("name");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentCategory_name_key" ON "DocumentCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProviderCategory_name_key" ON "ProviderCategory"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Provider_name_key" ON "Provider"("name");

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collaborator" ADD CONSTRAINT "Collaborator_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collaborator" ADD CONSTRAINT "Collaborator_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collaborator" ADD CONSTRAINT "Collaborator_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Position" ADD CONSTRAINT "Position_positionCategoryId_fkey" FOREIGN KEY ("positionCategoryId") REFERENCES "PositionCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_elaboratorId_fkey" FOREIGN KEY ("elaboratorId") REFERENCES "Collaborator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_revisorId_fkey" FOREIGN KEY ("revisorId") REFERENCES "Collaborator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_approverId_fkey" FOREIGN KEY ("approverId") REFERENCES "Collaborator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_documentCategoryId_fkey" FOREIGN KEY ("documentCategoryId") REFERENCES "DocumentCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Provider" ADD CONSTRAINT "Provider_providerCategoryId_fkey" FOREIGN KEY ("providerCategoryId") REFERENCES "ProviderCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProviderQualification" ADD CONSTRAINT "ProviderQualification_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Provider"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProviderQualification" ADD CONSTRAINT "ProviderQualification_questionsInitialQualificationId_fkey" FOREIGN KEY ("questionsInitialQualificationId") REFERENCES "QuestionsInitialQualification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionsInitialQualification" ADD CONSTRAINT "QuestionsInitialQualification_providerCategoryId_fkey" FOREIGN KEY ("providerCategoryId") REFERENCES "ProviderCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
