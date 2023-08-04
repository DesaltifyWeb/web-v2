import React from 'react';
import ImageCarousel from './MiniComps/ImageCarousel';
import Button from './MiniComps/Button';

const Problems = () => (
    <div className='bg-oxford text-plat flex justify-center lg:px-18 sm:px-12 px-6 py-10 sm:text-center text-left'>
        <div className='lg:w-[72rem]'>
            <div className='font-mont font-bold text-5xl sm:text-7xl pb-8 sm:pb-16 pt-8'>
                <h1>The Problem</h1>
            </div>
            <div className='font-league font-regular text-lg lg:text-3xl '>
                <p>Road salt contamination is a multifaceted problem: it negatively affects our drinking water, our riverside plants, our cars, our infrastructure, our animals, and our earth. Salt seems to only have one use, melting ice and snow, but many, many negative consequences, which is why road salt is such a pressing problem today.</p>
            </div>
            <div className='py-16'>
                <ImageCarousel />
            </div>
            <div className='text-3xl text-center'>
                <a href="https://www.instagram.com/desaltify_mn/" target="_blank" rel="noopener noreferrer"> 
                    <Button buttonText='Learn More' /> 
                </a>
            </div>
        </div>
    </div>
);

export default Problems;
