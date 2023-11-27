import React from 'react';
import { useGLTF } from '@react-three/drei';

import droneScene from '../assets/drone.glb';

export default function Drone(props) {
  const { scene } = useGLTF(droneScene);
  scene.scale.set(5, 5, 5); // Sesuaikan ini sesuai dengan skala yang diinginkan
  
  return <primitive object={scene} {...props} />;
}
