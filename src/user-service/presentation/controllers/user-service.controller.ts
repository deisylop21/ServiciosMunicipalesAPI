import { Controller, Post, Body, UseGuards, Request, Get, Param, Put, Delete } from '@nestjs/common';
import { JwtAuthGuard } from '../../../shared/guards/jwt-auth.guard';
import { CreateUserServiceUseCase } from '../../application/use-cases/create-user-service.use-case';
import { GetUserServicesUseCase } from '../../application/use-cases/get-user-services.use-case';
import { UpdateUserServiceUseCase } from '../../application/use-cases/update-user-service.use-case';
import { DeleteUserServiceUseCase } from '../../application/use-cases/delete-user-service.use-case';
import { CreateUserServiceDto } from '../../application/dtos/create-user-service.dto';
import { UpdateUserServiceDto } from '../../application/dtos/update-user-service.dto';

@UseGuards(JwtAuthGuard)
@Controller('user-services')
export class UserServiceController {
    constructor(
        private readonly createUserServiceUseCase: CreateUserServiceUseCase,
        private readonly getUserServicesUseCase: GetUserServicesUseCase,
        private readonly updateUserServiceUseCase: UpdateUserServiceUseCase,
        private readonly deleteUserServiceUseCase: DeleteUserServiceUseCase,
    ) {}

    @Post()
    async create(@Body() dto: CreateUserServiceDto, @Request() req) {
        return this.createUserServiceUseCase.execute(dto, req.user.user_id);
    }

    @Get()
    async findAll(@Request() req) {
        return this.getUserServicesUseCase.execute(req.user.user_id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() dto: UpdateUserServiceDto, @Request() req) {
        return this.updateUserServiceUseCase.execute(Number(id), req.user.user_id, dto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number, @Request() req) {
        await this.deleteUserServiceUseCase.execute(Number(id), req.user.user_id);
        return { message: 'Servicio eliminado' };
    }
}