import React from 'react'
import { connect } from 'react-redux'
import { FaSearch } from "react-icons/fa"

class _HomePage extends React.Component {
    state = {}



    render() {

        return (
            <section className='home-page'>
                <div className='upper-fold'>
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
                <div>Trusted by:
                    facebook
                    Google
                    NETFLIX
                    P&G
                    PayPal</div>
                <div>Recently Viewed & More</div>
                <div>Popular professional services</div>
                <div>
                    A whole world of freelance talent at your fingertips
                    The best for every budget
                    Find high-quality services at every price point. No hourly rates, just project-based pricing.

                    Quality work done quickly
                    Find the right freelancer to begin working on your project within minutes.

                    Protected payments, every time
                    Always know what you'll pay upfront. Your payment isn't released until you approve the work.

                    24/7 support
                    Questions? Our round-the-clock support team is available to help anytime, anywhere.

                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ut perspiciatis fuga iste temporibus corrupti tempore exercitationem labore, esse ad facere ex deserunt asperiores, dolor neque dolorem minima id accusantium?</p>


            </section >
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.userModule.count
    }
}

export const HomePage = connect(mapStateToProps)(_HomePage)