import React, { Suspense, lazy } from 'react'

const Hero = lazy(() => import('./MainComps/Hero'));
const WhatDesaltify = lazy(() => import('./MainComps/WhatDesaltify'));
const HowHelp = lazy(() => import('./MainComps/HowHelp'));
const Problems = lazy(() => import('./MainComps/Problems'));
const CTA = lazy(() => import('./MainComps/CTA'));

const Body = () => (
    <div className='sm:pt-36 pt-16'>
        <div class="space-y-12">
            <div className=''>
                <Suspense fallback={<div>Loading...</div>}>
                    <Hero />
                </Suspense>
                <div className='-mt-1'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Problems />
                        <WhatDesaltify />
                        <HowHelp />
                        <CTA />
                    </Suspense>
                </div>
            </div>
        </div>
    </div>
)

export default Body
