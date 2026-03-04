"use client";

import { useEffect } from "react";
import UniverseScene from "@/components/three/UniverseScene";
import HeroOverlay from "@/components/HeroOverlay";
import { useUniverseStore } from "@/store/universeStore";

export default function Home() {
  const { scrollProgress, setScrollProgress } = useUniverseStore();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / scrollHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollProgress]);

  const heroOpacity = scrollProgress > 0.5 ? 0 : 1;

  return (
    <main className="relative w-screen overflow-x-hidden">
      <UniverseScene />
      <HeroOverlay opacity={heroOpacity} />
      <div className="h-screen" />
    </main>
  );
}
