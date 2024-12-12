import React from 'react'
import { Button } from './ui/button'
import starsBg from '~/../public/stars.png'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'

export default function hero() {
  return (
    <section className='md:h-[1000px] h-[492px] flex items-center overflow-hidden relative bg-mask-gradient' 
    style={{ backgroundImage: `url(${starsBg.src})` }}>
        <div className='absolute inset-0'></div>
        {/* start planet */}
        <div className='absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border-white/20  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-custom-gradient shadow-custom-shadow'>
        </div>
        {/* end planet */}
        {/* ring 1 */}
        <div className='absolute md:h-[580px] md:w-[580px] h-[344px] w-[344px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'></div>
            <div className='absolute h-2 w-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
            <div className='absolute h-5 w-5 border border-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center'>
                <div className='h-2 w-2 bg-white rounded-full'>
                </div>
            </div>
        </div>
        {/* ring 2 */}
        <div className='absolute w-[444px] h-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed'>
        </div>
        <div className='absolute md:w-[980px] md:h-[980px] h-[544px] w-[544px] rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20'>
             <div className='absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'></div>
            <div className='absolute h-2 w-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2'></div>
        </div>
        <div className='container relative mt-8'>
           <h1 className='text-8xl font-semibold md:text-[168px] md:leading-none tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center'>Noellie Gallery</h1> 
           <p
           className='md:text-xl text-lg text-white-/70 mt-5 text-center max-w-xl mx-auto'
           >Beautifully designed gallery for uploading your photos</p>
           <div className='flex justify-center mt-5'>

          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
           </div>
        </div>
    </section>
  )
}
