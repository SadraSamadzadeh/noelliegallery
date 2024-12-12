import { usePathname } from 'next/navigation'
import React from 'react'
import { getImageByAlbumId } from '~/server/queries';
import Image from 'next/image';
export default function OneAlbum({params}) {
  return (
    <div>
        <Images/>
    </div>
  )

  async function Images() {
    const {id} = params;
    const imagesInAlbum = await getImageByAlbumId(id);
    return (
    <div>
        {imagesInAlbum.map((images, index) => (
            <div key={images.id + " - " + index}>
                <Image src={images.url} alt={images.name} width={300} height={300}></Image>
            </div>
        ))}
    </div>
    )
   
  }


}
