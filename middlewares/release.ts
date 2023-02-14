import { Context } from "https://deno.land/x/oak@v11.1.0/context.ts";

const canAccessApp = (ctx: Context, next: () => void) => {
  try {
    // write here your logic to check if the user has access to the app
    console.log("middleware: has access", ctx.request.url);
    return next();
  } catch (error) {
    return error;
  }
};

export { canAccessApp };
