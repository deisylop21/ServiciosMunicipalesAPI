import { IsNotEmpty, IsString } from 'class-validator';

export class CreateComisariaDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;
}
