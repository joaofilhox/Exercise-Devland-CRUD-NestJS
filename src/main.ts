import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Talent Register API')
    .setDescription('API para gerenciamento de talentos e pagamentos')
    .setVersion('1.0')
    .addTag('talents', 'Endpoints para gerenciar talentos')
    .addTag('payments', 'Endpoints para gerenciar pagamentos')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`Aplicação rodando em: http://localhost:3000`);
  console.log(`Documentação Swagger em: http://localhost:3000/api`);
}
bootstrap();
