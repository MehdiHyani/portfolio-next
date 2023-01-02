import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "../../../../env/server.mjs";
import { appRouter } from "../../../server/trpc/router/_app";

// export API handler
export default createNextApiHandler({
    router: appRouter,
    createContext: () => ({}),
    onError:
        env.NODE_ENV === "development"
            ? ({ path, error }) => {
                //  skipcq: JS-0002
                console.error(`❌ tRPC failed on ${path}: ${error}`);
            }
            : undefined,
});
