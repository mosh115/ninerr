import React from 'react';
import { Link } from "react-router-dom"


import { FcAssistant, FcFilmReel, FcOldTimeCamera, FcBullish, FcPrivacy, FcMusic, FcReading } from "react-icons/fc";
import { MarketPlaceService } from '../cmps/market-place-service';

export function ExploreMarketPlace() {

    const marketPlaceItems = [
        { title: "Office Services", icon: <FcAssistant /> },
        { title: "Video Editing", icon: <FcFilmReel /> },
        { title: "Image Editing", icon: <FcOldTimeCamera /> },
        { title: "Accounting", icon: <FcBullish /> },
        { title: "Cyber Security", icon: <FcPrivacy /> },
        { title: "Music", icon: <FcMusic /> },
        { title: "Translating", icon: <FcReading /> }
    ]

    return (
        <section>
            <ul className='explore-market-place clean-list'>
                {marketPlaceItems.map((item, idx) => {
                    return (
                        <Link key={idx} to={`/explore?filter=tags:${item.title}`}>
                            <MarketPlaceService title={item.title} icon={item.icon} />
                        </Link>
                    )
                })}
            </ul>
        </section>

    )

}