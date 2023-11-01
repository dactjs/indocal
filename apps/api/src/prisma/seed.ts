import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

import { UserRole } from "@indocal/schemas";

import { ENV } from "~/constants";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(ENV.ROOT_USER_PASSWORD, salt);

  await prisma.user.create({
    data: {
      username: ENV.ROOT_USER_USERNAME,
      email: ENV.ROOT_USER_EMAIL,
      name: ENV.ROOT_USER_NAME,
      password: hash,
      roles: [UserRole.STUDIO_USER],
    },
  });
}

main().finally(async () => await prisma.$disconnect());
