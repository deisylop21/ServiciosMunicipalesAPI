import { IColoniaRepository } from '../../domain/interfaces/colonia.repository';
import { ColoniaEntity } from '../../domain/entities/colonia.entity';

export class FindAllColoniasUseCase {
    constructor(private readonly repo: IColoniaRepository) {}

    async execute(): Promise<ColoniaEntity[]> {
        return this.repo.findAll();
    }
}
