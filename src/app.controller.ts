import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  path: 'user',
  version: '1'
})
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  getHello(): string {
    return this.appService.getHello();
  }
}
