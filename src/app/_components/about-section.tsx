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
            Uploading images is easy with Noellie Gallery. Just upload your images and they will be uploaded to your albums. You can also add albums to your account and upload images to them. you are also able to view your statistics and overview in the dashboard panel
          </div>
        </div>
      </div>
  )
}
