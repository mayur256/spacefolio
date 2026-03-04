import { create } from "zustand";

type Stage = "hero" | "skills";

interface UniverseState {
  stage: Stage;
  scrollProgress: number;
  setStage: (stage: Stage) => void;
  setScrollProgress: (progress: number) => void;
}

export const useUniverseStore = create<UniverseState>((set) => ({
  stage: "hero",
  scrollProgress: 0,
  setStage: (stage) => set({ stage }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
}));
