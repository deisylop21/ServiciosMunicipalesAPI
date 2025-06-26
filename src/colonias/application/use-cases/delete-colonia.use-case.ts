import { IColoniaRepository } from '../../domain/interfaces/colonia.repository';

export class DeleteColoniaUseCase {
    constructor(private readonly repo: IColoniaRepository) {}

    async execute(id: number): Promise<void> {
        return this.repo.delete(id);
    }
}
