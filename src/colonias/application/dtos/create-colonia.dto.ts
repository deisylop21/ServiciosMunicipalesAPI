import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateColoniaDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsInt()
    comisaria_id: number;
}
