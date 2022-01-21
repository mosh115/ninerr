import React from 'react';

import { PopularServiceCard } from './popular-service-card';

export function PopularServiceList() {
    return (
        <section>
            <h2>Popular professional services</h2>
            <PopularServiceCard />
            {/* // <ul className='popular-service-list card-grid'>
        //     {popularServices.map(service => <popularServiceCard popularService={popularService} key={popularService._id} />)}
        // </ul> */}
        </section>

    )

}