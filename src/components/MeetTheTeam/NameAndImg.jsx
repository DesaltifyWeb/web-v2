import React from 'react'

function NameAndImg({name, pos, src}) {
  return (
    <div className='flex justify-center'>
      <div className=''>
          <div className='h-48 w-48 mb-6'>
            <img src={src}></img>
          </div>
          <div className=''>
              <div className='text-lg md:text-xl lg:text-2xl mb-2 pt-4'>
                <h3 className='font-mont font-semibold text-xl md:text-2xl lg:text-3xl mb-2'>
                  {name}
                </h3>
                <p className='font-league text-sm md:text-base lg:text-lg'>
                  {pos}
                </p>
              </div>
          </div>
      </div>
    </div>
)

}

export default NameAndImg

