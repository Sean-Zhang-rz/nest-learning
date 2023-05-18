import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { getConfig } from './utils';
@Module({
  imports: [
    CacheModule.register({
       isGlobal: true,
    }),
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [getConfig],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
