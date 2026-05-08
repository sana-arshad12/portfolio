import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import React, { Suspense, memo } from "react";

const Ball = memo((props) => {
  const optimizedUrl = `${props.imgUrl}${props.imgUrl.includes("?") ? "&" : "?"}tr=f-auto,w-128,h-128`;
  const [decal] = useTexture([optimizedUrl]);

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
});

Ball.displayName = "Ball";

const BallCanvas = memo(({ icon }) => {
  return (
    <Canvas 
      frameloop="demand" 
      dpr={[1, 1.5]}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: false,
        powerPreference: "low-power"
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
});

BallCanvas.displayName = "BallCanvas";

export default BallCanvas;
