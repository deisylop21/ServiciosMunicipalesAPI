import { Injectable, Inject } from '@nestjs/common';
import { PagoUser } from '../../domain/entities/pago-user.entity';
import { PagoUserRepository } from '../../domain/interfaces/pago-user.repository';
import { CreatePagoDto } from '../dtos/create-pago.dto';

@Injectable()
export class CreatePagoUseCase {
    constructor(@Inject('PagoUserRepository') private readonly pagoUserRepository: PagoUserRepository) {}

    async execute(createPagoDto: CreatePagoDto): Promise<PagoUser> {
        const pago = { ...createPagoDto, fecha_cobro: new Date() } as PagoUser;
        return this.pagoUserRepository.create(pago);
    }
}