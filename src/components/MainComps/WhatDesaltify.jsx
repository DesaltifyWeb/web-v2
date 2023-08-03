import React from 'react'
import desaltifyLogo from '../../assets/desaltifyLogo.svg'


const WhatDesaltify = () => (
    <div className='bg-yinmin text-plat flex justify-center lg:px-18 sm:px-12 px-6 py-10 pb-20 sm:text-left'>
        <div className='lg:w-[72rem]'>
        <div className='font-mont font-bold text-3xl md:text-5xl lg:text-6xl pb-8 sm:pb-16 pt-8'>
                        <h1>Who are we?</h1>
                    </div>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-6'>
                <div className=''>
                    <div className='font-league font-regular text-lg lg:text-3xl'>
                        <p>We are Desaltify, a group of committed high school students who, startled by the overlooked environmental issue of road salt, found our shared passion in spreading awareness about its harmful impacts. We are dedicated to promoting smarter, eco-friendly road salting strategies in our community. We aim to 'desaltify' our beautiful state of Minnesota, ensuring safer winter roads and a healthier environment.</p>
                    </div>
                </div>
                <div className='flex justify-self-center'>
                    <img src={desaltifyLogo} className='sm:scale-75 scale-50 -my-24'/>
                </div>
            </div>
        </div>
    </div>
)
export default WhatDesaltify