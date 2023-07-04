import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AaaService } from 'src/aaa/aaa.service';
import { LoginGuard } from 'src/login.guard';
import { BbbService } from './bbb.service';

@Controller('bbb')
export class BbbController {
  constructor(
    private readonly bbbService: BbbService,
    private readonly aaaService: AaaService,
  ) {}

  @Get('bbb')
  @UseGuards(LoginGuard)
  hello() {
    return 'hello';
  }
  @Get()
  @UseGuards(LoginGuard)
  findAll() {
    return this.bbbService.findAll();
    // return `This action return all bbb ${this.aaaService.findAll()}`;
  }

  @Get(':id')
  @UseGuards(LoginGuard)
  findOne(@Param('id') id: string) {
    return this.bbbService.findOne(+id);
  }
}
