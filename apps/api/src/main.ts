import { NestFactory } from "@nestjs/core";
import type { NestExpressApplication } from "@nestjs/platform-express";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { patchNestjsSwagger } from "@anatine/zod-nestjs";

import { AppModule } from "./app.module";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.useStaticAssets("public", { prefix: "/public" });
  app.setGlobalPrefix("api");

  const config = new DocumentBuilder()
    .setTitle("INDOCAL")
    .setDescription("The INDOCAL API description")
    .setVersion("1.0")
    .addBearerAuth()
    .build();

  patchNestjsSwagger();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api", app, document);

  await app.listen(Number(process.env.PORT) || 5000);
}

bootstrap();
