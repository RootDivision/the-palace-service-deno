import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

import releaseController from "../controllers/release.ts";

import { hasAccess } from "../middlewares/release.ts";

const releaseRouter = new Router({ prefix: "/release" });

releaseRouter.get("/", hasAccess, releaseController.getReleases);
releaseRouter.get("/:id", hasAccess, releaseController.getRelease);
releaseRouter.post("/", hasAccess, releaseController.addRelease);
releaseRouter.delete("/:id", hasAccess, releaseController.deleteRelease);

export default releaseRouter;
