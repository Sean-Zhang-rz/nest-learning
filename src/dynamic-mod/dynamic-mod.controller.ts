import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { DynamicModService } from './dynamic-mod.service';
import { CreateDynamicModDto } from './dto/create-dynamic-mod.dto';
import { UpdateDynamicModDto } from './dto/update-dynamic-mod.dto';

@Controller('dynamic-mod')
export class DynamicModController {
  constructor(
    @Inject('CONFIG_OPTIONS') private configOptions: Record<string, number>,
    private readonly dynamicModService: DynamicModService
  ) {}

  @Get()
  findAll() {
    console.log(this.configOptions);
    
    return this.dynamicModService.findAll();
  }
}
