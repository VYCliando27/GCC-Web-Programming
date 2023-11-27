import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import Danau from '../models/danau';
const ThreeDimensionalPage = () => {
  const [currentStage, setCurrentStage] = useState(null);

  const handleStageChange = (stage) => {
    setCurrentStage(stage);
  };

  return (
    <section className="canvas-container" style={{ position: 'relative' }}>
      <Canvas camera={{ position: [0, 50, 700], fov: 50, near: 0.1, far: 1000 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={0.8} castShadow />
          <Danau />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          {/* Invisible meshes to represent stages */}
          {/* The positions should be set based on where you want the user to focus */}
          <mesh position={[0, 10, 650]} onClick={() => handleStageChange('stage1')}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial opacity={0} transparent />
          </mesh>
          {/* ... additional meshes for other stages */}
        </Suspense>
      </Canvas>
      {/* Popups for each stage */}
      {currentStage === 'stage1' && (
        <div className="popup" style={{ position: 'absolute', top: '20%', left: '25%' }}>
          Popup for Stage 1
        </div>
      )}
      {/* ... additional popups for other stages */}
    </section>
  );
};

export default ThreeDimensionalPage;
