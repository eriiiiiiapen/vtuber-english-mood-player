import { create } from "zustand";

export type Mood = "calm" | "excited" | "dark";

type MoodState = {
    mood: Mood;
    setMood: (mood: Mood) => void;
}

export const useMoodStore = create<MoodState>((set) => ({
    mood: "calm",
    setMood: (mood) => set({mood}),
}))