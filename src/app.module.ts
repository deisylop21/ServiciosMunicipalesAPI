import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module'; 
import { ColoniasModule } from './colonias/colonias.module';
import { ComisariasModule } from './comisarias/comisarias.module';
import { UserServiceModule } from './user-service/user-service.module';
import { SharedModule } from './shared/shared.module';
import { PagosUsersModule } from './pagos-users/pagos-users.module';

@Module({
  imports: [AuthModule, ColoniasModule, ComisariasModule, UserServiceModule, SharedModule, PagosUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
