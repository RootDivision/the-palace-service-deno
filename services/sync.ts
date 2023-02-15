import { load } from "https://deno.land/std@0.177.0/dotenv/mod.ts";

const envVars = await load();

const sync = async (params: URLSearchParams) => {
  try {
    const response = await fetch(envVars.DISCOGS_URL + params);
    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export default {
  sync,
};
