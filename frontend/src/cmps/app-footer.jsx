import React, { useState } from "react"
import { connect } from "react-redux"
import {
  FaPinterest,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"
// import { UserMsg } from "./user-msg.jsx"

function _AppFooter() {
  return (
    <footer className="app-footer  main-layout">
      <div className="footer-links ">
        <div>Categories</div>
        <div>about</div>
        <div>contact</div>
        <div>Privacy Policy</div>
        <div>Terms of use</div>
      </div>

      <div className="copyrights-and-social-nav">
        <div>
          <span className="logo-font"> Ninerr. </span>
          <span>© Ninerr International Ltd. 2022</span>
        </div>
        <ul className="clean-list social-nav">
          <li className="icon-wrap">
            <a href="https://twitter.com" target="_blank" aria-label="twitter">
              <FaTwitter />
            </a>
          </li>
          <li className="icon-wrap">
            <a
              href="https://facebook.com"
              target="_blank"
              aria-label="facebook"
            >
              <FaFacebook />
            </a>
          </li>
          <li className="icon-wrap">
            <a
              href="https://linkedin.com"
              target="_blank"
              aria-label="linikedin"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="icon-wrap">
            <a
              href="https://pinterst.com"
              target="_blank"
              aria-label="pinterst"
            >
              <FaPinterest />
            </a>
          </li>
          <li className="icon-wrap">
            <a
              href="https://instagram.com"
              target="_blank"
              aria-label="instagram"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>

      {/* <UserMsg /> */}
    </footer>
  )
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = {}

export const AppFooter = connect(
  mapStateToProps,
  mapDispatchToProps
)(_AppFooter)
