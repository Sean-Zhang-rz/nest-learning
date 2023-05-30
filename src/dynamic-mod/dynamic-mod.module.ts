import { DynamicModule, Module } from '@nestjs/common';
import { DynamicModService } from './dynamic-mod.service';
import { DynamicModController } from './dynamic-mod.controller';

@Module({})
export class DynamicModModule {
  static register(options: Record<string, number>): DynamicModule {
    return {
      module: DynamicModModule,
      controllers:[DynamicModController],
      providers:[{
        provide: 'CONFIG_OPTIONS',
        useValue: options,
      }, DynamicModService],
      exports:[]
    }
  }
}
