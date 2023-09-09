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
                <div className='lg:w-[84rem] pb-20 w-screen h-screen'>
                <h1 className='text-center sm:text-7xl font-mont font-bold text-4xl'>Meet The Team</h1>
                <div className='flex justify-center'>
                    <h3 className='text-center sm:text-3xl font-league sm:pb-36 text-xl pt-12 pb-16 lg:w-[45rem] px-6'>Meet the dedicated students driving the 'desaltification' of Minnesota, one icy road at a time.</h3>
                </div>
                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-36 gap-16 px-24 -mx-8'>
                            <NameAndImg src={raghav} alt='raghav photo' name='Raghav G.' pos='Co-Founder / President'/>
                            <NameAndImg src={deepak} alt='deepak photo' name='Deepak B.' pos='Co-Founder / President'/>
                            <NameAndImg src={meghana} alt='meghana photo' name='Meghana N.' pos='Secretary'/>
                            <NameAndImg src={mohan} alt='mohan photo' name='Mohan A.' pos='Treasurer / CTO'/>
                            <NameAndImg src={nikita} alt='nikita photo' name='Nikita J.' pos='Head of Volunteering'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default MeetTheTeam