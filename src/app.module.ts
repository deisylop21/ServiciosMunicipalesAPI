import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module'; 
import { ColoniasModule } from './colonias/colonias.module';
import { ComisariasModule } from './comisarias/comisarias.module';
import { ServiciosModule } from './servicios/servicios.module';

@Module({
  imports: [AuthModule, ColoniasModule, ComisariasModule, ServiciosModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
