import { PrismaClient } from '@prisma/client';
import { IColoniaRepository } from '../../domain/interfaces/colonia.repository';
import { ColoniaEntity } from '../../domain/entities/colonia.entity';

export class ColoniaRepository implements IColoniaRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async create(colonia: ColoniaEntity): Promise<ColoniaEntity> {
        const created = await this.prisma.colonia.create({
            data: {
                nombre: colonia.nombre,
                comisaria_id: colonia.comisaria_id,
            },
        });
        return new ColoniaEntity(created.id, created.nombre, created.comisaria_id);
    }

    async findAll(): Promise<ColoniaEntity[]> {
        const colonias = await this.prisma.colonia.findMany();
        return colonias.map(c => new ColoniaEntity(c.id, c.nombre, c.comisaria_id));
    }

    async findById(id: number): Promise<ColoniaEntity | null> {
        const colonia = await this.prisma.colonia.findUnique({ where: { id } });
        return colonia ? new ColoniaEntity(colonia.id, colonia.nombre, colonia.comisaria_id) : null;
    }

    async update(id: number, colonia: Partial<ColoniaEntity>): Promise<ColoniaEntity> {
        const updated = await this.prisma.colonia.update({
            where: { id },
            data: colonia,
        });
        return new ColoniaEntity(updated.id, updated.nombre, updated.comisaria_id);
    }

    async delete(id: number): Promise<void> {
        await this.prisma.colonia.delete({ where: { id } });
    }
}
