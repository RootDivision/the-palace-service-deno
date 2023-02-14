import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";

import releaseRouter from "./routes/release.ts";

const app = new Application();

app.use(releaseRouter.routes());
app.use(releaseRouter.allowedMethods());

await app.listen({ port: 8000 });
