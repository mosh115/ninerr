import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';


export function PopularServiceCard(props) {
    const { popularService } = props
    const { img, title } = popularService

    return (
        <article >
            <li className='popular-service-card'>
                <img src={img} alt={title} />
                <h3>{title}</h3>
            </li>

        </article>
    )
}

