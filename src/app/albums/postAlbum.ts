"use server"

import { makeAlbum } from "~/server/queries";

export async function postAlbum(name: string) {
    const album = await makeAlbum(name);
    console.log(album);
}