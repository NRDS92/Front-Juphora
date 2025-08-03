import React from 'react'

export default function Title({children}) {
  return (
    <div className='pt-10 md:pt-20 pb-5 md:pb-10 text-center'>
      <h2 className='text-2xl md:text-5xl font-bold '>{children}</h2>
    </div>
  )
}
