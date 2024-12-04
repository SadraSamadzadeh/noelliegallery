"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";

import { useRouter } from "next/navigation";
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
import { toast } from "sonner";


export function AlbumsPage({ children }: { children?: React.ReactNode }) {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      {children}
      <div className="flex flex-col items-center justify-center gap-10">
        <Card className="relative w-full max-w-xs">
          <Dialog open={open} onOpenChange={setOpen}>
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
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="Album Name"
              />
              <DialogFooter>
                <Button
                  onClick={async () => {
                    try {
                      await makeAlbum(name); // Replace this with your actual function
                      router.refresh();
                      toast.success("Album created successfully!");
                    } catch (error) {
                      toast.error("Failed to create album. Please try again.");
                    }
                    setOpen(false);
                  }}
                >
                  Create
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Card>
        <div>Add Album</div>
      </div>
    </>
  );
}
