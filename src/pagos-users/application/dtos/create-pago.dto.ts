import { IsNotEmpty, IsNumber, IsBoolean, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePagoDto {
    @IsNumber()
    @IsNotEmpty()
    id_service: number;

    @IsNumber()
    @IsNotEmpty()
    monto: number;

    @IsBoolean()
    @IsNotEmpty()
    pagado: boolean;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    fecha_servicio: Date;
}