import React from 'react';
import '../Styles/Work.css';
import Card from './WorkCard';

export default function Work() {
  return (
    <div id='work'>
      <div id="workContainer">
        <h3>My Portfolio</h3>
        <p id="work-info">
          A small carousel of the most recent projects I've worked on.
          Currently consisting mostly of hobby projects that were a good
          source of fun and challenge to better my skills.
        </p>
        <button id="moreButton">See more!</button>
      </div>
      <div className="container">
          <Card />
      </div>
    </div>
  )
}
