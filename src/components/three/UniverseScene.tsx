"use client";

import { Canvas } from "@react-three/fiber";
import Nebula from "./Nebula";
import Starfield from "./Starfield";
import Core from "./Core";
import CameraController from "./CameraController";

export default function UniverseScene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
        shadows
        camera={{ position: [0, 0, 8], fov: 60 }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
        <Nebula />
        <Starfield />
        <Core />
        <CameraController />
      </Canvas>
    </div>
  );
}
