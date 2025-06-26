import { IUserServiceRepository } from '../../domain/interfaces/user-service.repository';
import { CreateUserServiceDto } from '../dtos/create-user-service.dto';
import { UserServiceEntity } from '../../domain/entities/user-service.entity';

export class CreateUserServiceUseCase {
    constructor(private readonly repo: IUserServiceRepository) {}

    async execute(dto: CreateUserServiceDto, user_id: number): Promise<UserServiceEntity> {
        const existing = await this.repo.findByNumeroServicio(dto.numero_servicio);
        if (existing) {
            throw new Error('El número de servicio ya está registrado');
        }
        return this.repo.create({
            ...dto,
            user_id,
        });
    }
}