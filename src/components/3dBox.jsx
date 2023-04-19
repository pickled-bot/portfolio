import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import Cyber from "..//assets/cyber.jpg"

export default function Box(props) {
  const mesh = useRef();
  useFrame( () => (mesh.current.rotation.x=mesh.current.rotation.y + 0.01))
  const loader = new  THREE.TextureLoader()
  const base = loader.load(Cyber)

  return (
    <mesh 
      { ...props }
      ref = {mesh}
    >
      <boxGeometry args = {[3, 3, 3]} />
      <basicMeshMaterial attach="material" map={base} />
    </mesh>
  )
}