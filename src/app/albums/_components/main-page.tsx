"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { DialogTrigger } from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { makeAlbum } from "~/server/queries";
// import SubmitButton from './create-album-button'

//async function for getting the albums to show on the page
export function AlbumsPage({ children }: { children?: React.ReactNode }) {
  const [name, setName] = useState("");
  return (
    <>
      {children}
      <div className="flex flex-col items-center justify-center gap-10">
        <Card className="relative w-full max-w-xs">
          <Dialog>
            <DialogTrigger asChild>
              <CardContent className="p-20 hover:cursor-pointer">
                <img src={"/add.png"} alt="image" />
              </CardContent>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Album</DialogTitle>
                <DialogDescription>Create your album here</DialogDescription>
              </DialogHeader>
              <Input onChange={(e) => setName(e.target.value)} placeholder="Album Name" />
              <DialogFooter>
                <Button
                onClick={async () => {
                  await makeAlbum(name);
                }

                }
                >Create</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Card>
        <div>Add Album</div>
      </div>
    </>
  );
}
