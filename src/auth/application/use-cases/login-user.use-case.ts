import { LoginUserDto } from '../dtos/login-user.dto';
import { IUserRepository } from '../../domain/interfaces/user.repository';
import { UserEntity } from '../../domain/entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '../../infraestructure/services/jwt.service';

export class LoginUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(dto: LoginUserDto): Promise<{ user: UserEntity; accessToken: string }> {
    const { emailOrUsername, password } = dto;

    let user = await this.userRepository.findByEmail(emailOrUsername);
    if (!user) {
      user = await this.userRepository.findByUsername(emailOrUsername);
    }
    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Credenciales inválidas');
    }

    const token = this.jwtService.sign({
      sub: user.user_id,
      email: user.email,
      username: user.username,
    });

    return { user, accessToken: token };
  }
}
