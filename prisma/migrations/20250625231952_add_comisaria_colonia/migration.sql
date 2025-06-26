-- CreateTable
CREATE TABLE "Comisaria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Comisaria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Colonia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Colonia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "address_id" SERIAL NOT NULL,
    "calle" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "comisaria_id" INTEGER NOT NULL,
    "colonia_id" INTEGER NOT NULL,
    "cp" TEXT NOT NULL,
    "referencia" TEXT,

    CONSTRAINT "address_pkey" PRIMARY KEY ("address_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comisaria_nombre_key" ON "Comisaria"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Colonia_nombre_key" ON "Colonia"("nombre");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_comisaria_id_fkey" FOREIGN KEY ("comisaria_id") REFERENCES "Comisaria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_colonia_id_fkey" FOREIGN KEY ("colonia_id") REFERENCES "Colonia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
