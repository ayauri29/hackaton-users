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
			"https://cdn1-prd.beautymovers.com/sys-master/s3medias/h5b/h5a/9123764174878/200084479_productPicture_prodGallery_superZoom",
		name: "POLVOS COMPACTOS",
		tipo: "COSMÉTICOS",
	},
	{
		img:
			"https://cdn1-prd.beautymovers.com/sys-master/s3medias/h5b/h5a/9123764174878/200084479_productPicture_prodGallery_superZoom",
		name: "POLVOS COMPACTOS",
		tipo: "COSMÉTICOS",
	},
	{
		img:
			"https://cdn1-prd.beautymovers.com/sys-master/s3medias/h5b/h5a/9123764174878/200084479_productPicture_prodGallery_superZoom",
		name: "POLVOS COMPACTOS",
		tipo: "COSMÉTICOS",
	},
	{
		img:
			"https://cdn1-prd.beautymovers.com/sys-master/s3medias/h5b/h5a/9123764174878/200084479_productPicture_prodGallery_superZoom",
		name: "POLVOS COMPACTOS",
		tipo: "COSMÉTICOS",
	},
	{
		img:
			"https://cdn1-prd.beautymovers.com/sys-master/s3medias/h5b/h5a/9123764174878/200084479_productPicture_prodGallery_superZoom",
		name: "POLVOS COMPACTOS",
		tipo: "COSMÉTICOS",
	},
	{
		img:
			"https://cdn1-prd.beautymovers.com/sys-master/s3medias/h5b/h5a/9123764174878/200084479_productPicture_prodGallery_superZoom",
		name: "POLVOS COMPACTOS",
		tipo: "COSMÉTICOS",
	},
	{
		img:
			"https://cdn1-prd.beautymovers.com/sys-master/s3medias/h5b/h5a/9123764174878/200084479_productPicture_prodGallery_superZoom",
		name: "POLVOS COMPACTOS",
		tipo: "COSMÉTICOS",
	},
	{
		img:
			"https://cdn1-prd.beautymovers.com/sys-master/s3medias/h5b/h5a/9123764174878/200084479_productPicture_prodGallery_superZoom",
		name: "POLVOS COMPACTOS",
		tipo: "COSMÉTICOS",
	},
];

const divStyle = {
	backgroundColor: "white",
	display: "flex",
};
export const Slider = () => {
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
