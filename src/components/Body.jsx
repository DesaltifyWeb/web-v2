import React from 'react'
import Hero from './MainComps/Hero'
import WhatDesaltify from './MainComps/WhatDesaltify'
import HowHelp from './MainComps/HowHelp'
import Problems from './MainComps/Problems'
import CTA from './MainComps/CTA'

const Body = () => (
    <div className='sm:pt-36 pt-16'>
        <div class="space-y-12">
            <div className=''>
                <Hero />
                <div className='-mt-1'>
                    <Problems />
                    <WhatDesaltify />
                    <HowHelp />
                    <CTA />
                </div>
            </div>
        </div>
    </div>
)

export default Body