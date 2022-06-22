import React, { useState, useEffect } from 'react'
import '../Styles/Menu.css';
import { Icon } from '@iconify/react';
import Sidebar from './Sidebar';
import { Link } from 'react-scroll'

export default function Menu(props) {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isSmall, setIsSmall] = useState();

    /* DISABLES SCROLLING */
    useEffect(() => {
        const checkWindowSize = () => {
            setIsSmall(window.innerWidth < 1300 ? true : false);
            if (!isSmall) {
                setMenuOpen(false);
            }
        }

        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
        window.addEventListener('resize', checkWindowSize);
        checkWindowSize();

        return () => {
            window.removeEventListener('resize', checkWindowSize);
        }
    })

    return (
        <div>
            { isSmall ? 
            <>
                { !menuOpen && <Icon icon="ci:menu-alt-01" id="closedMenuButton" onClick={() => setMenuOpen(true)}/> }
                { menuOpen && 
                <>
                    <div id="menuBox">
                        <div id="big-container">
                            <p id="menu-en" onClick={() => { props.setLanguage('EN'); setMenuOpen(false); }}>EN</p>
                            <p id="menu-fi" onClick={() => { props.setLanguage('FI'); setMenuOpen(false); }}>FI</p>
                            <p id="menu-jp" onClick={() => { props.setLanguage('JP'); setMenuOpen(false); }}>JP</p>

                        </div>
                        <Icon icon="eva:close-circle-outline" id="openedMenuButton" onClick={() => setMenuOpen(false)}/>
                        <Link id="menuTitle" activeClass="active" to="landingPage" spy={true} smooth={true} 
                            offset={0} duration={500} onClick={() => setMenuOpen(false)}>
                            <div id="logo">
                                <img src={require('../images/ht-logo-yellow.png')} alt="" />
                                <h2>Hugo</h2>
                                <p>Developer</p>
                            </div>
                            
                        </Link>
                        <div id="menuItems">
                            <Link activeClass="active" to="work" spy={true} smooth={true} 
                            offset={-20} duration={500} id="menuWork" className="menuItems"
                            onClick={() => setMenuOpen(false)}>
                                Work
                            </Link>

                            <Link activeClass="active" to="about" spy={true} smooth={true} 
                            offset={-20} duration={500} id="menuAbout" className="menuItems"
                            onClick={() => setMenuOpen(false)}>
                                About
                            </Link>

                            <Link activeClass="active" to="contact" spy={true} smooth={true} 
                            offset={-20} duration={500} id="menuContact" className="menuItems"
                            onClick={() => setMenuOpen(false)}>
                                Contact
                            </Link>
                        </div>
                        <div id="contactIcons">
                            <a href="https://www.linkedin.com/in/hugotamm/" target="_blank" rel="noreferrer"><Icon icon="cib:linkedin" /></a>
                            <a href="https://github.com/Huxyshuu" target="_blank" rel="noreferrer"><Icon icon="carbon:logo-github" /></a>
                        </div>
                    </div>
                </>
                }
            </> 
            : 
            <Sidebar/>}
        </div>
    )
    }
