import React from 'react';

import { GigPreview } from './gig-preview';

export function GigList({ gigs }) {
    return (
        <ul >
            {gigs.map(gig => <GigPreview gig={gig} key={gig._id} />)}
        </ul>
    )

}
