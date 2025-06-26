export class PagoUser {
    id: number;
    id_service: number;
    monto: number;
    pagado: boolean;
    fecha_servicio: Date;
    fecha_cobro: Date;

    userService?: any;
}