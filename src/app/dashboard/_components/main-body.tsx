"use client"
import React, { useEffect, useState } from 'react' 
import Chart from './charts'
import { getAlbumsByDate, getImagesByDate } from '~/server/queries';
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
export default function MainBody() {
    const [albums, setAlbums] = useState(Array<Album>());
    const [images, setImages] = useState(Array<Image>());
    const currentDate = new Date()
    const [date, setDate] = React.useState<DateRange | undefined>({
      from: currentDate,
      to: addDays(currentDate, 10),
    })  
      const {isLoaded, isSignedIn, user} = useUser();
      useEffect(() => {
        const updateDate = async () => {
          if (!date || !date.from || !date.to) {
            return <div>Invalid Date Range</div> // Handle the undefined case
          }
          const updatedImages = await getImagesByDate(date.from, date.to);
          const updatedAlbums = await getAlbumsByDate(date.from, date.to);
          if (Array.isArray(updatedImages) && Array.isArray(updatedAlbums)) {
            setImages(updatedImages);
            setAlbums(updatedAlbums);
          }
        }
        updateDate();
      }, [date])
  return (
<div className='w-full border rounded-xl border-gray-400  bg-gray-800 flex-col h-full'>
<div className="bg-custom-gradient-2 rounded-xl h-[250px] p-5 flex justify-between">
          <div className='flex flex-col items-center justify-evenly px-3'>
  
  
                  <div className="font-semibold text-5xl">
                      Welcome Back,
                      <p>{user?.firstName} {user?.lastName}</p>
                  </div>
          </div>
          <div className="flex items-center justify-end gap-3 mt-auto">
              {/* date picker component here */}
              <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[300px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>  
          </div>
      </div>
    <div className='w-full rounded-xl bg-gray-800 p-10 flex '>
            <div id="#left-container" className='flex flex-col items-center justify-between w-1/2 gap-10'>
          <Chart />
            </div>
        <div id="#right-container" className='flex flex-col items-center justify-between w-1/2 gap-5'> 

            <div id="#latest-albums-added" className='flex flex-col bg-gray-600 rounded-lg p-5 w-full gap-5 overflow-y-scroll max-h-[500px]'>
              {albums.length > 0 && albums.map((album, index) => (
                <div className='min-h-[90px] bg-gray-500 rounded-xl flex justify-start items-center p-5 gap-3' key={album.id + " - " + index}>
                <div id="#icon">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 16L7.49619 12.5067C8.2749 11.5161 9.76453 11.4837 10.5856 12.4395L13 15.25M10.915 12.823C11.9522 11.5037 13.3973 9.63455 13.4914 9.51294C13.4947 9.50859 13.4979 9.50448 13.5013 9.50017C14.2815 8.51598 15.7663 8.48581 16.5856 9.43947L19 12.25M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25Z"></path>
                    </svg>
                </div>
                    <div id="value-container" className='flex w-full'>
                      <div id="#title-created-at" className='flex flex-col w-full'>
                          <div id="#title">
                            {album.name}
                          </div>
                          <div id="#uploading-user">
                          </div>
                      </div>
                      <div id='created-at' className='flex justify-center items-center'>
                              {album.createdAt.toLocaleDateString()}   
                      </div>   
                  </div>
            </div>
              ))}
              {albums.length === 0 && <div>No Albums</div>}
            </div>
            <div id="#latest-images-added" className='flex flex-col bg-gray-600 rounded-lg p-5 w-full gap-5 overflow-y-scroll max-h-[500px]'>
            {images.length > 0 && images.map((image, index) => (
                <div className='min-h-[90px] bg-gray-500 rounded-xl flex justify-start items-center p-5 gap-3' key={image.id + " - " + index}>
                <div id="#icon">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.75 16L7.49619 12.5067C8.2749 11.5161 9.76453 11.4837 10.5856 12.4395L13 15.25M10.915 12.823C11.9522 11.5037 13.3973 9.63455 13.4914 9.51294C13.4947 9.50859 13.4979 9.50448 13.5013 9.50017C14.2815 8.51598 15.7663 8.48581 16.5856 9.43947L19 12.25M6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25Z"></path>
                    </svg>
                </div>
                    <div id="value-container" className='flex w-full'>
                      <div id="#title-created-at" className='flex flex-col w-full'>
                          <div id="#title">
                            {image.name}
                          </div>
                          <div id="#uploading-user">
                          </div>
                      </div>
                      <div id='created-at' className='flex justify-center items-center'>
                              <div>{image.createdAt.toLocaleDateString()}</div>   
                      </div>   
                  </div>
            </div>   
              ))}
              {images.length === 0 && <div>No Images</div>}
            </div>
        </div>
    </div>
</div>
  )
}












        {/* this is for more stuff later when we have more data to show as analytics but it will be mentioned here only so that next time it would be easy to config */}
            {/* <div className='flex items-center justify-between gap-4 w-full'>
                <div id="#total-albums" className='bg-gray-600 rounded-lg p-5'>
                <ChartContainer config={chartConfig2} className="h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData2}>
                    <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <Bar dataKey="albums" fill="var(--color-albums)" radius={4} />
                </BarChart>
                </ChartContainer>
                </div>
                <div id="#total-images" className='bg-gray-600 rounded-lg p-5'>
                <ChartContainer config={chartConfig2} className="h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData2}>
                    <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <Bar dataKey="albums" fill="var(--color-albums)" radius={4} />
                </BarChart>
                </ChartContainer>
                </div>
            </div> */}
