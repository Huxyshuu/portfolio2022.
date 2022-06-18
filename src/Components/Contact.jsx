import React from 'react'
import '../Styles/Contact.css';

export default function Contact() {
  return (
    <div id="contact">
        <h3>Contact Me</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aspernatur quisquam? Aliquid id voluptatum possimus! Soluta repudiandae laudantium ducimus fugiat.</p>
        <form action="" id="contactform">
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="email" placeholder="Email"/>
            <input type="text" name="subject" placeholder="Subject"/>
            <textarea name="message" id="message" cols="30" rows="8" form="contactform" placeholder="Message"></textarea>
            <input type="button" id="submit" value="Send message!" />
        </form>
        <div id="mapdiv">
            <div id="infobox">
                <p id="infoname">Hugo Tamm,</p>
                <p id="infoaddress">Finland, Helsinki</p>
                <p id="infomail"><span id="symbol">@:</span> hugotamm@hotmail.com</p>
            </div> 
        </div>
    </div>
  )
}
