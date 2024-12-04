import React from 'react'
import { get3LatestAlbumImages, getAlbums, makeAlbum } from '~/server/queries'
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel"
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '~/components/ui/dialog'
import { Input } from "~/components/ui/input"
import { postAlbum } from './postAlbum'
import SubmitButton from './create-album-button'

export default function AlbumsPage() {
  return (
    <div>
      <AlbumsSection/>
    </div>
  )

  //async function for getting the latest images 
  async function LatestImages({albumId}) {
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



//async function for getting the albums to show on the page 
  async function AlbumsSection() {
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
      <div className='flex flex-col gap-10 items-center justify-center'>
          <Card className='relative w-full max-w-xs'>
          <Dialog>
                <DialogTrigger  asChild>
                <CardContent className='p-20 hover:cursor-pointer'>
                <img src={'/add.png'} alt='image' />
              </CardContent>
                </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Album</DialogTitle>
          <DialogDescription>
            Create your album here
          </DialogDescription>
        </DialogHeader>
        <Input placeholder='Album Name'/>
        <DialogFooter>
          <SubmitButton albumName="does this work?"/>
        </DialogFooter>
      </DialogContent>
      </Dialog>
    </Card>
          <div>
            Add Album
          </div>
    </div>  
        
      </div>
      </div> 
    )
  }
}
