import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { gigService } from '../services/gig.service';
import { userService } from '../services/user.service';
import { utilService } from '../services/util.service';
import ImageGallery from 'react-image-gallery';
// import { ProgressBar } from '../cmps/progress-bar'
import { FaStar, FaRegClock, FaCheck, FaSyncAlt } from "react-icons/fa";
import { ReviewItem } from '../cmps/review-item';
import { TableRating } from '../cmps/table-rating';



export function GigDetails() {

    const [gig, setGig] = useState()
    const [userSeller, setUserSeller] = useState()

    useEffect(() => {
        loadGigAndSeller()
    }, [])


    const { gigId } = useParams();

    async function loadGigAndSeller() {
        // console.log(gigId);
        let gig = await gigService.getById(gigId)
        console.log('gig', gig);
        const seller = await userService.getById(gig.owner._id)
        // console.log('seller', seller);
        setGig(gig)
        // console.log(gig);
        setUserSeller(seller)
    }

    function getRandomNum() {
        return utilService.getRandomIntInclusive(1, 80)
    }

    const numOfRaters = () => {
        let raters = gig.owner.raters;
        let num = raters;
        if (raters > 1000 && raters < 1300) num = '1K+'
        if (raters >= 1300 && raters < 1400) num = '2K+'
        return num
    }



    if (!gig || !userSeller) return <h1>Loading..</h1>
    const images = gig.imgUrls.map(img => { return { original: img, thumbnail: img } })

    return (
        <section className='gig-details flex '>

            <section className='details-container'>
                <div className='gig-overview'>
                    <h1 className='title'>{gig.title}</h1>
                </div>
                <div className='seller-overview flex'>
                    <img className='avatar' src={userSeller.imgUrl || `https://i.pravatar.cc/24?u=${userSeller._id}`} />
                    <Link to={'/#'}> {gig.owner.fullname}</Link>
                    <p className='seller-level'>{gig.owner.level} <span className='stop'>|</span></p>
                    <ReactStars classNames="stars" count={gig.owner.rate} size={15} color="#ffb33e" activeColor="#ffb33e" edit={false} />
                    <b className='rating'>{gig.owner.rate} </b>
                    <p className='raters'>({numOfRaters})<span className='stop'>|</span></p>
                    <p className='qweue'><span>{getRandomNum()}</span> Orders in Queue</p>
                </div>

                <div className='gallery'>
                    <ImageGallery items={images} showThumbnails={true} showPlayButton={false} />
                </div>


                <div className='about-gig'>
                    <h2>About This Gig</h2>
                    <p>{gig.title}</p>
                    <p>{gig.description}</p>
                </div>

                <h2>About The Seller</h2>
                <div className='about-seller flex'>
                    <div className='profile-info'>
                        <img className='avatar' src={userSeller.img || `https://i.pravatar.cc/110?u=${gig._id}`} />
                    </div>
                    <div className='seller-info'>
                        <Link className='name' to={'/#'}> {gig.owner.fullname}</Link>
                        <p>{userSeller.shortAbout}</p>
                        <div className='flex'>
                            <ReactStars count={gig.owner.rate} size={16} color="#ffb33e" activeColor="#ffb33e" edit={false} />
                            <p className='rating'>{gig.owner.rate} </p>
                            <p className='raters'>({gig.owner.raters})</p>

                        </div>
                        <button className='btn-contact-me'>Contact Me</button>
                    </div>
                </div>
                <div className='table-info'>
                    <ul className='stats clean-list flex'>
                        <li className='flex column'>From<strong>{userSeller.from}</strong></li>
                        <li className='flex column'>Member since<strong>2015</strong></li>
                        <li className='flex column'>Avg. response time<strong>1 hour</strong></li>
                        <li className='flex column'>Last Delivey<strong>1 day</strong></li>
                    </ul>
                    <p>{userSeller.about}</p>
                </div>

                <div className='reviews'>
                    <div className='details flex align-center'>
                        <h2 className='flex'>{gig.owner.raters} Reviews
                            <ReactStars
                                count={gig.owner.rate}
                                size={16}
                                color="#ffb33e"
                                activeColor="#ffb33e"
                                edit={false}
                            />
                            <p className='rating'>{gig.owner.rate} </p>
                        </h2>
                    </div>
                    <div className='flex' >
                        <TableRating />
                        <section className='ranking'>
                            <h6>Rating Breakdown</h6>
                            <ul className='clean-list'>
                                <li className='flex space-between'>Seller comunication level <span> 5 <FaStar className='star' /></span></li>
                                <li className='flex space-between'>Recommend to a friend <span> 4.9 <FaStar className='star' /></span></li>
                                <li className='flex space-between'>Service as described <span> 4.9 <FaStar className='star' /></span></li>
                            </ul>
                        </section>
                    </div>
                </div>
                {/* {userSeller.reviews.map((review) => <ReviewItem review={review} key={review._id} />)} */}


            </section>
            <aside className='aside'>
                <div className='package-content'>
                    <h1 className='gig-label'>label (basic + 2 dummies)</h1>
                    <div>
                        <h2>{gig.title}</h2>
                        <h2>({gig.price}US$</h2>
                    </div>
                    <div>{gig.description}</div>

                    <div>
                        <h2>
                            <i><FaRegClock /></i>{gig.daysToMake} Days Delievery
                        </h2>
                        <h2>
                            <i><FaSyncAlt /></i>Unlimited Revisions
                        </h2>
                    </div>
                    <div>
                      
                        {gig.orderdetails.map(tag => { return (<h2><i><FaCheck /></i>{tag}</h2>) })}
                    </div>

                    <button>continue <span>({gig.price} US$)</span></button>
                </div>
            </aside>


        </section>)
}
