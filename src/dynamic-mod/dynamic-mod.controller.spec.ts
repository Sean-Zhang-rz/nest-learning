import { Test, TestingModule } from '@nestjs/testing';
import { DynamicModController } from './dynamic-mod.controller';
import { DynamicModService } from './dynamic-mod.service';

describe('DynamicModController', () => {
  let controller: DynamicModController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DynamicModController],
      providers: [DynamicModService],
    }).compile();

    controller = module.get<DynamicModController>(DynamicModController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
