import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ColoniaController } from './presentation/controllers/colonia.controller';
import { ColoniaRepository } from './infraestructure/repositories/colonia.repository';

import { CreateColoniaUseCase } from './application/use-cases/create-colonia.use-case';
import { FindAllColoniasUseCase } from './application/use-cases/find-all-colonias.use-case';
import { UpdateColoniaUseCase } from './application/use-cases/update-colonia.use-case';
import { DeleteColoniaUseCase } from './application/use-cases/delete-colonia.use-case';

@Module({
    controllers: [ColoniaController],
    providers: [
        PrismaClient,
        {
            provide: 'IColoniaRepository',
            useFactory: (prisma: PrismaClient) => new ColoniaRepository(prisma),
            inject: [PrismaClient],
        },
        {
            provide: CreateColoniaUseCase,
            useFactory: (repo: ColoniaRepository) => new CreateColoniaUseCase(repo),
            inject: ['IColoniaRepository'],
        },
        {
            provide: FindAllColoniasUseCase,
            useFactory: (repo: ColoniaRepository) => new FindAllColoniasUseCase(repo),
            inject: ['IColoniaRepository'],
        },
        {
            provide: UpdateColoniaUseCase,
            useFactory: (repo: ColoniaRepository) => new UpdateColoniaUseCase(repo),
            inject: ['IColoniaRepository'],
        },
        {
            provide: DeleteColoniaUseCase,
            useFactory: (repo: ColoniaRepository) => new DeleteColoniaUseCase(repo),
            inject: ['IColoniaRepository'],
        },
    ],
})
export class ColoniasModule {}
