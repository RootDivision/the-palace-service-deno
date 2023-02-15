import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

import syncController from "../controllers/sync.ts";
import { hasAccess } from "../middlewares/release.ts";

const syncRouter = new Router({ prefix: "/sync" });

syncRouter.get("/", hasAccess, syncController.sync);

export default syncRouter;
