-- CreateEnum
CREATE TYPE "DocumentStatus" AS ENUM ('ELABORATION', 'REVISION', 'APPROVAL', 'APPROVED', 'REJECTED', 'OBSOLETE', 'INATIVE');

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

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Document_name_key" ON "Document"("name");

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
