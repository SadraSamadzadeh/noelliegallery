import React from 'react'
import { AlbumsPage } from './_components/main-page'
import { AlbumSection } from './_components/albums-section'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import AddAlbums from './_components/add-albums'

export default function Page() {
  return (
    <div>
      <SignedIn>
        <AlbumsPage>
          <AlbumSection>
            <AddAlbums />
          </AlbumSection>
        </AlbumsPage>
      </SignedIn>
      <SignedOut>
        <div>You are not signed in</div>
      </SignedOut>
    </div>  
  )
}


