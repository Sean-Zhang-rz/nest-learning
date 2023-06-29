import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import { AppModule } from './app.module';
import { CountInterceptor } from './count.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });
  app.use(session({
    secret: 'sean', // 加密cookie的秘钥
    resave: false, // session没变的时候要不要重新生成cookie
    saveUninitialized: false // 没登录要不要也创建一个session
  }))
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new CountInterceptor())
  await app.listen(3000);
}
bootstrap();
