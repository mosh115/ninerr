import React from 'react';
import Wordpress from '../assets/img/home-page/popular-professional-services/wordpress.jpg';
import VoiceOver from '../assets/img/home-page/popular-professional-services/voice-over.jpg';
import VideoExplainer from '../assets/img/home-page/popular-professional-services/video-explainer.jpg';
import LogoDesign from '../assets/img/home-page/popular-professional-services/logo-design.jpg';

import { PopularServiceCard } from './popular-service-card';

export function PopularServiceList() {
  
    const popularServices = [
        { img: Wordpress, title: 'Wordpress' },
        { img: VoiceOver, title: 'VoiceOver' },
        { img: VideoExplainer, title: 'VideoExplainer' },
        { img: LogoDesign, title: 'LogoDesign' }
    ]

    return (
        <section>
            
            <ul className='popular-service-list clean-list'>
                {popularServices.map((service, idx) => { return (<PopularServiceCard popularService={service} key={idx} />) })}
            </ul>
        </section>

    )

}