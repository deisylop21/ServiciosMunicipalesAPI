import { UpdateColoniaDto } from '../dtos/update-colonia.dto';
import { IColoniaRepository } from '../../domain/interfaces/colonia.repository';
import { ColoniaEntity } from '../../domain/entities/colonia.entity';

export class UpdateColoniaUseCase {
    constructor(private readonly repo: IColoniaRepository) {}

    async execute(id: number, dto: UpdateColoniaDto): Promise<ColoniaEntity> {
        return this.repo.update(id, dto);
    }
}
