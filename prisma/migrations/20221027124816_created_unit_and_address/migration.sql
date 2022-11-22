-- AlterTable
ALTER TABLE "Unit" ADD COLUMN     "email" TEXT,
ADD COLUMN     "phone" TEXT;

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "street" TEXT,
    "number" TEXT,
    "complement" TEXT,
    "district" TEXT,
    "city" TEXT,
    "cep" TEXT,
    "uf" TEXT,
    "unitId" INTEGER,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_cep_key" ON "Address"("cep");

-- CreateIndex
CREATE UNIQUE INDEX "Address_unitId_key" ON "Address"("unitId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE SET NULL ON UPDATE CASCADE;
