"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function createNoiseTexture(seed: number) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d")!;

  const imageData = ctx.createImageData(512, 512);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const noise = Math.random() * 100;
    data[i] = noise;
    data[i + 1] = noise;
    data[i + 2] = noise;
    data[i + 3] = 255;
  }

  ctx.putImageData(imageData, 0, 0);
  ctx.filter = "blur(40px)";
  ctx.drawImage(canvas, 0, 0);

  return new THREE.CanvasTexture(canvas);
}

function NebulaLayer({
  color,
  opacity,
  z,
  seed,
}: {
  color: string;
  opacity: number;
  z: number;
  seed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = createNoiseTexture(seed);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.005 * (seed + 1);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, z]}>
      <planeGeometry args={[150, 150]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={opacity}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        color={color}
      />
    </mesh>
  );
}

export default function Nebula() {
  return (
    <group>
      <NebulaLayer color="#4A148C" opacity={0.08} z={-50} seed={0} />
      <NebulaLayer color="#1A237E" opacity={0.06} z={-60} seed={1} />
      <NebulaLayer color="#311B92" opacity={0.07} z={-70} seed={2} />
    </group>
  );
}
