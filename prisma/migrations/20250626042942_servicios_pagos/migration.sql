-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('CFE', 'CONAGUA', 'BASURA');

-- CreateTable
CREATE TABLE "users-servies" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "alias" TEXT NOT NULL,
    "numero_servicio" TEXT NOT NULL,
    "servicio" "ServiceType" NOT NULL,

    CONSTRAINT "users-servies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagos-users" (
    "id" SERIAL NOT NULL,
    "servicio_id" INTEGER NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "pagado" BOOLEAN NOT NULL,
    "fecha_servicio" TIMESTAMP(3) NOT NULL,
    "fecha_cobro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pagos-users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users-servies" ADD CONSTRAINT "users-servies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagos-users" ADD CONSTRAINT "pagos-users_servicio_id_fkey" FOREIGN KEY ("servicio_id") REFERENCES "users-servies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
