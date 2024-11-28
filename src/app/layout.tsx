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
export const metadata: Metadata = {
  title: "Noellie Gallery",
  description: "Chinchilla gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};
import { getAlbums } from "~/server/queries";
export const dynamic = "force-dynamic";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"

export async function ShowAlbums() {
    const myAlbums = await getAlbums();
    return (
      <div className="flex flex-col justify-center items-center gap-3">
          <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select an album" />
        </SelectTrigger>
        <SelectContent>
            {myAlbums.map((album, index) => (
              <SelectItem value={album.name} key={album.id + " - " + index}>{album.name}</SelectItem>
            ))}
        </SelectContent>
      </Select>
      </div>
    )
  }

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
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
              <ShowAlbums />
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
