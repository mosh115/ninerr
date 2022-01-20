import React from "react"
import { connect } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import routes from "../routes"

import {
  onLogin,
  onLogout,
  onSignup,
  loadUsers,
  removeUser,
} from "../store/user.actions.js"
import { LoginSignup } from "./login-signup.jsx"

function _AppHeader({ onLogin, onSignup, onLogout, user }) {
  return (
    <header className="app-header">
      <div className="nav-container flex align-center">
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
          <NavLink className="clean-link" to="/sign-up-buyer">
            Join
          </NavLink>
          {/* {user && <div className="user-section">{user.username}🌟</div>} */}
        </nav>
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

      {/* <h1>My App</h1> */}
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
