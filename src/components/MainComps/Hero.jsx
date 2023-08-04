import React from 'react'
import roadSalt from '../../assets/images/roadSalt1.png'

const Hero = () => {
  return (
    <>
      <div className='bg-oxford text-plat flex justify-center lg:px-18 sm:px-12 px-6 py-10 sm:text-center text-left'>
        <div className='lg:w-[72rem]'>
            <div className='font-mont font-bold text-6xl sm:text-8xl pb-8 sm:pb-16 pt-8'>
                <h1>Road Salt hurts more than it helps.</h1>
            </div>
            <div className='font-league font-regular md:leading-loose leading-relaxed text-xl md:text-3xl'>
                <p>Road salt is harming the environment, the animals, and the water we humans rely on. Without proper funding, labs cannot pursue research on road salt. Therefore, we humbly beseech you to donate whatever you can. Each cent you donate will go towards providing a better future for us all.</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default Hero