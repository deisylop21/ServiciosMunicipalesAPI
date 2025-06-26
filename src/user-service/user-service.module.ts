import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserServiceRepository } from './infraestructure/repositories/user-service.repository';
import { CreateUserServiceUseCase } from './application/use-cases/create-user-service.use-case';
import { GetUserServicesUseCase } from './application/use-cases/get-user-services.use-case';
import { UpdateUserServiceUseCase } from './application/use-cases/update-user-service.use-case';
import { DeleteUserServiceUseCase } from './application/use-cases/delete-user-service.use-case';
import { UserServiceController } from './presentation/controllers/user-service.controller';

@Module({
    controllers: [UserServiceController],
    providers: [
        PrismaClient,
        {
            provide: 'IUserServiceRepository',
            useFactory: (prisma: PrismaClient) => new UserServiceRepository(prisma),
            inject: [PrismaClient],
        },
        {
            provide: CreateUserServiceUseCase,
            useFactory: (repo) => new CreateUserServiceUseCase(repo),
            inject: ['IUserServiceRepository'],
        },
        {
            provide: GetUserServicesUseCase,
            useFactory: (repo) => new GetUserServicesUseCase(repo),
            inject: ['IUserServiceRepository'],
        },
        {
            provide: UpdateUserServiceUseCase,
            useFactory: (repo) => new UpdateUserServiceUseCase(repo),
            inject: ['IUserServiceRepository'],
        },
        {
            provide: DeleteUserServiceUseCase,
            useFactory: (repo) => new DeleteUserServiceUseCase(repo),
            inject: ['IUserServiceRepository'],
        },
    ],
})
export class UserServiceModule {}