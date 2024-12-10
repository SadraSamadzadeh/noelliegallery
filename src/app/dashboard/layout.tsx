import React from 'react'

export default function layout({
    children
} : {
    children: React.ReactNode
}) {
  return (
    <div className='p-20 pt-10 h-screen'>
        {children}
    </div>
  )
}
