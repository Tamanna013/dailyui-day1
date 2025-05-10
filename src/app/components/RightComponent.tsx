import React from 'react'

const RightComponent = () => {
  return (
    <div className='flex items-center justify-center h-screen inset-0 z-0 object-cover w-full bg-pink-100 overflow-hidden'>
      <video src="hero.mp4" autoPlay loop muted className=' h-full object-cover' />
    </div>
  )
}

export default RightComponent
