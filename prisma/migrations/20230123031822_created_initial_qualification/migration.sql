/*
  Warnings:

  - A unique constraint covering the columns `[initialQualificationQuestionId]` on the table `InitialQualificationAnswer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "InitialQualificationAnswer_initialQualificationQuestionId_key" ON "InitialQualificationAnswer"("initialQualificationQuestionId");
