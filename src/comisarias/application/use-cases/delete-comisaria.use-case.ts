import { IComisariaRepository } from '../../domain/interfaces/comisaria.repository';

export class DeleteComisariaUseCase {
    constructor(private readonly repo: IComisariaRepository) {}

    async execute(id: number) {
        return this.repo.delete(id);
    }
}
