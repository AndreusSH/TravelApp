import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { Model } from 'mongoose';
import { CityDocument,City } from 'src/schemas/cities.schema';

@Injectable()
export class CitiesService {
  constructor(
    @InjectModel(City.name) private readonly cityModel: Model<City>,
  ){}
 async create(createCityDto: CreateCityDto) {
    const city = new this.cityModel(createCityDto)
    return city.save();
  }

  async findAll() : Promise<CityDocument[]> {
    return this.cityModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} city`;
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
