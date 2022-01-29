import React from 'react'
import { connect } from 'react-redux'
import { useNavigate, Link } from "react-router-dom";

// import { NavLink, useLocation } from "react-router-dom"
import { FaSearch, FaRegCheckCircle, FaStar } from "react-icons/fa"

import HeroImage1 from '../assets/img/home-page/21.jpg';
import HeroImage2 from '../assets/img/home-page/20.jpg';
import HeroImage3 from '../assets/img/home-page/18.jpg';
import HeroImage4 from '../assets/img/home-page/19.jpg';
import HeroImage5 from '../assets/img/home-page/28.jpg';
import HeroImage6 from '../assets/img/home-page/27.jpg';
import HeroImage7 from '../assets/img/home-page/6.jpg';
import HeroImage8 from '../assets/img/home-page/98.png';
import HeroImage9 from '../assets/img/home-page/99.png';
import workingWomen from '../assets/img/home-page/16.jpg';
import FreeLancerImage from '../assets/img/home-page/14.jpg';

import { PopularServiceList } from '../cmps/popular-service-list'
import { GigApp } from '../pages/gig-app'
import { ExploreMarketPlace } from '../cmps/explore-market-place'
import { onSetPage, setFilter } from '../store/gig.actions'
import { useEffect } from 'react';
import { useState } from "react"
import { socketService } from '../services/socket.service';

const images = [HeroImage1, HeroImage2, HeroImage3, HeroImage4, HeroImage5, HeroImage6, HeroImage7, HeroImage8, HeroImage9];


function _HomePage({ setFilter }) {

    let navigate = useNavigate();


    useEffect(() => {
        onSetPage('home-page')
    }, [])

    //cycling between hero images
    let [heroImg, setHeroImg] = useState({ idx: 0 })

    useEffect(() => {
        const interval = setInterval(() => {
            if (heroImg.idx === 4) {
                setHeroImg((prev) => ({
                    ...prev,
                    idx: 0
                }));

            } else {
                setHeroImg((prev) => ({
                    ...prev,
                    idx: prev.idx + 1
                }))
            }
        }, 8000)
        return () => clearInterval(interval);
    }, [heroImg])


    const [searchContent, setSearchContent] = useState('')
    useEffect(() => {
        let filterBy = {
            title: '',
            tags: [],
            userId: ''
        }
        setFilter(filterBy)
    }, []);
    const handleChange = ({ target }) => {
        setSearchContent(target.value)
        // getSEachContent(target.value)

    }

    const onSearch = () => {
        navigate(`/explore?filter=title:${searchContent}`)
    }


    return (
        <section className='home-page'>
            {/* <section> */}

            <div className='hero-wrapper full'>
                <div className={heroImg.idx === 0 ? 'hero-background hero-jeff' : 'hero-background hero-jeff transparent'}>
                    <img src={HeroImage1} alt="Jeff, Marketing expert" />
                    <div className='seller-name'>
                        <div className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        Jeff, Marketing expert
                    </div>
                </div>
                <div className={heroImg.idx === 1 ? 'hero-background hero-suzanne' : 'hero-background hero-suzanne transparent'}>
                    <img src={HeroImage3} alt="Jeff, Marketing expert" />
                    <div className='seller-name'>
                        <div className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        Suzanne, Experienced translator
                    </div>
                </div>
                <div className={heroImg.idx === 2 ? 'hero-background hero-julio' : 'hero-background hero-julio transparent'}>
                    <img src={HeroImage2} alt="Jeff, Marketing expert" />
                    <div className='seller-name'>
                        <div className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        Julio, Hacker for hire
                    </div>
                </div>
                <div className={heroImg.idx === 3 ? 'hero-background hero-morrielle' : 'hero-background hero-morrielle transparent'}>
                    <img src={HeroImage4} alt="Jeff, Marketing expert" />
                    <div className='seller-name'>
                        <div className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        Morrielle, Fashion designer
                    </div>
                </div>
                <div className={heroImg.idx === 4 ? 'hero-background hero-Moe' : 'hero-background hero-Moe transparent'}>
                    <img src={HeroImage7} alt="Jeff, Marketing expert" />
                    <div className='seller-name'>
                        <div className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                        </div>
                        Moe, Secrets keeper
                    </div>
                </div>
                <div className='hero-content main-container'>
                    <h1>Find the perfect <span className='curly-word-style'>freelance</span>  <br /> services for your business</h1>
                    <form className='home-page-search-box'>
                        <div className='search-box-icon'><i><FaSearch /></i> </div>
                        <input onChange={handleChange} value={searchContent} type="search" name="search-box" placeholder='Try "Building a mobile app"' />
                        <button onClick={onSearch}>Search</button>
                    </form>
                    <div className='popular-categories'>Popular:
                        {['Website design', 'Wordpress', 'Logo design', 'Music'].map((tag, idx) =>
                            <span key={idx}><Link to={`/explore?filter=tags:${tag}`}>{tag}</Link></span>
                        )}
                    </div>
                </div>
            </div>
            {/* </section> */}

            <section className='social-proof-line'>Trusted by:
                <span>Fakelook</span>
                <span>Coogle</span>
                <span>BigFoot</span>
                <span>B&B</span>
                <span>PayUs</span>
            </section>

            <section className='popular-services main-layout'>
                <h2>Popular professional services</h2>
                <PopularServiceList />
            </section>

            <section className='full'>
                <div className='more-details-about-us '>
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


            <section className='find-the-talent'>
                <div className='content'>
                    <h2>Find the <span className='curly-word-style'>talent</span>  needed to get your business <span className='curly-word-style'>growing</span>.</h2>
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
    setFilter,
    // onLogin,
    // onSignup,
    // onLogout,
    // loadUsers,
    // removeUser,
}
export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)

