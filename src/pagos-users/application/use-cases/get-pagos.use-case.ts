import { Injectable, Inject } from '@nestjs/common';
import { PagoUser } from '../../domain/entities/pago-user.entity';
import { PagoUserRepository } from '../../domain/interfaces/pago-user.repository';

@Injectable()
export class GetPagosUseCase {
    constructor(@Inject('PagoUserRepository') private readonly pagoUserRepository: PagoUserRepository) {}

    async execute(): Promise<PagoUser[]> {
        return this.pagoUserRepository.findAll();
    }
}