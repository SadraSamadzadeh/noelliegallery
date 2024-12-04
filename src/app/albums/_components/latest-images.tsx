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



 export async function LatestImages({albumId}) {
  const latestImages = await get3LatestAlbumImages(albumId); 
  if (!latestImages || latestImages.length === 0) {
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
    {latestImages.map((images, index) => (
    <CarouselItem key={images.id + " - " + index}>
        <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <img src={images.url} alt='image'/>
                </CardContent>
              </Card>
        </div>
    </CarouselItem>
    ))}
    </>
   )  
}