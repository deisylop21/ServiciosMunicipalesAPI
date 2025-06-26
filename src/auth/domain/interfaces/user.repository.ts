import { UserEntity } from '../entities/user.entity';
import {AddressEntity} from "../entities/address.entity";

export interface IUserRepository {
  createUser(user: UserEntity, address: AddressEntity): Promise<UserEntity>;
  findByEmail(email: string): Promise<UserEntity | null>;
  findByUsername(username: string): Promise<UserEntity | null>;
}
