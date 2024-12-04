"use client"


import React from 'react'
import { Button } from '~/components/ui/button'
import { postAlbum } from './postAlbum';

export default function SubmitButton({albumName}) {



  return (
 <Button onClick={() => postAlbum(albumName)}>Create</Button>

  )
}
