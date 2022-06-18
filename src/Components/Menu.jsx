import React, { useState, useEffect } from 'react'
import '../Styles/Menu.css';
import { Icon } from '@iconify/react';

export default function Menu() {

    const [menuOpen, setMenuOpen] = useState(false);


    /* DISABLES SCROLLING */
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [menuOpen])

    return (
        <div>
            { !menuOpen && <Icon icon="ci:menu-alt-01" id="closedMenuButton" onClick={() => setMenuOpen(true)}/> }
            { menuOpen && 
            <>
                <div id="menuBox">
                    <div id="menuTitle">
                        <Icon icon="eva:close-circle-outline" id="openedMenuButton" onClick={() => setMenuOpen(false)}/>
                        <div id="logo">
                            <img src={require('../images/ht-logo-yellow.png')} alt="" />
                            <h2>Hugo</h2>
                            <p>Developer</p>
                        </div>
                        
                    </div>
                    <div id="menuItems">
                        <p id="menuWork" className="menuItems">Work</p>
                        <p id="menuAbout" className="menuItems">About</p>
                        <p id="menuContact" className="menuItems">Contact</p>
                    </div>
                    <div id="contactIcons">
                        <Icon icon="cib:linkedin" />
                        <Icon icon="carbon:logo-github" />
                    </div>
                </div>
            </>
            }
        </div>
    )
    }
