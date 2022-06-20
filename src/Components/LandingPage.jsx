import React from 'react'
import '../Styles/LandingPage.css'
import {Link} from 'react-scroll'

export default function LandingPage() {
  return (
    <div id='landingPage'>
        <h1 id='title'>Hi,<br/>I'm <span id="H">H</span>ugo,<br/>web developer</h1>
        <h2>Front End Developer</h2>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-20} duration={500}>
          <button id="landing-contact">Contact me!</button>
        </Link>
    </div>
  )
}
