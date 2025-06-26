import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ComisariaController } from './presentation/controllers/comisaria.controller';
import { ComisariaRepository } from './infraestructure/repositories/comisaria.repository';
import { CreateComisariaUseCase } from './application/use-cases/create-comisaria.use-case';
import { FindAllComisariasUseCase } from './application/use-cases/find-all-comisarias.use-case';
import { UpdateComisariaUseCase } from './application/use-cases/update-comisaria.use-case';
import { DeleteComisariaUseCase } from './application/use-cases/delete-comisaria.use-case';

@Module({
    controllers: [ComisariaController],
    providers: [
        PrismaClient,
        {
            provide: 'IComisariaRepository',
            useFactory: (prisma: PrismaClient) => new ComisariaRepository(prisma),
            inject: [PrismaClient],
        },
        {
            provide: CreateComisariaUseCase,
            useFactory: (repo) => new CreateComisariaUseCase(repo),
            inject: ['IComisariaRepository'],
        },
        {
            provide: FindAllComisariasUseCase,
            useFactory: (repo) => new FindAllComisariasUseCase(repo),
            inject: ['IComisariaRepository'],
        },
        {
            provide: UpdateComisariaUseCase,
            useFactory: (repo) => new UpdateComisariaUseCase(repo),
            inject: ['IComisariaRepository'],
        },
        {
            provide: DeleteComisariaUseCase,
            useFactory: (repo) => new DeleteComisariaUseCase(repo),
            inject: ['IComisariaRepository'],
        },
    ],
})
export class ComisariasModule {}
