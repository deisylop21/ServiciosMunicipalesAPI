import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export enum UserType {
  administrador = 'administrador',
  ciudadano = 'ciudadano',
}

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  names: string;

  @IsString()
  @IsNotEmpty()
  father_lastname: string;

  @IsString()
  @IsNotEmpty()
  mother_lastname: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(6, 100)
  password: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsOptional()
  birth_date?: Date;

  @IsOptional()
  @IsString()
  @Length(10, 10)
  phone?: string;

  @IsString()
  @IsNotEmpty()
  comisaria: number;

  @IsString()
  @IsNotEmpty()
  colonia: number;

  @IsString()
  @IsNotEmpty()
  calle: string;

  @IsString()
  @Length(5, 5)
  cp: string;

  @IsOptional()
  @IsString()
  referencia?: string;
}
