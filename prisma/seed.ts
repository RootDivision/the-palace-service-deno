import prisma from "../prisma/client.ts";
import { Release } from "../types/release.d.ts";

const releaseData: Release[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

await prisma.release.deleteMany();
const result = await prisma.release.createMany({ data: releaseData });

console.log("Seeding complete.", result);

await prisma.$disconnect();
