import '../CSS/hero.scss';
import '../CSS/about.scss';
import ReactTypingEffect from 'react-typing-effect';
import Box from './3dBox';
import {Canvas} from "@react-three/fiber"

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
            <h1>about me</h1>
            <body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Viverra tellus in hac habitasse platea. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Imperdiet sed euismod nisi porta lorem. Amet venenatis urna cursus eget nunc scelerisque. Euismod lacinia at quis risus sed vulputate odio ut. Accumsan tortor posuere ac ut consequat semper. Elit sed vulputate mi sit amet mauris commodo quis. Et netus et malesuada fames ac. Maecenas volutpat blandit aliquam etiam erat velit.

Ipsum nunc aliquet bibendum enim facilisis gravida neque. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Hac habitasse platea dictumst quisque sagittis. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Amet consectetur adipiscing elit duis tristique. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Consectetur adipiscing elit ut aliquam purus sit amet. Viverra mauris in aliquam sem fringilla. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Scelerisque eleifend donec pretium vulputate sapien. Aliquam faucibus purus in massa tempor.

Est ullamcorper eget nulla facilisi. Sagittis nisl rhoncus mattis rhoncus urna. Egestas congue quisque egestas diam in. Risus ultricies tristique nulla aliquet enim tortor. Feugiat scelerisque varius morbi enim nunc. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Nisi scelerisque eu ultrices vitae auctor eu augue ut. Sagittis orci a scelerisque purus semper eget duis. Duis at tellus at urna condimentum. Diam maecenas sed enim ut sem. Sed faucibus turpis in eu mi bibendum neque egestas congue.
            </body>
          </section>s
        </div>
    )
}