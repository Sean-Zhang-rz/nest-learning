import { Injectable } from '@nestjs/common';
const os = require('os')
@Injectable()
export class AppService {
  getHello(): string {
    const homedir = os.homedir();
    console.log(homedir);

    return homedir
  }
}
