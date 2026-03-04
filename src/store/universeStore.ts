import { create } from "zustand";

type Focus = "HERO" | "SYSTEM";

interface UniverseState {
  currentFocus: Focus;
  scrollProgress: number;
  setFocus: (focus: Focus) => void;
  setScrollProgress: (progress: number) => void;
}

export const useUniverseStore = create<UniverseState>((set) => ({
  currentFocus: "HERO",
  scrollProgress: 0,
  setFocus: (focus) => set({ currentFocus: focus }),
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
}));
