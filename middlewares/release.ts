import { Context } from "https://deno.land/x/oak@v11.1.0/context.ts";

const hasAccess = (ctx: Context, next: () => void) => {
  try {
    // write here your logic to check if the user has access to the app
    console.log("middleware: has access", ctx.request.url.origin);
    return next();
  } catch (error) {
    return error;
  }
};

export { hasAccess };
