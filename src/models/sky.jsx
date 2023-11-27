
import { useGLTF } from '@react-three/drei'
import React from 'react'

import skyScene from '../assets/langi-gratis.glb'

const Sky = () => {
  const skyArea = useGLTF(skyScene);
  return (
    <mesh>
        <primitive object={skyArea.scene}></primitive>
    </mesh>
  )
}

export default Sky
