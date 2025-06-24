-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('administrador', 'ciudadano');

-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('Pendiente', 'Activo', 'Inactivo');

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "type" "UserType" NOT NULL,
    "names" VARCHAR(100) NOT NULL,
    "father_lastname" VARCHAR(100) NOT NULL,
    "mother_lastname" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password" VARCHAR(260) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "birth_date" TIMESTAMP(3),
    "phone" VARCHAR(10),
    "recovery_token" TEXT,
    "token_exp" TIMESTAMP(3),
    "profile_picture" TEXT,
    "registration_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "account_status" "AccountStatus" NOT NULL DEFAULT 'Pendiente',

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_recovery_token_key" ON "users"("recovery_token");
