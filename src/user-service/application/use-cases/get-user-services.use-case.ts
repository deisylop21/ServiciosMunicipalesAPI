import { IUserServiceRepository } from '../../domain/interfaces/user-service.repository';
import { UserServiceEntity } from '../../domain/entities/user-service.entity';

export class GetUserServicesUseCase {
    constructor(private readonly repo: IUserServiceRepository) {}

    async execute(user_id: number): Promise<UserServiceEntity[]> {
        return this.repo.findAllByUser(user_id);
    }
}