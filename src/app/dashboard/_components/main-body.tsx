import React from 'react'

export default function MainBody() {
  return (
    <div className='w-full border rounded-xl border-gray-400  bg-gray-800 p-10 flex'>
        <div id="#left-container" className='flex flex-col items-center justify-between w-1/2 gap-10'>
            <div className='flex items-center justify-between gap-4 w-full'>
                <div className='bg-gray-600 rounded-lg w-32 h-10'>

                </div>
                <div className='bg-gray-600 rounded-lg w-32 h-10'>

                </div>
                <div className='bg-gray-600 rounded-lg w-32 h-10'>

                </div>
            </div>
            <div id="#chart-container" className='w-full'>
                <div id="#chart" className="h-[250px] bg-gray-600 rounded-lg"></div>
            </div>
            <div id="#lower-sub-container" className='w-full'>
                <div className='bg-gray-600 rounded-lg h-[100px]'></div>
            </div>
        </div>
        <div id="#right-container" className='flex flex-col items-center justify-between w-1/2'> 
            <div>
                    
            </div>
            <div>
                    
            </div>
        </div>
    </div>
  )
}
