import React from 'react'
import '../Styles/Sidebar.css';
import { Icon } from '@iconify/react';
import {Link} from 'react-scroll';

export default function Sidebar() {
  return (
    <nav>
        <div id="bigLogo">
            <Link activeClass="active" to="landingPage" spy={true} smooth={true} 
                    offset={0} duration={500}>
                <img src={require('../images/ht-logo-yellow.png')} alt="Logo" />
            </Link>
            <h5 id="logo-title">Hugo</h5>
            <p id="logo-text">Developer</p>
        </div>
        <div id="nav-menu">
            <Link activeClass="active" to="work" spy={true} smooth={true} 
              offset={-20} duration={500} id="sidebarWork">Work</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} 
              offset={-20} duration={500} id="sidebarAbout">About</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} 
              offset={-20} duration={500} id="sidebarContact">Contact</Link>
            <div id="menu-icons">
              <a href="https://www.linkedin.com/in/hugotamm/" target="_blank" rel="noreferrer"><Icon icon="cib:linkedin" /></a>
              <a href="https://github.com/Huxyshuu" target="_blank" rel="noreferrer"><Icon icon="carbon:logo-github" /></a>
            </div>
        </div>
    </nav>
  )
}
