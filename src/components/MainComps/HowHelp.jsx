import React from 'react'
import pres from '../../assets/images/pres.png'

const HowHelp = () => {
  return (
    <div className='bg-silver text-navy flex justify-center lg:px-18 sm:px-12 px-6 py-20 pb-36 sm:text-right'>
    <div className='lg:w-[72rem]'>
        <div className='font-mont font-bold text-3xl md:text-5xl lg:text-6xl pb-8 sm:pb-16 pt-8'>
            <h1>What are we doing to help?</h1>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-16'>
            <div className='flex justify-center items-center md:order-1 order-2'>
                <img src={pres} />
            </div>
            <div className='font-league font-regular text-lg lg:text-3xl md:order-2 order-1 leading-[1.3]'>
                <p>From illuminating Instagram posts to heartfelt community outreach, we're on a mission to enlighten Minnesota about the harmful impacts of road salt. We've touched the hearts of families, imbued summer camps with our cause, and have started to explore the terrain of viable solutions. Keeping the momentum alive, we're now in conversation with city council, keen to see what proactive steps we can inspire.</p>
            </div>
        </div>
    </div>
</div>

  )
}

export default HowHelp