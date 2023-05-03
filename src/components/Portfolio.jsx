import '../CSS/hero.scss';
import '../CSS/portfolio.scss'
import ReactTypingEffect from 'react-typing-effect';
import dynamic_cube from '../assets/dynamicCube.png';
import image_model from '../assets/imageModel.png';
import sherbotbot from '../assets/sherbotbot.png';
import shelby_silverstein from '../assets/ss-1.png';
import shelby_silverstein_2 from '../assets/ss-2.png';

export default function Portfolio() {
    return (
      // maybe change how this div is structured to contain the stuff and things
        <div className = "portfolio">
            <div className= "hero-main" id="hero"> 
                <div className = "heading-section">
                    <div className = "intro">
                    <ReactTypingEffect
                        text = {["...", "... Portfolio"]}
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
            <section className="portfolio-stuff">
            <h1>portfolio</h1>
            <p className="portfolio-items">
                <h4>Portfolio</h4>
                <span><a href="https://shelbyfaulconer.vercel.app">Deployment</a> || <a href="https://github.com/pickled-bot/portfolio">Github</a> </span>
                <p className="technologies">React, React Routing, Three.JS</p>
                <h4>Dynamic Cube Generator</h4>
                <p> A digital fidget cube that users can interact with.</p>
                <span><a href="https://dynamic-cube.vercel.app/">Deployment</a> || <a href="https://github.com/pickled-bot/dynamic-cube">Github</a> </span>
                <p className="technologies">React, Three.JS</p>
                <img src={dynamic_cube} alt="Dynamic Cube Generator deployment page" />
                <h4>Sherbotbot</h4>
                <p>A Twitch bot with a variety of commands including a call to OpenWeather API.</p>
                <span><a href="https://github.com/pickled-bot/sherbotbot">Github</a></span>
                <p className="technologies">Python, Twitchio</p>
                <img src={sherbotbot} alt="Sherbotbot in Twitch chat" />
                <h4>Shelby Silverstein Language Model </h4>
                <p>A language model trained to produce poems using Shel Silverstein poems as input.</p>
                <span> <a href="https://github.com/pickled-bot/shelby-silverstein-fixed">Github</a> </span>
                <p className="technologies">Python, TensorFlow Keras </p>
                <img src={shelby_silverstein} alt="Shelby Silverstein Language Model Python output" />
                <h4>Image Model</h4>
                <p>A model trained to generate images based on mathematical anomoly.</p>
                <span><a href="https://github.com/pickled-bot/image-model">Github</a> </span>
                <p className="technologies">Python, Tensorflow, NumPy</p>
                <img src={image_model} alt="Example of output generated by model"/>
            </p>
            <p>find additional art at <a href="https://sherbot.page/art">sherbot.page</a></p>
            </section>
        </div>
    )
}