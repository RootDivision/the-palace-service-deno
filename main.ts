import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import prisma from "./prisma/client.ts";

const app = new Application();
const router = new Router();

router
  .get("/", (ctx) => {
    ctx.response.body = "API is running";
  })
  .get("/release", async (ctx) => {
    const releases = await prisma.release.findMany();
    ctx.response.body = releases;
  })
  .get("/release/:id", async (ctx) => {
    const { id } = ctx.params;
    const release = await prisma.release.findUnique({
      where: {
        id: Number(id),
      },
    });
    ctx.response.body = release;
  })
  .post("/release", async (ctx) => {
    const { data } = await ctx.request.body({ type: "json" }).value;
    const result = await prisma.release.create({
      data,
    });

    ctx.response.body = result;
  })
  .delete("/release/:id", async (ctx) => {
    const { id } = ctx.params;
    const release = await prisma.release.delete({
      where: {
        id: Number(id),
      },
    });

    ctx.response.body = release;
  });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
