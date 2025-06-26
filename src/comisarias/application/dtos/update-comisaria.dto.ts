import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateComisariaDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;
}
