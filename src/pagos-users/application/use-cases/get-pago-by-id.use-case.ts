import { Injectable, Inject } from '@nestjs/common';
import { PagoUser } from '../../domain/entities/pago-user.entity';
import { PagoUserRepository } from '../../domain/interfaces/pago-user.repository';

@Injectable()
export class GetPagoByIdUseCase {
    constructor(@Inject('PagoUserRepository') private readonly pagoUserRepository: PagoUserRepository) {}

    async execute(id: number): Promise<PagoUser | null> {
        return this.pagoUserRepository.findById(id);
    }
}