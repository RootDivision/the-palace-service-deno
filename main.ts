import { Application } from "https://deno.land/x/oak@v11.1.0/mod.ts";

import releaseRouter from "./routes/release.ts";
import syncRouter from "./routes/sync.ts";

const app = new Application();

app.use(releaseRouter.routes());
app.use(releaseRouter.allowedMethods());

app.use(syncRouter.routes());
app.use(syncRouter.allowedMethods());

await app.listen({ port: 8000 });
