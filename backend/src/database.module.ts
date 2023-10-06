import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURl)],
})
export class DatabaseModule {}
