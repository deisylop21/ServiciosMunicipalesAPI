import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import { CreateComisariaDto } from '../../application/dtos/create-comisaria.dto';
import { UpdateComisariaDto } from '../../application/dtos/update-comisaria.dto';
import { CreateComisariaUseCase } from '../../application/use-cases/create-comisaria.use-case';
import { FindAllComisariasUseCase } from '../../application/use-cases/find-all-comisarias.use-case';
import { UpdateComisariaUseCase } from '../../application/use-cases/update-comisaria.use-case';
import { DeleteComisariaUseCase } from '../../application/use-cases/delete-comisaria.use-case';

@Controller('comisarias')
export class ComisariaController {
    constructor(
        private readonly createUC: CreateComisariaUseCase,
        private readonly findAllUC: FindAllComisariasUseCase,
        private readonly updateUC: UpdateComisariaUseCase,
        private readonly deleteUC: DeleteComisariaUseCase,
    ) {}

    @Post()
    async create(@Body() dto: CreateComisariaDto) {
        return this.createUC.execute(dto.nombre);
    }

    @Get()
    async findAll() {
        return this.findAllUC.execute();
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateComisariaDto) {
        return this.updateUC.execute(+id, dto.nombre);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.deleteUC.execute(+id);
    }
}
