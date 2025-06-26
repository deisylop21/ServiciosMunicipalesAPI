/*
  Warnings:

  - Added the required column `comisaria_id` to the `Colonia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Colonia" ADD COLUMN     "comisaria_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Colonia" ADD CONSTRAINT "Colonia_comisaria_id_fkey" FOREIGN KEY ("comisaria_id") REFERENCES "Comisaria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
