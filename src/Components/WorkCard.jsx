import React from 'react'
import '../Styles/WorkCard.css';
import { Icon } from '@iconify/react';

export default function WorkCard() {

    const cards = {
        card1: {
            img: 'https://p4.wallpaperbetter.com/wallpaper/858/231/578/league-of-legends-armor-irelia-wallpaper-preview.jpg',
            title: 'Project 1',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, at!',
            techs: ['HTML & CSS', 'Javascript', 'React', 'Responsivness', 'MySQL', 'Sass'],
        },

        card2: {
            img: 'https://c4.wallpaperflare.com/wallpaper/978/275/707/hecarim-league-of-legends-riot-games-high-noon-fire-hd-wallpaper-preview.jpg',
            title: 'Project 2',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
            techs: ['HTML & CSS', 'Javascript', 'React', 'Responsivness', 'MongoDB', 'Python', 'NodeJS'],
        },

        card3: {
            img: 'https://c4.wallpaperflare.com/wallpaper/50/914/446/spirit-blossom-ahri-league-of-legends-ahri-league-of-legends-riot-games-hd-wallpaper-preview.jpg',
            title: 'Project 3',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, at! Lorem sit amet consectetur adipisicing elit.',
            techs: ['HTML & CSS', 'Javascript', 'React', 'Responsivness'],
        }
    }

    

    return (
        <div id="container">

            <div id="leftArrowDiv">
                <Icon icon="bx:left-arrow" id="arrow-left" className="cardArrows"/>
                <Icon icon="bxs:left-arrow" id="hover-left" className="cardArrows"/>
            </div>

            <div className='card'>
                <img src="https://p4.wallpaperbetter.com/wallpaper/858/231/578/league-of-legends-armor-irelia-wallpaper-preview.jpg" alt="Project" />
                <h4 id="name">Project 1</h4>
                <p id="card-info" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, at!</p>
                <div className="techs">
                    {
                        cards.card1.techs.map((tech, i) => {
                            return <p key={'tech' + i}>{tech.toUpperCase()}</p>
                        })
                    }
                </div>
                <div className="buttons">
                    <button>DEMO</button>
                    <button>CODE</button>
                </div>
            </div>
                    
            <div id="rightArrowDiv">
                <Icon icon="bx:right-arrow" id="arrow-right" className="cardArrows"/>
                <Icon icon="bxs:right-arrow" id="hover-right" className="cardArrows"/>
            </div>

        </div>
        
    )
}
