import { ColoniaEntity } from '../entities/colonia.entity';

export interface IColoniaRepository {
    create(colonia: ColoniaEntity): Promise<ColoniaEntity>;
    findAll(): Promise<ColoniaEntity[]>;
    findById(id: number): Promise<ColoniaEntity | null>;
    update(id: number, colonia: Partial<ColoniaEntity>): Promise<ColoniaEntity>;
    delete(id: number): Promise<void>;
}
