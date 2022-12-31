import { router } from "../trpc";
import portfolio from "./portfolio";

export const appRouter = router({
    portfolio,
});

// export type definition of API
export type AppRouter = typeof appRouter;
