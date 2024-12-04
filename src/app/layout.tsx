import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import TopNav from "./_components/topnav";
import {NextSSRPlugin} from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import React from "react";
import { Toaster } from "~/components/ui/sonner";
import { shadesOfPurple } from '@clerk/themes'
export const metadata: Metadata = {
  title: "Noellie Gallery",
  description: "Chinchilla gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
import { getAlbums } from "~/server/queries";
export const dynamic = "force-dynamic";

import UploadComponent from "~/components/upload-component";




export default async function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const myAlbums = await getAlbums();
  return (
    <ClerkProvider 
    appearance={ {
      baseTheme: shadesOfPurple,
    }}
    >
      <html lang="en" className={`${GeistSans.variable} dark`}>
      <NextSSRPlugin
          /**
           * The `extractRouterConfig` will extract **only** the route configs
           * from the router to prevent additional information from being
           * leaked to the client. The data passed to the client is the same
           * as if you were to fetch `/api/uploadthing` directly.
           */
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body className="">
          <div className="h-screen grid grid-rows-[auto,1fr]">
            <TopNav>
              <UploadComponent myAlbums={myAlbums} />
            </TopNav>
            <main className="overflow-y-scroll">
              {children}
            </main>
          </div>
          {modal}
          <div id="modal-root"/>
          <Toaster  />
        </body>
      </html>
    </ClerkProvider>
    
  );
}
