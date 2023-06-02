import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseArrayPipe, ValidationPipe } from '@nestjs/common';
import { EeeService } from './eee.service';
import { CreateEeeDto } from './dto/create-eee.dto';
import { UpdateEeeDto } from './dto/update-eee.dto';

@Controller('eee')
export class EeeController {
  constructor(private readonly eeeService: EeeService) {}

  @Get()
  findAll(@Query('ee', new ParseArrayPipe({
    items: Number
  })) ee: Array<number>) {
    return ee.reduce((total, item) => total + item, 0)
  }

  @Post('oo')
  ooo(@Body(new ValidationPipe()) obj: CreateEeeDto) {
    console.log(obj);
    
  }
}
