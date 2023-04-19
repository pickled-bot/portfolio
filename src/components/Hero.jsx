import '../CSS/hero.scss'
import ReactTypingEffect from 'react-typing-effect';
import Box from './3dBox';
import {Canvas} from "@react-three/fiber"

export default function Hero() {
    return (
        <div className= "hero-main" id="hero">
            <div className = "heading-section">
                <div className = "intro">
                <ReactTypingEffect
                    text = {["Hello!", "My name is Shelby.", "I am a software engineer.", "JavaScript", "React", "Python", "GraphQL"]}
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
    )
}