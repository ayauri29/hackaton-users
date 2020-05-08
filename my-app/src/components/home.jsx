import React from "react";
import { Slideshow } from "./carrousel";
import { SlideCampania } from "./carrouselHome2";
import { Slider } from "./slider";
import { SlideOfertas } from "./carrouselOfertas";
import Asesora from "../img/asesora.svg";

export const Home = () => {
	return (
		<div>
			<Slideshow></Slideshow>
			<p style={{ fontSize: "2rem" }}>PRODUCTOS MÁS VENDIDOS</p>
			<div style={{ margin: "2%" }}>
				<Slider></Slider>
			</div>
			<div className="div-video">
				<iframe
					width="350"
					height="300"
					src="https://www.youtube.com/embed/lKEmjX91UeM"
					frameBorder="0"
					allow="autoplay; encrypted-media"
					allowFullScreen
					title="video"
				/>
				<div>
					<p style={{ color: "white" }}>Visítanos en YouTube</p>
				</div>
			</div>

			<p style={{ fontSize: "2rem" }}>LAS MEJORES OFERTAS</p>

			<div style={{ margin: "2%" }}>
				<SlideOfertas></SlideOfertas>
			</div>
			<button type="button" className="btn-home">
				INGRESA A OFERTAS
			</button>
		</div>
	);
};
