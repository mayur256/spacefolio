"use client";

import { useRef } from "react";
import * as THREE from "three";

export default function CentralStar() {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#FDB813"
        emissive="#FDB813"
        emissiveIntensity={1.5}
      />
      <pointLight intensity={2} distance={20} color="#FDB813" />
    </mesh>
  );
}
