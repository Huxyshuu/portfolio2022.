import React from 'react'
import '../Styles/WorkCard.css';

export default function WorkCard() {

    const techs = ['HTML & CSS', 'Javascript', 'React', 'Responsivness', 'MySQL', 'Sass']


    return (
        <div className='card'>
            <img src="https://p4.wallpaperbetter.com/wallpaper/858/231/578/league-of-legends-armor-irelia-wallpaper-preview.jpg" alt="Project" />
            <h4 id="name">Project 1</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, at!</p>
            <div className="techs">
                {
                    techs.map((tech, i) => {
                        return <p key={'tech' + i}>{tech.toUpperCase()}</p>
                    })
                }
            </div>
            <div className="buttons">
                <button>DEMO</button>
                <button>CODE</button>
            </div>
        </div>
    )
}
