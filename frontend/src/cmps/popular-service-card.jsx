import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import { FaStar, FaHeart } from "react-icons/fa";
// import ImageGallery from 'react-image-gallery';
import Wordpress from '../assets/img/home-page/popular-professional-services/wordpress.jpg';
import VoiceOver from '../assets/img/home-page/popular-professional-services/voice-over.jpg';
import VideoExplainer from '../assets/img/home-page/popular-professional-services/video-explainer.jpg';
import LogoDesign from '../assets/img/home-page/popular-professional-services/logo-design.jpg';

export function PopularServiceCard() {

    return (
        <section className='popular-service-card'>
            <h3>Name of service</h3>
            <img src={Wordpress} alt="Wordpress" />
        </section>
    )
}

