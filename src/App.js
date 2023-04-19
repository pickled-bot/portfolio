import './App.css';
import Navbar from ".//components/navbar";
import Hero from ".//components/Hero";
import { Canvas } from '@react-three/fiber';
import Tourus from './/components/tourus3d';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function App(props) {
  const { children } = props;

  return (
    <>
      <Canvas style = {{position: 'fixed'}}>
        <Tourus colors={"white"}/>
      </Canvas>

      <div style = {{position: "fixed", width:"0%"}}>
        <Navbar/>
        {children}
      </div>  

    </>
  )

}