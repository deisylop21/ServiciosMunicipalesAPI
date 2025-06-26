/*
  Warnings:

  - A unique constraint covering the columns `[numero_servicio]` on the table `users-servies` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "users-servies_numero_servicio_key" ON "users-servies"("numero_servicio");
