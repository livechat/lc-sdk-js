import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt'),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });
  await app.listen(8080);
}
bootstrap();
