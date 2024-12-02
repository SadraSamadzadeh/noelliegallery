import React from 'react'
import { Button } from './ui/button'
import starsBg from '~/../public/stars.png'

export default function hero() {
  return (
    <section className='h-[492px] flex items-center overflow-hidden relative' style={{ backgroundImage: `url(${starsBg.src})` }}>
        <div className='absolte inset-0 bg-bg-custom-gradient-2'></div>
        <div className='absolute h-64 w-64 bg-purple-500 rounded-full border-white/20  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-custom-gradient shadow-custom-shadow'>
        </div>
        {/* ring 1 */}
        <div className='absolute h-[344px] w-[344px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'></div>
            <div className='absolute h-2 w-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
            <div className='absolute h-5 w-5 border border-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center'>
                <div className='h-2 w-2 bg-white rounded-full'>
                </div>
            </div>
        </div>
        {/* ring 2 */}
        <div className='absolute w-[444px] h-[444px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed'>

        </div>
        <div className='absolute h-[544px] w-[544px] rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20'>
             <div className='absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'></div>
            <div className='absolute h-2 w-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2'></div>
        </div>
        <div className='container relative mt-16'>
           <h1 className='text-8xl font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center'>Noellie Gallery</h1> 
           <p
           className='text-lg text-white-/70 mt-5 text-center'
           >Beautifully designed gallery for uploading your photos</p>
           <div className='flex justify-center mt-5'>
            <Button>Join Waitlist</Button>
           </div>
        </div>
    </section>
  )
}
