import React from 'react'
import Button from './components/MainComps/MiniComps/Button'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-oxford text-plat'>
      <div className='text-center'>
          <h1 className='font-mont font-bold text-5xl sm:text-7xl pb-8'>404 Not Found</h1>
          <p className='font-league font-regular text-lg lg:text-3xl'>
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <a href="/" className='text-3xl text-center mt-8'>
              <Button buttonText='Go Home'/>
          </a>
      </div>
  </div>
  )
}

export default NotFound