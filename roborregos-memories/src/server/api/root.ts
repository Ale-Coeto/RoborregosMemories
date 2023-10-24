import { exampleRouter } from "rbrgs-memories/server/api/routers/example";
import { createTRPCRouter } from "rbrgs-memories/server/api/trpc";
import { photosRouter } from "./routers/photos";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  photos: photosRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
