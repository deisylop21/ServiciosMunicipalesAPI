import { IComisariaRepository } from '../../domain/interfaces/comisaria.repository';

export class FindAllComisariasUseCase {
    constructor(private readonly repo: IComisariaRepository) {}

    async execute() {
        return this.repo.findAll();
    }
}
