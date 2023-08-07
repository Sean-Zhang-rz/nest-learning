import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';
import { AaaGuard } from './aaa.guard';
import { AaaInterceptor } from './aaa.interceptor';
import { Aaa2Guard } from './Aaa2.guard';
import { DynamicModModule } from './dynamic-mod/dynamic-mod.module';
import { CccModule } from './ccc/ccc.module';
import { AaaMiddleware } from './aaa.middleware';
import { EeeModule } from './eee/eee.module';
import { UploadModule } from './upload/upload.module';
import { UserModule } from './user/user.module';
import { RedisModule } from './redis/redis.module';
import { RbaUserModule } from './rba-user/rba-user.module';
import config from './config/index';
import { User } from './rba-user/entities/rba-user.entity';
import { Permission } from './rba-user/entities/permission.entity';
import { Role } from './rba-user/entities/role.entity';
import { JwtModule } from '@nestjs/jwt';
import { LoginGuard } from './login/login.guard';
import { PermissionGuard } from './permission/permission.guard';
@Module({
  imports: [ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load:[config]
    }), 
    JwtModule.register({
      global: true,
      secret: 'sean',
      signOptions: {
        expiresIn: '30m'
      }
    }),
    AaaModule, BbbModule, DynamicModModule.register({aaa: 1, bbb:2}), 
    CccModule.register({aaa: 1, bbb:2}), EeeModule, UploadModule, UserModule,
    UserModule, RedisModule, RbaUserModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sean',
      database: 'rbac_test',
      synchronize: true,
      logging: true,
      entities:[User, Role, Permission],
      poolSize:10,
      connectorPackage:'mysql2',
      extra:{
        authPluguin: 'sha256_password'
      }
    }), 
    
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AaaGuard,
    Aaa2Guard,
    AaaInterceptor,
    {
      provide: 'APP_GUARD',
      useClass: LoginGuard
    },
    {
      provide: 'APP_GUARD',
      useClass: PermissionGuard
    },
    {
      provide: 'person',
      useValue: {
        name: 'aaa',
        age: 20,
      },
    },
    {
      provide: 'person2',
      useFactory() {
        return {
          name: 'aaa',
          desc: 'person2',
        };
      },
    },
    {
      provide: 'person4',
      useExisting: 'person2',
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AaaMiddleware).forRoutes('*')
  }
}
