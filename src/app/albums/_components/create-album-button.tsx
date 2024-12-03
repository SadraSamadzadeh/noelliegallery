"use client"


import React from 'react'
import { Button } from '~/components/ui/button'
import { makeAlbum } from '~/server/queries';

export default function SubmitButton({albumName}) {



  return (
 <Button onClick={() => postAlbum(albumName)}>Create</Button>

  )
}
