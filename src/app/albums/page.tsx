import React from 'react'
import { getAlbums } from '~/server/queries'
import { Card, CardContent } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import Link from 'next/link'
export default function AlbumsPage() {

  return (
    <div>
      <Albums/>
    </div>
  )




  async function Albums() {
  const albums = await getAlbums();
    return (
      <div className='flex flex-row flex-wrap gap-40 items-center justify-center'>
        {albums.map((album, index) => (
            <Carousel className='w-full max-w-xs'>
              <Link href={`/albums/${album.id}`}>
              <CarouselContent>
              <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <img src='/images.png' alt='image'/>
                </CardContent>
              </Card>
            </div>
              </CarouselItem>
              <CarouselItem>
              <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <img src='/images.png' alt='image'/>
                </CardContent>
              </Card>
            </div>
              </CarouselItem>
              <CarouselItem>
              <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <img src='/images.png' alt='image'/>
                </CardContent>
              </Card>
            </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
              </Link>
            
          </Carousel>
        ))}
      </div>
    )
  }
}
