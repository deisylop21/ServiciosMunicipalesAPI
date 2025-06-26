import { ComisariaEntity } from '../entities/comisaria.entity';

export interface IComisariaRepository {
    create(nombre: string): Promise<ComisariaEntity>;
    findAll(): Promise<ComisariaEntity[]>;
    findById(id: number): Promise<ComisariaEntity | null>;
    update(id: number, nombre: string): Promise<ComisariaEntity>;
    delete(id: number): Promise<void>;
}
