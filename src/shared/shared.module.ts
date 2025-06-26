import { Module, Global } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtStrategy } from './strategies/jwt.strategy';

@Global()
@Module({
    providers: [JwtAuthGuard, JwtStrategy],
    exports: [JwtAuthGuard, JwtStrategy],
})
export class SharedModule {}