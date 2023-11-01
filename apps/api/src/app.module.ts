import { APP_PIPE } from "@nestjs/core";
import { Module } from "@nestjs/common";
import {
  PrismaModule,
  providePrismaClientExceptionFilter,
} from "nestjs-prisma";
import { ZodValidationPipe } from "@anatine/zod-nestjs";

import { AuthModule } from "./auth";
import { TicketsModule } from "./tickets";
import { SuppliesModule } from "./supplies";

@Module({
  imports: [AuthModule, TicketsModule, SuppliesModule, PrismaModule],
  providers: [
    { provide: APP_PIPE, useClass: ZodValidationPipe },
    providePrismaClientExceptionFilter(),
  ],
})
export class AppModule {}
