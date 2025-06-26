import { IComisariaRepository } from '../../domain/interfaces/comisaria.repository';

export class CreateComisariaUseCase {
    constructor(private readonly repo: IComisariaRepository) {}

    async execute(nombre: string) {
        return this.repo.create(nombre);
    }
}
