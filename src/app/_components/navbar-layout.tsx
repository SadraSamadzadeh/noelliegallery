import React from 'react'

export default function NavbarLayout({children} : {children : React.ReactNode}) {
  return (
    <div className='fixed w-full flex items-center justify-between sm:justify-normal py-4 px-4 text-xl font-semibold border-b z-10'>
    {children}
    </div>
  )
}