import { Test, TestingModule } from '@nestjs/testing';
import { CitiesService } from './cities.service';
import { getModelToken } from '@nestjs/mongoose';
import { City } from 'src/schemas/cities.schema';

describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitiesService, , { provide: getModelToken(City.name), useValue: jest.fn() }],
    }).compile();

    service = module.get<CitiesService>(CitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
