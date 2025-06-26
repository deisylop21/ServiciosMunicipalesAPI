import { PagoUser } from '../entities/pago-user.entity';

export interface PagoUserRepository {
    create(data: Partial<PagoUser>): Promise<PagoUser>;
    findById(id: number): Promise<PagoUser | null>;
    findAll(): Promise<PagoUser[]>;
    update(id: number, data: Partial<PagoUser>): Promise<PagoUser | null>;
}