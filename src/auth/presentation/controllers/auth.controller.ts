import { Body, Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterUserDto } from '../../application/dtos/register-user.dto';
import { RegisterUserUseCase } from '../../application/use-cases/register-user.use-case';

@Controller('auth')
export class AuthController {
  constructor(private readonly registerUserUseCase: RegisterUserUseCase) {}

  @Post('register')
  async register(@Body() dto: RegisterUserDto) {
    try {
      const user = await this.registerUserUseCase.execute(dto);
      return { message: 'Usuario registrado exitosamente', user_id: user.user_id };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
