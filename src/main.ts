import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableVersioning({
    defaultVersion : "1.0",
    type: VersioningType.URI,
  });
  const config = new DocumentBuilder()
    .setTitle('NestJs Full Api')
    .setDescription('A NestJs backend example')
    .setVersion('1.0')
    .addTag('Routes')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
 

  await app.listen(3333);
}
bootstrap();
