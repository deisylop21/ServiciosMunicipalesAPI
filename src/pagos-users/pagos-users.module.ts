import { Module } from '@nestjs/common';
import { PagoUserRepositoryImpl } from './infraestructure/repositories/pago-user.repository';
import { CreatePagoUseCase } from './application/use-cases/create-pago.use-case';
import { GetPagoByIdUseCase } from './application/use-cases/get-pago-by-id.use-case';
import { GetPagosUseCase } from './application/use-cases/get-pagos.use-case';
import { UpdatePagoUseCase } from './application/use-cases/update-pago.use-case';
import { PagoUserController } from './presentation/controllers/pago-user.controller';
import { PrismaClient } from '@prisma/client';

@Module({
    providers: [
        {
            provide: 'PagoUserRepository',
            useClass: PagoUserRepositoryImpl,
        },
        {
            provide: 'PrismaClient',
            useValue: new PrismaClient(),
        },
        CreatePagoUseCase,
        GetPagoByIdUseCase,
        GetPagosUseCase,
        UpdatePagoUseCase,
    ],
    controllers: [PagoUserController],
})
export class PagosUsersModule {}