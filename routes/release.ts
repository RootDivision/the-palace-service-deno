import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

import releaseController from "../controllers/release.ts";

import { canAccessApp } from "../middlewares/release.ts";

const releaseRouter = new Router({ prefix: "/release" });

releaseRouter.get("/", canAccessApp, releaseController.getReleases);
releaseRouter.get("/:id", canAccessApp, releaseController.getRelease);
releaseRouter.post("/", canAccessApp, releaseController.addRelease);
releaseRouter.delete("/:id", canAccessApp, releaseController.deleteRelease);

export default releaseRouter;
