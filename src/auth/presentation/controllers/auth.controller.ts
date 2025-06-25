// src/auth/presentation/controllers/auth.controller.ts
import { Body, Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterUserDto } from '../../application/dtos/register-user.dto';
import { LoginUserDto } from '../../application/dtos/login-user.dto';
import { RegisterUserUseCase } from '../../application/use-cases/register-user.use-case';
import { LoginUserUseCase } from '../../application/use-cases/login-user.use-case';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly loginUserUseCase: LoginUserUseCase,
  ) {}

  @Post('register')
  async register(@Body() dto: RegisterUserDto) {
    try {
      const user = await this.registerUserUseCase.execute(dto);
      return { message: 'Usuario registrado exitosamente', user_id: user.user_id };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  async login(@Body() dto: LoginUserDto) {
    try {
      const { user, accessToken } = await this.loginUserUseCase.execute(dto);
      return {
        message: 'Inicio de sesión exitoso',
        user_id: user.user_id,
        username: user.username,
        email: user.email,
        account_status: user.account_status,
        accessToken,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }
}
