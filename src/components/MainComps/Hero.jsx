import React from 'react'
import roadSalt from '../../assets/images/roadSalt1.png'
import Button from './MiniComps/Button'

const Hero = () => {
  return (
    <>
      <div style={{backgroundImage: `url(${roadSalt})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className='bg-scroll bg-[#1f2025] text-plat flex justify-center lg:px-18 sm:px-12 px-6 py-36 sm:text-center text-left'>
        <div className='lg:w-[72rem]'>
            <div className='font-mont font-bold text-6xl sm:text-8xl sm:pb-8 sm:pt-8'>
                <h1>Road Salt hurts more than it helps.</h1>
            </div>
            <div className='font-league font-regular text-2xl md:text-4xl flex justify-center'>
                <p className='leading-[1.3] lg:w-[65rem]'>Road salt is harming the environment, the animals, and the water we humans rely on. Without proper funding, labs cannot pursue research on road salt. Therefore, we humbly beseech you to donate whatever you can. Each cent you donate will go towards providing a better future for us all.</p>
            </div>
            <div className='sm:text-4xl text-2xl text-center pb-10 pt-20'>
                <a href="https://www.gofundme.com/f/desaltify/donate" target="_blank" rel="noopener noreferrer"> 
                    <button className={`bg-white hover:bg-plat text-night font-2xl p-5 font-mont font-semibold rounded hover:scale-110 hover:rotate-2 ease-in duration-150`}>Donate Today!</button> 
                </a>
            </div>
          </div>
      </div>
    </>
  )
}

export default Hero