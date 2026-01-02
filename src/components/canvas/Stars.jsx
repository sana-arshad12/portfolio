import React, { memo, useMemo } from "react";
import { useRef, Suspense } from "react";
import { PointMaterial, Preload, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = memo((props) => {
  const ref = useRef();
  
  // Memoize the sphere generation - reduced from 5000 to 3000 for performance
  const sphere = useMemo(() => 
    random.inSphere(new Float32Array(3000), { radius: 1.2 }), 
  []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
});

Stars.displayName = "Stars";

const StarsCanvas = memo(() => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{ 
          antialias: false,
          powerPreference: "low-power",
          alpha: true
        }}
        frameloop="demand"
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
});

StarsCanvas.displayName = "StarsCanvas";

export default StarsCanvas;
