import { IsString, IsOptional, IsIn } from 'class-validator';

export class UpdateUserServiceDto {
    @IsString()
    @IsOptional()
    alias?: string;

    @IsString()
    @IsOptional()
    numero_servicio?: string;

    @IsIn(['CFE', 'CONAGUA', 'BASURA'])
    @IsOptional()
    servicio?: 'CFE' | 'CONAGUA' | 'BASURA';
}