import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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

@Module({
  imports: [AaaModule, BbbModule, DynamicModModule.register({aaa: 1, bbb:2}), CccModule.register({aaa: 1, bbb:2}), EeeModule, UploadModule],
  controllers: [AppController],
  providers: [
    AppService,
    AaaGuard,
    Aaa2Guard,
    AaaInterceptor,
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
