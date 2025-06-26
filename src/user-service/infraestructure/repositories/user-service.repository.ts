import { PrismaClient } from '@prisma/client';
import { IUserServiceRepository } from '../../domain/interfaces/user-service.repository';
import { UserServiceEntity } from '../../domain/entities/user-service.entity';
import { UserServiceMapper } from '../mappers/user-service.mapper';

export class UserServiceRepository implements IUserServiceRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async create(data: Partial<UserServiceEntity>): Promise<UserServiceEntity> {
        const prismaData = UserServiceMapper.toPrisma(data);
        const created = await this.prisma.userService.create({ data: prismaData });
        return UserServiceMapper.toDomain(created);
    }

    async findAllByUser(user_id: number): Promise<UserServiceEntity[]> {
        const result = await this.prisma.userService.findMany({ where: { user_id } });
        return result.map(UserServiceMapper.toDomain);
    }

    async findByNumeroServicio(numero_servicio: string): Promise<UserServiceEntity | null> {
        const found = await this.prisma.userService.findUnique({ where: { numero_servicio } });
        return found ? UserServiceMapper.toDomain(found) : null;
    }

    async findById(id: number) {
        return this.prisma.userService.findUnique({ where: { id } });
    }

    async update(id: number, data: Partial<UserServiceEntity>) {
        return this.prisma.userService.update({ where: { id }, data });
    }

    async delete(id: number) {
        await this.prisma.userService.delete({ where: { id } });
    }
}