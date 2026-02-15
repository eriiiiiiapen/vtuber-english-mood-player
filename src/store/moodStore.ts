import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Mood = "calm" | "excited" | "dark";

interface MoodState {
    mood: Mood;
    setMood: (mood: Mood) => void;
}

export const useMoodStore = create<MoodState>()(
    persist(
        (set) => ({
            mood: "calm",
            setMood: (mood) => set({ mood }),
        }),
        {
            name: "vtuber-mood-storage",
        }
    )
);