import React from 'react';
import { FaStar } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Flags from 'country-flag-icons/react/3x2'
import { AvatarPicture } from '../cmps/user-avatar-picture';


export function ReviewItem({ review }) {
    return (
        <div className='review-item flex'>
            <section className='avatar'>
                <AvatarPicture user={review.by} size={'32px'} isGrey={true}/>
                {/* <img className='avatar' src={`https://i.pravatar.cc/32?u=${review._id}`} /> */}
            </section>
            <section>
                <header>
                    <section className='reviewer-details flex'>
                        <h5>{review.by.fullname}</h5>
                        <FaStar className='star' />
                        <p className='rating'>{review.rate} </p>
                    </section>
                    <section className='from flex'>
                        <Flags.US title="United States" className="flag" />
                        <p>United States</p>
                    </section>
                </header>
                <p className='text-body1'>{review.txt}</p>
                <p className='text-body2'>Published 2 days ago</p>
                <section className='helpful flex'>
                    <span><AiOutlineLike className='' /> Helpful</span>
                    <span><AiOutlineDislike className='' /> Not Helpful</span>
                </section>
            </section>

        </div>
    )
}
