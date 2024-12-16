"use client"
import React, { useEffect, useState } from 'react' 
import Chart from './charts'
import { getAlbumsByDate, getImagesByDate, getTotalAlbums, getTotalImages } from '~/server/queries';
import {useUser} from '@clerk/nextjs'
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
 
import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import { Calendar } from "~/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import Table from './table';

type Image = {
  id: number,
  name: string,
  url: string,
  createdAt: Date,
  updatedAt: Date | null,
  userId: string,
}
type Album = {
  id: number,
  name: string,
  createdAt: Date,
  updatedAt: Date | null,
  userId: string,
}

export default function MainBody({children} : {children : React.ReactNode}) {
  const {user} = useUser();
  return (
    <>
      <div id="#main-body" className='w-full gap-10 rounded-xl border border-gray p-10 flex flex-col mt-3'>
          <div id="#top-bar" className='flex lg:flex-row flex-col w-full justify-between lg:max-h-[350px] gap-10 '>
            <div id="#welcome-box" className='border border-gray rounded-lg p-10 flex flex-col justify-center items-center lg:w-1/4'>
                  <div className='font-semibold text-3xl lg:text-5xl'>
                    Welcome Back,
                  </div>
                  <p className='font-semibold text-3xl lg:text-5xl'>{user?.firstName} {user?.lastName}</p>
                </div>  
                <div id="#chart-box" className='border border-gray rounded-lg flex lg:w-3/4'>
                <Chart />
                </div> 
          </div>
          <div id="#lower-bar" className='flex'>
            <div id="lower-table" className='hidden lg:flex w-full'>
              {children}
            </div>
            <div className='lg:hidden border border-gray rounded-lg font-semibold text-3xl p-10 flex'> 
              To view table open website with a bigger screen
            </div>
          </div>
       
      </div>
    </>
  )
}
