import React, { useState, useEffect } from 'react'
import '../Styles/Menu.css';
import { Icon } from '@iconify/react';

export default function Menu() {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

    })

    return (
        <div id="menu">
            { !menuOpen && <Icon icon="ci:menu-alt-01" id="closedMenuButton" onClick={() => setMenuOpen(true)}/> }
            { menuOpen && 
            <>
                <Icon icon="eva:close-circle-outline" id="openedMenuButton" onClick={() => setMenuOpen(false)}/>
                <div>
                    
                </div>
            </>
            }
        </div>
    )
    }
