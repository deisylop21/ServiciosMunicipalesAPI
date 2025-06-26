import { IUserServiceRepository } from '../../domain/interfaces/user-service.repository';
import { UpdateUserServiceDto } from '../dtos/update-user-service.dto';
import { UserServiceEntity } from '../../domain/entities/user-service.entity';

export class UpdateUserServiceUseCase {
    constructor(private readonly repo: IUserServiceRepository) {}

    async execute(id: number, user_id: number, dto: UpdateUserServiceDto): Promise<UserServiceEntity> {
        const existing = await this.repo.findById(id);
        if (!existing || existing.user_id !== user_id) {
            throw new Error('No autorizado o no existe el servicio');
        }
        if (dto.numero_servicio && dto.numero_servicio !== existing.numero_servicio) {
            const duplicate = await this.repo.findByNumeroServicio(dto.numero_servicio);
            if (duplicate) throw new Error('El número de servicio ya está registrado');
        }
        return this.repo.update(id, dto);
    }
}