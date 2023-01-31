import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";
import { useLocation, useMatches } from "@remix-run/react";
import * as Sentry from "@sentry/remix";
import { useEffect } from "react";

Sentry.init({
  dsn: "https://08277fa6f76e402cb280824cc9a15fc9:3d828ab515d841b592a1ba93ffd24e91@o1407376.ingest.sentry.io/4504600708120576",
  tracesSampleRate: 1,
  debug: true,
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.remixRouterInstrumentation(
        useEffect,
        useLocation,
        useMatches
      ),
    }),
  ],
});

hydrate(<RemixBrowser />, document);
