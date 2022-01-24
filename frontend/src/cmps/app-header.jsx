import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import { utilService } from '../services/util.service'

// import routes from "../routes"
import { FaSearch } from "react-icons/fa"
// this is for the nav bar to change bcg color when scrolling
import { useState, useEffect } from "react"

import {
  onLogin,
  onLogout,
  onSignup,
  loadUsers,
  removeUser,
} from "../store/user.actions.js"
import { LoginSignup } from "./login-signup.jsx"

function _AppHeader({ onLogin, onSignup, onLogout, user }) {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)
  const [subNavbar, setSubNavbar] = useState(false)
  const [isSignIn, toggleSignIn] = useState(false)
  const [isSignUp, toggleSignUp] = useState(false)


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
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  // useEffect(() => {
  //   if (isSignIn) document.body.style.overflow = 'hidden';
  //   else document.body.style.overflow = 'unset';
  // }, [isSignIn])

  const randomAvatarColor = () => {
    const colors = ['#0F2347', '#1C3F6E', '#2E67A0', '#5AACCF', '#80C271'];
    let randIdx = utilService.getRandomIntInclusive(0, colors.length - 1);
    console.log(colors[randIdx]);
    return colors[randIdx];
  }

  return (
    <header className="app-header">
      <div className=
        {navbar ? "navbar white nav-container flex align-center space-between" :
          "navbar white nav-container flex align-center space-between"} >
        <div className="logo-and-search-box">
          <NavLink className="logo-font clean-link" to="/">
            Ninerr<span className="logo-point">.</span>
          </NavLink>
          <form className={subNavbar ? 'navbar-search-box ' : 'navbar-search-box hidden'}>
            <div className='search-box-icon'><i><FaSearch /></i> </div>
            <input type="search" name="search-box" placeholder="Find Services" />
            <button>Search</button>
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
          {user && <React.Fragment>
            <div className="pointer" onClick={() => { onLogout() }}>logout</div>
            <div className="user-avatar pointer" style={{ backgroundColor: randomAvatarColor() }}>
              <p>{user.username[0].toUpperCase()}</p>
            </div>
          </React.Fragment>}
        </nav>

      </div>
      <div className={subNavbar ? "sub-nav" : "sub-nav hidden"}>
        <span>Graphics & Design</span>
        <span>Digital Marketing</span>
        <span>Writing & Translation</span>
        <span>Video & Animation</span>
        <span>Music & Audio</span>
        <span>Programming & Tech</span>
        <span>Business</span>
      </div>
      {isSignIn && <LoginSignup toggleSignIn={toggleSignIn} toggleSignUp={toggleSignUp} isSignUp={isSignUp} onLogin={onLogin} onSignup={onSignup} />}
      {/* <nav> */}
      {/* {routes.map(route => <NavLink key={route.path} to={route.path}>{route.label}</NavLink>)}
                {user &&
                    <span className="user-info">
                        <Link to={`user/${user._id}`}>
                            {user.fullname}
                            <span className="score">{user.score?.toLocaleString()}</span>
                        </Link>
                        <button onClick={onLogout}>Logout</button>
                    </span>
                }
                {!user &&
                    <section className="user-info">
                        <LoginSignup onLogin={onLogin} onSignup={onSignup} />
                    </section>
                } */}
      {/* </nav> */}

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
  loadUsers,
  removeUser,
}

export const AppHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AppHeader)
