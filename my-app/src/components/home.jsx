import React from 'react';
import { Slideshow } from './carrousel'
import { SlideCampania } from './carrouselHome2';
import { SlideOfertas } from './carrouselOfertas';
import Asesora from '../img/asesora.svg';


export const Home = () => {
    return (
        <div>
            <Slideshow></Slideshow>
            <div className="saludo">
                <img className="icon-asesor" src={Asesora} alt="Icono de asesora"></img>
                <h2>Hola tu asesora es Mayra!</h2>
            </div>
            <h2>Catálogo campaña 17</h2>
            <SlideCampania></SlideCampania>
            <button type="button" className="btn-add">INGRESA A CATÁLOGO</button>

            <iframe width="420" height="300" src='https://www.youtube.com/embed/lKEmjX91UeM'
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video' />

            <SlideOfertas></SlideOfertas>
            <button type="button" className="btn-add">INGRESA A OFERTAS</button>
        </div>
    );
};
