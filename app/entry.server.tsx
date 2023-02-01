import { renderToString } from "react-dom/server";
import { RemixServer } from "remix";
import type { EntryContext } from "remix";
import * as Sentry from "@sentry/remix";

Sentry.init({
  dsn: "https://08277fa6f76e402cb280824cc9a15fc9:3d828ab515d841b592a1ba93ffd24e91@o1407376.ingest.sentry.io/4504600708120576",
  debug: true,
  tracesSampleRate: 1,
  beforeSend(event) {
    console.log(event)
    return event
  }
});
export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
  ) {
    let markup = renderToString(
      <RemixServer context={remixContext} url={request.url} />
      );
      

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
