import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { AuthController } from './presentation/controllers/auth.controller';
import { UserRepository } from './infraestructure/repositories/user.repository';
import { RegisterUserUseCase } from './application/use-cases/register-user.use-case';
import { LoginUserUseCase } from './application/use-cases/login-user.use-case';
import { JwtService } from './infraestructure/services/jwt.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secretoMuySeguro',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    PrismaClient,
    JwtService,
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
    {
      provide: LoginUserUseCase,
      useFactory: (userRepo: UserRepository, jwtService: JwtService) =>
        new LoginUserUseCase(userRepo, jwtService),
      inject: ['IUserRepository', JwtService],
    },
  ],
  exports: [RegisterUserUseCase, LoginUserUseCase],
})
export class AuthModule {}