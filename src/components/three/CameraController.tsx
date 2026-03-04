"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useUniverseStore } from "@/store/universeStore";
import * as THREE from "three";

export default function CameraController() {
  const { camera } = useThree();
  const { scrollProgress } = useUniverseStore();

  useFrame((state) => {
    const idleY = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;

    const targetX = THREE.MathUtils.lerp(0, 0, scrollProgress);
    const targetY = THREE.MathUtils.lerp(0, 2, scrollProgress);
    const targetZ = THREE.MathUtils.lerp(6, 14, scrollProgress);

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      targetY + idleY,
      0.05,
    );
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);

    const lookAtY = THREE.MathUtils.lerp(0, 1, scrollProgress);
    camera.lookAt(0, lookAtY, 0);
  });

  return null;
}
