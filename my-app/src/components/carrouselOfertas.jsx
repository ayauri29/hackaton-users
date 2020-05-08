import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const slideImages = [
	{
		img:
			"https://cdn1-prd.beautymovers.com/sys-master/s3medias/ha0/hc9/9130539974686/210089231_productPicture_prodGallery_superZoom",
		name: "POLVOS COMPACTOS",
    tipo: "COSMÉTICOS",
    dscto: "30%"
	},
	{
		img:
			"https://cdn1-prd.beautymovers.com/sys-master/s3medias/ha2/h08/9123938730014/200084493_productPicture_prodGallery_superZoom",
		name: "POLVOS COMPACTOS",
		tipo: "COSMÉTICOS",
	},
	{
		img:
			"https://cdn1-prd.beautymovers.com/sys-master/s3medias/hda/hc7/9124342497310/200060882_productPicture_prodGallery_superZoom",
		name: "POLVOS COMPACTOS",
		tipo: "COSMÉTICOS",
	},
];


export const SlideOfertas = () => {
	return (
		<Carousel
			containerClass="background-color: white"
			swipeable={false}
			draggable={false}
			showDots={false}
			responsive={responsive}
		>
			{slideImages.map((image, indx) => {
				return (
					<div key={indx}>
						<img
							style={{ height: "300px", width: "300px" }}
							src={image.img}
							alt="Alt text"
						/>
						<div>{image.tipo}</div>
						<div>{image.name}</div>
					</div>
				);
			})}
		</Carousel>
	);
};

// import React from 'react';
// import { Slide } from 'react-slideshow-image';

// const slideImages = [
//   'https://cdn1-prd.beautymovers.com/sys-master/s3medias/ha0/hc9/9130539974686/210089231_productPicture_prodGallery_superZoom',
//   'https://cdn1-prd.beautymovers.com/sys-master/s3medias/ha2/h08/9123938730014/200084493_productPicture_prodGallery_superZoom',
//   'https://cdn1-prd.beautymovers.com/sys-master/s3medias/hda/hc7/9124342497310/200060882_productPicture_prodGallery_superZoom'
// ];

// const properties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   arrows: true,
//   onChange: (oldIndex, newIndex) => {
//     console.log(`slide transition from ${oldIndex} to ${newIndex}`);
//   }
// }

// export const SlideOfertas = () => {
//     return (
//       <div className="slide-container">
//         <Slide {...properties}>
//           <div className="each-slide-camp">
//             <div style={{'backgroundImage': `url(${slideImages[0]})`}}></div>
//             <p className="p-center descuento">Dsct: 30%</p>  
//             <p className="p-center bold">COSMÉTICOS</p>
//             <p className="p-center">Polvos compactos</p>
//           </div>
//           <div className="each-slide-camp">
//             <div style={{'backgroundImage': `url(${slideImages[1]})`}}></div>
//             <p className="p-center descuento">Dsct: 30%</p>  
//             <p className="p-center bold">FRAGANCIAS</p>
//             <p className="p-center">Polvos compactos</p>
//           </div>
//           <div className="each-slide-camp">
//             <div style={{'backgroundImage': `url(${slideImages[2]})`}}></div>
//             <p className="p-center descuento">Dsct: 30%</p>  
//             <p className="p-center bold">FRAGANCIAS</p>
//             <p className="p-center">Polvos compactos</p>
//           </div>
//         </Slide>
//       </div>
//     )
// }