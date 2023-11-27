import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { OrbitControls } from '@react-three/drei';
import Danau from '../models/danau';

const ThreeDimensionalPage = () => {
    const danauRef = useRef();

    // Skala yang konstan, kita bisa mulai dari nilai yang kecil
    const scale = [0.05, 0.05, 0.05];
    // Mengatur posisi kamera agar objek 3D terlihat secara keseluruhan
    const cameraPosition = [20, 20, 25];

    return (
        <section className="canvas-container three-d-background">
            <Canvas camera={{ position: cameraPosition, fov: 50, near: 0.1, far: 1000 }}>
                <Suspense fallback={null}>
                    {/* Pencahayaan ambient yang lebih lembut */}
                    <ambientLight intensity={0.5} />
                    {/* Pencahayaan utama yang menyerupai sinar matahari */}
                    <directionalLight
                        position={[1, 1, 1]} // Posisi ini dapat diubah untuk mengatur arah bayangan
                        intensity={0.8} // Intensitas ini bisa diubah untuk pencahayaan yang lebih lembut atau lebih kuat
                        castShadow // Opsi ini jika Anda ingin cahaya ini melemparkan bayangan
                    />
                    <Danau ref={danauRef} scale={scale} />
                    <OrbitControls />
                </Suspense>   
            </Canvas>
        </section>
    );
}

export default ThreeDimensionalPage;
