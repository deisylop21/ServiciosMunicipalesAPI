import { Controller, Post, Body, UseGuards, Request, Get, Param, Put } from '@nestjs/common';
import { JwtAuthGuard } from '../../../shared/guards/jwt-auth.guard';
import { CreatePagoUseCase } from '../../application/use-cases/create-pago.use-case';
import { GetPagoByIdUseCase } from '../../application/use-cases/get-pago-by-id.use-case';
import { GetPagosUseCase } from '../../application/use-cases/get-pagos.use-case';
import { UpdatePagoUseCase } from '../../application/use-cases/update-pago.use-case';
import { CreatePagoDto } from '../../application/dtos/create-pago.dto';
import { UpdatePagoDto } from '../../application/dtos/update-pago.dto';
import { plainToClass } from 'class-transformer';

@Controller('pagos-users')
@UseGuards(JwtAuthGuard)
export class PagoUserController {
    constructor(
        private readonly createPagoUseCase: CreatePagoUseCase,
        private readonly getPagoByIdUseCase: GetPagoByIdUseCase,
        private readonly getPagosUseCase: GetPagosUseCase,
        private readonly updatePagoUseCase: UpdatePagoUseCase,
    ) {}

    @Post()
    async create(@Body() createPagoDto: CreatePagoDto, @Request() req) {
        const user = req.user;
        const dto = plainToClass(CreatePagoDto, createPagoDto);
        return this.createPagoUseCase.execute(dto);
    }

    @Get()
    async findAll(@Request() req) {
        const user = req.user;
        return this.getPagosUseCase.execute();
    }
    @Get(':id')
    async findOne(@Param('id') id: number, @Request() req) {
        const user = req.user;
        return this.getPagoByIdUseCase.execute(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updatePagoDto: UpdatePagoDto, @Request() req) {
        const user = req.user;
        return this.updatePagoUseCase.execute(id, updatePagoDto);
    }
}