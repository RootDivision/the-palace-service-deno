import prisma from "../prisma/client.ts";

import { Release } from "../types/release.d.ts";

const releaseData: Release[] = [
  { id: 1, instance_id: 1 },
  { id: 2, instance_id: 2 },
  { id: 3, instance_id: 3 },
  { id: 4, instance_id: 4 },
  { id: 5, instance_id: 5 },
  { id: 6, instance_id: 6 },
  { id: 7, instance_id: 7 },
  { id: 8, instance_id: 8 },
];

await prisma.release.deleteMany();
const result = await prisma.release.createMany({ data: releaseData });

console.log("Seeding complete.", result);

await prisma.$disconnect();
