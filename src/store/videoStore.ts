import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Moment {
    id: string;
    timestamp: number;
    mood: string;
    note: string;
}

interface VideoStore {
    videoId: string;
    setVideoId: (videoId: string) => void;
    player: any | null;
    setPlayer: (player: any) => void;
    moments: Moment[];
    addMoment: (mood: string) => void;
    clearMoments: () => void;
    jumpTo: (seconds: number) => void;
    currentTime: number;
    setCurrentTime: (time: number) => void;
};

export const useVideoStore = create<VideoStore>()(
    persist(
        (set, get) => ({
            videoId: '',
            setVideoId: (id) => set({ videoId: id }),
            player: null,
            setPlayer: (player) => set({player}),
            moments: [],
            addMoment: (mood) => {
                const { player } = get();
                if(player) {
                    const newMoment: Moment = {
                        id: crypto.randomUUID(),
                        timestamp: Math.floor(player.getCurrentTime()),
                        mood: mood,
                        note: "LOL!", //TODO:後ほど変更予定
                    };
                    set((state) => ({ moments: [...state.moments, newMoment]}));
                } else {
                    alert("動画が再生されていません");
                }
            },
            clearMoments: () => set({ moments: []}),
            jumpTo: (seconds) => {
                const { player } = get();
                if(player) {
                    player.seekTo(seconds, true);
                    player.playVideo();
                }
            },
            currentTime: 0,
            setCurrentTime: (time) =>  set({ currentTime: time }),
        }),
        {
            name: "vtuber-moments-storage",
            partialize: (state) => ({ 
                moments: state.moments,
                videoId: state.videoId
            }),
        }
    )
);