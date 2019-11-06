import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'https://cdn1-prd.beautymovers.com/sys-master/s3medias/ha0/hc9/9130539974686/210089231_productPicture_prodGallery_superZoom',
  'https://cdn1-prd.beautymovers.com/sys-master/s3medias/ha2/h08/9123938730014/200084493_productPicture_prodGallery_superZoom',
  'https://cdn1-prd.beautymovers.com/sys-master/s3medias/hda/hc7/9124342497310/200060882_productPicture_prodGallery_superZoom'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

export const SlideOfertas = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide-camp">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}></div>
            <p className="p-center">Dsct: 30%</p>  
            <p className="p-center">COSMÉTICOS</p>
            <p className="p-center">Polvos compactos</p>
          </div>
          <div className="each-slide-camp">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}></div>
            <p className="p-center">Dsct: 30%</p>  
            <p className="p-center">FRAGANCIAS</p>
            <p className="p-center">Polvos compactos</p>
          </div>
          <div className="each-slide-camp">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}></div>
            <p className="p-center">Dsct: 30%</p>  
            <p className="p-center">FRAGANCIAS</p>
            <p className="p-center">Polvos compactos</p>
          </div>
        </Slide>
      </div>
    )
}