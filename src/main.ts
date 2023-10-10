import {
  AppModule
} from '@modules/app/app.module'
import {
  ValidationPipe
} from '@nestjs/common'
import {
  NestFactory
} from '@nestjs/core'
import {
  DocumentBuilder,
  SwaggerModule
} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Songoven')
    .setDescription('Github issues REST APIs')
    .setVersion('1.0')
    .addTag('issue')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  app.useGlobalPipes(new ValidationPipe())
  app.enableCors();
  await app.listen(
    process.env.PORT || 6906,
  )
}
bootstrap()
