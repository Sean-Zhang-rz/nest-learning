import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const os = require('os');
@Injectable()
export class AppService {
  // @Inject('REDIS_CLIENT')
  // private redisClient: RedisClientType;
  @Inject(ConfigService)
  private configService: ConfigService

  async getHello(): Promise<{config: any}> {
    // const homedir = os.homedir();
    // console.log(homedir);

    // return homedir;
    // const value = await this.redisClient.keys('*')
    // console.log(value);
    
    const config = this.configService.get('aaa.bbb.ccc')
    console.log('xxxxxxxxx', config);
    return {
      config: this.configService.get('aaa.bbb.ccc')
    }
  }
}
