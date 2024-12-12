import React from 'react'

export default function NavbarLayout({children} : {children : React.ReactNode}) {
  return (
    <div className='flex items-center justify-between sm:justify-normal py-4 px-4 text-xl font-semibold border-b'>
    {children}
    </div>
  )
}