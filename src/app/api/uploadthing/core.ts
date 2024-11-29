import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import {auth} from '@clerk/nextjs/server';
import { db } from "~/server/db";
import { albumImages, images } from "~/server/db/schema";
import { z } from "zod";
const f = createUploadthing();


// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 40,
    }, 
  })
  .input(
    z.object({
      albumId: z.number(),
    })
  )
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req, input }) => {
      // This code runs on your server before upload
      const {userId}: {userId: string | null} = await auth();
      if (!userId) throw new UploadThingError("Unauthorized");
      return { userId: userId, albumId: input.albumId };
    })
    .onUploadComplete(async ({ file, metadata }) => {
      if (metadata.userId != null) {
        await db.insert(images).values({
          name: file.name,
          url: file.url,
          userId: metadata.userId,
        });
      }
      console.log("finaly it might be working",metadata.albumId);
      console.log("metadata:", metadata);

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
