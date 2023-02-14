import { getQuery } from "https://deno.land/x/oak@v11.1.0/helpers.ts";
import { Context } from "https://deno.land/x/oak@v11.1.0/mod.ts";

import releaseService from "../services/release.ts";

const getReleases = async (ctx: Context) => {
  try {
    const releases = await releaseService.getReleases();
    
    ctx.response.body = releases;
  } catch (error) {
    console.log(error);
  }
};

const getRelease = async (ctx: Context) => {
  try {
    const { id } = getQuery(ctx, { mergeParams: true });
    const release = await releaseService.getRelease(id);

    ctx.response.body = release;
  } catch (error) {
    console.log(error);
  }
};

const addRelease = async (ctx: Context) => {
  try {
    const { data } = await ctx.request.body({ type: "json" }).value;
    const result = await releaseService.addRelease(data);

    ctx.response.body = result;
  } catch (error) {
    console.log(error);
  }
};

const deleteRelease = async (ctx: Context) => {
  try {
    const { id } = getQuery(ctx, { mergeParams: true });
    const release = await releaseService.deleteRelease(id);

    ctx.response.body = release;
  } catch (error) {
    console.log(error);
  }
};

export default {
  addRelease,
  deleteRelease,
  getRelease,
  getReleases,
};
