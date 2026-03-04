"use client";

import CentralStar from "@/components/three/CentralStar";
import Planet from "@/components/three/Planet";
import content from "@/../content/portfolio.json";

const skillsData = content.skills;

export default function SkillUniverse() {
  return (
    <group>
      <CentralStar />
      {skillsData.map((skillGroup, index) => (
        <Planet
          key={skillGroup.group}
          index={index}
          color={skillGroup.color}
          label={skillGroup.group}
        />
      ))}
    </group>
  );
}
