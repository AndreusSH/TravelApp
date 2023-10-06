import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { City, CitySchema } from 'src/schemas/cities.schema';
import { DatabaseModule } from 'src/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CityEntity}  from '../cities/entities/city.entity';
@Module({
  imports: [ 
    DatabaseModule,MongooseModule.forFeature([{
    name: City.name , schema: CitySchema
  }])],
  controllers: [CitiesController],
  providers: [CitiesService],
  exports : [CitiesService]
})
export class CitiesModule {}
