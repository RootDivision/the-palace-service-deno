import { Context } from "https://deno.land/x/oak@v11.1.0/context.ts";

import syncService from "../services/sync.ts";
import releaseService from "../services/release.ts";
import { Release } from "../types/release.d.ts";

const sync = async (ctx: Context) => {
  try {
    const queryParams = ctx.request.url.searchParams;

    const discogsCollectionInDb = await releaseService.getReleases();

    let page = 0;
    let hasNext = true;
    let discogsCollection: Release[] = [];

    while (hasNext) {
      page += 1;
      const { pagination, releases } = await syncService.sync(queryParams);
      discogsCollection = [...discogsCollection, ...releases];
      //   hasNext = page < pagination.pages;
      hasNext = page < 2;
      console.log(`Syncing ${page} of ${pagination.pages}`);
    }

    const mapped = discogsCollection.map((r) => ({ id: r.id }));

    ctx.response.body = mapped;
  } catch (error) {
    console.log(error);
  }
};

export default { sync };
