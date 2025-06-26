import { IsString, IsNotEmpty, IsIn } from 'class-validator';

export class CreateUserServiceDto {
    @IsString()
    @IsNotEmpty()
    alias: string;

    @IsString()
    @IsNotEmpty()
    numero_servicio: string;

    @IsIn(['CFE', 'CONAGUA', 'BASURA'])
    @IsNotEmpty()
    servicio: 'CFE' | 'CONAGUA' | 'BASURA';
}