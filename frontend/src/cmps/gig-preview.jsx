import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart } from "react-icons/fa";
import ImageGallery from 'react-image-gallery';




export function GigPreview({ gig }) {

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];



    return (
        <article className="gig-preview" key={gig._id}>
            <div className='carusel'>
                {/* <Link className='clean-link' to={`/gig/${gig._id}`}> */}

                <ImageGallery items={images} showThumbnails={false} showPlayButton={false} showFullscreenButton={false} showBullets={true} />

                {/* </Link> */}
            </div>


            <section className='preview-card'>

                <section className='seller-info flex'>
                    <img className='avatar' src={`https://i.pravatar.cc/24?u=${gig._id}`} />
                    <div>
                        <Link className='seller-name' to={'/#'}> {gig.seller.fullname}</Link>
                        <p className='seler-level'>{gig.seller.level}</p>
                    </div>
                </section>

                <h3><Link className='gig-title clean-link' to={`/gig/${gig._id}`}> {gig.title}</Link></h3>
                <section className='gig-rating flex'>
                    <FaStar className='star' />
                    {/* <span className='star'>{star}</span> */}
                    <p className='rating'>{gig.seller.rate} </p>
                    <p className='raters'>({gig.seller.raters})</p>
                </section>
                <footer className='footer flex'>
                    <FaHeart className='heart' />
                    {/* <div>{heart}</div> */}
                    <Link to={`/gig/${gig._id}`} className='clean-link'>
                        <div>
                            <small className='small'>STARTING AT  </small>
                            <span className='price'>${gig.price} </span>
                        </div>
                    </Link>
                </footer>
            </section>

        </article>
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
