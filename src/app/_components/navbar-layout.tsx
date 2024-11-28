import React from 'react'

export default function NavbarLayout({children}) {
  return (
    <div className='flex items-center justify-between w-full p-4 text-xl font-semibold border-b'>
    {children}
    </div>
  )
}
