import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Both from "../images/svg/both.svg"

const Header = (location) => {
  return (
    <header  className={`header`}>
      <ul className="top-header">
        <li style={{
              position: "absolute",
              left: "2vw",
        }}><Link to="/" activeClassName="active"  >CWA-JATC</Link></li>
        <li><Link to="/program" activeClassName="active" >ABOUT</Link></li>
        <li><Link to="/contact" activeClassName="active">CONTACT</Link></li>
        <li><Link to="/application" activeClassName="active" >APPLICATION</Link></li>
      </ul>
      <div className="bottom-header">
        <div> <Link to="/" ><Both className="logo-both" /></Link> </div>
        <h2>CWA DISTRICT NINE TELECOMMUNICATIONS APPRENTICESHIP PROGRAM</h2>
        <div className="background-image">  <StaticImage src="../images/png/bg.png" alt="background-image" className="img" />
        </div>
      </div>
    </header>
  )
}

export default Header
