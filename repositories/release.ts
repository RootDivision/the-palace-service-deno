import prisma from "../prisma/client.ts";

const getReleases = () => prisma.release.findMany();

const getRelease = (id: string) =>
  prisma.release.findUnique({
    where: {
      id: Number(id),
    },
  });

const addRelease = (data: Release) => prisma.release.create({ data });

const deleteRelease = (id: string) =>
  prisma.release.delete({
    where: {
      id: Number(id),
    },
  });

export default {
  addRelease,
  deleteRelease,
  getRelease,
  getReleases,
};
