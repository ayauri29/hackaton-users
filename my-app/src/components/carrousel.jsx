import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  'https://cyzone.tiendabelcorp.com/medias/Banner-Principal.jpg?context=bWFzdGVyfHJvb3R8NjY5Mjc5fGltYWdlL2pwZWd8aDdlL2g5ZS85MzE4MjM3ODk2NzM0LmpwZ3w5ZTQ3NGI1Nzk5N2E5NjNiYjE0ZjgzZjViY2FlMTRmOGQzMWZlODc3NjM5NmNmNzMxY2RjNTUyNjgxNTY0ZTNl',
  'https://cyzone.esika.com/medias/C07-19-BANNER-30-TODALATIENDA.jpg?context=bWFzdGVyfHJvb3R8NDE4NTk2fGltYWdlL2pwZWd8aDZiL2gxZi85MjA1MzM1MTYyOTEwLmpwZ3w3YTRkNDNlZGVkNzQwOGVlZjA3NDlmMDU3YjBlYjY4NDYxNjgzOWUwYTI0N2QwMTE5Y2U5NTk4NWQxYmM5NjJk',
  'https://user-images.githubusercontent.com/33959688/68233744-d0532800-ffcd-11e9-858d-3767dccc8133.jpg'
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

export const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>

            </div>
          </div>
        </Slide>
      </div>
    )
}