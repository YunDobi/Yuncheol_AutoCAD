import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import { Loader } from './Hero/Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  // const [spring, api] = useSpring(() => ({ rotation: [0, 0, 0], config: { mass: 5, tension: 200 } }), [])

  //   useEffect(() => {
  //     let timeout
  //     const rotate = () => {
  //       api.start({ rotation: [(Math.random() - 0.5) * Math.PI * 3, 0, (Math.random() - 0.5) * Math.PI * 3] })
  //       timeout = setTimeout(rotate, (0.5 + Math.random() * 2) * 1000)
  //     }
  //     rotate()
  //     return () => void clearTimeout(timeout)
  //   }, [])


  return (
    <Float speed={2.75} rotationIntensity={1} floatIntensity={1} >
    <ambientLight intensity={0.25} />
    <directionalLight position={[0, 0, 0.05]} />
    <mesh castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
    </mesh>
  </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;