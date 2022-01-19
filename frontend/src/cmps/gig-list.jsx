import React from 'react';

import { GigPreview } from './gig-preview';

export function GigList({ gigs }) {
    return (
        <ul className='gig-list card-grid'>
            {gigs.map(gig => <GigPreview gig={gig} key={gig._id} />)}
        </ul>
    )

}
