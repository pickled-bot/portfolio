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
              <ul className='intro'>
              <li>&rarr; Full-Stack Software Engineer 💻</li>
              <li>&rarr; Trained at Ada Developer's Academy || C17 </li>
              <li>&rarr; BSc from Alaska Pacific University || 2016 Graduate </li>
              <li>&rarr; BSc in Marine Biology || Mathematics || PreMed Concentration </li>
              <li>&rarr; Based in Seattle, Wa </li>
              <li className='hireme'>&rarr; OPEN TO HIRE </li>
              </ul>
              <h3>Languages &amp; Technologies</h3>
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