import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';
import { AaaGuard } from './aaa.guard';
import { AaaInterceptor } from './aaa.interceptor';

@Module({
  imports: [AaaModule, BbbModule],
  controllers: [AppController],
  providers: [
    AppService,
    AaaGuard,
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
export class AppModule {}
