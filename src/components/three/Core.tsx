"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useUniverseStore } from "@/store/universeStore";
import * as THREE from "three";

export default function Core() {
  const meshRef = useRef<Mesh>(null);
  const { scrollProgress } = useUniverseStore();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;

      const targetScale = THREE.MathUtils.lerp(1, 0.7, scrollProgress);
      meshRef.current.scale.setScalar(
        THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.05),
      );

      const material = meshRef.current.material as THREE.MeshStandardMaterial;
      const targetEmissive = THREE.MathUtils.lerp(0.6, 0.3, scrollProgress);
      material.emissiveIntensity = THREE.MathUtils.lerp(
        material.emissiveIntensity,
        targetEmissive,
        0.05,
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#3B82F6"
        emissive="#8B5CF6"
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}
