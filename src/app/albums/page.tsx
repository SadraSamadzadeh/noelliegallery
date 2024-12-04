import React from 'react'
import { AlbumsPage } from './main-page'
import {AlbumSection} from './albums-section'

export default function Page() {
  return (
    <div>
      <AlbumsPage>
        <AlbumSection />
      </AlbumsPage>
    </div>
  )
}


