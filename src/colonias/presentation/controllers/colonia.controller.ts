import {Body, Controller, Post, Get, Put, Delete, Param, ParseIntPipe, } from '@nestjs/common';
import { CreateColoniaDto } from '../../application/dtos/create-colonia.dto';
import { UpdateColoniaDto } from '../../application/dtos/update-colonia.dto';
import { CreateColoniaUseCase } from '../../application/use-cases/create-colonia.use-case';
import { FindAllColoniasUseCase } from '../../application/use-cases/find-all-colonias.use-case';
import { UpdateColoniaUseCase } from '../../application/use-cases/update-colonia.use-case';
import { DeleteColoniaUseCase } from '../../application/use-cases/delete-colonia.use-case';

@Controller('colonias')
export class ColoniaController {
    constructor(
        private readonly createUseCase: CreateColoniaUseCase,
        private readonly findAllUseCase: FindAllColoniasUseCase,
        private readonly updateUseCase: UpdateColoniaUseCase,
        private readonly deleteUseCase: DeleteColoniaUseCase,
    ) {}

    @Post()
    async create(@Body() dto: CreateColoniaDto) {
        return this.createUseCase.execute(dto);
    }

    @Get()
    async findAll() {
        return this.findAllUseCase.execute();
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateColoniaDto) {
        return this.updateUseCase.execute(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.deleteUseCase.execute(id);
    }
}
