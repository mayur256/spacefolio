"use client";

import CentralStar from "@/components/three/CentralStar";
import Planet from "@/components/three/Planet";
import content from "@/../content/portfolio.json";

const skillsData = content.skills;

export default function SkillUniverse() {
  const radius = 8;
  const totalPlanets = skillsData.length;

  return (
    <group>
      <CentralStar />
      {skillsData.map((skillGroup, index) => {
        const angle = (index / totalPlanets) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <Planet
            key={skillGroup.group}
            position={[x, 0, z]}
            color={skillGroup.color}
            label={skillGroup.group}
          />
        );
      })}
    </group>
  );
}
