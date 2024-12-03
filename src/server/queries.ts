import { auth } from "@clerk/nextjs/server";
import "server-only";
import { db } from "~/server/db";
import { albumImages } from "./db/schema";
import { images } from "./db/schema";
import { eq } from "drizzle-orm";

export async function getMyImages() {

    const {userId}: {userId: string | null} = await auth();

    if (!userId) return {error: "Unauthorized"};
    
    const images = await db.query.images.findMany({
        where: (model, {eq}) => eq(model.userId, userId),
        orderBy: (model, {desc}) => desc(model.id),
      });


    return images;
}

export async function getAlbums() {

  const {userId}: {userId: string | null} = await auth();
  if (!userId) return {error: "Unauthorized"};


  const albums = await db.query.albums.findMany({
    where: (model, {eq}) => eq(model.userId, userId),
    orderBy: (model, {desc}) => desc(model.id),
  });

  

  return albums;
}

export async function getImage(id: number) {
  const {userId}: {userId: string | null} = await auth();
  if (!userId) return {error: "Unauthorized"};


  const image = await db.query.images.findFirst({
    where: (model, {eq}) => eq(model.id, id),
  });
  if (!image) return {error: "Image not found"};

  // if (!image) throw new Error("Image not found");

  if (image.userId != userId) throw new Error("Unauthorized");
  return image;
}

export async function getLatestImage() {
  const {userId}: {userId: string | null} = await auth();

  if (!userId) return {error: "Unauthorized"};


  const image = await db.query.images.findFirst({
    where: (model, {eq}) => eq(model.userId, userId),
    orderBy: (model, {desc}) => desc(model.id),
  });
  if (!userId) return {error: "Image not found"};

  return image;
}

export async function getImageByAlbumId(albumId: number) {
  const {userId}: {userId: string | null} = await auth();
  if (!userId) return {error: "Unauthorized"};



  const imagesInAlbumImages = await db.query.albumImages.findMany({
    where: (model, {eq}) => eq(model.albumId, albumId),
  });

  const ids = imagesInAlbumImages.map((image) => image.imageId);

  const images = await db.query.images.findMany({
    where: (images, { inArray }) => inArray(images.id, ids),
  });

  
  return images;
}

