import { useMoodStore } from '../store/moodStore'

export const MoodDisplay = () => {
  const mood = useMoodStore((state) => state.mood);

  return (
    <>
      <h1 style={{ padding: "10px" }}>VTuber Mood Player</h1>
      <p>Current Mood: {mood}</p>
    </>
  );
};