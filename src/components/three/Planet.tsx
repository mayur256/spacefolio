"use client";

import { useRef } from "react";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface PlanetProps {
  position: [number, number, number];
  color: string;
  label: string;
}

export default function Planet({ position, color, label }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.4}
        color="#f1f5f9"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </group>
  );
}
