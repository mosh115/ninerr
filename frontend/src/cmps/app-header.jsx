import React from "react"
import { connect } from "react-redux"
import { NavLink, useLocation, useNavigate, Link } from "react-router-dom"
// import { utilService } from '../services/util.service'

// import routes from "../routes"
import { FaSearch } from "react-icons/fa"
// this is for the nav bar to change bcg color when scrolling
import { useState, useEffect } from "react"

import { onLogin, onLogout, onSignup, removeUser } from "../store/user.actions.js"
import { LoginSignup } from "./login-signup.jsx"
import { PopoverNav } from "./popover-nav.jsx"
import { setFilter } from '../store/gig.actions'


function _AppHeader({ setFilter, onLogin, onSignup, onLogout, user }) {

  let navigate = useNavigate();

  const [navbar, setNavbar] = useState(false)
  const [subNavbar, setSubNavbar] = useState(false)
  const [navsDisappear, setNavsDisappear] = useState(false)

  const [isSignIn, toggleSignIn] = useState(false)
  const [isSignUp, toggleSignUp] = useState(false)
  const [isPopoverNav, togglePopoverNav] = useState(false)
  const [searchContent, getSEachContent] = useState('')


  //gets the current page's path
  let currLocation = useLocation().pathname

  useEffect(() => {
    if (isSignIn) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isSignIn])


  //navbar scroll changeBackground function
  const changeBackground = () => {

    // console.log(window.scrollY)
    if (window.scrollY >= 20) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
    if (window.scrollY >= 250) {
      setSubNavbar(true)
    } else {
      setSubNavbar(false)
    }
    if (window.scrollY >= 400 && currLocation !== '/') {
      setNavsDisappear(true)
      console.log('navsDisappear: ', navsDisappear)
      console.log('currLocation: ', currLocation)
    } else {
      setNavsDisappear(false)
      console.log('navsDisappear: ', navsDisappear)
      console.log('currLocation: ', currLocation)
    }

  }
  const handleChange = ({ target }) => {
    getSEachContent(target.value)
  }
  const onSearch = (ev) => {
    ev.preventDefault()
    navigate(`/explore?filter=title:${searchContent}`)
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground, true)

    return () => {
      window.removeEventListener("scroll", changeBackground, true);
    }

  }, [currLocation])

  // useEffect(() => {
  //   if (isSignIn) document.body.style.overflow = 'hidden';
  //   else document.body.style.overflow = 'unset';
  // }, [isSignIn])

  return (
    <header className="app-header">
      <div className=
        {(currLocation === '/' && !navbar) ?
          "navbar nav-container flex align-center space-between" :

          (!navsDisappear ?
            "navbar white nav-container flex align-center space-between" :
            "navbar white nav-container flex align-center space-between no-sticky")
        } >
        <div className="logo-and-search-box">
          <NavLink className="logo-font clean-link" to="/">
            Ninerr<span className="logo-point">.</span>
          </NavLink>
          <form className={subNavbar || currLocation !== '/' ? 
            'navbar-search-box ' : 
            'navbar-search-box hidden'}>
            <div className='search-box-icon'><i><FaSearch /></i> </div>
            <input onChange={handleChange} value={searchContent} type="search" name="search-box" placeholder="Find Services" />
            <button onClick={onSearch}>Search</button>
          </form>
        </div>


        <nav className="flex align-center space-between">
          <NavLink className="clean-link" to="/about">
            About
          </NavLink>
          <NavLink className="clean-link" to="/explore">
            Explore
          </NavLink>
          <NavLink className="clean-link" to="/sign-up-seller">
            Become A Seller
          </NavLink>
          {!user && <React.Fragment><div className="pointer" onClick={() => { toggleSignIn(true) }}>
            Sign in
          </div>
            <div className="join pointer" onClick={() => { toggleSignIn(true); toggleSignUp(true) }}>
              Join
            </div>
          </React.Fragment>}
          {/* {user && <AvatarPicture user={user} size="32px" isGrey={false} onClick={() => { togglePopoverNav(true) }} className="pointer"/>} */}
          {user && <div className="avatar-container">
            {!user.imgUrl &&
              <div className="user-avatar pointer" onClick={() => { togglePopoverNav(true) }} style={{ backgroundColor: user.avatarColor }}>
                <p>{user.username[0].toUpperCase()}</p>
                {/* <div className="dot"></div> */}
              </div>}
            {user.imgUrl &&
              <div className="user-picture pointer" onClick={() => { togglePopoverNav(true) }}>
                <img src={`${user.imgUrl}`} alt={<p>{user.username[0].toUpperCase()}</p>} />
              </div>
            }
            <div className="dot"></div>
          </div>}
        </nav>

      </div>
      <div className={!subNavbar && currLocation === '/' ?
        "sub-nav hidden" :
        (navsDisappear ? "sub-nav no-sticky" : "sub-nav")
      }>
     
    
        {/* <span>Graphics & Design</span>
        <span>Digital Marketing</span>
        <span>Writing & Translation</span>
        <span>Video & Animation</span>
        <span>Music & Audio</span>
        <span>Programming & Tech</span>
        <span>Business</span> */}
        {['Website design', 'Wordpress', 'Logo design', 'Music'].map((tag, idx) =>
          <span key={idx}><Link to={`/explore?filter=tags:${tag}`}>{tag}</Link></span>
        )}
      </div>
      {isSignIn && !user && <LoginSignup toggleSignIn={toggleSignIn} toggleSignUp={toggleSignUp} isSignUp={isSignUp} onLogin={onLogin} onSignup={onSignup} />}
      {isPopoverNav && <PopoverNav togglePopoverNav={togglePopoverNav} onLogout={onLogout} />}


    </header>

  )
}

function mapStateToProps(state) {
  return {
    gig: state.gigModule.page,
    users: state.userModule.users,
    user: state.userModule.user,
    isLoading: state.systemModule.isLoading,
  }
}
const mapDispatchToProps = {

  onLogin,
  onSignup,
  onLogout,
  setFilter,
  removeUser,
}

export const AppHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AppHeader)
