import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AaaService } from 'src/aaa/aaa.service';
import { BbbService } from './bbb.service';
import { CreateBbbDto } from './dto/create-bbb.dto';
import { UpdateBbbDto } from './dto/update-bbb.dto';

@Controller({ host: ':host.0.0.1', path: 'bbb' })
export class BbbController {
  constructor(
    private readonly bbbService: BbbService,
    private readonly aaaService: AaaService,
  ) {}

  @Get('bbb')
  hello() {
    return 'hello';
  }
  @Get()
  findAll() {
    // return this.bbbService.findAll();
    return `This action return all bbb ${this.aaaService.findAll()}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bbbService.findOne(+id);
  }
}
