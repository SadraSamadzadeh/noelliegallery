import React from 'react'
import { AlbumsPage } from './_components/main-page'
import { AlbumSection } from './_components/albums-section'

export default function Page() {
  return (
    <div>
      <AlbumsPage>
        <AlbumSection />
      </AlbumsPage>
    </div>  
  )
}


