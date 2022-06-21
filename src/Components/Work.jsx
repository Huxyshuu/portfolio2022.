import React from 'react';
import '../Styles/Work.css';
import Card from './WorkCard';

export default function Work(props) {
  
  const locale = {
    EN: [
      <p id="work-info">
        A small carousel of the most recent projects I've worked on.
        Currently consisting mostly of hobby projects that were a good
        source of fun and challenge to better my skills.
      </p>,
      <button id="moreButton">See more!</button>
    ],
    FI: [
      <p id="work-info">
        Pieni karuselli viimeisimmistä projekteista, joiden parissa olen työskennellyt.
        Tällä hetkellä esillä on enimmäkseen harrastusprojekteja, jotka olivat hyviä
        ja hauskoja haasteita joiden myötä hioin osamistani. 
      </p>,
      <button id="moreButton">Katso lisää!</button>
    ],
    JP: [
      <p id="work-info">
        これが私が取り組んできた最新のプロジェクトの小さなカルーセルです。
        現時点では、私のスキルを磨くための楽しくてチャレンジであった趣味のプロジェクトが展示されています。 
      </p>,
      <button id="moreButton">もっと見せる！</button>
    ]
  }

  return (
    <div id='work'>
      <div id="workContainer">
        <h3>My Portfolio</h3>
        {props.language === 'EN' && 
          locale.EN.map(e => {
            return e
          })
        }
        {props.language === 'FI' && 
          locale.FI.map(e => {
            return e
          })
        }
        {props.language === 'JP' && 
          locale.JP.map(e => {
            return e
          })
        }
      </div>
      <div className="container">
          <Card />
      </div>
    </div>
  )
}
