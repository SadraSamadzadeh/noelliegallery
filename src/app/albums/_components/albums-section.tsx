import React from 'react'
import {getAlbums} from '../../../server/queries'
import { Card, CardContent, CardFooter, CardHeader } from "../../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel"
import Link from 'next/link'
import { LatestImages } from './latest-images'

export async function AlbumSection() {
    const albums = await getAlbums();
    return (
<div className='flex flex-col gap-10'>
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
      <div>
      <CardHeader className='text-center'>
            {album.name}
        </CardHeader>
      </div>
        </CarouselItem>
          <LatestImages albumId={album.id}/>
      </CarouselContent>
      </Link>
      <CarouselPrevious />
      <CarouselNext /> 
    </Carousel>
  ))}
  </div>
</div> 
    )
}