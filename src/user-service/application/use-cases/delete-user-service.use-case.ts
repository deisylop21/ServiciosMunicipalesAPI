import { IUserServiceRepository } from '../../domain/interfaces/user-service.repository';

export class DeleteUserServiceUseCase {
    constructor(private readonly repo: IUserServiceRepository) {}

    async execute(id: number, user_id: number): Promise<void> {
        const existing = await this.repo.findById(id);
        if (!existing || existing.user_id !== user_id) {
            throw new Error('No autorizado o no existe el servicio');
        }
        await this.repo.delete(id);
    }
}