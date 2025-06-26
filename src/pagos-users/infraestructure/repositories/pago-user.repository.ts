import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PagoUser } from '../../domain/entities/pago-user.entity';
import { PagoUserRepository } from '../../domain/interfaces/pago-user.repository';
import { PagoUserMapper } from '../mappers/pago-user.mapper';

@Injectable()
export class PagoUserRepositoryImpl implements PagoUserRepository {
    constructor(@Inject('PrismaClient') private readonly prisma: PrismaClient) {}

    async create(data: Partial<PagoUser>): Promise<PagoUser> {
        if (!data.id_service) {
            throw new Error('id_service is required to connect to an existing UserService');
        }
        const userServiceExists = await this.prisma.userService.findUnique({
            where: { id: data.id_service },
        });
        if (!userServiceExists) {
            throw new NotFoundException(`UserService with id ${data.id_service} does not exist`);
        }
        const prismaData = PagoUserMapper.toPrisma(data);
        const created = await this.prisma.pagoUser.create({
            data: {
                ...prismaData,
                fecha_cobro: new Date(),
                userService: {
                    connect: { id: data.id_service },
                },
            },
            include: { userService: true },
        });
        return PagoUserMapper.toDomain(created);
    }

    async findById(id: number): Promise<PagoUser | null> {
        const found = await this.prisma.pagoUser.findUnique({
            where: { id },
            include: { userService: true },
        });
        return found ? PagoUserMapper.toDomain(found) : null;
    }


    async findAll(): Promise<PagoUser[]> {
        const result = await this.prisma.pagoUser.findMany({
            include: { userService: true },
        });
        return result.map(PagoUserMapper.toDomain);
    }


    async update(id: number, data: Partial<PagoUser>): Promise<PagoUser | null> {
        const prismaData = PagoUserMapper.toPrisma(data);
        const updated = await this.prisma.pagoUser.update({
            where: { id },
            data: prismaData,
            include: { userService: true },
        });
        return updated ? PagoUserMapper.toDomain(updated) : null;
    }
}