import { IUserRepository } from '../../domain/interfaces/user.repository';
import {RegisterUserDto, UserType} from '../dtos/register-user.dto';
import { UserEntity, AccountStatus } from '../../domain/entities/user.entity';
import { AddressEntity } from '../../domain/entities/address.entity';
import * as bcrypt from 'bcryptjs';

export class RegisterUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(dto: RegisterUserDto): Promise<UserEntity> {
    const existingEmail = await this.userRepository.findByEmail(dto.email);
    if (existingEmail) {
      throw new Error('El correo electrónico ya está registrado');
    }

    const existingUsername = await this.userRepository.findByUsername(dto.username);
    if (existingUsername) {
      throw new Error('El nombre de usuario ya está en uso');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const address = new AddressEntity(
        dto.comisaria,
        dto.colonia,
        dto.calle,
        dto.cp,
        dto.referencia ?? null,
    );

    const user = new UserEntity(
      0,
      UserType.ciudadano,
      dto.names,
      dto.father_lastname,
      dto.mother_lastname,
      dto.email,
      hashedPassword,
      dto.username,
      dto.birth_date ?? null,
      dto.phone ?? null,
      null, 
      null, 
      null, 
      new Date(), 
      AccountStatus.Pendiente,
    );

    const createdUser = await this.userRepository.createUser(user, address);
    return createdUser;
  }
}
