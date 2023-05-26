import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  UseFilters,
} from '@nestjs/common';
import { AaaFilter } from './aaa.filter';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Inject('person')
  private readonly person: { name: string; age: number };
  @Inject('person2')
  private readonly person2: { name: string; desc: string };
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(AaaFilter)
  getHello(): string {
    console.log(this.person);
    console.log(this.person2);

    // return this.appService.getHello();
    throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
  }
}
