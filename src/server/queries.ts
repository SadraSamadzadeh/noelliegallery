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