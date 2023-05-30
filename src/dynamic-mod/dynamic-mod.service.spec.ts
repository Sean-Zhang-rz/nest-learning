import { Test, TestingModule } from '@nestjs/testing';
import { DynamicModService } from './dynamic-mod.service';

describe('DynamicModService', () => {
  let service: DynamicModService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DynamicModService],
    }).compile();

    service = module.get<DynamicModService>(DynamicModService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
