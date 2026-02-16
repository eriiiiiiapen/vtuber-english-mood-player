import { create } from "zustand";
import { persist } from "zustand/middleware";

// 0: 日英あり, 1: 日本語なし, 2: 英語薄め表示, 3: 字幕なし
export type LearningLevel = 0 | 1 | 2 | 3;

interface LearningState {
    level: LearningLevel;
    setLevel: (level: LearningLevel) => void;
}

export const useLearningStore = create<LearningState>() (
    persist(
        (set) => ({
            level: 0,
            setLevel: (level) => set({ level }),
        }),
        { name: "learning-progress-storage" }
    )
)

