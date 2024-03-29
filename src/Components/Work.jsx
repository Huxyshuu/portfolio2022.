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
        <br /><br />
        If the code button is grayed out, you can contact me for more information.
      </p>,
      <button id="moreButton">See more!</button>
    ],
    FI: [
      <p id="work-info">
        Pieni karuselli viimeisimmistä projekteista, joiden parissa olen työskennellyt.
        Tällä hetkellä esillä on enimmäkseen harrastusprojekteja, jotka olivat hyviä
        ja hauskoja haasteita joiden myötä hioin osamistani. 
        <br /><br />
        Jos code painike näkyy harmaana, voitte ottaa yhteyttä saadaksenne lisätietoja.
      </p>,
      <button id="moreButton">Katso lisää!</button>
    ],
    JP: [
      <p id="work-info">
        これが私が取り組んできた最新のプロジェクトの小さなカルーセルです。
        現時点では、私のスキルを磨くための楽しくてチャレンジであった趣味のプロジェクトが展示されています。 
        <br /><br />
        コード ボタンがグレー表示されている場合は、私に連絡して詳細を確認してください。
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
