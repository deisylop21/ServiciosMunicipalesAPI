import { Injectable, Inject } from '@nestjs/common';
import { PagoUser } from '../../domain/entities/pago-user.entity';
import { PagoUserRepository } from '../../domain/interfaces/pago-user.repository';
import { UpdatePagoDto } from '../dtos/update-pago.dto';

@Injectable()
export class UpdatePagoUseCase {
    constructor(@Inject('PagoUserRepository') private readonly pagoUserRepository: PagoUserRepository) {}

    async execute(id: number, updatePagoDto: UpdatePagoDto): Promise<PagoUser | null> {
        return this.pagoUserRepository.update(id, updatePagoDto);
    }
}