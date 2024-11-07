import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  let globaWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };

  if (!globaWithPrisma.prisma) {
    globaWithPrisma.prisma = new PrismaClient();
  }

  prisma = globaWithPrisma.prisma;
}

export default prisma;
