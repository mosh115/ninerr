import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";

// import { NavLink, useLocation } from "react-router-dom"
import { FaSearch, FaRegCheckCircle } from "react-icons/fa"

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

const images = [HeroImage1, HeroImage2, HeroImage3, HeroImage4, HeroImage5, HeroImage6, HeroImage7, HeroImage8, HeroImage9];


function _HomePage({ setFilter }) {

    let navigate = useNavigate();


    // useEffect(() => {
    //     onSetPage('home-page')
    // }, [])

    //cycling between hero images
    let [heroImg, setHeroImg] = useState({ idx: 0 })
    // useEffect(() => {
    //     setTimeout(() => setHeroImg(prev => (prev.idx < images.length - 1 ? { idx: prev.idx + 1 } : { idx: 0 })), 15000);
    // })

    useEffect(() => {
        const interval = setInterval(() => {
          if (heroImg.idx === 7) {
            setHeroImg((prev) => ({
              ...prev,
              idx: 0
            }));
            
          } else {
            setHeroImg((prev) => ({
              ...prev,
              idx: prev.idx + 1
            }));
          }
        }, 9000)
        return () => clearInterval(interval);
      }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       if (state.img === 4) {
    //         setState((prev) => ({
    //           ...prev,
    //           img: 0
    //         }));
            
    //       } else {
    //         setState((prev) => ({
    //           ...prev,
    //           img: state.img + 1
    //         }));
    //       }
    //     }, 5000)
    //     return () => clearInterval(interval);
    //   }, [state.img]);





    const [searchContent, setSeachContent] = useState('')
    useEffect(() => {
        let filterBy = {
            title: '',
            tags: [],
            userId: ''
        }
        setFilter(filterBy)
    });
    const handleChange = ({ target }) => {
        setSeachContent(target.value)
    }

    // this is for the top-fold to become un-fixed when starting to scroll the page
    const [topFold, setTopFold] = useState(true)

    const unFixTopFold = () => {
        // setTopFold(window.scrollY < 350)
        if (window.scrollY >= 350) {
            setTopFold(false)
        } else {
            setTopFold(true)
        }
    }
    useEffect(() => {
        unFixTopFold()
        window.addEventListener("scroll", unFixTopFold, true)
        return () => {
            // console.log('hi from return');
            window.removeEventListener("scroll", unFixTopFold, true);
        }
    }, [])

    const onFilterBy = (tag) => {
        let filterBy = {
            title: '',
            tags: [tag],
            userId: ''
        }
        setFilter(filterBy)
        navigate('/explore')
    }
    const onSearch = () => {
        let filterBy = {
            title: searchContent,
            tags: [],
            userId: ''
        }
        setFilter(filterBy)
        navigate('/explore')
    }


    return (
        <section className='home-page'>
            <section>
                <img className='home-page-hero' src={images[heroImg.idx]} alt='image of a person' />

                <div className={topFold ? 'top-fold main-layout' : 'top-fold main-layout hidden'}>
                    <h1>Find the perfect <span className='curly-word-style'>freelance</span>  <br /> services for your business</h1>
                    <form className='home-page-search-box'>
                        <div className='search-box-icon'><i><FaSearch /></i> </div>
                        <input onChange={handleChange} value={searchContent} type="search" name="search-box" placeholder='Try "Building a mobile app"' />
                        <button onClick={onSearch}>Search</button>
                    </form>
                    <div className='popular-categories'>Popular:
                        <span onClick={() => onFilterBy('Blog')}>Website design</span>
                        <span onClick={() => onFilterBy('Wordpress')}>Wordpress</span>
                        <span onClick={() => onFilterBy('Logo design')}>Logo design</span>
                        <span onClick={() => onFilterBy('Website design')}>Music</span>
                        {/* <span>Wordpress</span>
                        <span>Logo design</span>
                        <span>Music</span> */}
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

