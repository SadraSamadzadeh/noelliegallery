"use client";
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "~/components/ui/select"
  import { Button } from "~/components/ui/button";
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
  } from "~/components/ui/dialog"
  import { SimpleUploadButton } from "../app/_components/simple-upload-button";

export default function UploadComponent({ myAlbums }: { myAlbums: any[] }) {
    const [selectedAlbumId, setSelectedAlbumId] = useState<number>(0);
  return (
      <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"} variant={"outline"}>
          Upload
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Choose Album & Upload Photos</DialogTitle>
          <DialogDescription>
            Select your album and upload photos to it.
          </DialogDescription>
        </DialogHeader>
        <Select
          onValueChange={(value) => {
            const album = myAlbums.find((album) => album.name === value);
            setSelectedAlbumId(album?.id || null);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select an album" />
          </SelectTrigger>
          <SelectContent>
            {myAlbums.map((album, index) => (
              <SelectItem value={album.name} key={album.id + " - " + index}>
                {album.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <DialogFooter>
          <SimpleUploadButton albumId={selectedAlbumId} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
