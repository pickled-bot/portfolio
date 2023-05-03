import '../CSS/hero.scss'
import '../CSS/contact.scss'
import ReactTypingEffect from 'react-typing-effect';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.svg';
import email from '../assets/email.png';

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
            <h1>Contact</h1>
            <body>
              <p>I encourage you to reach out to me for prospective work or any questions:</p>
              <p className="contact-list-link"><a href="https://www.linkedin.com/in/shelbyfaul">LinkedIn</a> || <a href="https://www.github.com/pickled-bot">Github</a> || <a href="mailto:faulconershelby@gmail.com">Email</a></p>
              <ul>
                <li  className="contact-list-item"><a href="https://www.linkedin.com/in/shelbyfaul"><img src={linkedin} alt='LinkedIn Logo'/></a></li>
                <li  className="contact-list-item"><a href="https://www.github.com/pickled-bot"><img src={github} alt="Github Logo" /></a></li>
                <li  className="contact-list-item"><a href="mailto:faulconershelby@gmail.com"><img src={email} alt="Email Envelope Logo" /></a></li>
              </ul>
            </body>
          </section>
        </div>
    )
}