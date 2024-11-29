import { auth } from "@clerk/nextjs/server";
import "server-only";
import { db } from "~/server/db";

export async function getMyImages() {

    const {userId}: {userId: string | null} = await auth();

    if (!userId) throw new Error("Unauthorized");
    
    const images = await db.query.images.findMany({
        where: (model, {eq}) => eq(model.userId, userId),
        orderBy: (model, {desc}) => desc(model.id),
      });


    return images;
}

export async function getAlbums() {

  const {userId}: {userId: string | null} = await auth();
  if (!userId) throw new Error("Unauthorized");

  const albums = await db.query.albums.findMany({
    where: (model, {eq}) => eq(model.userId, userId),
    orderBy: (model, {desc}) => desc(model.id),
  });

  

  return albums;
}

export async function getImage(id: number) {
  const {userId}: {userId: string | null} = await auth();
  if (!userId) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (model, {eq}) => eq(model.id, id),
  });

  if (!image) throw new Error("Image not found");

  if (image.userId != userId) throw new Error("Unauthorized");
  return image;
}

export async function getLatestImage() {
  const {userId}: {userId: string | null} = await auth();
  if (!userId) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (model, {eq}) => eq(model.userId, userId),
    orderBy: (model, {desc}) => desc(model.id),
  });
  if (!image) throw new Error("Image not found");

  return image;
}

