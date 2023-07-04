import { Inject, Injectable } from '@nestjs/common';
const os = require('os');
@Injectable()
export class AppService {
  // @Inject('REDIS_CLIENT')
  // private redisClient: RedisClientType;
  
  async getHello(): Promise<string> {
    // const homedir = os.homedir();
    // console.log(homedir);

    // return homedir;
    // const value = await this.redisClient.keys('*')
    // console.log(value);
    return 'Hello'
  }
}
