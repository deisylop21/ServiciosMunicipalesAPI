import { UserServiceEntity } from '../entities/user-service.entity';
import { CreateUserServiceDto } from '../../application/dtos/create-user-service.dto';
import { UpdateUserServiceDto } from '../../application/dtos/update-user-service.dto';

export interface IUserServiceRepository {
    create(data: CreateUserServiceDto & { user_id: number }): Promise<UserServiceEntity>;
    findAllByUser(user_id: number): Promise<UserServiceEntity[]>;
    findByNumeroServicio(numero_servicio: string): Promise<UserServiceEntity | null>;
    findById(id: number): Promise<UserServiceEntity | null>;
    update(id: number, data: UpdateUserServiceDto): Promise<UserServiceEntity>;
    delete(id: number): Promise<void>;
}