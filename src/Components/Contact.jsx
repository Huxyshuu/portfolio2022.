import React from 'react'
import '../Styles/Contact.css';

export default function Contact(props) {

    const locale = {
        EN: [
            <div id="contactbox">
                <h3>Get In Touch</h3>
                <p id="contactInfo">
                    I'm interested in meeting new amazing people to collaborate with,
                    so don't hesitate to send me a message. Let's work together!
                </p>
                <form action="" id="contactform">
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="text" name="email" placeholder="Email"/>
                    <textarea name="message" id="message" cols="30" rows="8" form="contactform" placeholder="Message"></textarea>
                    <input type="button" id="submit" value="Send message!" />
                </form>
            </div>,
            <div id="mapdiv">
                <div id="infobox">
                    <p id="infoname">Hugo Tamm,</p>
                    <p id="infoaddress">Finland, Helsinki</p>
                    <p id="infomail"><span id="symbol">@:</span> hugotamm@hotmail.com</p>
                </div> 
            </div>
        ],
        FI: [
            <div id="contactbox">
                <h3>Get In Touch</h3>
                <p id="contactInfo">
                    Olen kiinnostunut tapaamaan uusia upeita ihmisiä, 
                    joiden kanssa tehdä yhteistyötä, joten älä epäröi lähettää minulle viestiä.
                </p>
                <form action="" id="contactform">
                    <input type="text" name="name" placeholder="Nimi"/>
                    <input type="text" name="email" placeholder="Sähköposti"/>
                    <textarea name="message" id="message" cols="30" rows="8" form="contactform" placeholder="Viesti"></textarea>
                    <input type="button" id="submit" value="Lähetä viesti!" />
                </form>
            </div>,
            <div id="mapdiv">
                <div id="infobox">
                    <p id="infoname">Hugo Tamm,</p>
                    <p id="infoaddress">Suomi, Helsinki</p>
                    <p id="infomail"><span id="symbol">@:</span> hugotamm@hotmail.com</p>
                </div> 
            </div>
        ],
        JP: [
            <div id="contactbox">
                <h3>Get In Touch</h3>
                <p id="contactInfo">
                    一緒に働く新しくて素晴らしい人々に会うことに興味があります。
                    頑張りましょう！
                </p>
                <form action="" id="contactform">
                    <input type="text" name="name" placeholder="名前"/>
                    <input type="text" name="email" placeholder="メールアドレス"/>
                    <textarea name="message" id="message" cols="30" rows="8" form="contactform" placeholder="メッセージ"></textarea>
                    <input type="button" id="submit" value="送信!" />
                </form>
            </div>,
            <div id="mapdiv">
                <div id="infobox">
                    <p id="infoname">Hugo Tamm,</p>
                    <p id="infoaddress">フィンランド、ヘルシンキ</p>
                    <p id="infomail"><span id="symbol">@:</span> hugotamm@hotmail.com</p>
                </div> 
            </div>
        ]
      }

  return (
    <div id="contact">
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