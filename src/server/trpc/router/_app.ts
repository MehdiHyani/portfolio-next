import { router } from "../trpc";
import portfolio from "./portfolio";
import message from "./message";

export const appRouter = router({
    portfolio,
    message,
});

// export type definition of API
export type AppRouter = typeof appRouter;
