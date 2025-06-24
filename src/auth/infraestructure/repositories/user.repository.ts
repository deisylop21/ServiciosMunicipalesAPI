import { PrismaClient } from '@prisma/client';
import { IUserRepository } from '../../domain/interfaces/user.repository';
import { UserEntity, UserType, AccountStatus } from '../../domain/entities/user.entity';

export class UserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async createUser(user: UserEntity): Promise<UserEntity> {
    const created = await this.prisma.user.create({
      data: {
        type: user.type,
        names: user.names,
        father_lastname: user.father_lastname,
        mother_lastname: user.mother_lastname,
        email: user.email,
        password: user.password,
        username: user.username,
        birth_date: user.birth_date ?? null,
        phone: user.phone ?? null,
        recovery_token: user.recovery_token ?? null,
        token_exp: user.token_exp ?? null,
        profile_picture: user.profile_picture ?? null,
        registration_date: user.registration_date,
        account_status: user.account_status,
      },
    });

    return new UserEntity(
      created.user_id,
      created.type as UserType,
      created.names,
      created.father_lastname,
      created.mother_lastname,
      created.email,
      created.password,
      created.username,
      created.birth_date ?? null,
      created.phone ?? null,
      created.recovery_token ?? null,
      created.token_exp ?? null,
      created.profile_picture ?? null,
      created.registration_date,
      created.account_status as AccountStatus,
    );
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) return null;

    return new UserEntity(
      user.user_id,
      user.type as UserType,
      user.names,
      user.father_lastname,
      user.mother_lastname,
      user.email,
      user.password,
      user.username,
      user.birth_date ?? null,
      user.phone ?? null,
      user.recovery_token ?? null,
      user.token_exp ?? null,
      user.profile_picture ?? null,
      user.registration_date,
      user.account_status as AccountStatus,
    );
  }

  async findByUsername(username: string): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({ where: { username } });
    if (!user) return null;

    return new UserEntity(
      user.user_id,
      user.type as UserType,
      user.names,
      user.father_lastname,
      user.mother_lastname,
      user.email,
      user.password,
      user.username,
      user.birth_date ?? null,
      user.phone ?? null,
      user.recovery_token ?? null,
      user.token_exp ?? null,
      user.profile_picture ?? null,
      user.registration_date,
      user.account_status as AccountStatus,
    );
  }
}
