import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Win95 from "../../models/Win95";
import classes from "./Voxel.module.css";

export const Voxel = () => (
  <div className={classes.Voxel}>
    <Canvas camera={{ position: [10, 5, 35], zoom: 3.5 }}>
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={0.75}
        enableZoom={false}
        enablePan={false}
        maxAzimuthAngle={1}
        minAzimuthAngle={-1}
      />
      <hemisphereLight intensity={0.55} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.7}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <Suspense fallback={null}>
        <Win95 />
      </Suspense>
    </Canvas>
  </div>
);
