import React from 'react';

import { FcAssistant,FcFilmReel, FcOldTimeCamera,FcBullish ,FcPrivacy ,FcMusic ,FcReading } from "react-icons/fc";
import { MarketPlaceService } from '../cmps/market-place-service';

export function ExploreMarketPlace() {
  
    const marketPlaceItems = [
        {title: "Office Services", icon: <FcAssistant/> },
        {title: "Video Editing", icon: <FcFilmReel/>},
        {title: "Image Editing", icon: <FcOldTimeCamera/>},
        {title: "Accounting", icon: <FcBullish/> },
        {title: "Cyber Security", icon: <FcPrivacy/>},
        {title: "Music", icon: <FcMusic/>},
        {title: "Translating", icon: <FcReading/>}
    ]

    return (
        <section>
            <ul className='explore-market-place clean-list'>
                {marketPlaceItems.map((item, idx) => { return (<MarketPlaceService title={item.title} icon={item.icon} key={idx} />) })}
            </ul>
        </section>

    )

}