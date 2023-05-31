import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CountInterceptor } from './count.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new CountInterceptor())
  await app.listen(3000);
}
bootstrap();
