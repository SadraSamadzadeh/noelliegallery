 //async function for getting the latest images 
 import React from 'react'
 import {get3LatestAlbumImages} from '~/server/queries'
 import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card"
 import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
 } from "~/components/ui/carousel"


 type Image = {
   id: number,
   name: string,
   url: string,
   createdAt: Date,
   updatedAt: Date | null,
   userId: string,
 }
 
 export async function LatestImages({albumId} : {albumId: number}) {
  const latestImages : Image[] | {error: string} = await get3LatestAlbumImages(albumId); 
  if (!latestImages || Array.isArray(latestImages) && latestImages.length === 0) {
    return (
      <CarouselItem>
      <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
              <div>No Images</div>
              </CardContent>
            </Card>
      </div>
    </CarouselItem>
    )
  }
  return (
    <>
    {Array.isArray(latestImages) ? (latestImages.map((images : Image, index : number) => (
    <CarouselItem key={images.id + " - " + index}>
        <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <img src={images.url} alt='image'/>
                </CardContent>
              </Card>
        </div>
    </CarouselItem>
    ))) : (
      <div>Error: {latestImages.error}</div>
    )}
    </>
   )  
}