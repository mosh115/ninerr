import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gigService } from '../services/gig.service';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { utilService } from '../services/util.service';
import ImageGallery from 'react-image-gallery';
import { ProgressBar } from '../cmps/progress-bar'
import { FaStar } from "react-icons/fa";

// import { render } from "react-dom";

export function GigDetails() {

    const [gig, setGig] = useState()

    useEffect(() => {
        loadGig()
    }, [])


    const { gigId } = useParams();

    async function loadGig() {
        let gig = await gigService.getById(gigId)
        setGig(gig)
    }

    function getRandomColor() {
        return utilService.getRandomIntInclusive(1, 80)
    }

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



    if (!gig) return <h1>Loading..</h1>
    return (
        <section className='gig-details'>
            <div className='gig-overview'>
                <h1 className='' >{gig.title}</h1>
            </div>
            <div className='seler-overview flex'>
                <img className='avatar' src={`https://i.pravatar.cc/24?u=${gig._id}`} />
                <Link to={'/#'}> {gig.seller.fullname}</Link>
                <p>{gig.seller.level}</p>
                <ReactStars
                    count={gig.seller.rate}
                    size={16}
                    color="#ffb33e"
                    activeColor="#ffb33e"
                    edit={false}
                />
                <p className='rating'>{gig.seller.rate} </p>
                <p>({gig.seller.raters})</p>
                <p><span>{getRandomColor()}</span> Orders in Queue</p>

            </div>
            <div className='gallery'>
                <ImageGallery items={images} showThumbnails={true} showPlayButton={false} />
            </div>

            <div className='about-gig'>
                <h2>About The Gig</h2>
                <p>{gig.title}</p>
                <p>{gig.description}</p>
            </div>

            <h2>About The Seller</h2>
            <div className='about-seller flex'>
                <div className='profile-info'>
                    <img className='avatar' src={`https://i.pravatar.cc/110?u=${gig._id}`} />
                </div>
                <div >
                    <Link to={'/#'}> {gig.seller.fullname}</Link>
                    <div className='flex'>
                        <ReactStars
                            count={gig.seller.rate}
                            size={16}
                            color="#ffb33e"
                            activeColor="#ffb33e"
                            edit={false}
                        />
                        <p className='rating'>{gig.seller.rate} </p>
                        <p>({gig.seller.raters})</p>

                    </div>
                    <button>Contact Me</button>
                </div>
            </div>
            <div className='table-info'>
                <ul className='clean-list'>
                    <li className='flex column'>From<strong>United States</strong></li>
                    <li className='flex column'>Member since<strong>2015</strong></li>
                    <li className='flex column'>Avg. response time<strong>1 hour</strong></li>
                    <li className='flex column'>Last Delivey<strong>1 day</strong></li>
                </ul>

            </div>

            <div className='reviews'>
                <div className='details flex align-center'>
                    <h2>{gig.seller.raters} Reviews</h2>
                    <ReactStars
                        count={gig.seller.rate}
                        size={16}
                        color="#ffb33e"
                        activeColor="#ffb33e"
                        edit={false}
                    />
                    <p className='rating'>{gig.seller.rate} </p>
                </div>
            </div>
            <div className='flex' >
                <table>
                    <tbody>
                        <tr>
                            <td><span>5 Stars</span></td>
                            <td><ProgressBar completed="80" /></td>
                            <td>(72)</td>
                        </tr>
                        <tr>
                            <td><span>4 Stars</span></td>
                            <td><ProgressBar completed="10" /></td>
                            <td>(4)</td>
                        </tr>
                        <tr>
                            <td><span>3 Stars</span></td>
                            <td><ProgressBar completed="0" /></td>
                            <td>(0)</td>
                        </tr>
                        <tr>
                            <td><span>2 Stars</span></td>
                            <td><ProgressBar completed="0" /></td>
                            <td>(0)</td>
                        </tr>
                        <tr>
                            <td><span>1 Star</span></td>
                            <td><ProgressBar completed="10" /></td>
                            <td>(38)</td>
                        </tr>
                    </tbody>
                </table>
                <section>
                    <h6>Rating Breakdown</h6>
                    <ul className='clean-list'>
                        <li>Seller comunication level <span> 4.9 <FaStar className='star' /></span></li>
                        <li>Recommend to a friend <span> 4.9 <FaStar className='star' /></span></li>
                        <li>Service as described <span> 4.9 <FaStar className='star' /></span></li>
                    </ul>
                </section>
            </div>





            <ul>
                {/* {gig.reviews.map(review => <li key={review}>{review}</li>)} */}

            </ul>






            {/* GigDetails<br />

        Todo:<br />
        get id from params<br />

        gig nav<br />
        gig title<br />
        avatar--name--level--stars--raters--num orders in queue<br />
        gig images carrousel<br />
        about the seller<br />
        reviews<br />

        checkout */}


        </section>)
}
