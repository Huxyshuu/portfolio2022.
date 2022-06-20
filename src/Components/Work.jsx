import React from 'react';
import '../Styles/Work.css';
import Card from './WorkCard';

export default function Work() {
  return (
    <div id='work'>
        <h3>My Portfolio</h3>
        <p id="work-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur quisquam? Aliquid id voluptatum possimus! Soluta repudiandae laudantium ducimus fugiat.</p>
        <button id="moreButton">See more!</button>
        <div className="container">
            <Card />
        </div>
    </div>
  )
}
