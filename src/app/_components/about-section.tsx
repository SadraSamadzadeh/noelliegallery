import React from 'react'
import Image from 'next/image'
export default function AboutSection() {
  return (
    
        <div className='w-full flex flex-col items-center gap-10 mt-[50px] p-10 lg:flex-row lg:justify-around'>
          <div id="big" className=''>
                <Image src="/about.png" alt='image' width={500} height={500}></Image>
          </div>
        <div className='flex flex-col gap-10 lg:max-w-[500px] items-center justify-center'>
          <div className="">
              <p className="font-bold text-5xl bg-[radial-gradient(100%_100%_at_top_left,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">About</p>
          </div>
          <div className="text-xl">
           This project was made during my 4th year of school at first started as a birthday gift to my girlfriend who the name of the app is after and then turned into a larger scale project with promising UI and beautiful components 
          </div>
        </div>
      </div>
  )
}
