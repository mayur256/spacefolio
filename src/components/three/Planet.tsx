"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface PlanetProps {
  index: number;
  color: string;
  label: string;
}

export default function Planet({ index, color, label }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const orbitParams = useMemo(
    () => ({
      radius: 8 + index * 2,
      speed: 0.2 + index * 0.05,
      offset: index,
    }),
    [index],
  );

  useFrame(({ clock }, delta) => {
    if (groupRef.current && meshRef.current) {
      const elapsed = clock.getElapsedTime();
      const angle = elapsed * orbitParams.speed + orbitParams.offset;

      groupRef.current.position.x = Math.cos(angle) * orbitParams.radius;
      groupRef.current.position.z = Math.sin(angle) * orbitParams.radius;

      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
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
