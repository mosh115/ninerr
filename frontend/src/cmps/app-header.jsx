import React from "react"
import { connect } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import routes from "../routes"

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

  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
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

  return (
    <header className="app-header">
      <div className=
        {navbar ? "navbar white nav-container flex align-center space-between" :
          "navbar nav-container flex align-center space-between"} >
        <NavLink className="logo-font clean-link" to="/">
          Ninerr<span className="logo-point">.</span>
        </NavLink>
        <nav>
          <NavLink className="clean-link" to="/about">
            About
          </NavLink>
          <NavLink className="clean-link" to="/explore">
            Explore
          </NavLink>
          <NavLink className="clean-link" to="/sign-up-seller">
            Become A Seller
          </NavLink>
          <NavLink className="clean-link" to="/sign-in">
            Sign in
          </NavLink>
          <NavLink className="clean-link join" to="/sign-up-buyer">
            Join
          </NavLink>
          {user && <div className="user-section">{user.username}🌟</div>}
        </nav>

      </div>
      <div className={subNavbar ? "sub-nav" : "sub-nav hidden"}>
        <span>Graphics & Design</span>
        <span>Digital Marketing</span>
        <span>Writing & Translation</span>
        <span>Video & Animation</span>
        <span>Programming</span>

      </div>
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
