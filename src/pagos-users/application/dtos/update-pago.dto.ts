import { IsOptional, IsNumber, IsBoolean, IsDate } from 'class-validator';

export class UpdatePagoDto {
    @IsOptional()
    @IsNumber()
    id_service?: number;

    @IsOptional()
    @IsNumber()
    monto?: number;

    @IsOptional()
    @IsBoolean()
    pagado?: boolean;

    @IsOptional()
    @IsDate()
    fecha_servicio?: Date;
}