"use server"
import { auth } from "@clerk/nextjs/server";
import "server-only";
import { db } from "~/server/db";
import { albums } from "./db/schema";

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
export async function get3LatestAlbumImages (albumId: number) {
  const {userId} : {userId: string | null} = await auth();
  if (!userId) return {error: "Unauthorized"};

  const imagesInAlbumImages = await db.query.albumImages.findMany({
    where: (model, {eq}) => eq(model.albumId, albumId),
  });

  const ids = imagesInAlbumImages.map((image) => image.imageId);

  const latest3Images = await db.query.images.findMany({
    where: (images, { inArray }) => inArray(images.id, ids),
    orderBy: (model, {desc}) => desc(model.id),
    limit: 3,
  });
  return latest3Images;
}


export async function makeAlbum(name: string) {
  const {userId} : {userId: string | null} = await auth();
  if (!userId) return {error: "Unauthorized"};

  try {
    const addAlbum = await db.insert(albums).values({
      userId: userId,
      name: name,
      createdAt: new Date(),
    }).returning();
    return addAlbum;
  }catch(error) {
    console.error("Error adding album:", error);
    return {error: "Error adding album"};
  }
  
}

export async function getImagesByDate(startingDate: Date, endingDate: Date) {
  const {userId} : {userId: string | null} = await auth();
  if (!userId) return {error: "Unauthorized"};

  try {
    const getImages = await db.query.images.findMany({
      where: (model, {gte, lte, eq}) => gte(model.createdAt, startingDate) && lte(model.createdAt, endingDate) && eq(model.userId, userId),
      orderBy: (model, {desc}) => desc(model.createdAt),
    });
    return getImages;
  }catch(error) {
    console.error("Error getting images by date:", error);
    return {error: "Error getting images by date"};
  }
}
export async function getAlbumsByDate(startingDate: Date, endingDate: Date) {
  const {userId} : {userId: string | null} = await auth();
  if (!userId) return {error: "Unauthorized"};

  try {
    const getAlbums = await db.query.albums.findMany({
      where: (model, {gte, lte, eq}) => gte(model.createdAt, startingDate) && lte(model.createdAt, endingDate) && eq(model.userId, userId),
      orderBy: (model, {desc}) => desc(model.createdAt),
    });
    return getAlbums;
  }catch(error) {
    console.error("Error getting images by date:", error);
    return {error: "Error getting images by date"};
  }
}