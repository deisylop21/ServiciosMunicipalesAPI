import { CreateColoniaDto } from '../dtos/create-colonia.dto';
import { IColoniaRepository } from '../../domain/interfaces/colonia.repository';
import { ColoniaEntity } from '../../domain/entities/colonia.entity';

export class CreateColoniaUseCase {
    constructor(private readonly repo: IColoniaRepository) {}

    async execute(dto: CreateColoniaDto): Promise<ColoniaEntity> {
        const colonia = new ColoniaEntity(0, dto.nombre, dto.comisaria_id);
        return this.repo.create(colonia);
    }
}
