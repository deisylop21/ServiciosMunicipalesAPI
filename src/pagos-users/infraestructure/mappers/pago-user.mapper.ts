import { PagoUser } from '../../domain/entities/pago-user.entity';

export class PagoUserMapper {
    static toPrisma(data: Partial<PagoUser>): any {
        return {
            monto: data.monto,
            pagado: data.pagado,
            fecha_servicio: data.fecha_servicio,
        };
    }

    static toDomain(raw: any): PagoUser {
        return {
            id: raw.id,
            id_service: raw.userService?.id || null,
            monto: raw.monto,
            pagado: raw.pagado,
            fecha_servicio: new Date(raw.fecha_servicio),
            fecha_cobro: new Date(raw.fecha_cobro),
            userService: raw.userService || null,
        };
    }
}