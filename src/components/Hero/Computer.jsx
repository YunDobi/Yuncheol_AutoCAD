import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Loader } from './Loader';

const Computer = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 40, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <primitive
        object={computer.scene}
        scale={ isMobile? 0.7 : 0.75}
        position={isMobile? [0, -3, -2.2]:[0, -3.8, -1.8]}
        rotation={[0, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: 500px)`);

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

//   function animate() {
//     requestAnimationFrame(animate)

//     cube.rotation.x += 0.01
//     cube.rotation.y += 0.01

//     render()
// }

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          rotateSpeed={0.05}
        />
        <Computer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
