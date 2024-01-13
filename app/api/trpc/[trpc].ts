import { createNextApiHandler } from "@trpc/server/adapters/next";

import { appRouter } from "server/api/root";
import { createTRPCContext } from "server/api/trpc";
import { settings } from "settings/settings";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    settings.nodeEnv === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
