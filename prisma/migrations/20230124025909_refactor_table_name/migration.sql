/*
  Warnings:

  - You are about to drop the `InitialQualification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InitialQualificationAnswer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InitialQualificationQuestion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InitialQualificationQuestionType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Provider` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "InitialQualification" DROP CONSTRAINT "InitialQualification_providerId_fkey";

-- DropForeignKey
ALTER TABLE "InitialQualificationAnswer" DROP CONSTRAINT "InitialQualificationAnswer_initialQualificationQuestionId_fkey";

-- DropForeignKey
ALTER TABLE "InitialQualificationQuestion" DROP CONSTRAINT "InitialQualificationQuestion_initialQualificationId_fkey";

-- DropForeignKey
ALTER TABLE "InitialQualificationQuestion" DROP CONSTRAINT "InitialQualificationQuestion_initialQualificationQuestionT_fkey";

-- DropForeignKey
ALTER TABLE "InitialQualificationQuestion" DROP CONSTRAINT "InitialQualificationQuestion_providerCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "InitialQualificationQuestionType" DROP CONSTRAINT "InitialQualificationQuestionType_initialQualificationId_fkey";

-- DropForeignKey
ALTER TABLE "InitialQualificationQuestionType" DROP CONSTRAINT "InitialQualificationQuestionType_providerCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "Provider" DROP CONSTRAINT "Provider_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "Provider" DROP CONSTRAINT "Provider_providerCategoryId_fkey";

-- DropTable
DROP TABLE "InitialQualification";

-- DropTable
DROP TABLE "InitialQualificationAnswer";

-- DropTable
DROP TABLE "InitialQualificationQuestion";

-- DropTable
DROP TABLE "InitialQualificationQuestionType";

-- DropTable
DROP TABLE "Provider";

-- CreateTable
CREATE TABLE "providers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tradeName" TEXT,
    "address" TEXT,
    "district" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zipCode" TEXT,
    "cnpj" TEXT,
    "crm" TEXT,
    "providerCritical" BOOLEAN NOT NULL DEFAULT false,
    "contactName" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "website" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "departmentId" INTEGER NOT NULL,
    "providerCategoryId" INTEGER NOT NULL,

    CONSTRAINT "providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "initial_qualification_questions" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "initialQualificationQuestionTypeId" INTEGER NOT NULL,
    "initialQualificationId" INTEGER NOT NULL,

    CONSTRAINT "initial_qualification_questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "initial_qualification_question_types" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "providerCategoryId" INTEGER,
    "initialQualificationId" INTEGER,

    CONSTRAINT "initial_qualification_question_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "initial_qualification_answers" (
    "id" SERIAL NOT NULL,
    "answer" "InitialQualificationAnswerType" NOT NULL DEFAULT 'NOT_APPLICABLE',
    "initialQualificationQuestionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "initial_qualification_answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "initial_qualifications" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "qualificationStatus" "QualificationStatus" NOT NULL,
    "providerId" INTEGER NOT NULL,

    CONSTRAINT "initial_qualifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "providers_name_key" ON "providers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "initial_qualification_questions_question_key" ON "initial_qualification_questions"("question");

-- CreateIndex
CREATE UNIQUE INDEX "initial_qualification_answers_initialQualificationQuestionI_key" ON "initial_qualification_answers"("initialQualificationQuestionId");

-- CreateIndex
CREATE UNIQUE INDEX "initial_qualifications_providerId_key" ON "initial_qualifications"("providerId");

-- AddForeignKey
ALTER TABLE "providers" ADD CONSTRAINT "providers_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "providers" ADD CONSTRAINT "providers_providerCategoryId_fkey" FOREIGN KEY ("providerCategoryId") REFERENCES "provider_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "initial_qualification_questions" ADD CONSTRAINT "initial_qualification_questions_initialQualificationQuesti_fkey" FOREIGN KEY ("initialQualificationQuestionTypeId") REFERENCES "initial_qualification_question_types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "initial_qualification_questions" ADD CONSTRAINT "initial_qualification_questions_initialQualificationId_fkey" FOREIGN KEY ("initialQualificationId") REFERENCES "initial_qualifications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "initial_qualification_question_types" ADD CONSTRAINT "initial_qualification_question_types_providerCategoryId_fkey" FOREIGN KEY ("providerCategoryId") REFERENCES "provider_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "initial_qualification_question_types" ADD CONSTRAINT "initial_qualification_question_types_initialQualificationI_fkey" FOREIGN KEY ("initialQualificationId") REFERENCES "initial_qualifications"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "initial_qualification_answers" ADD CONSTRAINT "initial_qualification_answers_initialQualificationQuestion_fkey" FOREIGN KEY ("initialQualificationQuestionId") REFERENCES "initial_qualification_questions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "initial_qualifications" ADD CONSTRAINT "initial_qualifications_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "providers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
