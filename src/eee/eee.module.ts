import { Module } from '@nestjs/common';
import { EeeService } from './eee.service';
import { EeeController } from './eee.controller';

@Module({
  controllers: [EeeController],
  providers: [EeeService]
})
export class EeeModule {}
