import '../CSS/hero.scss';
import '../CSS/about.scss';
import ReactTypingEffect from 'react-typing-effect';
import portrait from '../assets/portrait_41.png'


export default function About() {
    return (
      // maybe change how this div is structured to contain the stuff and things
        <div className="about-me">
          <div className= "hero-main" id="hero"> 
              <div className = "heading-section">
                  <div className = "intro">
                  <ReactTypingEffect
                      text = {["...", "... About"]}
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
          <section className="about-me-stuff">
            <h1>Shelby Faulconer</h1>
            <span>
              <img src={portrait} alt='Shelby Faulconer pixel icon' className='portrait' />
            </span>
            <p>
              <ul>
              <li> &rarr; full-stack web developer 💻</li>
              <li>&rarr; open to hire </li>
              </ul>
              <h3>languages &amp; technologies</h3>
              <ul className='languages'>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>PostGreSQL</li>
                <li>Node.js</li>
                <li>GraphQL</li>
              </ul>
            </p>
          </section>
        </div>
    )
}