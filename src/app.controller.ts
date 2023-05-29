import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Query,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AaaFilter } from './aaa.filter';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';
import { Aaa2Filter } from './Aaa2.filter';
import { AaaException } from './AaaException';
import { Aaa2Guard } from './Aaa2.guard';
import { Role } from './Role/inde';
import { Roles } from './Role/role.decorator';

@Controller()
export class AppController {
  @Inject('person')
  private readonly person: { name: string; age: number };
  @Inject('person2')
  private readonly person2: { name: string; desc: string };
  constructor(private readonly appService: AppService) {}

  @Get()
  // @Aaa('admin')
  @UseFilters(Aaa2Filter)
  @Roles(Role.Admin)
  @UseGuards(Aaa2Guard)
  getHello(
    // @Param('aaa', ParseIntPipe) aaa: number,
    // @Query('bbb', ParseBoolPipe) bbb: boolean,
  ): string {
    // console.log(this.person);
    // console.log(this.person2);

    // return this.appService.getHello();
    // throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
    throw new AaaException('aaa', 'bbb')
  }
}
