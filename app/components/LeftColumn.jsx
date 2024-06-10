import React from 'react'
import Sections from './Sections'

export default function LeftColumn() {
  return (
    <div className='mt-20 flex justify-between md:w-[65%] bg-blue-300 min-h-[45%]'>
        <Sections />
        <p>Col-1 Start</p>
        <p>Col-2 Start</p>
    </div>
  )
}
