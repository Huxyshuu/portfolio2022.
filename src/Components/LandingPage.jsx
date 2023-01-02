import React from 'react'
import '../Styles/LandingPage.css'
import {Link} from 'react-scroll'

export default function LandingPage(props) {

  const locale = {
    EN: [
      <h1 id='title'>Hi,<br/>I'm <span id="H">H</span>ugo,<br/>web developer</h1>,
      <h2>Front End Developer</h2>,
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-20} duration={500}>
        <button id="landing-contact">Contact me!</button>
      </Link>
    ],
    FI: [
      <h1 id='title'>Hei,<br/>Olen <span id="H">H</span>ugo,<br/>web developer</h1>,
      <h2>Front End Developer</h2>,
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-20} duration={500}>
        <button id="landing-contact">Ota yhteyttä!</button>
      </Link>
    ],
    JP: [
      <h1 id='title'>ようこそ,<br/><span id="H">H</span>ugo です,<br/>ウェブ開発者</h1>,
      <h2>フロントエンドの開発者</h2>,
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-20} duration={500}>
        <button id="landing-contact">連絡してください!</button>
      </Link>
    ]
  }

  return (
    <div id='landingPage'>
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
  )

  
}
