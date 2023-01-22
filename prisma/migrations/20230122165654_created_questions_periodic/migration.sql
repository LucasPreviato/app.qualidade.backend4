/*
  Warnings:

  - A unique constraint covering the columns `[question]` on the table `questions_initial_qualification` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "questions_periodic_qualification" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "providerCategoryId" INTEGER NOT NULL,
    "typeOfAnswer" "TypeOfAnswerQuestion" NOT NULL DEFAULT 'OBJECTIVE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "questions_periodic_qualification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "questions_periodic_qualification_question_key" ON "questions_periodic_qualification"("question");

-- CreateIndex
CREATE UNIQUE INDEX "questions_initial_qualification_question_key" ON "questions_initial_qualification"("question");

-- AddForeignKey
ALTER TABLE "questions_periodic_qualification" ADD CONSTRAINT "questions_periodic_qualification_providerCategoryId_fkey" FOREIGN KEY ("providerCategoryId") REFERENCES "provider_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
