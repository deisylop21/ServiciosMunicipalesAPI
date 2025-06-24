import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AuthController } from './presentation/controllers/auth.controller';
import { UserRepository } from './infraestructure/repositories/user.repository';
import { RegisterUserUseCase } from './application/use-cases/register-user.use-case';

@Module({
  controllers: [AuthController],
  providers: [
    PrismaClient,
    {
      provide: 'IUserRepository',
      useFactory: (prisma: PrismaClient) => new UserRepository(prisma),
      inject: [PrismaClient],
    },
    {
      provide: RegisterUserUseCase,
      useFactory: (userRepo: UserRepository) => new RegisterUserUseCase(userRepo),
      inject: ['IUserRepository'],  
    },
  ],
  exports: [RegisterUserUseCase],
})
export class AuthModule {}
