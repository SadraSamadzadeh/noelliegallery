// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://a333a21a8b0e5cbc4154f1be68e9b526@o4508372588756992.ingest.de.sentry.io/4508372596031568",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
