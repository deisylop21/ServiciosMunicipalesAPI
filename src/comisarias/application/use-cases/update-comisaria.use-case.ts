import { IComisariaRepository } from '../../domain/interfaces/comisaria.repository';

export class UpdateComisariaUseCase {
    constructor(private readonly repo: IComisariaRepository) {}

    async execute(id: number, nombre: string) {
        return this.repo.update(id, nombre);
    }
}
