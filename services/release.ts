import releaseRepository from "../repositories/release.ts";

const getReleases = () => releaseRepository.getReleases();
const getRelease = (id: string) => releaseRepository.getRelease(id);
const addRelease = (data: Release) => releaseRepository.addRelease(data);
const deleteRelease = (id: string) => releaseRepository.deleteRelease(id);

export default {
  addRelease,
  deleteRelease,
  getReleases,
  getRelease,
};
