import React from 'react';
import { Link } from 'react-router-dom';

export function GigPreview({ gig }) {

    return (
        <li className="gig-preview" key={gig._id}>
            <Link to={`/gig/${gig._id}`}>
                Todo:<br />
                gig images carrousel<br />
                seller name<br />
                seller avatar<br />
                seller level<br />
                gig title<br />
                gig rating+star (num raters)<br />
                heart<br />
                gig price
            </Link>
        </li>
    )
}
{/* 



            <h4>{gig.vendor}</h4>
            <h1>⛐</h1>
            <p>Price: <span>${gig.price.toLocaleString()}</span></p>
            <p>Owner: <span>{gig.owner && gig.owner.fullname}</span></p>
            {/* <div>
                                <button onClick={() => { onRemoveGig(gig._id) }}>x</button>
                                <button onClick={() => { editGig(gig) }}>Edit</button>
                            </div> */}

{/* <button className="buy" onClick={() => { onAddToGigt(gig) }}>Add to Gigt</button> */ }
//         </li>) */}

// }
