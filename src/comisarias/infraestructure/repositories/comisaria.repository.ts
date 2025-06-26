import { PrismaClient } from '@prisma/client';
import { IComisariaRepository } from '../../domain/interfaces/comisaria.repository';
import { ComisariaEntity } from '../../domain/entities/comisaria.entity';

export class ComisariaRepository implements IComisariaRepository {
    constructor(private prisma: PrismaClient) {}

    async create(nombre: string): Promise<ComisariaEntity> {
        const comisaria = await this.prisma.comisaria.create({
            data: { nombre },
        });
        return new ComisariaEntity(comisaria.id, comisaria.nombre);
    }

    async findAll(): Promise<ComisariaEntity[]> {
        const all = await this.prisma.comisaria.findMany();
        return all.map(c => new ComisariaEntity(c.id, c.nombre));
    }

    async findById(id: number): Promise<ComisariaEntity | null> {
        const comisaria = await this.prisma.comisaria.findUnique({ where: { id } });
        return comisaria ? new ComisariaEntity(comisaria.id, comisaria.nombre) : null;
    }

    async update(id: number, nombre: string): Promise<ComisariaEntity> {
        const comisaria = await this.prisma.comisaria.update({
            where: { id },
            data: { nombre },
        });
        return new ComisariaEntity(comisaria.id, comisaria.nombre);
    }

    async delete(id: number): Promise<void> {
        await this.prisma.comisaria.delete({ where: { id } });
    }
}
