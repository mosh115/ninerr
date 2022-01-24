import React from 'react'
import { connect } from 'react-redux'
import { FaSearch, FaRegCheckCircle } from "react-icons/fa"

import workingWomen from '../assets/img/home-page/16.jpg';
import CoolMan from '../assets/img/home-page/6.jpg';
import FreeLancerImage from '../assets/img/home-page/14.jpg';
import { PopularServiceList } from '../cmps/popular-service-list'
import { GigApp } from '../pages/gig-app'
import { ExploreMarketPlace } from '../cmps/explore-market-place'
import { onSetPage } from '../store/gig.actions'
import { useEffect } from 'react';


// this is for the top-fold to become un-fixed when starting to scroll the page
import { useState } from "react"

function _HomePage(props) {

    useEffect(() => {
        onSetPage('home-page')
    }, [])

    // useEffect(() => {
    //     onSetHeaderBackground('SET_TRANSPARENT')
    // }, [])

    // console.log('props: ',props)


    // this is for the top-fold to become un-fixed when starting to scroll the page
    const [topFold, setTopFold] = useState(true)

    const unFixTopFold = () => {
        if (window.scrollY >= 150) {
            setTopFold(false)
        } else {
            setTopFold(true)
        }
    }
    useEffect(() => {
        unFixTopFold()
        window.addEventListener("scroll", unFixTopFold)
    })


    return (
        <section className='home-page'>
            <section>
                <img className='home-page-hero' src={CoolMan} alt='' />

                <div className={topFold ? 'top-fold main-layout' : 'top-fold main-layout hidden'}>
                    <h1>Find the perfect <span className='freelance-word-in-title'>freelance</span>  <br /> services for your business</h1>
                    <form className='home-page-search-box'>
                        <div className='search-box-icon'><i><FaSearch /></i> </div>
                        <input type="search" name="search-box" placeholder='Try "Building a mobile app"' />
                        <button>Search</button>
                    </form>
                    <div className='popular-categories'>Popular:
                        <span>Website design</span>
                        <span>Wordpress</span>
                        <span>Logo design</span>
                        <span>Music</span>
                    </div>
                </div>
            </section>

            <section className='social-proof-line'>Trusted by:
                <span>Fakelook</span>
                <span>Coogle</span>
                <span>BigFoot</span>
                <span>B&B</span>
                <span>PayUs</span>
            </section>
            {/* This section should appear (if we  have extra time) only for logged and experienced user */}
            {/* <section className='recently-viewed-section main-layout'>
                <h2>Recently Viewed & More</h2>
                <GigApp />
            </section> */}
            <section className='popular-services main-layout'>
                <h2>Popular professional services</h2>
                <PopularServiceList />
            </section>
            <section>
                <div className='more-details-about-us'>
                    <div className='content'>
                        <h2>A whole world of freelance talent at your fingertips</h2>
                        <div>
                            <h3> <span><FaRegCheckCircle /></span>The best for every budget</h3>
                            <h4>Find high-quality services at every price point. No hourly rates, just project-based pricing.</h4>
                        </div>
                        <div>
                            <h3><span><FaRegCheckCircle /></span>Quality work done quickly</h3>
                            <h4>Find the right freelancer to begin working on your project within minutes.</h4>
                        </div>
                        <div>
                            <h3><span><FaRegCheckCircle /></span>Protected payments, every time</h3>
                            <h4>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</h4>
                        </div>
                        <div>
                            <h3><span><FaRegCheckCircle /></span>24/7 support</h3>
                            <h4>Questions? Our round-the-clock support team is available to help anytime, anywhere.</h4>
                        </div>
                    </div>
                    <div>
                        <img src={workingWomen} alt="working women" />
                    </div>
                </div>

            </section>

            <section className='explore-market-place main-layout'>
                <h2>Explore the marketplace</h2>
                <div className='market-place-items'>
                    <ExploreMarketPlace />
                </div>
            </section>

            {/* These 2 sections will appear only if we have extra time. now we don't have it LOL */}
            {/* <section className='get-inspired-with-projects'>
                <h2>Get inspired with projects made by our freelancers</h2>
                <h3>image&link1    image&link2    inage&link3    image&link4</h3>
                <h3>image&link1    image&link2    inage&link3    image&link4</h3>
                <h3>image&link1    image&link2    inage&link3    image&link4</h3>
                <h3>image&link1    image&link2    inage&link3    image&link4</h3>
            </section>
            <section className='ninerr-guides main-layout'>
                <h2>Ninerr guides</h2>

                <div className='guides-items'>
                    <div>
                        <h3>Start an online business and work from home</h3>
                        <h4>A complete guide to starting a small business online</h4>
                    </div>
                    <div>
                        <h3>Digital marketing made easy</h3>
                        <h4>A practical guide to understand what is digital marketing</h4>
                    </div>
                    <div>
                        <h3>Create a logo for your business</h3>
                        <h4>A step by step for creating a memorable business logo</h4>
                    </div>
                </div>
            </section> */}
            <section className='find-the-talent full'>
                <div>
                    <h2>Find the talent needed to get your business growing.</h2>
                    <button>Get Started</button>
                </div>
                <img src={FreeLancerImage} alt="FreeLancer woman image" />
            </section>
        </section >
    )
}


function mapStateToProps(state) {
    return {
        count: state.userModule.count,
        gig: state.gigModule.page,
    }
}

const mapDispatchToProps = {
    onSetPage,
    // onLogin,
    // onSignup,
    // onLogout,
    // loadUsers,
    // removeUser,
}
export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)

