import { UserService as PrismaUserService } from '@prisma/client';
import { UserServiceEntity } from '../../domain/entities/user-service.entity';

export class UserServiceMapper {
    static toDomain(prisma: PrismaUserService): UserServiceEntity {
        return {
            id: prisma.id,
            user_id: prisma.user_id,
            alias: prisma.alias,
            numero_servicio: prisma.numero_servicio,
            servicio: prisma.servicio as 'CFE' | 'CONAGUA' | 'BASURA',
        };
    }

    static toPrisma(entity: Partial<UserServiceEntity>) {
        if (
            entity.user_id === undefined ||
            entity.alias === undefined ||
            entity.numero_servicio === undefined ||
            entity.servicio === undefined
        ) {
            throw new Error('Faltan campos requeridos para crear UserService');
        }

        return {
            user_id: entity.user_id,
            alias: entity.alias,
            numero_servicio: entity.numero_servicio,
            servicio: entity.servicio,
        };
    }
}