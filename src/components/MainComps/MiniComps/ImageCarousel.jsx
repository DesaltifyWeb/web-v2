import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import fish from '../../../assets/images/fish.png'
import car from '../../../assets/images/car.png'
import tap from '../../../assets/images/tap.png'

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {src: tap, caption: 'A tinge of saltiness mars the typically fresh tap water.'},
    {src: car, caption: 'Road salt slowly takes its toll on the car\'s exterior.'},
    {src: fish, caption: 'Aquatic life claimed by road salt.'}
  ];

  return (
    <div className=''>
      <Carousel 
        showArrows={true} 
        infiniteLoop={true} 
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6000}
        onChange={(index) => setCurrentIndex(index)}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full h-full">
            <img src={img.src} alt={img.caption} />
          </div>
        ))}
      </Carousel>
      <h2 className="text-center lg:text-md text-2xl py-2 font-league bg-silver align-center">{images[currentIndex].caption}</h2>
    </div>
  );
}


export default ImageCarousel;
