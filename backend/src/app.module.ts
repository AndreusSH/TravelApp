import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesController } from './cities/cities.controller';
import { CitiesModule } from './cities/cities.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [CitiesModule, DatabaseModule],
  controllers: [AppController, CitiesController],
  providers: [AppService],
})
export class AppModule {}
