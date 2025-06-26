import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateColoniaDto {
    @IsOptional()
    @IsString()
    nombre?: string;

    @IsOptional()
    @IsInt()
    comisaria_id?: number;
}
