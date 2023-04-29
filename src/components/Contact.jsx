import '../CSS/hero.scss'
import '../CSS/contact.scss'
import ReactTypingEffect from 'react-typing-effect';
import Box from './3dBox';
import {Canvas} from "@react-three/fiber"

export default function Contact() {
    return (
      <div className = "contact">
          <div className= "hero-main" id="hero"> 
              <div className = "heading-section">
                  <div className = "intro">
                  <ReactTypingEffect
                      text = {["...", "... Contact"]}
                      speed = {100}
                      typingDelay = {1000}
                      eraseDelay = {1000}
                      eraseSpeed = {100}
                      cursorRenderer = {cursor => <h1 className = "cursor"> {cursor} </h1>}
                      displayTextRenderer = {(text, i) => {
                          return (<p className="name"> {text}</p>)
                      }}
                  />
                  </div>
              </div>
          </div>
          <section className="contact-stuff">
            <h1>contact</h1>
            <body>
              <ul>
                <li  className="contact-list"><a href="https://www.linkedin.com/in/shelbyfaul">LinkedIn</a></li>
                <li  className="contact-list"><a href="https://www.github.com/pickled-bot">GitHub</a></li>
                <li  className="contact-list"><a href="mailto:faulconershelby@gmail.com">Email</a></li>
              </ul>
            </body>
          </section>
        </div>
    )
}