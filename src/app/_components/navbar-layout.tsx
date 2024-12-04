import React from 'react'

export default function NavbarLayout({children}) {
  return (
    <div className='flex items-center justify-between w-full py-4 px-7 text-xl font-semibold border-b'>
    {children}
    </div>
  )
}
