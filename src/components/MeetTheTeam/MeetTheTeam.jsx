import React from 'react'
import NameAndImg from './NameAndImg'
import mohan from '../../assets/images/pfps/mohan.png'
import deepak from '../../assets/images/pfps/deepak.png'
import meghana from '../../assets/images/pfps/meghana.png'
import nikita from '../../assets/images/pfps/nikita.png'
import raghav from '../../assets/images/pfps/raghav.png'

const MeetTheTeam = () => (
    <div className='sm:pt-36 pt-16'>
        <div class="space-y-12">
            <div className='bg-yinmin text-plat flex justify-center lg:px-18 sm:px-12 px-6 py-24 pb-20 sm:text-left'>
                <div className='lg:w-[84rem] pb-20'>
                <h1 className='text-center sm:text-7xl font-mont font-bold text-4xl px-12'>Meet The Team</h1>
                <h3 className='text-center sm:text-3xl font-league sm:pb-36 text-xl pt-12 pb-16 px-24'>Meet the dedicated students driving the 'desaltification' of Minnesota, one icy road at a time.</h3>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-36 gap-16 px-24 -mx-8'>
                            <NameAndImg src={raghav} name='Raghav G.' pos='Founder'/>
                            <NameAndImg src={deepak} name='Deepak B.' pos='Founder'/>
                            <NameAndImg src={meghana} name='Meghana N.' pos='President'/>
                            <NameAndImg src={mohan} name='Mohan A.' pos='CTO'/>
                            <NameAndImg src={nikita} name='Nikita J.' pos='Social Media Manager'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default MeetTheTeam