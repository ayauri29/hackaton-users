import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'https://cdn1-prd.beautymovers.com/sys-master/s3medias/h5b/h5a/9123764174878/200084479_productPicture_prodGallery_superZoom',
  'https://cdn1-prd.beautymovers.com/sys-master/s3medias/hb4/h69/9123989585950/200094066_productPicture_prodGallery_superZoom',
  'https://cdn1-prd.beautymovers.com/sys-master/s3medias/hcf/h98/9280302645278/200060753_productPicture_prodGallery_superZoom'
];

const properties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

export const SlideCampania = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide-camp">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}></div>
            <p className="p-center bold">COSMÉTICOS</p>
            <p className="p-center">Polvos compactos</p>
          </div>
          <div className="each-slide-camp">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}></div>
            <p className="p-center bold">FRAGANCIAS</p>
            <p className="p-center">Polvos compactos</p>
          </div>
          <div className="each-slide-camp">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}></div>
            <p className="p-center bold">FRAGANCIAS</p>
            <p className="p-center">Polvos compactos</p>
          </div>
        </Slide>
      </div>
    )
}