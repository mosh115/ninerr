import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom';


export function MarketPlaceService({title, icon}) {
   
    return (
        <article >       
            <li className='market-place-service'>
                <i>{icon}</i>
                <hr />
                <h3>{title}</h3>
            </li>

        </article>
    )
}